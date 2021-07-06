import React, {useEffect, useState} from 'react';
import axios from "axios";
import history from "./history";
import Button from "./Components/Buttons";
import Wrapper from "./Components/Wrapper";
import Message from "./Components/Message";
import Title from "./Components/Title";
import OpenJar from "./Components/OpenJar";
import {get} from "lodash-es";
import Scrollbar from "react-scrollbars-custom";
import {useLocation} from "react-router";



const jarID = parseInt(localStorage.getItem("jarID"));
const jar = JSON.parse(localStorage.getItem("jar"));
const http = 'https://chrysenapi.com/api/';

function JarContents() {
    const [jarInfo, setJarInfo] = useState(jar);
    const [donation, setDonation] = useState('');
    const [withdrawal, setWithdrawal] = useState('');
    const [contributor, setContributor] = useState('Enter Username');
    const [rename, setRename] = useState('');
    const [transactions, setTransactions] = useState([]);
    const [shareError, setShareError] = useState(null);
    const [shareSuccess, setShareSuccess] = useState(null);
    const [renameSuccess, setRenameSuccess] = useState(null);
    const [donateSuccess, setDonateSuccess] = useState(null);
    const [donateError, setDonateError] = useState(null);
    const [withdrawSuccess, setWithdrawSuccess] = useState(null);
    const [withdrawError, setWithdrawalError] = useState(null);

    const username = localStorage.getItem('user').toLowerCase();
    const location = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location]);

    useEffect(() => {
        getTransactions().then((data) => {
            setTransactions(data);
        }).catch((err) => {
            console.log(err);
        });
    }, []);
    useEffect(() => {
        openJar().then((data) => {
            setJarInfo(data);
        }).catch((err) => {
            console.log(err);
        });
    }, []);

    const openJar = () => {
        return axios
            .get(http + '/jars/open/' + jarID)
            .then((response) => {
                console.log(response.data);
                return response.data;
            }).catch((err) => {
                console.log(err);
            });
    };



    const donate = (event) => {
        event.preventDefault();
        const username = localStorage.getItem('user').toLowerCase();
        return axios.put(http + '/jars/donate/' + username + "/" + jarID,  donation, {
            "headers": {
                "content-type": "application/json",
            },
        }
        ).then((response) => {
            const message = get(
                donateSuccess,
                'response.data.error_description',
                'Successfully donated!',
            );
            setDonateSuccess(message);
            jarInfo.amount = parseInt(jarInfo.amount) + parseInt(donation);
            localStorage.setItem('jar', JSON.stringify(jarInfo));
            window.location.reload();
            console.log(response);
        }).catch((err) => {
            setDonateError(err.response.data.message);
        });
    };

    const withdraw = (event) => {
        event.preventDefault();
        const username = localStorage.getItem('user').toLowerCase();
        return axios.put(http + 'jars/withdraw/' + username + "/" + jarID,  withdrawal, {
                "headers": {
                    "content-type": "application/json",
                },
            }
        ).then((response) => {
            const message = get(
                withdrawSuccess,
                'response.data.error_description',
                'Successfully withdrawn!',
            );
            setWithdrawSuccess(message);
            jarInfo.amount = parseInt(jarInfo.amount) - parseInt(withdrawal);
            localStorage.setItem('jar', JSON.stringify(jarInfo));
            window.location.reload();
            console.log(response);
        }).catch((err) => {
            setWithdrawalError(err.response.data.message);
        });
    };


    const getTransactions = () => {
        return axios
            .get(http + 'jars/transactions/' + jarID)
            .then((response) => {
                console.log(response.data);
                return response.data;
            }).catch((err) => {
                console.log(err);
            });
    };

    const shareJar = (event) => {
        event.preventDefault();
        return axios.post(http + 'jars/share/' + jarID, contributor.toLowerCase(), {
                "headers": {
                    "content-type": "application/json",
                },
            }
        ).then((response) => {
            console.log(response);
            const message = get(
                shareSuccess,
                'response.data.error_description',
                'Successfully shared!',
            );
            setShareSuccess(message);
        }).catch((shareError) => {
            setShareError(shareError.response.data.message);
        });
    };


    const renameJar = (event) => {
        event.preventDefault();
        return axios.put(http + 'jars/rename/' + jarID, rename, {
                "headers": {
                    "content-type": "application/json",
                },
            }
        ).then((response) => {
            const message = get(
                renameSuccess,
                'response.data.error_description',
                'Successfully renamed!',
            );
            setRenameSuccess(message);
            jarInfo.name = rename;
            localStorage.setItem('jar', JSON.stringify(jarInfo));
            window.location.reload();
            console.log(response);
        }).catch((err) => {
            console.log(err);
        });
    };

    const deleteJar = (event) => {
        event.preventDefault();
        const username = localStorage.getItem('user').toLowerCase();
        axios.delete(http + 'jars/' + username + '/' + jarID
        ).then((response) => {
            history.push("/dashboard");
            //localStorage.removeItem('jar');
            window.location.reload();
        }).catch((err) => {
            console.log(err);
        });
    };


    const getType = (transactionInfo) => {
        const {type} = transactionInfo;
        return `${type}`
    };

    const getTransactionsAmount = (transactionInfo) => {
        const {amount} = transactionInfo;
        return `${amount}`
    };

    const getUsername = (transactionInfo) => {
        const {username} = transactionInfo;
        return `${username}`
    };

    const getDate = (transactionInfo) => {
        const {date} = transactionInfo;
        return `${date}`
    };

    const getJarImage = () => {
        const num = parseInt(jarInfo.amount);
        if(num === 0) return "OpenJarEmpty";
        else if(num > 500) return "OpenJarFull";
        else if(num < 500) return "OpenJarHalf";
    };

    const handleChange = (setField) => (event) => {
        setField(event.target.value);
        setShareError(false);
    };


    return (
        <Wrapper>
            <div  style= {{position: 'absolute', left: 80}}>
            <Button type ="button"  buttonStyle="btn--play--solid" buttonSize="btn-small"
                    onClick={() =>  {
                        localStorage.removeItem('jar');
                        history.push("/dashboard");
                        window.location.reload();
                    }}>Back to Jars</Button>
            </div>
            &nbsp;&nbsp;&nbsp; {jarInfo.creator === username && <Button type ="button"  buttonStyle="btn--danger--solid" buttonSize="btn-small" onClick={deleteJar}>Delete</Button>}

            <Title main = {jarInfo.name + ' Jar'}/>
            <OpenJar
                Class = {getJarImage()}
                Name = {jarInfo.name}
                Amount = {jarInfo.amount}
            />
            <Scrollbar style={{ width: 300, height: 200, position: 'relative', top:50}} >
                <h2>{"Transactions"}</h2>
                {transactions.map((transactionInfo, id) => (
                    <div key={id}>
                        <h4>{getType(transactionInfo) +  "  $" + getTransactionsAmount(transactionInfo) + "  " +  getUsername(transactionInfo) + " " + getDate(transactionInfo)}</h4>
                    </div>
                ))}
            </Scrollbar>
            <Message message={""} />
            {jarInfo.creator === username &&
            <div>
                <input
                    value = {rename}
                    onChange={handleChange(setRename)}
                    type= "text"
                />
                &nbsp;&nbsp;&nbsp;
                <Button type ="button"  buttonStyle="btn--team--solid" buttonSize="btn-small" onClick={renameJar}>
                    Rename
                </Button>
                {renameSuccess && <p style={{color: 'green'}}>{renameSuccess}</p>}
            </div>}
            <Message message={""} />
            <div>
                <input
                    value = {donation}
                    onChange={handleChange(setDonation)}
                    type= "number"
                />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <Button type ="button"  buttonStyle="btn--rank--solid" buttonSize="btn-small" onClick={donate}>
                    Donate
                </Button>
                {donateError && <p style={{color: 'red'}}>{donateError}</p>}
                {donateSuccess && <p style={{color: 'green'}}>{donateSuccess}</p>}
            </div>
            <Message message={""} />
            {jarInfo.creator === username &&
            <div>
                <input
                    value={withdrawal}
                    onChange={handleChange(setWithdrawal)}
                    type="number"
                />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <Button type="button" buttonStyle="btn--primary--solid" buttonSize="btn-small" onClick={withdraw}>
                    Withdraw
                </Button>
                {withdrawError && <p style={{color: 'red'}}>{withdrawError}</p>}
                {withdrawSuccess && <p style={{color: 'green'}}>{withdrawSuccess}</p>}
            </div>}
            <Message message={""} />
            <div>
                <input
                    value = {contributor}
                    onChange={handleChange(setContributor)}
                    type="text"/>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <Button type ="button"  buttonStyle="btn--warning--solid" buttonSize="btn-small" onClick={shareJar}>
                    Share
                </Button>
                    {shareError && <p style={{color: 'red'}}>{shareError}</p>}
                    {shareSuccess && <p style={{color: 'green'}}>{shareSuccess}</p>}
            </div>


        </Wrapper>
    )
}

export default JarContents;