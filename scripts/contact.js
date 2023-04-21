// when the "submit-button" is clicked, the contents of the contact-page are replaced with a single <p> element that reads "Thank you for your message" in size 24 font.

// hint: you can change the style of an element by modifying the value of that element's .style.fontSize, or by updating its .classList.
/*jshint esversion: 6 */

const submission = document.querySelector("#submit-button");
const inputText = document.querySelector("#contact-page");
const thankYouMessage = "Thanks for your message!";

submission.addEventListener("click", () => {
    inputText.textContent = thankYouMessage;
    inputText.style.fontSize = "24px";
});
