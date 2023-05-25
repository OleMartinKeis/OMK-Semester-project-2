import { API_AUCT_URL } from "../constants.mjs";

import { fetchWithToken, headers } from "../fetchWithToken.mjs"

const path ="/listings";
const method ="POST";

export async function createListing(listingData) {
    const createListingURL = `${API_AUCT_URL}${path}`;


    const response = await fetchWithToken(createListingURL, {
        method,
        headers: headers("application/json"),
        body: JSON.stringify(listingData),
    });

    return await response.json();
}