const app = require('express')();
const PORT = 3001;

app.get("/bondCard", (req, res) => {
    const newCard = {};
    newCard.bondName = "UMBS 30YR Fixed";
    newCard.previousClose = "101.10";
    newCard.currentPrice = "101";
    newCard.nineThirtyPrice = "101.51";
    newCard.tenPrice = "100.85";
    newCard.tenThirtyPrice = "101";
    newCard.elevenPrice = "101.10";
    newCard.elevenThirtyPrice = "101.1";
    res.send(newCard);
});


app.listen(PORT, () => {
    console.log("server listening on port " + PORT)
})