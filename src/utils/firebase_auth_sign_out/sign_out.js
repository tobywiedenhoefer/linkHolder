import { signOut as firebaseSignOut } from "firebase/auth"
import signOutResponse from "./signout_response";

const signOut = async (auth) => {
    const result = signOutResponse()
    await firebaseSignOut(auth).catch((error) => {
        result.wasSignOutError = true
        result.error.code = error.code
        result.error.message = error.message
    })
    return result
}

export default signOut