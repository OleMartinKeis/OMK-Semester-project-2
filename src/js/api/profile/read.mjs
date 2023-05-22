import { API_AUCT_URL } from "../constants.mjs";

import { fetchWithToken, headers } from "../fetchWithToken.mjs";

const path = "/profiles";
import { load } from "../storage/index.mjs";

export async function getProfile(name) {
   // let's supply the name from storage
  const storageProfile = load("profile");
  console.log(storageProfile.name);
  const getProfileURL = `${API_AUCT_URL}${path}/${storageProfile.name}`;
  console.log("profile URL is " + getProfileURL);

  const response = await fetchWithToken(getProfileURL);
  const profile = await response.json();
  console.log("GET PROFILE " + JSON.stringify(profile));
  return profile;
}