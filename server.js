const express = require('express');


const app = express();
const port = process.env.PORT || 8080;

app.get('/', (req, res) => {
    res.send('It works!');
});

app.listen(port, () => {
    console.log(`Server is listening on port ${port} ...`);
});