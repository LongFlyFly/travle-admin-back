const Router = require('@koa/router');
const router = new Router();
const jwt = require("jsonwebtoken")
const { adminModel } = require('../database/index');

router.get('/', async (ctx) => {
    const admins = await adminModel.findAll();
    ctx.body = {
        code: 200,
        msg: "success",
        data: admins
    }
})

router.post('/login', (ctx) => {
    const { adminName, adminPassword, adminDataname, adminDatapass } = ctx.request.body
    console.log(adminName, adminPassword, adminDataname, adminDatapass)
    if (adminName == adminDataname && adminPassword == adminDatapass) {
        const accessToken =
            "Bearer" +
            jwt.sign(
                {
                    adminID: "0001",
                    adminName: adminName
                },
                "sqcblog",
                {
                    expiresIn: 3600 * 24 * 7
                }
            )
        ctx.body = {
            code: 200,
            msg: 'success',
            data: {
                message: 'login success',
                accessToken
            }
        }
    } else {
        ctx.body = {
            code: 200,
            msg: 'default',
            data: 'login default'
        }
    }
})

router.post('/update', async (ctx) => {
    const { adminID, adminName, adminPassword, adminImg} = ctx.request.body
    const updateadmin = await adminModel.update({
        adminName: adminName,
        adminPassword: adminPassword,
        adminImg: adminImg,
    }, {
        where: {
            adminID: adminID
        }
    }
    )
    ctx.body = {
        code: 200,
        msg: "success",
        data: {
            message: updateadmin
        }
    }
})

module.exports = router;