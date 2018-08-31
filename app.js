const Koa = require('koa');
const bodyParser = require('koa-bodyparser');
const router = require('koa-router')();

const app = new Koa();

app.use(bodyParser());
app.use(router.routes());
app.use(router.allowedMethods());

router.get('/', ctx => {
  ctx.body = 'Hello World!';
});

app.listen(3000, () => {
  console.log('Server listening on port 3000');
});
