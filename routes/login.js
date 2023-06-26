const koaRoute = require('koa-router');
const loginRoute = new koaRoute();
const loginController = require('../controller/login');
const loginControllerObj = new loginController()
loginRoute.post('/',loginControllerObj.getLoginIn);

module.exports =loginRoute ;