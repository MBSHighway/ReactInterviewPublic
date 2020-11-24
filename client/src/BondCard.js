import React from "react";


const BondCard = ({ priceObj = {} }) => {

    /**
     * @function
     * @param {float} timePrice price at given time
     * @param {float} currentPrice currentPrice
     * @returns {{price: 4, direction: "up"}} object containing absolute price difference between current and quote at time and direction.
     */
    const createWindowObj = (timePrice, currentPrice) => {
        // Need to get change and direction here
        
        // return {price: x, direction: ""}
    }

    // const nineThirty = createWindowObj(foo, bar)
    return (
        <div>
            <PriceWindow priceDiff={} direction={} time="9:30" />
            <PriceWindow priceDiff={} direction={} time="10:00" />
            <PriceWindow priceDiff={} direction={} time="10:30" />
            <PriceWindow priceDiff={} direction={} time="11:00" />
            <PriceWindow priceDiff={} direction={} time="11:30" />
        </div>
    );
};

/** 
* @component
* @param {int} price Price difference between now and the given time price.
* @param {string} time Time window.
* @param {string} direction "up" or "down".
*/
const PriceWindow = ({ priceDiff = 3, time = "", direction = "up" }) => {
    return (
        <div style={{ padding: "25px", border: "1px solid grey", width: "200px" }} >
            <span style={{ padding: "10px", color: direction == "up" ? "green" : "red" }} >
                Time: {time}
            </span>
            <span>
                Price: {price}
            </span>
        </div>
    );
};

export default BondCard;
