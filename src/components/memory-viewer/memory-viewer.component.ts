import { Component, ChangeDetectionStrategy, afterNextRender, signal, WritableSignal, inject, output, ElementRef, input } from '@angular/core';
import { ProseService } from '../../services/prose.service';
import { ProseFragment } from '../../models/prose.model';

interface DisplayFragment {
  id: number;
  text: WritableSignal<string>;
  className: string;
  perspective: 'first-person' | 'third-person';
}

@Component({
  selector: 'app-memory-viewer',
  templateUrl: './memory-viewer.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  styles: `
    @keyframes fadeIn {
      from { opacity: 0; }
      to { opacity: 1; }
    }
    .animate-fadeIn {
      animation: fadeIn 0.5s ease-in-out;
    }
    /* Simple pulse for the cursor, renamed to avoid conflicts */
    @keyframes cursor-pulse {
      0%, 100% { opacity: 1; }
      50% { opacity: 0; }
    }
    .animate-cursor-pulse {
      animation: cursor-pulse 1s infinite;
    }
  `
})
export class MemoryViewerComponent {
  private proseService = inject(ProseService);
  private elementRef = inject(ElementRef);
  
  displayedFragments = signal<DisplayFragment[]>([]);
  activeFragmentId = signal<number | null>(null);
  finished = output<void>();
  isSpeedingUp = input<boolean>(false);

  constructor() {
    afterNextRender(() => {
      this.playMemories();
    });
  }

  private scrollToBottom(): void {
    // We use requestAnimationFrame to ensure the scroll happens after the DOM has been painted,
    // which is necessary after a signal update.
    requestAnimationFrame(() => {
      try {
        const scrollElement: HTMLElement | null = this.elementRef.nativeElement.querySelector('.scroll-area');
        if (scrollElement) {
          scrollElement.scrollTo({
            top: scrollElement.scrollHeight,
            behavior: 'smooth'
          });
        }
      } catch (err) {
        console.error('Failed to auto-scroll:', err);
      }
    });
  }

  private delay(ms: number): Promise<void> {
    const effectiveDelay = this.isSpeedingUp() ? 1 : ms;
    return new Promise(resolve => setTimeout(resolve, effectiveDelay));
  }
  
  private async typeIntoSignal(textSignal: WritableSignal<string>, fullText: string, speed: number) {
    for (const char of fullText) {
      textSignal.update(val => val + char);
      this.scrollToBottom();
      
      let delayMs = speed;
      // Add random jitter to typing speed to make it feel more human.
      // It will vary between 75% and 125% of the base speed.
      delayMs += (Math.random() - 0.5) * speed * 0.5;
      
      // Add a longer pause for punctuation.
      if (char === ',') {
        delayMs += 250;
      } else if (char === '.' || char === '?' || char === '!') {
        delayMs += 450;
      }
      
      await this.delay(Math.max(20, delayMs)); // Ensure there's always a small delay.
    }
  }

  private async animateClearScene() {
    const fragmentsToClear = this.displayedFragments();
    
    // Deactivate cursor during the pre-clear pause
    this.activeFragmentId.set(null); 
    await this.delay(750); 
  
    // Backspace Phase (backwards)
    for (let i = fragmentsToClear.length - 1; i >= 0; i--) {
      const fragment = fragmentsToClear[i];
      // Set the active fragment for deletion so the cursor appears
      this.activeFragmentId.set(fragment.id);
      const textSignal = fragment.text;
      const currentText = textSignal();
      
      for (let j = currentText.length; j > 0; j--) {
        textSignal.set(currentText.substring(0, j - 1));
        this.scrollToBottom();
        await this.delay(5); // Rapid backspace speed
      }
    }
  
    // Cleanup Phase
    this.activeFragmentId.set(null);
    this.displayedFragments.set([]);
    await this.delay(500); // Pause before next scene
  }

  private async playMemories() {
    try {
      const fragments = this.proseService.getProseFragments();
      for (const fragment of fragments) {
        
        const isNewMajorScene =
          fragment.perspective === 'third-person' &&
          (fragment.text.startsWith('INT.') || fragment.text.startsWith('EXT.'));
        
        if (isNewMajorScene && this.displayedFragments().length > 0) {
          await this.animateClearScene();
        }

        await this.delay(fragment.initialDelay);

        if (fragment.clearPrevious) {
          this.displayedFragments.set([]);
          await this.delay(500);
          continue; // This is for the one-off initial clear.
        }

        if (fragment.text) {
          const newFragment: DisplayFragment = {
            id: fragment.id,
            text: signal(''),
            className: fragment.className || '',
            perspective: fragment.perspective || 'first-person',
          };
          this.displayedFragments.update(arr => [...arr, newFragment]);
          // Set the active fragment for typing
          this.activeFragmentId.set(newFragment.id);
          
          let textToType = fragment.text;
          
          if (textToType.includes('~~')) {
            // Handle complete re-typing of a phrase.
            const [mistake, correction] = textToType.split('~~');
            await this.typeIntoSignal(newFragment.text, mistake, fragment.typingSpeed);
            await this.delay(500 + Math.random() * 300); // Pause before correcting.
            for (let i = 0; i < mistake.length; i++) {
              newFragment.text.update(val => val.slice(0, -1));
              this.scrollToBottom();
              await this.delay(40 + Math.random() * 30); // Fast, variable backspace speed.
            }
            await this.delay(300 + Math.random() * 200); // Pause after deleting.
            await this.typeIntoSignal(newFragment.text, correction, fragment.typingSpeed);
          } else if (textToType.includes('--')) {
            // Handle small, two-character backspace corrections.
            const parts = textToType.split('--');
            const incorrectPart = parts[0];
            const correctRest = parts[1];
            await this.typeIntoSignal(newFragment.text, incorrectPart, fragment.typingSpeed);
            await this.delay(400);
            newFragment.text.update(val => val.slice(0, -1));
            this.scrollToBottom();
            await this.delay(200);
            newFragment.text.update(val => val.slice(0, -1));
            this.scrollToBottom();
            await this.delay(300);
            await this.typeIntoSignal(newFragment.text, correctRest, fragment.typingSpeed);
          } else {
            // Type normally.
            await this.typeIntoSignal(newFragment.text, textToType, fragment.typingSpeed);
          }
        }
      }
    } finally {
      // Deactivate cursor at the very end of the experience
      this.activeFragmentId.set(null);
      await this.delay(2000); // Pause for a moment on the final line
      this.finished.emit();
    }
  }
}
