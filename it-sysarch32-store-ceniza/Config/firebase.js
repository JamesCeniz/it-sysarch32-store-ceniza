// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAy1Ut7lAzcLeWPYeDLVl_2nnhxIoZKUko",
  authDomain: "it-sysarch32-store-ceniza.firebaseapp.com",
  databaseURL: "https://it-sysarch32-store-ceniza-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "it-sysarch32-store-ceniza",
  storageBucket: "it-sysarch32-store-ceniza.appspot.com",
  messagingSenderId: "158087592241",
  appId: "1:158087592241:web:c93428eda8fe47886f5810",
  measurementId: "G-RCMP25JBQ3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);