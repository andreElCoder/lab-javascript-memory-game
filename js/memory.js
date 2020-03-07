class MemoryGame {
  constructor(cards){
    // add the rest of the class properties here
    this.cards = cards;
    this.pickedCards = [] ;               // array where we will be storing the cards the user has clicked so we can compare them.
    this.pairsClicked = 0 ;           // here will be adding every time a user choose and guess a pair
    this.pairsGuessed = 0;              // here will be adding every time a user choose and guess a pair
  }

  shuffleCards(cards) {
    if(typeof cards === 'undefined')return undefined;
  let roll =0 ;
  let result =[];
    for(let i=this.cards.length;i>0;i--){
      roll=Math.floor(Math.random()*i);
      result.push(this.cards[roll]);
      cards.splice(roll,1);
    }
    return result;
  }

  checkIfPair(card1, card2) {
    if(card1===card2){
      this.pairsGuessed+=1;
      this.pairsClicked+=1;
      return true;
    }else{
      this.pairsClicked+=1;
      return false;
    }
  }
  isFinished() {
    if(this.pairsGuessed===this.cards.length/2){
    return true;
  }
    else{
      return false;
    }
  }
}