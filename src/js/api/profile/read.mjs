import { API_AUCT_URL } from "../constants.mjs";

import { fetchWithToken, headers } from "../fetchWithToken.mjs"

const path ="/profiles";



export async function getProfile(name) {

    const getProfileURL = `${API_AUCT_URL}${path}/${name}?_listings=true`;

    const response = await fetchWithToken(getProfileURL);
    const profile = await response.json();
    return profile;
}