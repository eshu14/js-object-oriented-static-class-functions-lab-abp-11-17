'use strict';
class Question
{
  constructor(question){
    this.question=question;
    this.save();
  }
  save(){
    this.constructor._All.push(this);
  }
  static All()
  {
    return this._All;
  }

  static Find(ID){
      return this._All[ID-1];
    }
}
Question._All=[];
/*const question1 = new Question("What's your favorite food?");
const question2 = new Question("What city were you born in?");
const question3 = new Question("What's your favorite TV Show");*/
//question.save();
