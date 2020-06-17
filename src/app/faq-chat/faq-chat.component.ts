import { Component, OnInit } from '@angular/core';
import * as questionJson from '../questions.json';

interface IQuestions {
  options: IOptions[];
  parent_id: string;
  selectedOption: string;
  selectedOptionId?: string;
  question: string;
}
interface IOptions {
  option: string;
  optionId: string;
  isAlreadyParent?: boolean;
}
@Component({
  selector: 'faq-chat',
  templateUrl: './faq-chat.component.html',
  styleUrls: ['./faq-chat.component.scss']
})
export class FaqChatComponent implements OnInit {
  constructor() { }
  questions: IQuestions[] = [];
  date = new Date();

  ngOnInit(): void {
    const data = questionJson.data;
    if (data[0].selectedOption) {
      data.map(e => {
        if (e.selectedOption) {
          this.questions.push(e);
        }
      });
      const lengthOfQuestions = this.questions.length - 1;
      const lastOptionSelectedId = this.questions[lengthOfQuestions].selectedOptionId;
      this.getNextQuestion(lastOptionSelectedId);
    } else {
      this.questions.push(data[0]);
    }

  }

  onOptionClick(optionIndex: number, optionId: string, parentIndex: string) {
    this.date = new Date();
    const selectedOption = this.questions[parentIndex].options[optionIndex];

    this.questions[parentIndex].selectedOption = selectedOption.option;
    this.questions[parentIndex].selectedOptionId = selectedOption.optionId;

    this.getNextQuestion(parentIndex);
  }

  getNextQuestion(questionId: string) {
    const nextQuestion = questionJson.data.find(e => e.parent_id == questionId);
    this.questions.push(nextQuestion);
  }
}

