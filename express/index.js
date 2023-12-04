require('./config/mongoose');
const express = require('express');
const cors = require('cors')
const app = express();
const productRouterV5 = require('./app/productV5/routes');
const logger = require('morgan');
const PORT = process.env.PORT || 5000;


app.use(logger('dev'));
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use('/api/v5', productRouterV5);
app.use(cors());

app.listen(5000, () => console.log('Server: http://localhost:5000'))