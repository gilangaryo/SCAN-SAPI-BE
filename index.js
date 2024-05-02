const express = require('express');

const app = express();
const PORT = 4000;

app.use(express.json());
app.get('/', (req, res) => {
    console.log("haii!");
    res.send('halo bang!');
});

app.post('/', (req, res) => {
    console.log("halo bang masuk ya bang!");
    const responseBody = req.body;
    console.log(responseBody);
    res.send(responseBody);
});


app.listen(PORT, () => {
    console.log('Example app listening on port', PORT);
});

