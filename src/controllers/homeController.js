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
let getCrud = (req, res) => {
    return res.render('crud.ejs')
  }



module.exports ={
    getHomePage: getHomePage,
    getCrud: getCrud,
}