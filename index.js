const express = require('express')
const app = express()
// const config = require('./config')
// const login = require('./routes/login')
// const dashboard = require('./routes/dashboard')
// const users = require('./routes/users')
// const checkisLoggedIn = require('./lib/checkisLoggedin')
// const checkDb = require('./routes/check_db')
const portfinder = require('portfinder');
const morgan = require('morgan')
 const hbs = require('express-hbs')
const bodyParser = require('body-parser')
// const logOut = require('./lib/logout')
const path = require('path')
// const viewPath = path.join(rootPath, 'views')

app.use('/uploads', express.static('uploads'))

const fileupload = require('express-fileupload')
app.use(fileupload({
    createParentPath: true,
    debug: true

}))


//express session

//end express session

app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.static(path.join(__dirname, 'public')));
app.use(morgan('combined'))

// view engine start

app.engine('hbs', hbs.express4({
    partialsDir: __dirname + '/views/components',
    defaultLayout: __dirname + '/views/layouts/base',
    layoutsDir: __dirname + '/views/layouts'
  }));
  app.set('view engine', 'hbs');
  app.set('views', __dirname + '/views')
app.set('view engine', 'hbs')
app.set('views', __dirname + '/views')
// view engine end


//Route start
app.get('/', (req, res) => res.render('pages/pagehome'))
// app.get('/login', login.get)
// app.post('/login', login.post)
// app.get('/logout', logOut)

// app.get('/dashboard', checkisLoggedIn, (req, res) => { res.render('pages/dashboard') })
// app.get('/check-db', checkDb)

// app.get('/users/create', users.create_get)
// app.post('/users/create', users.create_post)
// app.get('/users/:id',users.details)
// app.post('/users/:id', users.details)
// app.post('/users', users.list)

//Route end

const run = async () => {
    try {
        const port = await portfinder.getPortPromise({
            port: 4000
        })
        app.listen(port, () => console.log(`Listen on port http://localhost:${port}`))
    } catch (err) {
        console.log(err)
    }
}
run()