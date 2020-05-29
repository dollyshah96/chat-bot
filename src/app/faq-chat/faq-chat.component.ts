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
  answers = [];
  date = new Date();
  ngOnInit(): void {



    const key = questionJson.data.question_id;
    const obj = {
      question: questionJson.data[`${key}`]['question'],
      question_id: questionJson.data[`${key}`]['question_id'],
      options: questionJson.data[`${key}`]['options'],
    }
    this.questions.push(obj);
  }

  onOptionClick(option, question_id) {
    this.date = new Date();

    const parentIndex = this.questions.findIndex(e => e.question_id == question_id);
    const obj = {
      selectedOption: option,
      questionId: question_id
    }
    this.answers.push(obj);
    this.questions[parentIndex]['options'] = [];
    const key = option.optionId;
    this.questions.push(questionJson.data[`${key}`]);

    // const childIndex = this.questions[parentIndex].options.findIndex(e => e.optionId == option.optionId);
    // this.questions[parentIndex]['options'][childIndex].selectedAns = option;
    // const removeItems = this.questions[parentIndex].options.filter(e => e.optionId != option.optionId);
    // removeItems.map(ele => {
    //   const childIndex = this.questions[parentIndex].options.findIndex(e => e.optionId == ele.optionId);
    //   this.questions[parentIndex]['options'].splice(childIndex, 1);
    // });

  }
}

