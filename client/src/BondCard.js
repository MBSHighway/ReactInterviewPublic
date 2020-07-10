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
            // immediately called anonymous function to determine direction.
            // i used this as it makes it slightly more modular, e.g. if you
            // wanted more states than 'up' or 'down', like 'none' or 
            // 'extremelyUp/Down' etc.
            direction: (() => {
                if (diff > 0) return 'up';
                else if (diff < 0) return 'down';
                else return 'none';
            })()
        };
    }

    const priceDiffs = {};

    Object.keys(priceObj).forEach(key => { // for each key in `priceObj`
        if (!["bondName", "currentPrice"].includes(key)) { // ignore the keys `bondName` and `currentPrice`
            priceDiffs[key] = createWindowObj( // set key in priceDiffs to windowObject for each key
                parseInt(priceObj[key]), // parseInt for type safety
                parseInt(priceObj['currentPrice'])
            );
        }
    });

    // something I realized a few hours after the interview,
    // a similar algorithm as above can be used to map each key in `priceDiffs`
    // to avoid rewriting a new `<PriceWindow />` for each time. as discussed,
    // this ends up being a tradeoff between readability vs. not repeating code
    return (
        <div>
            <PriceWindow
                price={priceDiffs.nineThirtyPrice?.price}
                direction={priceDiffs.nineThirtyPrice?.direction}
                time="9:30"
            />
            <PriceWindow
                price={priceDiffs.tenPrice?.price}
                direction={priceDiffs.tenPrice?.direction}
                time="10:00"
            />
            <PriceWindow
                price={priceDiffs.tenThirtyPrice?.price}
                direction={priceDiffs.tenThirtyPrice?.direction}
                time="10:30"
            />
            <PriceWindow
                price={priceDiffs.elevenPrice?.price}
                direction={priceDiffs.elevenPrice?.direction}
                time="11:00"
            />
            <PriceWindow
                price={priceDiffs.elevenThirtyPrice?.price}
                direction={priceDiffs.ThirtyPrice?.direction}
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
