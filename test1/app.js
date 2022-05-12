const express = require('express');
const chalk = require('chalk');
const debug = require('debug')('app');
const morgan = require('morgan');
const path = require('path');


const app = express();
const productsRouter = require("./src/views/router/productsRouter");
const PORT = process.env.PORT;

app.use(morgan('combined'));
//app.use(express.static(path.join(__dirname,"/public/")));
app.set("views", "./src/views");
app.set("view engine", "ejs");



app.use("/products", productsRouter);

app.get("/", (req,res) => {
    res.render('index',{username: 'Inwza_007', customer: ['man-city', 'liverpool','barcelona']});
})

app.listen(PORT, ()=>{
    debug("lisenting on port" + chalk.green(PORT));
})