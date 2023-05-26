import { API_AUCT_URL } from "../constants.mjs";
import * as storage from "../storage/index.mjs";

const path = "/auth/login";
const method = "POST";

export async function login(profile) {
  const loginURL = API_AUCT_URL + path;
  const body = JSON.stringify(profile);

  const response = await fetch(loginURL, {
    headers: {
      "Content-Type": "application/json",
    },
    method,
    body,
  });

  const { accessToken, ...user } = await response.json();

  storage.save("token", accessToken);

  storage.save("profile", user);

  location.href = "/listing/index.html";
}
