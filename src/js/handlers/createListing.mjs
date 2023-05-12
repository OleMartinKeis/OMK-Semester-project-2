import { createListing } from "../api/listings/index.mjs";

/**
 * This function targets the form for creating a post with createPost()
 */
export function setCreateListingListener() {

    const form = document.querySelector("form#createListing")

        form.addEventListener("submit", (event) => {
            event.preventDefault();
            const form = event.target;
            const formData = new FormData(form);
            const post = Object.fromEntries(formData.entries());
            
        createListing(post);

        alert("Listing successfully created");

    });
}