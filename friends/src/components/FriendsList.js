import React from "react";
import { Link } from "react-router-dom";
import { axiosWithAuth } from "../utils/axiosWithAuth";
import { AddFriend } from "../components/AddFriend";
import FriendCard from "./FriendCard";

class FriendsList extends React.Component {
    state = {
        friends: []
    };

    componentDidMount() {
        this.getData();
    };

    getData = () => {
        axiosWithAuth()
            .get("/api/friends")
            .then((res) => {
                console.log(res)
                this.setState({
                    friends: res.data
                })
            })
            .catch((err) => {
                console.log(err)
            });
    };

    handleSubmit = (friends) => (
        this.setState({friends})
    );

    //Delete friend function goes here?
      
    render(){
        return(
        <div className="friendsList">
            <p>FriendsList rendering.</p>
            {this.state.friends.map(friend => (
                <div>
                    <Link to={`/friends/${friend.id}`}>{friend.name}</Link>
                    <p>{friend.age}</p>
                    <p>{friend.email}</p>
                </div>
            ))}
            <AddFriend handleSubmit={this.handleSubmit} />
        </div>)
    }
};

export default FriendsList;