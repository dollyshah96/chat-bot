import { Component, OnInit } from '@angular/core';
import * as questionJson from '../questions.json';

@Component({
  selector: 'faq-chat',
  templateUrl: './faq-chat.component.html',
  styleUrls: ['./faq-chat.component.scss']
})
export class FaqChatComponent implements OnInit {
  constructor() { }
  public questionObj = {
    question: null, option1: null, option2: null
  };
  test: string
  questions = [];
  answers = [];
  date = new Date();
  ngOnInit(): void {
    const parent_id = questionJson.data[0].parent_id;
    const obj = questionJson.data.find(e => e.parent_id == parent_id);
    this.questions.push(obj);
  }

  onOptionClick(option, parent_id) {
    this.date = new Date();

    const parentIndex = this.questions.findIndex(e => e.parent_id == parent_id);
    const obj = {
      selectedOption: option,
      parent_id: parent_id
    }
    this.answers.push(obj);
    this.questions[parentIndex]['options'] = [];
    const next_parent_id = option.optionId;
    const nextQuestion = questionJson.data.find(e => e.parent_id == next_parent_id);

    this.questions.push(nextQuestion);

    // const childIndex = this.questions[parentIndex].options.findIndex(e => e.optionId == option.optionId);
    // this.questions[parentIndex]['options'][childIndex].selectedAns = option;
    // const removeItems = this.questions[parentIndex].options.filter(e => e.optionId != option.optionId);
    // removeItems.map(ele => {
    //   const childIndex = this.questions[parentIndex].options.findIndex(e => e.optionId == ele.optionId);
    //   this.questions[parentIndex]['options'].splice(childIndex, 1);
    // });
  }

  onAdd() {
    console.log(this.questionObj);

    const obj = {
      question: this.questionObj.question,
      question_id: Math.floor(Math.random() * 100),
      options: [
        {
          option: this.questionObj.option1,
          optionId: Math.floor(Math.random() * 100)
        },
        {
          option: this.questionObj.option2,
          optionId: Math.floor(Math.random() * 100)
        }
      ]
    }
  }
}

