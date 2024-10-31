const { getUserFromCookie } = require('./auth.js');
const { getCookieValue } = require('./utils.js');


const restrictedToLoggedInUsers = async (req, res, next) => {

  const token = getCookieValue(req);
  
  if (!token) {
    return res.redirect('/login');
  };
  
  const userInfo = getUserFromCookie(token);
  req.user = userInfo;
  
  next();
};





module.exports = {
  restrictedToLoggedInUsers
};