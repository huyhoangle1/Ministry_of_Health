const bcrypt = require('bcrypt');
import db from '../models/index';
const saltRounds = 10;
const salt = bcrypt.genSaltSync(saltRounds);

let createNewUser =async (data) =>{
    console.log(data);
    return new Promise(async(resolve,reject) => {
        try {
            let hashPasswordFromBrypt = await hashUserPassword(data.password); 
            await db.User.create({
                email: data.email,
                firstName: data.firstName,
                password: hashPasswordFromBrypt,
                lastName: data.lastName,
                address: data.Address,
                gender: data.gender === '1' ? true : false,
                roleId: data.roleId,
            })

            resolve('Add user successfully')
        } catch (error) {
            reject(error);
        }
    });
}

let hashUserPassword = (password)=>{
    return new Promise(async(resolve, reject) => {
        try {
            const hash = await bcrypt.hashSync(password, salt);
            resolve(hash);
        } catch (error) {
            reject(error);
        }
    })
}

module.exports = {
    createNewUser: createNewUser,
}