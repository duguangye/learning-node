/**
* 防盗链 有些域名不允许访问
*/

const express = require('express')
const app = express();

const homeRouter = require('./routes/homeRouter')

app.use(homeRouter)


app.listen(3456, () => {
    console.log('服务已经启动...');
})
