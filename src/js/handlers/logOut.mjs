import { removeLocalStorage } from "../storage/delete.mjs";

/**
 * Logs out a logged in user
 */

export function logoutListener() {
  const logoutButton = document.querySelector("#logout-button");

  logoutButton.addEventListener("click", () => {
    removeLocalStorage("token");
    removeLocalStorage("profile");
    location.reload();
    location.href("../../index.html")
    
  });
}