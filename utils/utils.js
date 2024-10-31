const getCookieValue = (req) => {
  const cookie = req.headers.cookie;
  
  if (!cookie) {
    return undefined;
  }

  const cookies = cookie.split('; ').reduce((acc, item) => {
    const [key, value] = item.split('=');
    acc[key] = value;
    return acc;
  }, {});

  return cookies['loginid'];
};



module.exports = {
  getCookieValue
};