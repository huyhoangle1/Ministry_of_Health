const { request } = require("express")
import db from '../models/index'

let getHomePage = async(res, req) =>{
    try {
        let data = await db.User.findAll();
        return req.render('homePage.ejs',{
            data: JSON.stringify(data)
        })
    } catch (error) {
        console.log(error);
    }

}


module.exports ={
    getHomePage: getHomePage,
}