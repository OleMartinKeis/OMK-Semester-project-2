import { setLoginFormListener } from "./handlers/login.mjs";
import { setRegisterFormListener } from "./handlers/register.mjs";
import { createListing } from "./api/listings/create.mjs";
import { getListings } from "./api/listings/read.mjs";


const path = location.pathname;

if(path === '/index.html') {
    setLoginFormListener();
} else if (path === '/profile/register') {
    setRegisterFormListener();
} else if (path === '/listing/index.html') {
    getListings().then(console.log)
}

