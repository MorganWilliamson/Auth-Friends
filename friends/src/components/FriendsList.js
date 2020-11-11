import React from "react";
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
            {this.state.friends.map(friend => {
                return(
                    <FriendCard key={friend.id} friend={friend} />)
                })}
            <AddFriend onSubmit={this.handleSubmit} />
        </div>)
    }
};

export default FriendsList;