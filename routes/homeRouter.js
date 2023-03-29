// 导入 express
const express = require('express')

const router = express.Router()

//创建
router.get('/login', (req, res) => {
    // 相应HTML内容
    // res.send('表单页面')
    res.sendFile(__dirname + '../02_form.html')

})

router.post('/login', (req, res) => {
    console.log(req);
})

module.exports = router