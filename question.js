'use strict';
class Question{
  static All()
  {
    return this._All;
  }
  constructor(questions){
    this.questions=questions;
    this.save();
  }
  save(){

  }
  static FIND(ID){
    return this.ID;
  }
}
Question._All=[];
const question = new Question("What's your favorite food?");
question.save();
