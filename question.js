'use strict';
class Question{
  static All()
  {
    return this._All;
  }
  constructor(questions){
    return questions;
    
  }
  save(){

  }
  static FIND(ID){

  }
}
Question._All=[];
const question = new Question("What's your favorite food?");
question.save();
