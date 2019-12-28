console.log("Client side javascript file is loaded!");

fetch("http://localhost:3000/weather/?address=leuven").then(response => {
  response.json().then(data => {
    if (data.error) {
      console.log(data.error);
    } else {
      console.log(data);
      //   console.log(data.forecast);
    }
  });
});

const weatherForm = document.querySelector("form");
weatherForm.addEventListener("submit", (e) => {
  e.preventDefault() // this prevents refreshing the page by default
  console.log("testing!");
});
