import { signInWithEmailAndPassword} from "firebase/auth";
import signInResponse from "./signin_response";

const signInEmailPassword = async (auth, email, password) => {
    const result = signInResponse()
    await signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            result.userCredentials = userCredential
        })
        .catch((error) => {
            result.wasSignInError = true
            result.error.code = error.code
            result.error.message = error.message
        })
    return result
}

export default signInEmailPassword