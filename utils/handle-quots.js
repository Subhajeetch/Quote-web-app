require('dotenv').config();
const admin = require('firebase-admin');
const serviceAccount = JSON.parse(process.env.GOOGLE_CREDENTIALS);
const dayjs = require('dayjs');

const db = admin.firestore();







const addQuote = async (quoteData, user) => {
  
  const quoteText = quoteData.quote;
  const date = dayjs().format('MMMM D, YYYY');
  
  const data = {
    name: `${user.firstName} ${user.lastName}`,
    email: user.email,
    quote: quoteText,
    addedDate: date,
    quoteId: user.id
  };
  
  
  const quote = await db.collection('quotes').add(data);

  return 'Quote added';
};




const getAllQuotes = async () => {
  
  const quotesDatabase = await db.collection('quotes').get();
  const quotes = [];

  quotesDatabase.forEach(doc => {
    quotes.push(doc.data());
  });

  return quotes;
};





const getQuotesByUserId = async (userId) => {
  try {
    const quotesDatabase = db.collection('quotes');
    
    const quotesByUserId = await quotesDatabase.where('quoteId', '==', userId).get();

    if (quotesByUserId.empty) {
      return [];
    }

    const quotes = [];
    
    quotesByUserId.forEach((doc) => {
      quotes.push({uniqueQuoteId: doc.id, ...doc.data()});
    });
    
    return quotes;
    
  } catch (error) {
    throw new Error('Error fetching users', error);
  }
};




const deleteQuote = async (uniqueQuoteId) => {
  
  try {
    const getQuote = await db.collection('quotes').doc(uniqueQuoteId);
    
    await getQuote.delete();
    
  } catch (err) {
    return err;
  }
};



module.exports = {
  addQuote, 
  getAllQuotes, 
  getQuotesByUserId,
  deleteQuote
}