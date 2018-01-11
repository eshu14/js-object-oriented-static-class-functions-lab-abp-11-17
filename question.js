'use strict';
class Question{
  static All()
  {
    return this._All;
  }
  constructor(question){
    this.question=question;
    this.save();
  }
  save(){
    this.constructor._All.push(this);
  }
  static FIND(ID){
        return this.All().filter(function(ID){
        return Question.ID=ID;
      })

  }
}
Question._All=[];
//const question = new Question("What's your favorite food?");
//question.save();
