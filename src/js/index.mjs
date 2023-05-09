import * as handlers from "./handlers/index.mjs"


const container = document.querySelector("#listings");
const path = location.pathname;

if(path === '/index.html') {
    handlers.setLoginFormListener();
} else if (path === '/profile/register') {
    handlers.setRegisterFormListener();
} else if (path === '/listing/index.html') {
    handlers.displayListings(container)
}

