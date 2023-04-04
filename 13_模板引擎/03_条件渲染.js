/**
 * 通过 isLogin 决定最终的输出内容
 * 
 */
const ejs = require('ejs')
let isLogin = false

// ejs
let result = ejs.render(`
<% if(isLogin){ %>
    <span>欢迎回来</span>
    <% } else { %>
    <button>登录</button> <button>注册</button>
    <% } %>
`,{isLogin})

console.log(result);