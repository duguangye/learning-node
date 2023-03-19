// 1. 导入 express
const express = require('express')

// 2. create application object
const app = express()


// 获取请求报文的参数 通配id参数
app.get('/other', (req, res) => {
   // 重定向跳转
   //  res.redirect('https://www.baidu.com')
    // 下载相应
    // res.download(__dirname+'/package.json')
    // json 响应
    // res.json({
    //     name:'djjd'
    // })
    // 响应文件
    res.sendFile(__dirname+'/02_form.html')
    // res.status(500).set('aaa','bbb').send('这是ok的')


})

// listen port
app.listen(3456, () => {
    console.log('服务器已经启动，端口3746正在监听中')
})
