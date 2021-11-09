const room = document.querySelector("#fish");

const button = document.querySelector("#btn");

button.addEventListener("click", function () {
  fetch("https://api.fungenerators.com", {
    headers: {
      Accept: "application/json",
    },
  })
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);
    });
});
