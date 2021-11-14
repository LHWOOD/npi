const room = document.querySelector("#fish");

const button = document.querySelector("#btn");

button.addEventListener("click", function () {
  fetch(
    "https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=IBM&apikey=DU7T0IAOA31JGVC6",
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
    });
});

//DU7T0IAOA31JGVC6
