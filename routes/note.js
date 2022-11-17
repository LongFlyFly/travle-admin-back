const Router = require('@koa/router');
const router = new Router();
const jwt = require("jsonwebtoken")
const { noteModel } = require('../database/index');

router.get('/', async (ctx) => {
    const notes = await noteModel.findAll();
    ctx.body = {
        code: 200,
        msg: "success",
        data: notes
    }
})


router.post('/delete', async (ctx) => {
    const { noteID } = ctx.request.body
    // console.log(userID)
    const deletenote = await noteModel.destroy({
        where: {
            noteID: noteID
        }
    })
    // console.log(deleteorder)
    ctx.body = {
        code: 200,
        msg: "success",
        data: deletenote
    }
})


router.post('/regist', async (ctx) => {
    const { noteTitle } = ctx.request.body
    //await或者.then
    // console.log( userName,userPassword)
    const jane = await noteModel.create({ noteTitle });
    ctx.body = {
        code: 200,
        msg: "success",
        data: {
            message: jane
        }
    }
})

module.exports = router;