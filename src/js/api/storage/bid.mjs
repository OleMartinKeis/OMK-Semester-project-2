import { load } from "./index.mjs";


export function bidButton() {
  const buttons = document.querySelectorAll("#bidBtn");
  const isLoggedIn = load("profile");

  buttons.forEach((button) => {
    button.disabled = true;
    if (!isLoggedIn) {
      button.innerText = "You must be logged in to place bids";
    }
    if (isLoggedIn) {
      button.disabled = false;
    }
  });
}