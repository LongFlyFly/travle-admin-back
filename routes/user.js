const Router = require('@koa/router');
const router = new Router();
const jwt = require("jsonwebtoken")
const { userModel } = require('../database/index');

router.get('/', async (ctx) => {
    const users = await userModel.findAll();
    ctx.body = {
        code: 200,
        msg: "success",
        data: users
    }
})
  

router.post('/delete', async (ctx) => {
    const {userID} = ctx.request.body
    // console.log(userID)
    const deleteuser = await userModel.destroy({
        where: { 
            userID: userID
        }
    })
    console.log(deleteuser)
    ctx.body = {
        code: 200,
        msg: "success",
        data: deleteuser
    }
})

router.post('/update', async (ctx) => {
    const { userID, userName, userPassword, userImg, userPhone, userSign } = ctx.request.body
    console.log(userID, userName, userPassword, userImg, userPhone, userSign)
    const updateuser = await userModel.update({
        userName: userName,
        userPassword: userPassword,
        userImg: userImg,
        userSign: userSign,
        userPhone: userPhone
    },{
        where: { 
            userID: userID
        }}
    )
    ctx.body = {
        code: 200,
        msg: "success",
        data: {
            message: updateuser
        }
    }
})

router.post('/search', async (ctx) => {
    const { Op } = require("sequelize");
    const {userName} = ctx.request.body
    if(userName != ''){
        const searchuser = await userModel.findAll({
        where: {
            userName:{
                [Op.substring]: userName
            }
        },
      });
      ctx.body = {
        code: 200,
        msg: "success",
        data: searchuser
    }
    }
})

router.post('/regist', async (ctx) => {
    const { userName, userPassword ,userImg, userPhone, userSign} = ctx.request.body
    // console.log(userName, userPassword, userImg, userPhone, userSign)
    // await或者.then
    console.log( userName,userPassword)
    const jane = await userModel.create({ userName, userPassword, userImg, userPhone, userSign });
    ctx.body = {
        code: 200,
        msg: "success",
        data: {
            message: jane
        }
    }
})
module.exports = router;