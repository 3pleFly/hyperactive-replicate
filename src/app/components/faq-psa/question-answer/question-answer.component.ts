import {
  Component,
  Input,
  OnChanges,
  OnInit,
  TemplateRef,
} from '@angular/core';

@Component({
  selector: 'app-question-answer',
  templateUrl: './question-answer.component.html',
  styleUrls: ['./question-answer.component.scss'],
})
export class QuestionAnswerComponent implements OnInit {
  @Input() qa: { question: string; answer: string } = {
    question: '0',
    answer: '0',
  };

  constructor() {}

  ngOnInit(): void {}

  show(answerDiv: HTMLDivElement) {
    answerDiv.classList.toggle('active');
  }
}
