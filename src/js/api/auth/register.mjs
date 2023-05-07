import { API_AUCT_URL } from "../constants.mjs"

const path ="/auth/register";
const method ="POST";

/**This will send a package to the server and check if you credentials isnt taken or invalid and create a user for you
 *  If correct this will give you a accessToken (JWT) and let you for example; create a post and edit your profile!
 * @param {object} profile  list of necessities to access profile
 * @returns 
 */


export async function register(profile) {
    const registerURL = API_AUCT_URL + path;
    
    try {
        const response = await fetch(registerURL, {
        
        headers: {
            "Content-Type": "application/json"
        },
        method,
        body: JSON.stringify(profile)
        
    });
    const result = await response.json();
    alert("You are now registered")
    return result
    }

    catch{
        console.log(error)
    }
register(profile)


}  