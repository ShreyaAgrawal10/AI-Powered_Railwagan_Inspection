// Import the functions you need from the SDKs
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
const firebaseConfig = {
  apiKey: "AIzaSyAEya57wVEgTsiR5VCICIY1JuUgrKT4a1g",
  authDomain: "minded-13a3c.firebaseapp.com",
  projectId: "minded-13a3c",
  storageBucket: "minded-13a3c.firebasestorage.app",
  messagingSenderId: "486554998294",
  appId: "1:486554998294:web:dd14da154a91d4a5c60737",
  measurementId: "G-ZSPDSNWSSY",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
// const analytics = getAnalytics(app);
export default { app };
export {  auth };

