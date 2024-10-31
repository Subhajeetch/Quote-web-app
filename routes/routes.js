const express = require('express');
const router = express.Router();
const cookieParser = require('cookie-parser');

const { addUser, getAllUsers, getUserByEmailAndPassword, getUserById } = require('../utils/handle-users.js');

const { setUserInCookie, getUserFromCookie } = require('../utils/auth.js');

const { restrictedToLoggedInUsers } = require('../utils/middlwares.js')


const { addQuote, getQuotesByUserId, getAllQuotes, deleteQuote } = require('../utils/handle-quots.js');

const { getCookieValue } = require('../utils/utils.js');

const app = express();
app.use(cookieParser());




//start routes


router.get('/error', async (req, res) => {
  return res.render('wrong-path');
})


router.get('/home', restrictedToLoggedInUsers, async (req, res) => {
  
  const user = await getUserById(req.user.id);
  
  const quotes = await getQuotesByUserId(user.id);
  
  const name = user.firstName;
  

  return res.render('home', {quotes, name});
});



router.get('/login', async (req, res) => {
  
  const token = await getCookieValue(req);
  
  if (token) {
    return res.redirect('/home');
  };
  
  return res.render('login');
});


router.get('/signup', async (req, res) => {
  
  const token = await getCookieValue(req);
  
  if (token) {
    return res.redirect('/home');
  };
  
  return res.render('signup');
});


//post on sign-up 

router.post('/signup', async (req, res) => {

  const data = req.body;

  try {
    const userData = await addUser(data);

    const user = await getUserById(userData.id);

    const token = setUserInCookie(user);

    res.cookie('loginid', token);

    return res.redirect('/home');
    
  } catch (err) {
    return res.status(500).send('Unexpected error from server!');
  }
});




//post on login

router.post('/user/login', async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.render('/wrong-input-login');
  };

  try {

    const user = await getUserByEmailAndPassword(email, password);

    const token = setUserInCookie(user)

    res.cookie('loginid', token);

    return res.redirect('/home');

  } catch (err) {
    return res.render('wrong-input-login');
  };
});




router.post('/logout', async (req, res) => {
  
  res.clearCookie('loginid');
  
  return res.redirect('/login');
});


router.get('/', async (req, res) => {
  
  return res.render('landing_page');
});




// QUOTES 



router.post('/post/quote', restrictedToLoggedInUsers, async (req, res) => {
  const quoteData = req.body;
  const user = await getUserById(req.user.id);
  
  await addQuote(quoteData, user);
  
  await getQuotesByUserId(user.id);
  

  return res.redirect('/home');
});



router.get('/feed', restrictedToLoggedInUsers, async (req, res) => {
  
  const user = await getUserById(req.user.id);
  
  const quotes = await getAllQuotes();
  
  const name = user.firstName;
  
  return res.render('feed', {name, quotes});
});


router.post('/delete-quote', async (req, res) => {
  const uniqueQuoteId = req.body.quoteId;
  
  try {
    await deleteQuote(uniqueQuoteId);
  } catch (err) {
    res.status(500).send('Unexpected error from the server, please try deleting your quote again!');
  }
  
  return res.redirect('/home');
});




module.exports = router;