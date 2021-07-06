import React, {useEffect, useState} from 'react';
import axios from "axios";
import history from "./history";
import Jar from "./Components/Jar";
import Button from "./Components/Buttons";
import Wrapper from "./Components/Wrapper";
import Message from "./Components/Message";
import Title from "./Components/Title";

const http = 'https://chrysenapi.com/api/';

const getUsersJars = () => {
    const username = window.localStorage.getItem('user').toLowerCase();
    return axios
        .get(http + 'jars/' + username)
        .then((jars) => {
            console.log(jars.data);
            return jars.data;
        }).catch((err) => {
            console.log(err);
        });
};

const createJar = (event) => {
    event.preventDefault();
    const username = window.localStorage.getItem('user').toLowerCase();
    return axios
        .post(http + 'jars/create/' + username,
            'untitled', {
                "headers": {
                    "content-type": "application/json",
                },
            }
        )
        .then((response) => {
            window.location.reload();
            console.log(response);
        }).catch((err) => {
            console.log(err);
        });
};

const logOut = (event) => {
    event.preventDefault();
    const username = window.localStorage.getItem('user').toLowerCase();
    axios.delete(http + 'logins/' + username
    ).then((response) => {
        console.log(response);
        history.push("/login");
    }).catch((err) => {
        console.log(err);
    });
};

function Dashboard() {
    const [jarInfos, setJarInfos] = useState([]);
    const [order, setOrder] = useState("");

    useEffect(() => {
        getUsersJars().then((jarData) => {
            const sortedData = jarData.sort(function (a,b) {
                return getJarName(a).localeCompare(getJarName(b))})
            setJarInfos(sortedData);
        }).catch((err) => {
            console.log(err);
        });
    }, []);

    const getJarID = (jarInfo) => {
        const {id} = jarInfo;
        return `${id}`
    };

    const getJarName = (jarInfo) => {
        const {name} = jarInfo;
        return `${name}`
    };

    const getJarAmount = (jarInfo) => {
        const {amount} = jarInfo;
        return `${amount}`
    };

    const getJarImage = (jarInfo) => {
        const amount = getJarAmount(jarInfo);
        const num = parseInt(amount);
        if(num === 0) return "jarEmpty";
        else if(num > 500) return "jarFull";
        else if(num < 500) return "jarHalf";
    };



    return (
        <Wrapper>
            <Title main = {"Money Jars"}/>
            <Message message={""} />
            {jarInfos.map((jarInfo, id) => (
                <div key={id} style={{position: 'relative', left: 50}}>
                    <Jar
                        Class = {getJarImage(jarInfo)}
                        Name = {getJarName(jarInfo)}
                        Amount = {getJarAmount(jarInfo)}
                        onClick={() => {
                            //const jar =  JSON.stringify(jarInfo);
                            localStorage.setItem('jarID', getJarID(jarInfo));
                            localStorage.setItem('jar', JSON.stringify(jarInfo));
                            history.push("/openJar");
                            window.location.reload();
                        }}
                    />
                </div>
            ))}


            <Message message={""} />
            <Button type ="button"  buttonStyle="btn--rank--solid" buttonSize="btn-small" onClick={createJar}>Create Jar</Button>
            <Button type ="button"  buttonStyle="btn--solid--solid" buttonSize="btn-small" onClick={logOut}>Log Out</Button>
            <Message message={""} />
            <Message message={"*Remember to log out before exiting app*"} />
        </Wrapper>
    )
}
export default Dashboard;
