require('dotenv').config();

const express = require('express');
const app = express();
const mongoose = require('mongoose')
const cors = require('cors');
const productRouterV5 = require('./productV5/routes');
const logger = require('morgan');

mongoose.connect(process.env.URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error'));
db.once('open', () => console.log('berhasil terhubung'));

app.use(logger('dev'));
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(productRouterV5);
app.use(cors());

app.listen(3001, () => console.log('Server: http://localhost:3001'))