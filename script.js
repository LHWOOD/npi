const room = document.querySelector("#fish");

const button = document.querySelector("#btn");

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

      let cardInfo = document.createElement("p");

      let test1 = data.cards[0].image;
      let test2 = data.cards[1].image;
      cardInfo.setAttribute("style", "color: white");
      card1.setAttribute("src", test1);
      cardInfo.textContent = data.cards[0].value;

      card2.setAttribute("src", test2);

      room.appendChild(card1);
      room.appendChild(cardInfo);
      room.appendChild(card2);
    });
});

//DU7T0IAOA31JGVC6
