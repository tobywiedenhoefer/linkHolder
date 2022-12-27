import React, { useEffect } from 'react'
import { onAuthStateChanged } from "firebase/auth"
import { auth } from './utils/firebase_app'

import TagDashboard from "./TagDashboard";

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
    if (!auth.currentUser) {
        return <TagDashboard />
    }
    return (
        <TagDashboard />
    )
}

export default Home
