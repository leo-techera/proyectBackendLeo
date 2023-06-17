const express = require('express');
const logger = require('morgan');
const cors = require('cors');
const app = express();


app.use(express.json());
app.use(logger("dev"));
app.use(cors());


const indexRouter = require('./routes/index');
const apiRouter = require('./routes/api');
const {connect} = require('./dataBase/db');

app.use('/' , indexRouter);
app.use('/api/v1' , apiRouter);
connect()

module.exports = app




