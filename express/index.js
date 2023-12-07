require('dotenv').config();
require('./config/mongoose');

const express = require('express');
const app = express();
const cors = require('cors');
// const productRouterV3 = require('./productV3/routes');
const productRouterV5 = require('./productV5/routes');
const logger = require('morgan');

app.use(cors());
app.use(logger('dev'));
app.use(express.urlencoded({extended: true}));
app.use(express.json());
// app.use('/api/v3', productRouterV3);
app.use('/api/v5',productRouterV5);


app.listen(3001, () => console.log('Server: http://localhost:3001'))