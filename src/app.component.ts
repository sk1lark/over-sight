import { Component, ChangeDetectionStrategy, signal, inject } from '@angular/core';
import { ExamComponent } from './components/exam/exam.component';
import { MemoryViewerComponent } from './components/memory-viewer/memory-viewer.component';
import { ProseService } from './services/prose.service';

type AppState = 'exam' | 'dissociating' | 'memory' | 'times_up' | 'fade_to_black' | 'credits' | 'end';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: true,
  imports: [ExamComponent, MemoryViewerComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    '(document:keydown.space)': 'onSpacebarPress($event)'
  }
})
export class AppComponent {
  private proseService = inject(ProseService);

  examQuestions = this.proseService.getExamQuestions();
  appState = signal<AppState>('exam');

  onSpacebarPress(event: KeyboardEvent) {
    if (this.appState() === 'exam') {
      event.preventDefault();
      this.onStartDissociation();
    }
  }

  onStartDissociation() {
    if (this.appState() === 'exam') {
      this.appState.set('dissociating');
      setTimeout(() => {
        this.appState.set('memory');
      }, 2000); // Time for the fade out effect
    }
  }

  onMemoriesFinished() {
    this.appState.set('times_up'); // Show the exam again with "Time's Up"
    
    setTimeout(() => {
      this.appState.set('fade_to_black'); // Start fading everything to black
    }, 4000); // Show "Time's Up" for 4 seconds
    
    setTimeout(() => {
      this.appState.set('credits'); // Show the credits
    }, 6000); // 2 seconds for the fade to black
    
    setTimeout(() => {
        this.appState.set('end'); // "Smash cut" to black
    }, 11000); // Show credits for 5 seconds
  }
}