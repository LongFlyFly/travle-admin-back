const Router = require('@koa/router');
const router = new Router();

router.get('/', async (ctx) => {
    ctx.body = "hello jingdian";
});

module.exports = router;