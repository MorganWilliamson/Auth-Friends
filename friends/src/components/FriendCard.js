import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { axiosWithAuth } from "../utils/axiosWithAuth";

export default function FriendCard({ friend }) { 
    const [friendValue, setFriendValue] = useState({});
    const { id } = useParams();

    useEffect(() => {
        axiosWithAuth()
            .get(`/api/friends/${id}`)
            .then((req) => {
                setFriendValue(req.data)
            })
            .catch((err) => {
                console.log("FriendCard error: ", err)
            })
    }, [id]);

    return (
        <div className="friendCard">
            <Link to={`/friends/${friend.id}`}>
                <h3>{friend.name}</h3>
            </Link>
            <p>Age: {friend.age}</p>
            <p>Email: {friend.email}</p>
        </div>
    );
};