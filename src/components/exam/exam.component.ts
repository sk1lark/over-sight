import { Component, ChangeDetectionStrategy, input } from '@angular/core';
import { ExamQuestion } from '../../models/prose.model';

@Component({
  selector: 'app-exam',
  templateUrl: './exam.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
})
export class ExamComponent {
  questions = input.required<ExamQuestion[]>();
  timeUp = input<boolean>(false);
}