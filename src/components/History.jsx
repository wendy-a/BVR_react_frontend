import React, {useState} from 'react';
import {beEndpoint} from '../constants';
import axios from 'axios';
import {Link} from 'react-router-dom';

const History = (props) => {
    // const navigate = useNavigate();
    const [history, setHistory] = useState([]);
    const [email, setEmail] = useState("");

    const onSubmitHandler = (e) => {
        e.preventDefault();
        console.log(e)
        console.log("email is " + email);
        axios.get(beEndpoint + "/api/BuyVsRent/user/" + email)
            .then(res => {
                console.log(res.data);
                setHistory(res.data);
            })
            .catch(err => console.log(err));
    }

    return (
        <div>
            <Link to="/">New Search</Link>
            <br/>
            <Link to="/learnMore">Learn More</Link>
            <br/>
            <form onSubmit={onSubmitHandler}>
                <p>
                    <label>Email</label><br/>
                    <input type="text"
                           value={email}
                           onChange={(e) => setEmail(e.target.value)}/>
                </p>
                <button>View</button>
            </form>

            {
                history ?
                    <>
                        <h1 style={{textAlign: "center"}}>Saved Search:</h1>

                        <hr/>
                        {
                            history.map((eachRecord) => {
                                let newlink = "/historyRecord/" + eachRecord._id
                                return (
                                    <div key={eachRecord._id}>
                                        <Link to = {newlink}>
                                            Rent: ${eachRecord.rentPerMonth}/Month vs Buy ${eachRecord.buyHousePrice} with down pay ${eachRecord.buyHouseDownPay}
                                        </Link>
                                        <br/>
                                    </div>
                                )
                            })
                        }
                    </> : " "
            }
        </div>
    )
}

export default History