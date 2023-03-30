const ejs = require('ejs')
const fs = require('fs')
const xiyou = ['这世间','本就各人下雪','各人也有各人的隐晦和皎洁']

// 注意这里需要 <% 旁边需要有空格 
let str = `<ul>
<% xiyou.forEach(item=> { %>
<li><%= item %></li>
<% }) %>
</ul>`

let strHtml = fs.readFileSync('./02_xiyou.html').toString()
// 使用ejs实现
let result = ejs.render(strHtml,{xiyou})
console.log(result);