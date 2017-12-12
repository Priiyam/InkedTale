const express = require('express');
const app = express();
const mongoose = require('mongoose');


mongoose.Promise = global.Promise;
app.get('*', (req, res) => {
    res.send('hello world');
});

app.listen(8080, () => {
    console.log('Listening on port 8080');
});