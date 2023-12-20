// Для роботи із firebase обовʼязково треба ініціалізувати проект
import { initializeApp } from 'firebase/app';
// Функція для підключення авторизації в проект
import { getAuth } from "firebase/auth";
// Функція для підключення бази даних у проект
import { getFirestore } from "firebase/firestore";
// Функція для підключення сховища файлів в проект
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCPR9wV2jZlTh-TEfxEAMrfQ0cXKptyHJM",
  authDomain: "awesome-project-acbf0.firebaseapp.com",
  databaseURL: "https://awesome-project-acbf0-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "awesome-project-acbf0",
  storageBucket: "awesome-project-acbf0.appspot.com",
  messagingSenderId: "994346882700",
  appId: "1:994346882700:web:01112a0f79a562829ccda9",
  measurementId: "G-MW3FFB1D1Q"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);