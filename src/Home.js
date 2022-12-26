import React, { useEffect } from 'react'
import { onAuthStateChanged } from "firebase/auth"
import { auth } from './utils/firebase_app'
import {useNavigate} from "react-router-dom";

const Home = () => {

    useEffect(()=>{
        onAuthStateChanged(auth, (user) => {
            if (user) {
                console.log("uid", user.uid)
            } else {
                console.log("user is logged out")
            }
        });

    }, [])
    const navigate = useNavigate()

    return (
        <section>
            <button onClick={(e) => {
                e.preventDefault()
                navigate('/signin')
            }}>Sign In</button>
            <button onClick={(e) => {
                e.preventDefault()
                navigate('/signout')
            }} value={"Sign Out"}>Sign Out</button>
        </section>
    )
}

export default Home
