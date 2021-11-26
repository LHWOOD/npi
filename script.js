const room = document.querySelector("#fish");

const button = document.querySelector("#btn");

button.addEventListener("click", function () {
  fetch(
    // "https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=IBM&apikey=DU7T0IAOA31JGVC6",
    "https://deckofcardsapi.com/api/deck/new/draw/?count=1",
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

      let card = document.createElement("img");

      // card.setAttribute("src", `${data.cards}`);
      let test = data.cards[0].image;
      card.setAttribute("src", test);
      card.setAttribute("style", "color:brown");

      room.appendChild(card);
    });
});

//DU7T0IAOA31JGVC6
