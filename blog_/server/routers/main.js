const express = require('express');

const Router = express.Router();

Router.get('/index', (res,req)=>{
    res.render("index")
});

Router.get('/about', (res, req)=>{
    res.render("about")
});

Router.get('/contact', (res, req) =>{
    res.render("contact")
});

Router.get('/doctor', (res, req)=>{
    res.render("doctor")
});

Router.get('/testimonies', (res, req)=>{
    res.render("testimonies")
})

Router.get('/treatment', (res,req)=>{
    res.get
})

module.exports = Router
