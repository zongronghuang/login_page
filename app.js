const express = require('express')
const exphbs = require('express-handlebars')
const app = express()
const bodyParser = require('body-parser')
const checkLogin = require('./check_login')
const port = 3000

app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')

app.use(bodyParser.urlencoded({ extended: true }))

app.get('/', (req, res) => {
  res.render('index')
})

app.post('/', (req, res) => {
  const login = req.body
  const result = checkLogin(login.email, login.password)

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

