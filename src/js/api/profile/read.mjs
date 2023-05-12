import { API_AUCT_URL } from "../constants.mjs";

import { fetchWithToken, headers } from "../fetchWithToken.mjs"

const path ="/profiles";



export async function getProfile(id) {

    const getProfileURL = `${API_AUCT_URL}${path}/${id}?_listings=true`;

    const response = await fetchWithToken(getProfileURL, {
        headers: headers(),
    })

    return await response.json();
}