// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_apiKey,
  authDomain: import.meta.env.VITE_authDomain,
  projectId: import.meta.env.VITE_projectId,
  storageBucket: import.meta.env.VITE_storageBucket,
  messagingSenderId: import.meta.env.VITE_messagingSenderId,
  appId: import.meta.env.VITE_appId
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;

// apiKey: "AIzaSyBXvjLmDKNbNNWacCKdtK5o-yw-UgE4HvY",
//   authDomain: "car-simple-project.firebaseapp.com",
//   projectId: "car-simple-project",
//   storageBucket: "car-simple-project.appspot.com",
//   messagingSenderId: "616857485927",
//   appId: "1:616857485927:web:d6fabe39bc4aefc1e58ac2"