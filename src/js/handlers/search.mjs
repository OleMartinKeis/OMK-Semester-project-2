import { getListings } from "../api/listings/read.mjs";
import { renderListingTemplate } from "../templates/index.mjs";

export async function searchFeedListings() {
  try {
    const listings = await getListings();
    const searchInput = document.querySelector("#searchListingPage");
    const searchForm = document.querySelector("#searchForm");
    const container = document.querySelector("#listings");
    const resultContainer = document.querySelector("#searchInfo");

    searchForm.addEventListener("submit", (event) => {
      event.preventDefault();
      const filterListings = listings.filter((listing) => {
        const title = listing.title.toLowerCase();

        const searchValue = searchInput.value.toLowerCase();

        if (title.includes(searchValue)) {
          container.innerHTML = "";
          return true;
        }
      });

      if (searchInput.value) {
        resultContainer.classList.remove("d-none");
        resultContainer.classList.add("d-block");
        resultContainer.innerText = `We found ${filterListings.length} that matches '${searchInput.value}'`;
      } else {
        resultContainer.classList.add("d-none");
      }

      if (filterListings.length === 0) {
        container.innerHTML = `<div class="bg-secondary m-auto" style="max-width: 850px;"><p class="p-4 text-center text-white fw-semibold">No results, try to search for something else!</p></div>`;
      }

      renderListingTemplate(filterListings, container);
    });
  } catch (error) {
    const container = document.querySelector("#container");
    container.innerHTML = `<div class="bg-primary p-4 mt-5 text-center" style="max-width: 850px">
                <p class="text-white fw-semibold">There was an error. Please contact Ole Martin Keiseraas for </p>
              </div>`;
    console.log(error);
  }
}