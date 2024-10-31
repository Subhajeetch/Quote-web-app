const jwt = require('jsonwebtoken');
const secretKey = 'SUBHAJEET$@$@$@9@9@9';




const setUserInCookie = (user) => {
  
  return jwt.sign({
    
    id: user.id,
    email: user.email
    
  }, secretKey);
  
};



const getUserFromCookie = (token) => {
  if (!token) {
    return null;
  }
  
  return jwt.verify(token, secretKey);
};




module.exports = {
  setUserInCookie, 
  getUserFromCookie
};