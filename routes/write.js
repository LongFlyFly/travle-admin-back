const Router = require('@koa/router');
const router = new Router();
const jwt = require("jsonwebtoken")
const { writeModel } = require('../database/index');

router.get('/', async (ctx) => {
    const writes = await writeModel.findAll();
    ctx.body = {
        code: 200,
        msg: "success",
        data: writes
    }
})


router.post('/delete', async (ctx) => {
    const { writeID } = ctx.request.body
    // console.log(userID)
    const deletewrite = await writeModel.destroy({
        where: {
            writeID: writeID
        }
    })
    console.log(deletewrite)
    ctx.body = {
        code: 200,
        msg: "success",
        data: deletewrite
    }
})

router.post('/update', async (ctx) => {
    const { writeID, goodID, userID, writePoint, writeTitle, writeImg } = ctx.request.body
    const updatewrite = await writeModel.update({
        goodID: goodID,
        userID: userID,
        writePoint: writePoint,
        writeTitle: writeTitle,
        writeImg: writeImg
    }, {
        where: {
            writeID: writeID
        }
    }
    )
    ctx.body = {
        code: 200,
        msg: "success",
        data: {
            message: updatewrite
        }
    }
})

router.post('/search', async (ctx) => {
    const { Op } = require("sequelize");
    const { writeTitle } = ctx.request.body
    if (writeTitle != '') {
        const searchwrite = await writeModel.findAll({
            where: {
                writeTitle: {
                    [Op.substring]: writeTitle
                }
            },
        });
        ctx.body = {
            code: 200,
            msg: "success",
            data: searchwrite
        }
    }
})

router.post('/regist', async (ctx) => {
    const { goodID, userID, writePoint, writeTitle, writeImg } = ctx.request.body
    //await或者.then
    // console.log(goodID, userID, writePoint, writeTitle, writeImg)
    const jane = await writeModel.create({ goodID, userID, writePoint, writeTitle, writeImg });
    ctx.body = {
        code: 200,
        msg: "success",
        data: {
            message: jane
        }
    }
})
module.exports = router;