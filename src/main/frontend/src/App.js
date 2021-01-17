import './App.css';
import history from './history';
import Button from "./Components/Buttons";
import React from "react";
import Wrapper from "./Components/Wrapper";
import image from './theJarBar.png'
import Message from "./Components/Message/Message";


function App()  {
    return (
        <Wrapper>
            <Message message={""} />
            <div className="Home">
                <img src={image} alt="jars" width="200" height="auto"/>
                <div className="lander">
                    <Message message={""} />
                    <form>
                        <Button type ="button"
                                buttonStyle="btn--solid--solid"
                                buttonSize="btn-small" onClick={() => history.push("/login")}>Login</Button>
                        &nbsp;&nbsp;&nbsp;
                        <Button type ="button"
                                buttonStyle="btn--rank--solid"
                                buttonSize="btn-small" onClick={() =>  history.push("/signup")}>Sign Up</Button>
                    </form>
                </div>
            </div>
        </Wrapper>
    );
}

export default App;
