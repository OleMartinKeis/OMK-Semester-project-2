import { API_AUCT_URL } from "../constants.mjs";

import { fetchWithToken } from "../fetchWithToken.mjs"

const path ="/listings";


export async function getListings() {

    const getListingsURL = `${API_AUCT_URL}${path}`;

    const response = await fetchWithToken(getListingsURL)

    return await response.json();
}

export async function getListing(id) {
    if (!id) {
        console.log("There was an error, please make sure there is a valid ID to your post.")
    }
    const getListingURL = `${API_AUCT_URL}${path}/${id}`;

    const response = await fetchWithToken(getListingURL)
    
    return await response.json();
}