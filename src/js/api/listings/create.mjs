import { API_AUCT_URL } from "../constants.mjs";

import { fetchWithToken, headers } from "../fetchWithToken.mjs"

const path ="/listings";
const method ="POST";

/** This fucntion will send a POST request to the server 
 * setCreatePostListener()  will use this function to create the post
 * 
 * @param {string} listingData  data contents of post
 * @returns 
 */


export async function createListing(listingData) {
    const createListingURL = API_AUCT_URL + path;

    const comma = ","

    const tagsArray = listingData.tags.split(comma);

    const response = await fetchWithToken(createListingURL, {
        method,
        headers: headers("application/json"),
        body: JSON.stringify({
            title: listingData.title,
            description: listingData.body,
            endsAt: listingData.endsAt,
            media: listingData.media,
            tags: tagsArray,
        }),
    });

    return await response.json();
}