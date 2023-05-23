import { API_AUCT_URL } from "../constants.mjs";

import { fetchWithToken, headers } from "../fetchWithToken.mjs";

const path = "/profiles";
import { load } from "../storage/index.mjs";

export async function getProfile(name) {
  // let's supply the name to you, it's friday and I want to fix you and go party. Kiddin. Well Kinda ;p
  const storageProfile = load("profile");
  const getProfileURL = `${API_AUCT_URL}${path}/${storageProfile.name}`;

  const response = await fetchWithToken(getProfileURL);
  const profile = await response.json();
  
  return profile;
}