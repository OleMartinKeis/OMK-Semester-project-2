import { API_AUCT_URL } from "../constants.mjs";

import { fetchWithToken, headers } from "../fetchWithToken.mjs"

const path ="/profiles";
const method ="PUT";

export async function updateProfile(profileData) {
    if (!profileData.name) {
        console.log("There was an error, please make sure there is a valid name.")
    }
    const updateProfileURL = `${API_AUCT_URL}${path}/${profileData.name}/media`;

    const response = await fetchWithToken(updateProfileURL, {
        method,
        headers: headers(),
        body: JSON.stringify(profileData),
    });
    return await response.json();
}

