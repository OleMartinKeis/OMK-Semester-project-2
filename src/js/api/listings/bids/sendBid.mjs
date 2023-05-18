import { API_AUCT_URL } from "../../constants.mjs";
import { fetchWithToken } from "../../fetchWithToken.mjs";
import { getListing } from "../read.mjs";


const url = new URL(location.href);
const id = url.searchParams.get("id");
const path ="/listings";

export async function sendBid(listingData) {

    try {
        const sendBidUrl = `${API_AUCT_URL}${path}/${id}/bids`
        const response = await fetchWithToken(sendBidUrl, {
            method: "POST",
            body: JSON.stringify(listingData)
        });

        if (response.ok) {
            await getListing(id);
            const listing = await response.json();
            return listing
        }
    }

    catch {
        console.log(error)
    }
} 