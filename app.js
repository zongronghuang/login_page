// 導入套件、外部 JS 及基本設定
const express = require('express')
const exphbs = require('express-handlebars')
const app = express()
const bodyParser = require('body-parser')
const checkLogin = require('./check_login')
const port = 3000

app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')
app.use(bodyParser.urlencoded({ extended: true }))

// 建立 GET 路由
app.get('/', (req, res) => {
  res.render('index')
})

// 建立 POST 路由
app.post('/', (req, res) => {
  const login = req.body
  const result = checkLogin(login.email, login.password)

  // 如果找得到登記的使用者帳密，渲染 success 頁面
  // 如果找不到使用者帳密，渲染 index 頁面
  if (result) {
    res.render('success', { name: result.firstName })
  } else {
    res.render('index', {
      email: login.email,
      password: login.password,
      warning: true
    })
  }

})

app.listen(port, () => {
  console.log(`Server up and running at http://localhost:${port}`)
})

