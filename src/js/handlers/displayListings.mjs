import * as templates from "../templates/index.mjs"
import { getListings } from "../api/listings/read.mjs";


export async function displayListings(container) {
    const listings = await getListings();

    try{

        if (listings.length){
            
            templates.listingTemplate(listings, container);
        }
    }
    catch(error){
        console.log(error)
    }

}