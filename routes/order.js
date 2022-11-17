const Router = require('@koa/router');
const router = new Router();
const jwt = require("jsonwebtoken")
const { orderModel } = require('../database/index');

router.get('/', async (ctx) => {
    const orders = await orderModel.findAll();
    ctx.body = {
        code: 200,
        msg: "success",
        data: orders
    }
})


router.post('/delete', async (ctx) => {
    const { orderID } = ctx.request.body
    // console.log(userID)
    const deleteorder = await orderModel.destroy({
        where: {
            orderID: orderID
        }
    })
    console.log(deleteorder)
    ctx.body = {
        code: 200,
        msg: "success",
        data: deleteorder
    }
})

router.post('/update', async (ctx) => {
    const { orderID, goodID, userID, goodPrice, goodNum, orderTitle } = ctx.request.body
    const updateorder = await orderModel.update({
        goodID: goodID,
        userID: userID,
        goodNum: goodNum,
        goodPrice: goodPrice,
        orderTitle: orderTitle
    }, {
        where: {
            orderID: orderID
        }
    }
    )
    ctx.body = {
        code: 200,
        msg: "success",
        data: {
            message: updateorder
        }
    }
})

router.post('/search', async (ctx) => {
    const { Op } = require("sequelize");
    const { orderTitle } = ctx.request.body
    if (orderTitle != '') {
        const searchorder = await orderModel.findAll({
            where: {
                orderTitle: {
                    [Op.substring]: orderTitle
                }
            },
        });
        ctx.body = {
            code: 200,
            msg: "success",
            data: searchorder
        }
    }
})

router.post('/regist', async (ctx) => {
    const { goodID, userID, goodPrice, goodNum, orderTitle } = ctx.request.body
    //await或者.then
    // console.log( userName,userPassword)
    const jane = await orderModel.create({ goodID, userID, goodPrice, goodNum, orderTitle });
    ctx.body = {
        code: 200,
        msg: "success",
        data: {
            message: jane
        }
    }
})
module.exports = router;