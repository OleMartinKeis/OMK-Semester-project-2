import * as handlers from "./handlers/index.mjs"


const container = document.querySelector("#listings");
const path = location.pathname;

if(path === '/index.html' || path === "/") {
    handlers.setLoginFormListener();
} else if (path === '/profile/register' || path === "/profile/") {
    handlers.setRegisterFormListener();
} else if (path === '/listing/index.html' || path === "/listing/") {
    handlers.displayListings(container)
} else if (path === '/listing/create/index.html' || path === "listing/create/") {
    handlers.setCreateListingListener()
} else if (path === "/profile/edit/" || path === "/profile/edit/index.html") {
    
    handlers.setUpdateProfileListener();
    
}  else if (path === "/profile/userprofile/" || path === "/profile/userprofile/index.html") {
    handlers.readProfile(); 
}
