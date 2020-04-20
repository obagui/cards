var cardStack = [-1];

/******************************************
 * replace the current card
 ******************************************/
function newCard() {
  // select a card
  var currentIndex = cardStack[cardStack.length - 1];
  var newIndex;
  do {
    newIndex = Math.floor(Math.random() * cards.length);
  } while (newIndex == currentIndex);

  // display the new card and add it to the stack
  displayCard(newIndex);
  cardStack.push(newIndex);

  // enable previous button
  document.getElementById("button_previous").style.color = "black";
}


/******************************************
 * display the current card
 ******************************************/

function displayCard(index) {
  var rulePara = document.getElementById("rulePara");

  // check if already reached the bottom of the stack
  if (index == -1) {
    rulePara.innerHTML = "?";
    rulePara.style.fontSize = "120pt";
    // disable previous button
    document.getElementById("button_previous").style.color = "gray";
    return;
  }

  var newText = "<b>Rule:</b> " + cards[index].rule;
  newText += "<br>---<br><b>Enforcement</b>: Say: \"";
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
}


/******************************************
 * card collection (on load)
 ******************************************/
var cards = [
  {
    "rule": "players must speak in a foreign accent",
    "enforcement": "native tongue violation!"
  },
  {
    "rule": "players must say \"oh, wow!\" before drawing a card",
    "enforcement": "improper introduction!"
  },
  {
    "rule": "players must say \"I don't know what I am doing\" when placing a blue card",
    "enforcement": "you don't know what you're doing!"
  },
  {
    "rule": "players must say \"gray\" when placing a green card",
    "enforcement": "color blind!"
  },
  {
    "rule": "players must cough or clear their throats when placing a red card",
    "enforcement": "bless you!"
  },
  {
    "rule": "players must look at every other player before placing a yellow card",
    "enforcement": "failure to observe!"
  },
  {
    "rule": "players must only refer to another player as \"worthy opponent\"",
    "enforcement": "worthy opponent, you have earned this"
  },
  {
    "rule": "when a player says \"pass\", the other player must say \"caught\"",
    "enforcement": "incomplete pass!"
  },
  {
    "rule": "players must spell P-A-S-S before passing",
    "enforcement": "spelling error!"
  },
  {
    "rule": "players cannot say the word \"card\"",
    "enforcement": "forbidden word!"
  },
  {
    "rule": "players cannot say \"it's my turn\"",
    "enforcement": "you're selfish!"
  },
  {
    "rule": "players must scratch their foreheads before changing colors",
    "enforcement": "if it itches, scratch it! "
  },
  {
    "rule": "players cannot draw their own penalty card, but must wait for it to be awarded",
    "enforcement": "self punishment!"
  },
  {
    "rule": "players must not point with their fingers",
    "enforcement": "it's impolite to point!"
  },
  {
    "rule": "players must say \"watch this\" when down to one card",
    "enforcement": "failure to celebrate!"
  },
  {
    "rule": "players cannot say the word \"stupid\"",
    "enforcement": "stupid is as stupid does"
  },
  {
    "rule": "players cannot straighten the card piles, except to shuffle",
    "enforcement": "compulsive cleaning"
  },
  {
    "rule": "players cannot say \"it's my turn\"",
    "enforcement": "busybody"
    // this one is originally enforced by awarding a card from one's own hand, but I kept it simple
  },
  {
    "rule": "players must clap their hands after awarding a penalty card",
    "enforcement": "failure to celebrate!"
  },
  {
    "rule": "players must say \"excuse me\" before drawing a card",
    "enforcement": "lack of manners!"
    // originally from hand
  },
  {
    "rule": "players must say \"well...\" before drawing a card",
    "enforcement": "improper introduction!"
  },
  {
    "rule": "the game cannot end by discarding a red card",
    "enforcement": "improper ending!"
  },
  {
    "rule": "players may say \"I'm gonna win!\" when down to one card",
    "enforcement": "failure to warn!"
  },
  {
    "rule": "players must laugh out loud before playing a \"reverse\" card",
    "enforcement": "no sense of humor!"
    // originally from hand
  },
  {
    "rule": "players may not ask questions",
    "enforcement": "curiosity killed the cat!"
  },
  {
    "rule": "players must say \"thank you\" when receiving a penalty card",
    "enforcement": "lack of manners!"
  },
  {
    "rule": "players may not ask whose turn it is",
    "enforcement": "lack of patience!"
  },
  {
    "rule": "players must adjust in their seats before placing a \"1\"",
    "enforcement": "lack of comfort!"
  },
  /*
  {
    "rule": "players  placing a \"2\"",
    "enforcement": ""
  },
  {
    "rule": "3",
    "enforcement": ""
  },
  {
    "rule": "4",
    "enforcement": ""
  },
  {
    "rule": "5",
    "enforcement": ""
  },
  {
    "rule": "6",
    "enforcement": ""
  },
  {
    "rule": "7",
    "enforcement": ""
  },
  {
    "rule": "8",
    "enforcement": ""
  }
  */
  {
    "rule": "players must knock on the table before playing a \"9\"",
    "enforcement": "failure to knock!"
  },
  {
    "rule": "players must say \"sorry\" when placing a \"skip\" card",
    "enforcement": ""
  }/*,
  {
    "rule": "",
    "enforcement": ""
  },
  {
    "rule": "",
    "enforcement": ""
  },
  {
    "rule": "",
    "enforcement": ""
  },
  {
    "rule": "",
    "enforcement": ""
  }*/
];

console.log("Array length is: " + cards.length);

// other rule cards not used
/*
{
  "rule": "players may not physically touch",
  "enforcement": "keep your hands to yourself!"
},
  {
    "rule": "a player cannot win by awaring a penalty card",
    "enforcement": "improper ending"
    // originally from hand
  },
    {
    "rule": "",
    "enforcement": ""
  }
*/