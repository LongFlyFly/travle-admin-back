const Koa = require('koa');
const app = new Koa();
const Router = require('@koa/router');
const router = new Router();
const koaBody = require('koa-body');
const cors = require('@koa/cors');
const koajwt = require('koa-jwt');

const userRouter = require('./routes/user');
const writeRouter = require('./routes/write');
const goodRouter = require('./routes/good');
const orderRouter = require('./routes/order');
const adminRouter = require('./routes/admin');
const noteRouter = require('./routes/note');
const attractionsRouter = require('./routes/attractions');
const { sequelize } = require('./database/index');

(async () => {
  await sequelize.sync({ force: false })
})()

// x-response-time

app.use(async (ctx, next) => {
  const start = Date.now();
  await next();
  const ms = Date.now() - start;
  ctx.set('X-Response-Time', `${ms}ms`);
});

// logger

app.use(async (ctx, next) => {
  const start = Date.now();
  await next();
  const ms = Date.now() - start;
  console.log(`${ctx.method} ${ctx.url} - ${ms}`);
});

router.get('/', (ctx) => {
    ctx.body = '石黔川Hello World';
});

router.use('/user', userRouter.routes());
router.use('/write', writeRouter.routes());
router.use('/order', orderRouter.routes());
router.use('/good', goodRouter.routes());
router.use('/admin',adminRouter.routes());
router.use('/note', noteRouter.routes());
router.use('/attractions', attractionsRouter.routes());

// app.use(
//   koajwt({ secret: 'sqcblog' }).unless(
//     // 登录接口不需要验证
//     { path: [/^\/user\/login/] }
//   )
// )

app.use(koaBody());
app.use(cors());
app.use(router.routes());
app.use(router.allowedMethods());

app.listen(3000);