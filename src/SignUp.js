import React, {useState} from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import signUpWithEmail from "./utils/firebase_sign_up_user/sign_up_with_email";
import { auth } from './utils/firebase_app'


const SignUp = () => {
    const navigate = useNavigate();

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const onSubmit = async (e) => {
        e.preventDefault()
        const result = await signUpWithEmail(auth, email, password)
        if (result.wasSignUpError) {
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
                    <h1>Sign Up</h1>
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
                        <button type="submit" onClick={onSubmit} />
                    </form>
                    <p>Already have an account? <NavLink to="/signin">Sign In</NavLink></p>
                </div>
            </section>
        </main>
    )
}

export default SignUp