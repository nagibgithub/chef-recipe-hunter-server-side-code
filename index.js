const express = require('express');
const app = express();
const cors = require('cors')
const port = process.env.PORT || 3000;

const chefData = require('./data/chef.json');

app.use(cors());

app.get('/', (req, res) => {
    res.send('this is live local server');
});

app.get('/chefs', (req, res) => {
    res.send(chefData);
});

app.listen(port, () => {
    console.log(`Example app listening on port ${ port }`);
});