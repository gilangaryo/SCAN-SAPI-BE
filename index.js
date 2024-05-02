const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 4000;

app.use(cors());
app.get('/', (req, res) => {
    console.log("haii!");
    res.send('halo bang!');
});

const api_key_value = '54321s';



app.post('/', (req, res) => {
    res.send(req.body);
    // const api_key = req.body.api_key;
    // if (api_key === api_key_value) {
    //     res.send(req.body);

    // } else {
    //     res.status(403).send('Wrong API Key');
    // }
});

app.listen(PORT, () => {
    console.log('Example app listening on port', PORT);
});

