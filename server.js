const express = require('express');


const app = express();
const port = process.env.PORT || 8080;

app.get('/', (req, res) => {
    let ipaddress = '',
        language = '',
        software = '';

    let userAgent;
    
    ipaddress = req.headers['x-forwared-for'];
    language = req.headers['accept-language'].split(';')[0].split(',')[0];

    userAgent = req.headers['user-agent'];
    software = userAgent.substring(userAgent.indexOf('(') + 1, userAgent.indexOf(')'));

    res.json({
        ipaddress,
        language,
        software
    });
});

app.listen(port, () => {
    console.log(`Server is listening on port ${port} ...`);
});