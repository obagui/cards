var currentIndex = -1;

/******************************************
 * replace the card on the screen
 ******************************************/
function newCard() {
  var rulePara = document.getElementById("rulePara");

  // select a card
  var cardTotal = cards.length;
  var newIndex;
  do {
    newIndex = Math.floor(Math.random() * cardTotal);
  } while (newIndex == currentIndex);

  // add it to div
  var newText = "<b>Rule:</b> " + cards[newIndex].rule;
  newText += "<br>---<br><b>Enforcement</b>: Tell the player: \"";
  newText += cards[newIndex].enforcement + "\" and award a card from the deck";
  rulePara.innerHTML = newText;
  rulePara.style.fontSize = "12pt";
  currentIndex = newIndex;

  // enable previous button
  document.getElementById("button_previous").style.color = "black";

  console.log(cards[newIndex].id);
}


/******************************************
 * go back to previous card
 ******************************************/
function previousCard() {
  // only do something if a card has already been loaded

}


/******************************************
 * card collection (on load)
 ******************************************/
var cards = [
  {
    "id" : 0,
    "rule" : "Players must speak in a foreign accent",
    "enforcement" : "native tongue violation!"
  },
  {
    "id" : 1,
    "rule" : "Players may not physically touch",
    "enforcement" : "keep your hands to yourself!"
  },
  {
    "id" : 2,
    "rule" : "Players must say \"oh my!\" before drawing a card",
    "enforcement" : "improper introduction!"
  }
];