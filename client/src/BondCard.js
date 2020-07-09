import React from "react";

const BondCard = ({ priceObj }) => {

    /**
     * @function
     * @param {float} timePrice price at given time
     * @param {float} currentPrice currentPrice
     * @returns {object} object containing absolute price difference between current and quote at time and direction.
     * {price: 4, direction: "up"}
     */
    const createWindowObj = (timePrice, currentPrice) => {
        const diff = currentPrice - timePrice;
        return {
            price: Math.abs(diff),
            direction: (() => {
                if (diff > 0) return 'up';
                else if (diff < 0) return 'down';
                else return 'none';
            })()
        };
    }

    const priceDiffs = {};

    Object.keys().forEach(key => {
        if (!["bondName", "currentPrice"].includes(key)) {
            priceDiffs[key] = createWindowObj(priceObj[key], priceObj['currentPrice']);
        }
    });

    return (
        <div>
            <PriceWindow
                price={priceDiffs.nineThirtyPrice.price}
                direction={priceDiffs.nineThirtyPrice.direction}
                time="9:30"
            />
            <PriceWindow
                price={priceDiffs.tenPrice.price}
                direction={priceDiffs.tenPrice.direction}
                time="10:00"
            />
            <PriceWindow
                price={priceDiffs.tenThirtyPrice.price}
                direction={priceDiffs.tenThirtyPrice.direction}
                time="10:30"
            />
            <PriceWindow
                price={priceDiffs.elevenPrice.price}
                direction={priceDiffs.elevenPrice.direction}
                time="11:00"
            />
            <PriceWindow
                price={priceDiffs.elevenThirtyPrice.price}
                direction={priceDiffs.ThirtyPrice.direction}
                time="11:30"
            />
        </div>
    );
};

/** 
* @component
* @param {int} price Price difference between now and the given time price.
* @param {string} time Time window.
* @param {string} direction "up" or "down".
*/
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
