import { register } from "../api/auth/register.mjs";


/**
 * This targets the form for registering a profile with createProfile()
 */

export function setRegisterFormListener() {
    const form = document.querySelector("#registerForm")
    
    if (form) {
        form.addEventListener("submit", (event) => {
            event.preventDefault();
            const form = event.target;
            const formData = new FormData(form);
            const profile = Object.fromEntries(formData.entries());

            register(profile)

            alert("You successfully registered an account!");
        });
    }

}
