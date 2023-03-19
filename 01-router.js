// 1. 导入 express
const express = require('express')

// 2. create application object
const app = express()

// 3.create router
app.get('/home', (req, res) => {
    res.end('hello express ')
})
// 匹配test
app.all('/test', (req, res) => {
    res.end('this is all')
})
// 通配符匹配所有的信息
// app.all('*', (req, res) => {
//     res.end('this is all')
// })

// 获取请求报文的参数
app.get('/request', (req, res) => {
    // 原生操作
    const {method, url, httpVersion, headers} = req
    console.log(method, url, httpVersion, headers)
    // express 操作
    const {path,query,ip} =req
    console.log(path)
    console.log(query)
    console.log(ip)
    // 获取请求头
    console.log(req.get('host'))
    res.end('hello express ')
})

// listen port
app.listen(3456, () => {
    console.log('服务器已经启动，端口3746正在监听中')
})
