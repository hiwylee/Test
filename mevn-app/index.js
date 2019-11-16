// index.js
const express = require('express');
const cors = require('cors');
const bodyParser  = require('body-parser');
const morgan = require('morgan');
const messages = require('./db/messages');

const app = express();

app.use(morgan('tiny'))
app.use(cors());
app.use(bodyParser.json());

app.get('/dummy', (req, res) => {
    res.json({
        message: 'Behold The MEVN Stack!'
    });
});

app.get('/', (req, res) => {
    messages.getAll().then((messages) => {
        res.json(messages);
    });
});

app.get('/messages',(req, res) => {
    messages.getAll().then((messages) => {    
        res.json(messages);
    });
});
const port = process.env.PORT || 8080;
app.listen(port, () => {
    console.log(`listening on ${port}`);
});