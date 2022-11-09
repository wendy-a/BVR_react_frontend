import React, {useEffect, useState} from 'react'
import {beEndpoint} from '../constants';
import {Link, useNavigate, useParams} from 'react-router-dom'
import axios from 'axios';

const Result = () => {
    const navigate = useNavigate();

    // grab the variable from the url :id :var :whatever
    const {id} = useParams();
    console.log(id);

    const [data, setData] = useState("")
    const [email, setEmail] = useState("");

    useEffect(() => {
        axios.get(beEndpoint + "/api/BuyVsRent/record/" + id)
            .then(res => {
                // always look at what the server is coming back as BEFORE you set the state var
                console.log(res.data);
                setData(res.data)
            })
            .catch(err => console.log(err))
    }, [id])

    const onSubmitHandler = (e) => {
        e.preventDefault();
        console.log(data)
        let copyData = data;
        copyData.email= email;
        axios.put(beEndpoint + "/api/BuyVsRent/record/update/" + id, copyData)
            .then(res => {
                console.log(res.data);
                console.log("update SUCCESS");
                navigate("/historyRecord/" + res.data._id);
            })
            .catch(err => {
                console.log(err)
            })
    }
    return (

        <div>
            {
                data ? (
                    <div>
                        <Link to="/">New Search</Link>
                        <br/>
                        <Link to="/learnMore">Learn More</Link>
                        <br/>
                        <Link to="/history">History</Link>
                        <br/>
                        <h1 style={{textAlign: "center"}}> Report: </h1>
                        <p>Right now, you have ${data.buyHouseDownPay} in your bank account.</p>
                        <p>You are paying ${data.rentPerMonth} monthly rent.</p>
                        <p>You have budget ${data.mortgageMonthly} for housing.</p>
                        <p>Should you keep renting or buy a house?</p>
                        <table>
                            <thead>
                            <tr>
                                <td rowSpan="1"></td>
                                <th colSpan="3">Rent</th>
                                <th colSpan="3">Buy</th>
                                <th colSpan="1">Summary</th>
                            </tr>
                            <tr>
                                <td></td>
                                <th>Rent Paid</th>
                                <th>Investment Worth</th>
                                <th>Net Worth</th>
                                <th>Mortgage Paid</th>
                                <th>Home worth</th>
                                <th>Net Worth</th>
                                <th>Buy Vs Rent</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td>Year 1</td>
                                <td>{data.rentCost1}</td>
                                <td>{data.rentProfit1}</td>
                                <td>{(data.rentProfit1 - data.rentCost1).toFixed(2)}</td>
                                <td>{data.buyCost1}</td>
                                <td>{data.buyProfit1}</td>
                                <td>{(data.buyProfit1 - data.buyCost1).toFixed(2)}</td>
                                <td>{((data.rentProfit1 - data.rentCost1) > (data.buyProfit1 - data.buyCost1)) ? "Rent" : "Buy"}</td>
                            </tr>
                            <tr>
                                <td>Year 5</td>
                                <td>{data.rentCost5}</td>
                                <td>{data.rentProfit5}</td>
                                <td>{(data.rentProfit5 - data.rentCost5).toFixed(2)}</td>
                                <td>{data.buyCost5}</td>
                                <td>{data.buyProfit5}</td>
                                <td>{(data.buyProfit5 - data.buyCost5).toFixed(2)}</td>
                                <td>{((data.rentProfit5 - data.rentCost5) > (data.buyProfit5 - data.buyCost5)) ? "Rent" : "Buy"}</td>
                            </tr>
                            <tr>
                                <td>Year 10</td>
                                <td>{data.rentCost10}</td>
                                <td>{data.rentProfit10}</td>
                                <td>{(data.rentProfit10 - data.rentCost10).toFixed(2)}</td>
                                <td>{data.buyCost10}</td>
                                <td>{data.buyProfit10}</td>
                                <td>{(data.buyProfit10 - data.buyCost10).toFixed(2)}</td>
                                <td>{((data.rentProfit10 - data.rentCost10) > (data.buyProfit10 - data.buyCost10)) ? "Rent" : "Buy"}</td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                ) : "loading..."
            }
            <h3>Want to save your result?</h3>
            <form onSubmit={onSubmitHandler}>
                <p>
                    <label>Email</label><br/>
                    <input type="text"
                           value={email}
                           onChange={(e) => setEmail(e.target.value)}/>
                </p>
                <button>Save</button>
            </form>
        </div>
    )
}

export default Result