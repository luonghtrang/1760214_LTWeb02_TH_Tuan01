const express = require('express');
const exphbs = require('express-handlebars');

const app = express();

app.engine('hbs', exphbs({
    layoutsDir: 'views/_layouts',
    defaultLayout: 'main',
    extname: '.hbs'
}));

app.set('view engine', 'hbs');

app.get('/index.html', function (req, res) {
  res.render('home');
})

app.get('/reg.html', function (req, res) {
  res.render('register');
})

app.get('/reg', function (req, res) {
  res.render('registered');
})

// app.use('/', require('./routes/home.router'));

app.use(function (req, res) {
  res.render('404', { layout: false });
})

const PORT = 3000;
app.listen(PORT, function () {
  console.log(`Server is running at http://localhost:${PORT}`);
})