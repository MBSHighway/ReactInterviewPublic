import React from "react";


const BondCard = ({ priceObj }) => {

    /**
     * @param {float} timePrice price and time
     * @param {float} currentPrice currentPrice
     * @returns {object} object containing absolute price difference between current and quote at time and direction.
     * {price: xxx, direction: "up"}
     */
    const createWindowObj = (timePrice, currentPrice) => {
        // Need to get change and direction here
    }


    return (
        <div>
            <PriceWindow price={} direction={} time="9:30" />
            <PriceWindow price={} direction={} time="10:00" />
            <PriceWindow price={} direction={} time="10:30" />
            <PriceWindow price={} direction={} time="11:00" />
            <PriceWindow price={} direction={} time="11:30" />
        </div>
    );
};

const PriceWindow = ({ price, time, direction }) => {
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
