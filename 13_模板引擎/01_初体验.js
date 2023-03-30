// 1, 安装ejs
const ejs = require('ejs')
const fs = require('fs')
let china = '关关难过关关过'

let str = '我一定可以的<%= china %>'
let strHtml = fs.readFileSync('./01_html.html').toString()
let params =  {china}
// 使用ejs渲染 这样可以使 
let result = ejs.render(strHtml,params)
console.log(result);