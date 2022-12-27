import React from "react";
import { collection, getDocs, query, where } from "firebase/firestore";

import { db } from "../utils/firebase_app";
import Tag from "./tag";


class Link {
    constructor(doc) {
        this.id = doc.id
        const data = doc.data()
        this.userId = data.userId
        this.href = data.href
        this.linkURL = data.linkURL
        this.shortName = data.shortName
        this.tags = []
        this.populateTags()
    }
    populateTags() {
        const tagCollectionRef = collection(db, 'tags')
        const q = query(
            tagCollectionRef,
            where("userId", "==", "1"),
            where("linkId", "==", this.id)
        )
        const snapshot = getDocs(q)
        snapshot.then((docs) => {
            docs.forEach((doc) => {
                this.tags = [...this.tags, <Tag doc={doc} />]
            })
        })
    }
}

export default Link