import React, { useState, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { auth, db } from './utils/firebase_app'

import { collection, getDocs, query, where } from 'firebase/firestore'

import Link from "./models/link";
import Tag from "./models/tag";

const TagDashboard = () => {
    const navigate = useNavigate()
    const [links, setLinks] = useState([])
    const linkCollectionRef = collection(db, 'links')
    const tagCollectionRef = collection(db, 'tags')

    useEffect(() => {
        const linkQuery = query(linkCollectionRef, where("userId", "==", "1"))
        const linkSnapshot = getDocs(linkQuery)
        linkSnapshot.then((docs) => {
            docs.forEach((doc) => {
                const tagQuery = query(
                    tagCollectionRef,
                    where("userId", "==", "1"),
                    where("linkId", "==", doc.id)
                )
                const tagSnapshot = getDocs(tagQuery)
                setLinks([...links, new Link(doc)])
            })
        })
    }, [])
    return (
        <div className="links">
            {links.map((link) => {
                console.log(link)
                console.log(link.tags)
                return (
                    <div className="link" key={link.id}>
                        <p>{link.shortName}</p>
                        {link.tags.map((Tag) => <Tag />)}
                    </div>
                )
            })}
        </div>
    )
}

export default TagDashboard
