import React, {useEffect, useState} from 'react';
import axios from "axios";
import {get} from "lodash-es";
import Wrapper from "./Components/Wrapper";
import Title from "./Components/Title";
import Button from "./Components/Buttons";
import history from "./history";
import {useLocation} from "react-router";
import image from "./SaveUpPage.png";

const http = 'https://chrysenapi.com/api/';

const Signup = () => {
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [successMessage, setSuccessMessage] = useState(null);
    const [signupError, setSignupError] = useState(null);
    const location = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location]);

    const handleChange = (setField) => (event) => {
        setField(event.target.value);
        setSignupError(false);
    };

    const signUp = (event) => {
        event.preventDefault();
        axios.post(http + 'users', {
            email: email,
            username: username,
            password: password,
        }).then((response) => {
            console.log(response);
            const message = get(
                successMessage,
                'response.data.error_description',
                'Successfully signed up!',
           ) ;
            setSuccessMessage(message);
        }).catch((signupError) => {
            setSignupError(signupError.response.data.message);
        });
    };

    return (
        <Wrapper>
            <div  style= {{position: 'relative', left: 100}}>
                <Button buttonStyle={"btn--rank--solid"} onClick={() =>  {history.push("/")}}>Home</Button>
            </div>
            <Title main = {"Sign Up"}/>
            <form onSubmit={signUp} >
                <label htmlFor="email">
                    email
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <input
                        value={email}
                        onChange={handleChange(setEmail)}
                        name="email"
                        type="email"
                    />
                </label>
                <br />
                <br />
                <label htmlFor="username">
                    username
                    &nbsp;&nbsp;
                    <input
                        value={username}
                        onChange={handleChange(setUsername)}
                        name="username"
                        type="username"
                    />
                </label>
                <br />
                <br />
                <label htmlFor="password">
                    password
                    &nbsp;&nbsp;
                    <input
                        value={password}
                        onChange={handleChange(setPassword)}
                        name="password"
                        type="password"
                    />
                </label>
                <br/>
                <br/>
                <input type="submit" value="Submit" />
                {signupError && <p style={{color: 'red'}}>{signupError}</p>}
                {successMessage && <p style={{color: 'green'}}>{successMessage}</p>}
            </form>
            <img src={image} alt="jars" style = {{position: 'relative'}} width="auto" height="auto"/>
        </Wrapper>
    );
};

export default Signup;
