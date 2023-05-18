import { sendBid } from "../api/listings/bids/sendBid.mjs";
import { load, save } from "../api/storage/index.mjs";


export async function createBidHandler() {
    document.addEventListener("DOMContentLoaded", () => {
        const input = document.querySelector("#bidInput");
        const button = document.querySelector("#bidBtn")

        button.addEventListener("click", async (event) => {
            event.preventDefault();
            const bid = {
                amount: Number(input.value)
            };
    
            let profile = load("profile");
            profile["credits"] = profile.credits - input.value;
            save("profile", profile)
    
            await sendBid(bid);
        })
    })
 
}