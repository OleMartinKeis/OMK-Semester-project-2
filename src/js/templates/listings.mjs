import { bidButton } from "../api/storage/bid.mjs";
import { load } from "../api/storage/index.mjs"
import { createBidHandler } from "../handlers/createBid.mjs";

export function listingTemplate(listingData) {

    let media = listingData.media[0];

    let mediaCarousel;

    if (media !== undefined) {
        mediaCarousel = media;
    } else {
        mediaCarousel = "";
    }

    let bids = listingData.bids;
    let count;
    let biddersName;


    if (bids[0] !== undefined) {
        count = bids[0].amount;
        biddersName = bids[0].bidderName
    } else {
        count = "Be the first to bid!";
        biddersName = "";
    }
 
    let listing = document.createElement("div");
    
    listing.innerHTML+= `
    <div id="listing-item-card" class="container-lg">
        <div id="carousel" class="carousel slide" data-bs-ride="carousel">
            <div class="ratio ratio-16x9 mt-3 carousel-inner">
                <div class="carousel-item active ratio ratio-16x9">
                    <img src="${mediaCarousel}" alt="${listingData.seller.name} didn't choose an image" class="img-fluid" style="object-fit: cover;"/>
                </div>
                <div class="extra-imgs">
                </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carousel" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carousel" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button>
        </div>
        <div class="listing-header">
            <h1>${listingData.title}</h1>
        </div>
        <div class="listing-description">
            <p>${listingData.description}</p>
        </div>
        <div class="auctioner-bidded-amount">
            <p>Current bidder:<strong>${biddersName}</strong></p>
            <p>Bidded: <strong>${count}</strong></p>
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
    createBidHandler();
    bidButton();
} 

export function renderListingTemplate(listingData, parent) {
    parent.append(listingTemplate(listingData));
    createBidHandler();
    bidButton();
    imageCarousel(listingData);
}

async function imageCarousel(listingData) {
    const carousel = document.querySelector(".extra-imgs")
        const images = listingData[0].media;
        images.forEach((image) => {
            carousel.innerHTML="";
            carousel.innerHTML += `<div class="carousel-item ratio ratio-16x9">
                                        <img src="${image}" class="img-fluid" style="object-fit: cover;"/>
                                    </div>`
        })
}