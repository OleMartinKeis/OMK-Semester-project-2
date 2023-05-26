import { createListing } from "../api/listings/index.mjs";

/**
 * This function targets the form for creating a post with createPost()
 */
export async function setCreateListingListener() {

    const form = document.querySelector("form#createListing")

        if (form) 
        form.addEventListener("submit", (event) => {
            event.preventDefault();
            const form = event.target;
            const formData = new FormData(form);
            const listingData = Object.fromEntries(formData.entries());
            listingData.tags = listingData.tags.split(",").map((item) => item.trim());
            
        const severalImages = document.querySelectorAll('input[name="media"]');
        let mediaArray = [];

        severalImages.forEach((media) => {
            if (media.value !== "") {
                mediaArray.push(media.value);
            }
        })

        listingData.media = mediaArray;
        
        createListing(listingData);

        alert("Successfully created listing!")

    });
}