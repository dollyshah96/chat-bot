import { Component, OnInit } from '@angular/core';
import * as questionJson from '../questions.json';

interface IQuestions {
  options: IOptions[];
  parent_id: string;
  message: string;
  sender: string;
  QuestionCompleted: boolean;
}
interface IOptions {
  option: string;
  optionId: string;
}
interface IdataPiece {
  Note: string;
  Account_No: number;
  chatbot: IQuestions[];
}
@Component({
  selector: 'faq-chat',
  templateUrl: './faq-chat.component.html',
  styleUrls: ['./faq-chat.component.scss']
})
export class FaqChatComponent implements OnInit {
  parsedQuestions: { chatbot: IQuestions[] };
  constructor() { }
  dataPiece: IdataPiece[] = [
    {
      Note: '',
      Account_No: 2,
      chatbot: [
        {
          "QuestionCompleted": true,
          "message": "How May i help you?",
          "sender": 'CAM',
          "parent_id": "q1",
          "options": [
            {
              "option": "List out the services",
              "optionId": "W1"
            },
            {
              "option": "Exit",
              "optionId": "WSN2"
            }
          ]
        },
        {

          "QuestionCompleted": true,
          "message": "Goodnight",
          "sender": 'YOU',
          "parent_id": "q1",
          "options": [
          ]
        },
      ]
    },
    {
      Note: '',
      Account_No: 1,
      chatbot: [
        {
          "QuestionCompleted": false,
          "message": "How May i help you?",
          "sender": 'CAM',
          "parent_id": "q1",
          "options": [
            {
              "option": "List out the services",
              "optionId": "W1"
            },
            {
              "option": "Exit",
              "optionId": "WSN2"
            }
          ]
        }
      ]
    },
  ];

  ngOnInit(): void {
    // localStorage.setItem('chatbot-ques', JSON.stringify(questionJson.data));
    this.parsedQuestions = questionJson.data;
  }

  getNextQuestion(questionId: string, parentIndex) {

    const nextQuestion = this.parsedQuestions.chatbot.find(e => e.parent_id == questionId);
    const obj = {
      message: nextQuestion.message,
      sender: 'CAM',
      parent_id: nextQuestion.parent_id,
      options: nextQuestion.options,
      QuestionCompleted: false
    }
    this.dataPiece[parentIndex].chatbot.push(obj);
  }

  saveNote(accountIndex: number, note: string) {
    const obj = {
      message: `Your Note: ${note}`,
      sender: 'YOU',
      parent_id: 'note',
      options: [],
      QuestionCompleted: true
    }
    this.dataPiece[accountIndex].Note = null;
    this.dataPiece[accountIndex].chatbot.push(obj);
  }

  onOptionClick(option, parent_id: string, accountIndex: number, chatIndex: number) {
    if (!this.dataPiece[accountIndex].chatbot[chatIndex].QuestionCompleted) {
      this.dataPiece[accountIndex].chatbot[chatIndex].QuestionCompleted = true;
      const obj = {
        message: option.option,
        QuestionCompleted: true,
        sender: 'YOU',
        parent_id: parent_id,
        options: []
      }
      this.dataPiece[accountIndex].chatbot.push(obj);
      this.getNextQuestion(option.optionId, accountIndex);
    }
    console.log(this.dataPiece);
  }
}

