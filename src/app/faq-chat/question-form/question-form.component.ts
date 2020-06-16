import { Component, OnInit } from '@angular/core';
interface IQuestions {
  options: IOptions[];
  parent_id: number;
  question: string;
}
interface IOptions {
  option: string;
  optionId: number;
  isAlreadyParent: boolean;
}
@Component({
  selector: 'question-form',
  templateUrl: './question-form.component.html',
  styleUrls: ['./question-form.component.scss']
})
export class QuestionFormComponent implements OnInit {
  public questionObj = {
    question: null, option1: null, option2: null,
  };
  public subQuestionObj = {
    question: null, option1: null, option2: null,
  };
  questions: IQuestions[] = [];
  options: IOptions[] = [];
  questionId: number = 0;
  optionId: number = 0;
  constructor() {

  }

  ngOnInit(): void {
  }

  onAdd() {
    const parent_id = Math.random();
    this.readyQuestionObj(this.questionObj, parent_id);
    this.questionObj.question = null;
    this.questionObj.option1 = null;
    this.questionObj.option2 = null;
  }

  getOptions() {
    const filterOptions = this.questions.find(e => e.parent_id == this.questionId);
    this.options = filterOptions.options;
    console.log(this.options, this.questionId);
  }

  onSubAdd() {
    this.readyQuestionObj(this.subQuestionObj, this.optionId);
    this.options = [];
    this.questionId = 0;
    this.optionId = 0;
    this.subQuestionObj.question = null;
    this.subQuestionObj.option1 = null;
    this.subQuestionObj.option2 = null;
  }

  private readyQuestionObj(questionObj, parent_id) {
    const optionId1 = Math.random();
    const optionId2 = Math.random();

    const questionIndex = this.questions.findIndex(e => e.parent_id == this.questionId);
    if (this.optionId) {
      const optionIndex = this.questions[questionIndex].options.findIndex(e => e.optionId == this.optionId);
      console.log(optionIndex);
      this.questions[questionIndex].options[optionIndex].isAlreadyParent = true;
    }

    console.log(questionIndex);



    const obj = {
      question: questionObj.question,
      parent_id: parent_id,
      options: [
        {
          option: questionObj.option1,
          optionId: optionId1,
          isAlreadyParent: false
        },
        {
          option: questionObj.option2,
          optionId: optionId2,
          isAlreadyParent: false
        }
      ]
    };
    this.questions.push(obj);

    console.log(this.questions);

  }
}
