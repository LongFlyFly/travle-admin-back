const Router = require('@koa/router');
const router = new Router();
const jwt = require("jsonwebtoken")
const { goodModel } = require('../database/index');

router.get('/', async (ctx) => {
    const goods = await goodModel.findAll();
    ctx.body = {
        code: 200,
        msg: "success",
        data: goods
    }
})


router.post('/delete', async (ctx) => {
    const { goodID } = ctx.request.body
    const deletegood = await goodModel.destroy({
        where: {
            goodID: goodID
        }
    })
    console.log(deletegood)
    ctx.body = {
        code: 200,
        msg: "success",
        data: deletegood
    }
})

router.post('/update', async (ctx) => {
    const { goodID, goodName, goodPoint, goodAddress, goodType, isCollect } = ctx.request.body
    const updategood = await goodModel.update({
        goodName: goodName,
        goodPoint: goodPoint,
        goodAddress: goodAddress,
        goodType: goodType,
        isCollect: isCollect
    }, {
        where: {
            goodID: goodID
        }
    }
    )
    ctx.body = {
        code: 200,
        msg: "success",
        data: {
            message: updategood
        }
    }
})

router.post('/search', async (ctx) => {
    const { Op } = require("sequelize");
    const { goodName } = ctx.request.body
    if (orderTitle != '') {
        const searchgood = await goodModel.findAll({
            where: {
                goodName: {
                    [Op.substring]: goodName
                }
            },
        });
        ctx.body = {
            code: 200,
            msg: "success",
            data: searchgood
        }
    }
})

router.post('/regist', async (ctx) => {
    const { goodName, goodPoint, goodAddress, goodImg, goodType, isCollect } = ctx.request.body
    // console.log(goodName, goodPoint, goodAddress, goodImg, goodType, isCollect)
    // await或者.then
    const jane = await goodModel.create({ goodName, goodPoint, goodAddress, goodImg, goodType, isCollect });
    ctx.body = {
        code: 200,
        msg: "success",
        data: {
            message: jane
        }
    }
})
module.exports = router;