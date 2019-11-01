import { Component } from '@angular/core';
import { QuestionService } from './services/question.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'assignment';

  constructor(private service: QuestionService) { }

}
