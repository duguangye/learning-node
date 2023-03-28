/**
* 防盗链 有些域名不允许访问
*/

const express = require('express')
const app = express();

// 创建防盗链中间件
app.use((req, res, next) => {
    // referer 可能为空 页面第一次加载的时候为空
    let referer = req.get('referer')
    if (referer) {
        let url = new URL(referer)
        // 获取 hostname
        let hostname = url.hostname
        if (hostname !== '127.0.0.1') {
            // 不是允许的地址 返回404
            res.send(404).send('<h1>404 Not Found</h>')
            return
        }
    }
    next()
})

//创建
app.get('/login', (req, res) => {
    // 相应HTML内容
    // res.send('表单页面')
    res.sendFile(__dirname + '/02_form.html')

})

app.post('/login', unlencodeParser, (req, res) => {
    // req.body body 是 unlencodeParser中间件添加上去的
    console.log(req.body);
})

app.listen(3456, () => {
    console.log('服务已经启动...');
})
