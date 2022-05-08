const express = require('express')
const session = require('express-session')
const router = express.Router()
const User = require('../../models/user')

router.use(
  session({
    secret: 'mySecret',
    name: 'user',
    resave: true,
    saveUninitialized: false,
  }))
router.get('/', (req, res) => {
  if (req.session.user) {
    return res.redirect(`/welcome`)
  }
  return res.render('login')
})
router.post('/', (req, res) => {
  const { Email, Password } = req.body
  return User.findOne({ email: Email })
    .lean()
    .then(user => {
      if (user.password === Password) {
        req.session.user = user.firstName
        res.redirect(`/welcome`)
      } else { res.render('login', { isError: true }) }
    })
    .catch(error => console.log(error))
})
router.get('/welcome', (req, res) => {
  const name = req.session.user
  res.render('index', { name })
})
router.post('/logout', (req, res) => {
  req.session.destroy(() => {
    console.log('session destroyed')
  })
  return res.redirect(`/`)
})
module.exports = router
