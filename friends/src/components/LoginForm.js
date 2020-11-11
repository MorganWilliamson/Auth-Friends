import React from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";

class LoginForm extends React.Component {
    state = {
        //Remember to come back and set credential state to an empty string.
        credentials: {
            username: 'Lambda School',
            password: 'i<3Lambd4',
        }
    };

    handleChange = (e) => {
        this.setState({
            credentials: {
                ...this.state.credentials,
                [e.target.name]: e.target.value,
            }
        });
    };

    login = (e) => {
        e.preventDefault();
        // Sanity checking.
        console.log(this.state.credentials)
        axiosWithAuth()
            .post("/api/login", this.state.credentials)
            .then((req) => {
                localStorage.setItem("token", req.data.payload)
                this.props.history.push("/friends")
                // this.props.setLoggedIn(true)
            })
            .catch((err) => {
                console.log(err)
                alert(err.message)
            })
    };

    render() {
        return (
            <div className="formDiv">
                <form onSubmit={this.login}>
                    <input 
                        type="text"
                        name="username"
                        value={this.state.credentials.username}
                        onChange={this.handleChange}           
                    />
                    <input 
                        type="password"
                        name="password"
                        value={this.state.credentials.password}
                        onChange={this.handleChange}
                    />
                    <button>Login</button>
                </form>
            </div>
        )
    }
}

export default LoginForm;