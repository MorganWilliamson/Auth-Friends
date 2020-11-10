import React from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";

class FriendsList extends React.Component {
    state = {
        friends: []
    };

    componentDidMount() {
        this.getData();
    };

    getData = () => {
        axiosWithAuth()
            .get("/friends", {
                headers: {
                    authorization: localStorage.getItem("token")
                }
            })
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
      
    render(){
        return(<div>
            <p>FriendsList rendering.</p>
        </div>)
    }
};

export default FriendsList;