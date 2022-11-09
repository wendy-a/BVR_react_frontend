export const beEndpoint = " https://cors-everywhere.herokuapp.com/http://mernserver-env.eba-wakaair3.us-west-2.elasticbeanstalk.com"
// export const beEndpoint = "http://localhost:8080"
export const analyzeData = (parameter) => {
    let result = {};
    let rent = Number.parseFloat(parameter.currentRent);
    let monthly_mortgage = compute_mortgage_monthly_payment(
        Number.parseFloat(parameter.homePrice) - Number.parseFloat(parameter.downPayment),
        Number.parseFloat(parameter.mortgageInterestRate) / 12,
        360);
    let investment = Number.parseFloat(parameter.downPayment);
    let homePrice = Number.parseFloat(parameter.homePrice);
    let interestRate = Number.parseFloat(parameter.mortgageInterestRate);
    let spy = Number.parseFloat(parameter.investmentReturnRate);
    let sellFee = Number.parseFloat(parameter.sellingCost);
    let insurance = Number.parseFloat(parameter.homeInsurance);
    let hoa = Number.parseFloat(parameter.condoHOAFee);
    let houseIncrease = Number.parseFloat(parameter.homeAppreciationRate);
    let rentIncrease = Number.parseFloat(parameter.rentAppreciationRate);

    let rentCost = 0;
    let rentGain = investment;
    let buyCost = 0;
    let buyGain = 0;
    for (let i = 1; i <= 10; i++) {
        investment = investment + investment * spy + (monthly_mortgage - rent) * 12;
        homePrice *= (1 + houseIncrease);
        let remainPrinciple = compute_remaining_principal_on_mortgage(
            monthly_mortgage, interestRate / 12, (30 - i) * 12);

        rentCost += rent * 12;
        rentGain = investment;
        buyCost += (monthly_mortgage * 12 + insurance + hoa + homePrice * Number.parseFloat(parameter.propertyTax));
        buyGain = homePrice * (1 - sellFee) - remainPrinciple;
        if (i === 1) {
            result.rentCost1 = roundToTwo(rentCost)
            result.rentProfit1 = roundToTwo(rentGain)
            result.buyCost1 = roundToTwo(buyCost)
            result.buyProfit1 = roundToTwo(buyGain)
        }
        if (i === 5) {
            result.rentCost5 = roundToTwo(rentCost)
            result.rentProfit5 = roundToTwo(rentGain)
            result.buyCost5 = roundToTwo(buyCost)
            result.buyProfit5 = roundToTwo(buyGain)
        }
        if (i === 10) {
            result.rentCost10 = roundToTwo(rentCost)
            result.rentProfit10 = roundToTwo(rentGain)
            result.buyCost10 = roundToTwo(buyCost)
            result.buyProfit10 = roundToTwo(buyGain)
        }
        hoa *= 1.02;
        rent *= ( 1 + rentIncrease);
        insurance *= 1.02;
    }
    result.mortgageMonthly = roundToTwo(monthly_mortgage);
    result.rentPerMonth = roundToTwo(Number.parseFloat(parameter.currentRent));
    result.buyHousePrice = roundToTwo(Number.parseFloat(parameter.homePrice));
    result.buyHouseDownPay = roundToTwo(Number.parseFloat(parameter.downPayment));
    return result;
}

function compute_mortgage_monthly_payment(p, r, n) {
    return p * r * (1 + r) ** n / ((1 + r) ** n - 1)
}

function compute_remaining_principal_on_mortgage(m, r, n) {
    return (m / r) * (1 - (1 / (1 + r) ** n))
}

function roundToTwo(num) {
    return +(Math.round(num + "e+2")  + "e-2");
}