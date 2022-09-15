const { request } = require("express")

let getHomePage =(res,req) =>{
    return req.render('homePage.ejs')
}


module.exports ={
    getHomePage: getHomePage,
}