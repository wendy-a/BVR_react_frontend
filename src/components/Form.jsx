import React, {useState} from 'react'
import axios from 'axios'
import {Link, useNavigate} from 'react-router-dom'
import {analyzeData, beEndpoint} from '../constants';

const Search = () => {

    const navigate = useNavigate();

    const [currentRent, setCurrentRent] = useState("1500")
    const [estimatedHomePrice, setEstimatedHomePrice] = useState("500000")
    const [downPayment, setDownPayment] = useState("100000")
    const [investmentReturnRate, setInvestmentReturnRate] = useState("0.08")
    const [rentAppreciationRate, setRentAppreciationRate] = useState("0.05")
    const [mortgageInterestRate, setMortgageInterestRate] = useState("0.045")
    const [mortgageTerm, setMortgageTerm] = useState("30")
    const [condoHOAFee, setCondoHOAFee] = useState("0")
    const [homeInsurance, setHomeInsurance] = useState("1200")
    const [propertyTax, setPropertyTax] = useState("0.01")
    const [sellingCost, setSellingCost] = useState("0.06")
    const [homeAppreciationRate, setHomeAppreciationRate] = useState("0.05")

    const createSearch = (e) => {
        e.preventDefault()

        const newSearch = {
            currentRent: currentRent,
            homePrice: estimatedHomePrice,
            downPayment: downPayment,
            investmentReturnRate: investmentReturnRate,
            rentAppreciationRate: rentAppreciationRate,
            mortgageInterestRate: mortgageInterestRate,
            mortgageTerm: mortgageTerm,
            condoHOAFee: condoHOAFee,
            homeInsurance: homeInsurance,
            propertyTax: propertyTax,
            sellingCost: sellingCost,
            homeAppreciationRate: homeAppreciationRate
        }
        console.log(newSearch);

        let result = analyzeData(newSearch);
        console.log(result);
console.log(beEndpoint + "/api/BuyVsRent/record/new");
        axios.post(beEndpoint + "/api/BuyVsRent/record/new", result)
            .then(res => {
                console.log(res.data);
                console.log("update SUCCESS");
                navigate("/record/" + res.data._id);
            })
            .catch(err => {
                console.log(err)
            });
    }

    return (
        <div>
            <Link to="/learnMore">Learn More</Link>
            <br/>
            <Link to="/history">History</Link>

            <h1 style={{textAlign: "center"}}>Buy vs Rent</h1>

            <form onSubmit={createSearch}>
                <hr/>
                <div style={{display: "flex"}}>
                    <div style={{flex: 2}}>
                        <label>Current Rent:
                            <input onChange={(e) => setCurrentRent(e.target.value)}
                                   value={currentRent}/>
                        </label>
                        <br/>
                    </div>
                    <div style={{flex: 2}}>
                        <label>Estimated Home Price:
                            <input type="number"
                                   onChange={(e) => setEstimatedHomePrice(e.target.value)}
                                   value={estimatedHomePrice}/>
                        </label>
                        <br/>
                        <br/>
                        <label>Down Payment:
                            <input type="number"
                                   onChange={(e) => setDownPayment(e.target.value)}
                                   value={downPayment}/>
                        </label>
                    </div>
                </div>
                <br/>

                <h2>Advanced Options</h2>
                <div style={{display: "flex"}}>
                    <div style={{flex: 2}}>
                        <label> Investment Rate of Return:
                            <input type="number"
                                   onChange={(e) => setInvestmentReturnRate(e.target.value)}
                                   value={investmentReturnRate}/>
                        </label>
                        <br/>
                        <label> Rent Increase Rate:
                            <input type="number"
                                   onChange={(e) => setRentAppreciationRate(e.target.value)}
                                   value={rentAppreciationRate}/>
                        </label>
                        <br/>
                    </div>
                    <div style={{flex: 2}}>
                        <label> Mortgage Interest Rate:
                            <input type="number"
                                   onChange={(e) => setMortgageInterestRate(e.target.value)}
                                   value={mortgageInterestRate}/>
                        </label>
                        <br/>
                        <label> Mortgage Term (years):
                            <input type="number"
                                   onChange={(e) => setMortgageTerm(e.target.value)}
                                   value={mortgageTerm}/>
                        </label>
                        <br/>
                        <label> Condo/HOA Fee:
                            <input type="number"
                                   onChange={(e) => setCondoHOAFee(e.target.value)}
                                   value={condoHOAFee}/>
                        </label>
                        <br/>
                        <label> Home Insurance:
                            <input type="number"
                                   onChange={(e) => setHomeInsurance(e.target.value)}
                                   value={homeInsurance}/>
                        </label>
                        <br/>
                        <label> Property Tax Rate:
                            <input type="number"
                                   onChange={(e) => setPropertyTax(e.target.value)}
                                   value={propertyTax}/>
                        </label>
                        <br/>
                        <label> Selling Cost:
                            <input type="number"
                                   onChange={(e) => setSellingCost(e.target.value)}
                                   value={sellingCost}/>
                        </label>
                        <br/>
                        <label> Home Appreciation Rate:
                            <input type="number"
                                   onChange={(e) => setHomeAppreciationRate(e.target.value)}
                                   value={homeAppreciationRate}/>
                        </label>
                        <br/>
                    </div>
                </div>
                <button>Submit</button>
            </form>
        </div>
    )
}

export default Search