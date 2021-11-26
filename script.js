const room = document.querySelector("#fish");

const button = document.querySelector("#btn");

let secondsLeft = 5;

// const one = "1";
// const two = "2";
// const three = "3";
// const four = "4";
// const five = "5";
// const six = "6";
// const seven = "7";
// const eight = "8";
// const nine = "9";
// const ten = "10";
// const jack = "11";
// const queen = "12";
// const king = "13";
// const ace = "14";

button.addEventListener("click", function () {
  fetch(
    // "https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=IBM&apikey=DU7T0IAOA31JGVC6",
    "https://deckofcardsapi.com/api/deck/new/draw/?count=2",
    {
      headers: {
        Accept: "application/json",
      },
    }
  )
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);

      button.setAttribute("style", "display: none");

      let card1 = document.createElement("img");
      let card2 = document.createElement("img");

      let test1 = data.cards[0].image;
      let test2 = data.cards[1].image;

      card1.setAttribute("src", test1);
      card2.setAttribute("src", test2);

      room.appendChild(card1);
      room.appendChild(card2);

      let cardValue1 = data.cards[0].value;
      let cardValue2 = data.cards[1].value;

      if (cardValue1 > cardValue2) {
        let winner = document.createElement("h1");
        winner.textContent = "You Won!";
        room.appendChild(winner);
      } else if (cardValue1 < cardValue2) {
        let loser = document.createElement("h1");
        loser.textContent = "You Lost!";
        room.appendChild(loser);
      } else if (cardValue1 === cardValue2) {
        let tie = document.createElement("h1");
        tie.textContent = "You Tied!";
        room.appendChild(tie);
      }
      timer();
    });
});

function timer() {
  // Sets interval in variable
  let timerInterval = setInterval(function () {
    secondsLeft--;

    if (secondsLeft === 0) {
      // clearInterval(timerInterval);
      location.reload();
    }
  }, 1000); //1000 represents miliseconds = 1 second
}

//DU7T0IAOA31JGVC6
