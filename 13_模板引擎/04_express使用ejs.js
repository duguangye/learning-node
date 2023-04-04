// 1. 导入 express
const express = require('express')
// 导入 path
const path = require('path')

// 2. create application object
const app = express()

// 1. 设置模板引擎 ejs只是node环境中的一个模板引擎 还有一些别的 pug twing
app.set('view engine','ejs')
// 2.设置模板文件存放位置 模板文件:具有模板语法内容的文件
app.set('views',path.resolve(__dirname,'./views'))


// 创建路由
app.get('/hello', (req, res) => {
    // res.end('hello express')
    let title = '每时每刻的坚持,不要害怕这就是生活的常态,反正也并不会死'
    res.render('home',{title})
    
})

// listen port
app.listen(3456, () => {
    console.log('服务器已经启动，端口3746正在监听中')
})
