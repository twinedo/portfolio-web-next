// Import the functions you need from the SDKs you need
import firebase, { initializeApp } from 'firebase/app';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { getDatabase } from 'firebase/database';
import { getStorage } from 'firebase/storage';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: 'AIzaSyBD1Wd-IKecutHHJBIe2TiFnRwFyPuvt_Y',
	authDomain: 'twinedo-portfolio.firebaseapp.com',
	databaseURL: 'https://twinedo-portfolio-default-rtdb.firebaseio.com',
	projectId: 'twinedo-portfolio',
	storageBucket: 'twinedo-portfolio.appspot.com',
	messagingSenderId: '579292646101',
	appId: '1:579292646101:web:c9afbc17f6648eb0e0305c',
	measurementId: 'G-23H7KH7TFH',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const database = { getDatabase };
export const storage = { getStorage };
export const signIn = { signInWithEmailAndPassword };
export const auth = { getAuth };

export default app;
