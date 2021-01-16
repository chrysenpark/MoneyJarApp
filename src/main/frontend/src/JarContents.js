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
import Jar from "./Components/Jar";
import {useLocation} from "react-router";



const jarInfo = JSON.parse(localStorage.getItem('jar'));
const username = localStorage.getItem('user');

function JarContents() {
    const [donation, setDonation] = useState('');
    const [withdrawal, setWithdrawal] = useState('');
    const [contributor, setContributor] = useState('Enter Username');
    const [rename, setRename] = useState('');
    const [transactions, setTransactions] = useState([]);
    const [shareError, setShareError] = useState(null);
    const [shareSuccess, setShareSuccess] = useState(null);
    const [renameSuccess, setRenameSuccess] = useState(null);
    const [donateSuccess, setDonateSuccess] = useState(null);
    const [withdrawSuccess, setWithdrawSuccess] = useState(null);

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

    const donate = (event) => {
        event.preventDefault();
        const username = window.localStorage.getItem('user');
        return axios.put('http://moneyjar-env.eba-spmiem8y.us-east-2.elasticbeanstalk.com/api/jars/donate/' + username + "/" + jarInfo.id,  donation, {
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
            console.log(err);
        });
    };

    const withdraw = (event) => {
        event.preventDefault();
        const username = window.localStorage.getItem('user');
        return axios.put('http://moneyjar-env.eba-spmiem8y.us-east-2.elasticbeanstalk.com/api/jars/withdraw/' + username + "/" + jarInfo.id,  withdrawal, {
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
            console.log(err);
        });
    };


    const getTransactions = () => {
        return axios
            .get('http://moneyjar-env.eba-spmiem8y.us-east-2.elasticbeanstalk.com/api/jars/transactions/' + jarInfo.id)
            .then((response) => {
                console.log(response.data);
                return response.data;
            }).catch((err) => {
                console.log(err);
            });
    };

    const shareJar = (event) => {
        event.preventDefault();
        return axios.post('http://moneyjar-env.eba-spmiem8y.us-east-2.elasticbeanstalk.com/api/jars/share/' + jarInfo.id, contributor, {
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
        return axios.put('http://moneyjar-env.eba-spmiem8y.us-east-2.elasticbeanstalk.com/api/jars/rename/' + jarInfo.id, rename, {
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
        axios.delete('http://moneyjar-env.eba-spmiem8y.us-east-2.elasticbeanstalk.com/api/jars/' + username + '/' + jarInfo.id
        ).then((response) => {
            history.push("/dashboard");
            localStorage.removeItem('jar');
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
            <Scrollbar style={{ width: 300, height: 200, position: 'relative', top:50}} trackYVisible>
                <h2>{"Transactions"}</h2>
                {transactions.map((transactionInfo, id) => (
                    <div key={id}>
                        <h4>{getType(transactionInfo) +  "    " + "$" + getTransactionsAmount(transactionInfo) + "  " +  getUsername(transactionInfo) + " " + getDate(transactionInfo)}</h4>
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