import { API_AUCT_URL } from "../constants.mjs";
import { load } from "../storage/index.mjs";
import { fetchWithToken, headers } from "../fetchWithToken.mjs"

const path ="/profiles";
const method ="PUT";

export async function updateProfile(profileData) {
    const storageProfile = load("profile");

    if (!storageProfile.name) {
        console.log("There was an error, please make sure there is a valid name.")
    }
    const updateProfileURL = `${API_AUCT_URL}${path}/${storageProfile.name}/media`;

    const response = await fetchWithToken(updateProfileURL, {
        method,
        
        body: JSON.stringify(profileData),
    });
    console.log(response)
    return await response.json();
}

