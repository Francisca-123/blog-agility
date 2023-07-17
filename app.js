if(process.env.NODE_ENV !=="production"){
    require('dotenv').config()
}

const express = require('express');
const connectDB = require('./blog_/server/configs/dbConfig');
const {not_found, errorHandler} = require("./blog_/server/middlewares/errorHandling")
const app = express();

connectDB();
app.set("view engine", "ejs")
app.use(expresslayout)
app.set('layout', './layouts/main')

app.use(express.static('public'))
app.use(express.urlencoded({extended:false}));
app.use(express.json());

app.use('/', mainRoute)

const port = process.env.PORT || 3000

app.listen(port,()=>{
    console.log(`server running at port: ${port}`);
})