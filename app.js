const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const routes = require('./routes/routes');
require('dotenv').config();


const PORT = process.env.PORT || 5000;
const app = express();




//config
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'ejs');
app.set('views', path.resolve('./views'));
app.use('/', routes); //setting up routes

app.use((req, res) => {
  res.redirect('/error');
}); // for wrong urls


app.listen(PORT, () => console.log("Server Started!"));