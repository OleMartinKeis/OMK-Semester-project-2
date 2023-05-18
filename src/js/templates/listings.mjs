import { load } from "../api/storage/index.mjs"
import { createBidHandler } from "../handlers/createBid.mjs";

export function listingTemplate(listingData) {

    if (Array.isArray(listingData)) {
        return listingData.map(listingTemplate)
    }
    
    const bidsArray = listingData.bids.map((e) => {
        return e.amount;
        });

    const itemPrice = bidsArray.pop();

    const profile = load("profile")

    const listing = document.createElement("div");
    const container = document.querySelector("#listings");
    
    

    container.innerHTML+= `
    <div id="listing-item-card" class="container-lg">
        <div class="listing-image d-flex justify-content-center">
            <img src="${listingData.media}" class="image-fluid" alt="${listingData.seller.name} didnt choose a picture for the item" style="max-width: 250px; border: 1px solid black; padding: 1px; ">
        </div>
        <div class="listing-header">
            <h1>${listingData.title}</h1>
        </div>
        <div class="listing-description">
            <p>${listingData.description}</p>
        </div>
        <div class="auctioner-bidded-amount">
            <p>Item price: <strong>${itemPrice}</strong></p>
        </div>
        <div class="listing-create-bid d-flex justify-content-center align-items-baseline">
            <input type="number" name="bid" id="bidInput" placeholder="0" style="width: 60px; height: 50px" class="text-end px-2 py-1" />
            <button class="w-90 mt-3 btn fw-light btn-secondary" id="bidBtn">Place bid</button>
        </div>
        <div class="bid-endsAt">
            <p>This item goes at : "${listingData.endsAt}" </p>
        </div>
        <div class="listing-tags">
            <p>Tags: ${listingData.tags}</p>
        </div>
        <div class="listing-bids" style="margin-top: 10px;">
            <div class="listing-bid-card" style="border: 1px solid black;">
                <div class="card-container d-flex">
                    <div class="card-profile-picture d-flex justify-content-center">
                        <img src="${listingData.seller.avatar}" alt="${listingData.seller.name}'s Profile picture" style="max-width:100px; max-height:100px, border: 1px solid black; padding: 1px;">
                    </div>
                    <div class="d-block">
                        <div class="card-profile-name">
                            <h4>Seller: ${listingData.seller.name}</h4>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    `

return listing
}

export function renderListingTemplates(listingDataList, parent) {
    parent.append(...listingDataList.map(listingTemplate));
    
} 

export function renderListingTemplate(listingData, parent) {
    parent.append(listingTemplate(listingData));
    createBidHandler();
}