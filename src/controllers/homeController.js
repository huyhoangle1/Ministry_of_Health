import db from '../models/index';
import CRUDservices from '../services/CRUDservices';

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
let getCrud = (req, res) => {
    return res.render('crud.ejs')
  }

let postCrud = async(req, res) => {
    const message = await CRUDservices.createNewUser(req.body);
    console.log(message);

    return res.send('post crud from server')
}



module.exports ={
    getHomePage: getHomePage,
    getCrud: getCrud,
    postCrud: postCrud,
}