import { Component, OnInit } from '@angular/core';
import * as questionJson from '../questions.json';

interface IQuestions {
  options?: IOptions[];
  parent_id?: string;
  selectedOption?: string;
  selectedOptionId?: string;
  question?: string;
  messages?: string[]
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
  parsedQuestions: { chatbot: IQuestions[] };
  chatbotIndex: any;
  constructor() { }
  questions: IQuestions[] = [];
  // dataPiece: { Account_No: number, chatbot: IQuestions[] }[] = [

  //   {
  //     Account_No: 2,
  //     chatbot: [
  //       {
  //         "question": "How May i help you?",
  //         "parent_id": "q1",
  //         "selectedOption": "Exit",
  //         "selectedOptionId": "WSN2",
  //         "options": [
  //           {
  //             "option": "List out the services",
  //             "optionId": "W1"
  //           },
  //           {
  //             "option": "Exit",
  //             "optionId": "WSN2"
  //           }
  //         ]
  //       },
  //       {
  //         "question": "Thank you. Visit Again!",
  //         "parent_id": "WSN2",
  //         "selectedOptionId": null,
  //         "selectedOption": null,
  //         "options": []
  //       }
  //     ]
  //   },
  //   {
  //     Account_No: 1,
  //     chatbot: []
  //   },
  // ];
  dataPiece: { Account_No: number, chatbot: IQuestions[], currentChatbotIndex: number }[] = [
    {
      Account_No: 0,
      chatbot: [],
      currentChatbotIndex: 0
    },
    {
      Account_No: 1,
      currentChatbotIndex: 0,
      // messages: [],
      chatbot: [
        {
          messages: [],
          question: "How May i help you?",
          parent_id: "q1",
          selectedOption: "List out the services",
          selectedOptionId: "W1",
          options: [
            {
              option: "List out the services",
              optionId: "W1"
            },
            {
              option: "Exit",
              optionId: "WSN2"
            }
          ],
        },
        {
          question: "Which service you would like to add?",
          parent_id: "W1",
          selectedOption: "Spa",
          selectedOptionId: "WS1",
          options: [
            {
              option: "Spa",
              optionId: "WS1"
            },
            {
              option: "Haircut",
              optionId: "WH2"
            }
          ],
          messages: []
        },
        {
          messages: [],
          question: "Are you sure that you want to have Spa?",
          parent_id: "WS1",
          selectedOption: "No",
          selectedOptionId: "WSN2",
          options: [
            {
              option: "Yes",
              optionId: "WSS1"
            },
            {
              option: "No",
              optionId: "WSN2"
            }
          ]
        },
        {
          messages: [],
          question: "Thank you. Visit Again!",
          parent_id: "WSN2",
          selectedOptionId: null,
          selectedOption: null,
          options: []
        }
      ]
    },
    {
      Account_No: 2,
      currentChatbotIndex: 0,
      chatbot: [
        {
          question: "How May i help you?",
          "parent_id": "q1",
          "selectedOption": "Exit",
          "selectedOptionId": "WSN2",
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
          "question": "Thank you. Visit Again!",
          "parent_id": "WSN2",
          "selectedOptionId": null,
          "selectedOption": null,
          "options": []
        }
      ]
    }
  ];
  message: string;

  ngOnInit(): void {
    localStorage.setItem('chatbot-ques', JSON.stringify(questionJson.data));
    this.dataPiece.map((acc, index) => {
      if (acc.chatbot.length == 0) {
        this.parsedQuestions = JSON.parse(localStorage.getItem('chatbot-ques'));
        console.log(this.parsedQuestions);

        this.dataPiece[index].chatbot.push(this.parsedQuestions.chatbot[0]);
      }
    });
  }

  onOptionClick(optionIndex: number, parent_id: string, parentIndex: number, chatbotIndex: number) {

    const askedQuestion = this.parsedQuestions.chatbot.find(e => e.parent_id == parent_id)
    const selectedOption = askedQuestion.options[optionIndex];
    // if (!askedQuestion.selectedOption) {
    this.dataPiece[parentIndex].chatbot[chatbotIndex].selectedOption = selectedOption.option;
    this.getNextQuestion(selectedOption.optionId, parentIndex, chatbotIndex);

    // }
  }

  getNextQuestion(questionId: string, parentIndex, chatbotIndex) {
    const nextQuestion = this.parsedQuestions.chatbot.find(e => e.parent_id == questionId);
    this.dataPiece[parentIndex].chatbot.push(nextQuestion);
    // this.chatbotIndex = chatbotIndex
    this.dataPiece[parentIndex].currentChatbotIndex = chatbotIndex;
  }

  onSave(parentIndex: number) {
    const currentChatbotIndex = this.dataPiece[parentIndex].currentChatbotIndex ? this.dataPiece[parentIndex].currentChatbotIndex : 0;
    console.log(this.dataPiece[parentIndex].chatbot);
    this.dataPiece[parentIndex].chatbot[currentChatbotIndex].messages.push(this.message);
  }
}

