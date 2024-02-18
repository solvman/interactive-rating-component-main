const ratingContainer = document.querySelector(".rating");
const thanksContainer = document.querySelector(".thank-you");
const rating = document
  .querySelector(".thank-you__rating")
  .querySelector("span");
const rates = document.querySelectorAll("button--round");
const submitButton = document.querySelector(".button--primary");

rates.forEach((rate) => {
  rate.addEventListener("click", () => {
    rating.innerHTML = rate.innerHTML;
  });
});

submitButton.addEventListener("click", () => {
  ratingContainer.classList.add("hidden");
  thanksContainer.classList.remove("hidden");
});
