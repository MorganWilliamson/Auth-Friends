import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { axiosWithAuth } from "../utils/axiosWithAuth";

export default function FriendCard() { 
    const [friend, setFriend] = useState({});
    const { id } = useParams();

    useEffect(() => {
        axiosWithAuth()
            .get(`/api/friends/${id}`)
            .then((res) => {
                setFriend(res.data)
            })
            .catch((err) => {
                console.log("FriendCard error: ", err)
            })
    }, []);

    return (
        <div className="friendCard">
            <h3>{friend.name}</h3>
            <p>Age: {friend.age}</p>
            <p>Email: {friend.email}</p>
        </div>
    );
};