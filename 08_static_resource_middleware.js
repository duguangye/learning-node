// 处理静态资源的中间件 比如静态资源目录// 记录每个请求的url
// 1. 导入 express
const express = require('express')

// 2. create application object
const app = express()
const fs = require(fs)
const path = require('path')

// 静态资源中间件的设置
app.use(express.static(__dirname+'/public')) 
// 根路径默认访问 index.html网页  2.谁想匹配到谁想处理 3.静态资源中间件通常处理静态资源,路由处理动态资源

// fangwe
// 局部的中间件 只有指定的可以用
app.get('/home' ,(req, res) => {
  
    res.send('前台页面')
    // res.status(500).set('aaa','bbb').send('这是ok的')


})
app.get('/admin', (req, res) => {

    res.send('后台页面')

})
app.get('*', (req, res) => {

    res.send(404)
})

// listen port
app.listen(3456, () => {
    console.log('服务器已经启动，端口3746正在监听中')
})
