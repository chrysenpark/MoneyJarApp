import React, {useEffect, useState} from 'react';
import axios from "axios";
import history from "./history";
import Wrapper from "./Components/Wrapper";
import Title from "./Components/Title";
import {useLocation} from "react-router";
import Button from "./Components/Buttons";
import image from "./SaveUpPage.png";

const http = 'https://chrysenapi.com/api/';

const Login = ({onLoginSuccess}) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [loginError, setLoginError] = useState(null);
    const location = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location]);

    const handleChange = (setField) => (event) => {
        setField(event.target.value);
        setLoginError(false);
    };


    const logIn = (event) => {
        event.preventDefault();
        axios.post(http + 'login/', {
            username: username,
            password: password,
        }).then((response) => {
            console.log(response);
            localStorage.setItem('user', username);
            history.push("/dashboard");
        }).catch((loginError) => {
            setLoginError(loginError.response.data.message);
        });
    };

    return (
        <Wrapper>
            <div  style= {{position: 'relative', left: 100}}>
                <Button buttonStyle="btn--primary--solid" onClick={() =>  {history.push("/")}}>Home</Button>
            </div>
            <Title main = {"Log In"}/>
            <form onSubmit={logIn}>
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
                <br/>
                <br/>
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
                {loginError && <p style={{color: 'red'}}>{loginError}</p>}
            </form>
            <img src={image} alt="jars" style= {{position: 'relative'}} width="auto" height="auto"/>

        </Wrapper>
    );
};

export default Login;





