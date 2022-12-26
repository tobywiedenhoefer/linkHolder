import { createUserWithEmailAndPassword } from "firebase/auth"
import signUpResponse from "./sign_up_response";

const signUpWithEmail = async (auth, email, password) => {
    const result = signUpResponse()
    await createUserWithEmailAndPassword(auth, email, password)
        .then((userCredentials) => {result.userCredentials = userCredentials})
        .catch((error) => {
            result.error.code = error.code
            result.error.message = error.message
        })
    return result
}

export default signUpWithEmail