const ratingContainer = document.querySelector(".rating");
const thanksContainer = document.querySelector(".thank-you");
const rating = document
  .querySelector(".thank-you__rating")
  .querySelector("span");
const rates = document.querySelectorAll(".button--round");
const submitButton = document.querySelector(".button--primary");

rates.forEach((rate) => {
  rate.addEventListener("click", () => {
    clearRatings();
    rate.classList.add("button--selected");
    rating.innerHTML = rate.innerHTML;
  });
});

submitButton.addEventListener("click", () => {
  if (rating.innerHTML === "") {
    alert("Please select a rating");
    return;
  }
  ratingContainer.classList.add("hidden");
  thanksContainer.classList.remove("hidden");
});

const clearRatings = () => {
  rates.forEach((rate) => {
    rate.classList.remove("button--selected");
  });
};
