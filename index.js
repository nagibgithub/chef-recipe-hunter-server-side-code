const express = require('express');
const app = express();
const cors = require('cors')
const port = process.env.PORT || 3000;

const {chefs} = require('./data/chef.json');

app.use(cors());

app.get('/', (req, res) => {
    res.send('this is live local server');
});

app.get('/chefs', (req, res) => {
    res.send(chefs);
});

app.get('/chefs/:chefId', (req, res) => {
    const id = req.params.chefId;
    const chef = chefs.find(pd => pd._id == id);
    res.send(chef);
});

app.listen(port, () => {
    console.log(`Example app listening on port ${ port }`);
});