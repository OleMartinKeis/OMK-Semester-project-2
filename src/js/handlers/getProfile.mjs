import * as profileTemplate from "../templates/profile.mjs";
import * as profileMethods from "../api/profile/index.mjs";
import { load } from "../api/storage/index.mjs";

const url = new URL(location.href);

export async function readProfile() {
  try {
    const profile = load("profile");
    if (!profile) {
      location.href = "/";
    }
    const response = await profileMethods.getProfile(profile.name);

    const profileContainer = document.querySelector("#profileContainer");

    profileTemplate.renderProfileTemplate(response, profileContainer);
  } catch (error) {
    console.log(error);
  }
}