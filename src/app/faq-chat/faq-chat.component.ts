import { Component, OnInit } from '@angular/core';
import * as questionJson from '../questions.json';

@Component({
  selector: 'faq-chat',
  templateUrl: './faq-chat.component.html',
  styleUrls: ['./faq-chat.component.scss']
})
export class FaqChatComponent implements OnInit {
  constructor() { }
  questions = [];
  selectAnswer: any;
  ngOnInit(): void {
    console.log(questionJson);
    setTimeout(() => {
      const key = questionJson.data.question_id;
      this.questions.push(questionJson.data[`${key}`]);
    }, 2000);
  }

  onOptionClick(option) {
    console.log(option);
    const key = option.optionId;
    this.questions.push(questionJson.data[`${key}`]);
  }
}
