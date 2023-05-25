import { getProfile, updateProfile } from "../api/profile/index.mjs";

import { load, save } from "../api/storage/index.mjs";

/**
 * This functions listenes for submitting the editProfile form under /profile/edit/index.html to change either banner or avatar for the profile who is logged in
 * the button.disable makes sure that noone can submit the form before the form has loaded with the pre existing values.
 */

export async function setUpdateProfileListener() {
  console.log("We are in setUpdateFormListener");
  const form = document.querySelector("#editProfile");
  const setAvatar = document.querySelector("#avatar");


  if (form) {
    var { name, email, avatar } = load("profile");

    setAvatar.innerHTML = `<img src="${avatar}"
            class="img-fluid img-thumbnail rounded-circle mb-2"
            style="width: 150px; height: 150px; margin-top:-15px; z-index: 1"/>`;

    form.addEventListener("submit", (event) => {
        event.preventDefault();
        const form = event.target;
        const formData = new FormData(form);

        var newProfileAvatar = Object.fromEntries(formData.entries());
        avatar = newProfileAvatar;

        updateProfile(avatar);

    });
  }
}