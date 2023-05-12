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
    const createListingURL = `${API_AUCT_URL}${path}`;


    const mediaArray = listingData.media.split(",").map((link) =>link.trim())
    const tagsArray = listingData.tags.split(",").map((tag) => tag.trim());

    const response = await fetchWithToken(createListingURL, {
        method,
        headers: headers("application/json"),
        body: JSON.stringify({
            title: listingData.title,
            description: listingData.description,
            endsAt: listingData.endsAt,
            media: mediaArray,
            tags: tagsArray,
        }),
    });

    return await response.json();
}