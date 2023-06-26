const koa = require('koa');
const loginRoute = require('./routes/login');
let app = new koa();
app.use(loginRoute.routes())

app.listen(8888,()=>{
  console.log(8888);
})