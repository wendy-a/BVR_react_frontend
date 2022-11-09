import React, {useState, useEffect} from 'react'
import axios from 'axios';
import {Link, useNavigate} from 'react-router-dom'

const LearnMore = (props) => {
    const navigate = useNavigate();

    return (
        <div>
            <Link to="/">New Search</Link>
            <br/>
            <Link to="/history">History</Link>
            <hr/>
            <h4 style={{textAlign: "left", margin: "0 100px 0 100px"}}>Should you buy or rent? This is a question most of us will likely face in our lives, whether buying a
                house makes more financial sense than renting a home.</h4>
            <br/>
            <p style={{textAlign: "left", margin: "0 100px 0 100px"}}>For buying, the default value is based on the data in Washington State. If you're buying a house, besides
                the prepared down payment, you would have to pay
                monthly mortgage, home insurance, property tax and Condo/HOA fee. This makes up the Total Mortgage Paid.
                According to the past 30 years of Washington State Data, the home appreciation rate is around 5 percent
                in average. If you're selling your property, the selling cost is around 6 percent of your property, and is
                deducted from the home value. The Home Worth Value is the home price minus the remaining mortgage.
                The Net Worth is what you have(Home Worth) minus what you paid(mortgage paid).</p>
            <br/>
            <p style={{textAlign: "left", margin: "0 100px 0 100px"}}>For renting, you can enter your current rent, and the total rent is calculated with rent appreciation
                rate yearly.
                Assuming you're not buying a house, you can put the down payment in any kind of investment, such as
                stock and bond. The average investment return rate is
                8 percent. This is our total investment worth.
                The Net Worth is what you earned (investment worth) minus what you paid (rent paid).</p>
            <br/>
            <p style={{textAlign: "left", margin: "0 100px 0 100px"}}>
                From the tool, you'll see that the amount of time you plan on keeping the home has a major impact
                determining whether you should buy or rent.
                To get more personal, you can customize the advanced options to crunch more specific numbers and
                evaluate more
                specific scenarios. But keep in mind that a financial comparison is just one of many factors when
                deciding
                whether to rent or buy.</p>

            <hr/>

        </div>
    )
}

export default LearnMore