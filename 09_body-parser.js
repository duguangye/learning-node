/**
 * GET /login 显示表单网页
 * POST /login 获取表单中 用户名和密码
 */

// 
const express = require('express')
const app = express();
// 设置为路由中间件
const bodyParser = require('body-parser')
const unlencodeParser = bodyParser.urlencoded({extend:false})

//创建
app.get('/login',(req,res)=>{
    // 相应HTML内容
    // res.send('表单页面')
    res.sendFile(__dirname+'/02_form.html')

})

app.post('/login',unlencodeParser,(req,res)=>{
    // req.body body 是 unlencodeParser中间件添加上去的
    console.log(req.body);
})

app.listen(3456,()=>{
    console.log('服务已经启动...');
})
