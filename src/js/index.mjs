import { setLoginFormListener } from "./handlers/login.mjs";
import { setRegisterFormListener } from "./handlers/register.mjs";

const path = location.pathname;

if(path === '/index.html') {
    setLoginFormListener();
} else if (path === '/profile/register') {
    setRegisterFormListener();
}


