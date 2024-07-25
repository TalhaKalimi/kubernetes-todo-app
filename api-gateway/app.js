const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('API Gateway');
});

app.listen(3000, () => {
    console.log('API Gateway running on port 3000');
});
