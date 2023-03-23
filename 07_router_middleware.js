// 记录每个请求的url
// 1. 导入 express
const express = require('express')

// 2. create application object
const app = express()
const fs = require(fs)
const path = require('path')

// 路由中间件
function recordMiddleware(req,res,next){
    let { url, ip } = req
    /*  */
    fs.appendFileSync(path.resolve(__dirname, './access.log'), `${url} ${ip}\r\n`)
    next()
}

// 局部的中间件 只有指定的可以用
app.get('/home',recordMiddleware ,(req, res) => {
  
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
