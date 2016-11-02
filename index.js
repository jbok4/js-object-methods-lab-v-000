// In index.js, build an ES6 President class with the following properties set by the constructor: name, politicalParty, yearsInOffice, and homeState.
class President {
  constructor(name, politicalParty, yearsInOffice, homeState) {
    this.name = name;
    this.politicalParty = politicalParty;
    this.yearsInOffice = yearsInOffice;
    this.homeState = homeState;
  }
 
  veto() {
    return "NO!";
  }

  // passBill — returns You can do that!
  passBill() {
    return "You can do that!";
  }

  // doCharity — returns I like to help people.
  doCharity() {
    return "I like to help people.";
  }

  // conductPressInterview — returns I am proud to be an American.
  conductPressInterview() {
    return "I am proud to be an American.";
  }

  // sayHi — returns Hi, my name is <name>. I am from <homestate>. I represent the <politicalParty>s, and was in office <yearsInOffice>.
  sayHi() {
    return "Hi, my name is " + this.name + ". I am from " + this.homeState + ". I represent the " + this.politicalParty + "s, and was in office " + this.yearsInOffice + ".";
  }
}

// Then create the following presidents: George Washington, Abraham Lincoln, Richard Nixon, and Jimmy Carter.
var georgeWashington = new President("George Washington", "Independent", "9", "Virginia"); 
var abrahamLincoln = new President("Abraham Lincoln", "National Union", "4", "Illinois"); 
var richardNixon = new President("Richard Nixon", "Republican", "5", "California"); 
var jimmyCarter = new President("Jimmy Carter", "Democrat", "4", "Georgia"); 
