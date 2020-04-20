var currentIndex = -1;
var cardStack = [-1];

/******************************************
 * replace the current card
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
  displayCard(newIndex);
  cardStack.push(newIndex);
  currentIndex = newIndex;

  // enable previous button
  document.getElementById("button_previous").style.color = "black";

  console.log(cardStack);
}

/******************************************
 * display the current card
 ******************************************/

function displayCard(index) {
  if (index == -1) {
    rulePara.innerHTML = "?";
    rulePara.style.fontSize = "120pt";
    return;
  }

  var newText = "<b>Rule:</b> " + cards[index].rule;
  newText += "<br>---<br><b>Enforcement</b>: Tell the player: \"";
  newText += cards[index].enforcement + "\" and award a card from the deck";
  rulePara.innerHTML = newText;
  rulePara.style.fontSize = "12pt";
}


/******************************************
 * go back to previous card
 ******************************************/
function previousCard() {
  // only do something if a card has already been loaded
  if (cardStack.length <= 1) { return; }

  cardStack.pop();
  var len = cardStack.length;
  displayCard(cardStack[len - 1]);
  currentIndex = cards[len - 1];

  console.log(cardStack);
}


/******************************************
 * card collection (on load)
 ******************************************/
var cards = [
  {
    "id": 0,
    "rule": "Players must speak in a foreign accent",
    "enforcement": "native tongue violation!"
  },
  {
    "id": 1,
    "rule": "Players may not physically touch",
    "enforcement": "keep your hands to yourself!"
  },
  {
    "id": 2,
    "rule": "Players must say \"oh my!\" before drawing a card",
    "enforcement": "improper introduction!"
  }
];