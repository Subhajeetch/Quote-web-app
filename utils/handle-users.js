require('dotenv').config();

const admin = require('firebase-admin');
const serviceAccount = JSON.parse(process.env.GOOGLE_CREDENTIALS);

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

const db = admin.firestore();






const addUser = async (data) => {
  const user = await db.collection('users').add(data);

  return user;
};





const getAllUsers = async () => {
  const usersSnapshot = await db.collection('users').get();
  const users = [];

  usersSnapshot.forEach(doc => {
    users.push({ id: doc.id, ...doc.data() });
  });

  return users;
};



const getUserByEmailAndPassword = async (email, password) => {
  
  
  
  
  try {
    const userDatabase = db.collection('users');
    const matchingUser = await userDatabase
      .where('email', '==', email)
      .where('password', '==', password)
      .get();

    if (matchingUser.empty) {
      return null;
    }

    const user = matchingUser.docs[0];

    return { id: user.id, ...user.data() };
  } catch (error) {
    throw new Error('Error fetching user by email and password', error);
  }
};



const getUserById = async (userId) => {
  try {
    const userData = db.collection('users').doc(userId);
    const doc = await userData.get();

    if (!doc.exists) {
      return null;
    }

    return { id: doc.id, ...doc.data() };
  } catch (error) {
    throw new Error('Error fetching user by ID', error);
  }
};





module.exports = {
  addUser, 
  getAllUsers, 
  getUserByEmailAndPassword,
  getUserById
}