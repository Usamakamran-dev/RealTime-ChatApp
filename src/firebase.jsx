import { initializeApp } from "firebase/app";
import { getAuth, setPersistence, browserSessionPersistence } from 'firebase/auth';
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBLingsssf6J8FNu8_PHqj1M9cvlEbvQW0",
  authDomain: "real-time-chat-app-e39f9.firebaseapp.com",
  projectId: "real-time-chat-app-e39f9",
  storageBucket: "real-time-chat-app-e39f9.appspot.com",
  messagingSenderId: "345245882787",
  appId: "1:345245882787:web:454457e6ad021b22e96216"
};

export const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
setPersistence(auth, browserSessionPersistence);
export const storage = getStorage();
export const db = getFirestore();
export default auth;