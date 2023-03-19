// 1. 导入 express
const express = require('express')

// 2. create application object
const app = express()

const singers = require('./singers.json')


// 获取请求报文的参数 通配id参数
app.get('/singer/:id.html', (req, res) => {
  //
    let {id} = req.params

    console.log(req.params.id)
    console.log(singers)
    // 查找到对应的数据 然后返回
    // res.setHeader('content-type','text/html;charset=utf-8')
    // res.end('hello express',singers)
    res.end(`${singers.name}`)

})

// listen port
app.listen(3456, () => {
    console.log('服务器已经启动，端口3746正在监听中')
})
