import React, {useState} from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import signInEmailPassword from "./utils/firebase_auth_sign_in/sign_in_email"
import { auth } from './utils/firebase_app'

const SignIn = () => {
    const navigate = useNavigate()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const onSignIn = async (e) => {
        e.preventDefault()
        const result = await signInEmailPassword(auth, email, password)
        if (result.wasSignInError) {
            console.log(result.error.code, result.error.message)
            navigate("/error") // replace with error modal
        }
    }

    if (auth.currentUser) {
        navigate('/')
    }
    return (
        <main>
            <section>
                <div>
                    <h1>Sign In</h1>
                    <form>
                        <div>
                            <label htmlFor="email">Email</label>
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                                placeholder="Email Address"
                            />
                        </div>
                        <div>
                            <label htmlFor="password">Password</label>
                            <input
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                                placeholder="Password"
                            />
                        </div>
                        <button type="submit" onClick={onSignIn} />
                    </form>
                    <p>Don't have an account? <NavLink to="/signup">Sign Up</NavLink></p>
                </div>
            </section>
        </main>
    )
}

export default SignIn