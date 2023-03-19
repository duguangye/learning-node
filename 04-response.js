// 1. 导入 express
const express = require('express')

// 2. create application object
const app = express()


// 获取请求报文的参数 通配id参数
app.get('/response', (req, res) => {
    // express response
    // res.status(500)
    // res.set('aaa','bbb')
    // res.send('这是ok的')
    // 也可以链式调用 有中文会自动转码不会乱码
    res.status(500).set('aaa','bbb').send('这是ok的')


})

// listen port
app.listen(3456, () => {
    console.log('服务器已经启动，端口3746正在监听中')
})
