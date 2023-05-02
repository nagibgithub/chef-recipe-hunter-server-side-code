const express = require('express');
const app = express();
const cors = require('cors')
const port = process.env.PORT || 3000;

const navData = require('./data/text.json');

app.use(cors());

app.get('/', (req, res) => {
    res.send('this is live local server');
});

app.get('/nav', (req, res) => {
    res.send(navData)
})

app.listen(port, () => {
    console.log(`Example app listening on port ${ port }`);
});