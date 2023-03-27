// 使用插件处理请求体
// 1. 导入 express
const express = require('express')

// 2. create application object
const app = express()
const fs = require(fs)
const path = require('path')

// fangwe
// 局部的中间件 只有指定的可以用
app.get('/login' ,(req, res) => {
    res.send('返回网页')

})
app.post('/login', (req, res) => {

    res.send('后台页面')

})
app.get('*', (req, res) => {

    res.send(404)
})

// listen port
app.listen(3456, () => {
    console.log('服务器已经启动，端口3746正在监听中')
})
