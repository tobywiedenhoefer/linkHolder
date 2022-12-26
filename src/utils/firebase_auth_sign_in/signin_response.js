const signInResponse = () => {
    return {
        wasSignInError: false,
        error: {
            code: -1,
            message: ""
        },
        userCredentials: ""
    }
}

export default signInResponse