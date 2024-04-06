// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCXroUrZLy_jiTtsQSF3czE2w8y6EAaeoc",
  authDomain: "dragon-news-8a7a7.firebaseapp.com",
  projectId: "dragon-news-8a7a7",
  storageBucket: "dragon-news-8a7a7.appspot.com",
  messagingSenderId: "1003777963830",
  appId: "1:1003777963830:web:b4d349c1dedb3cb9f16597",
  measurementId: "G-E1FS18ENVR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export default app;