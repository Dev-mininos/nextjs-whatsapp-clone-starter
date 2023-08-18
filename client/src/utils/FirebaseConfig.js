import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyASfn_mt5Ih8l5vFq5zUmTLmVqFlS6MD20",
  authDomain: "whats-app-clone-85e24.firebaseapp.com",
  projectId: "whats-app-clone-85e24",
  storageBucket: "whats-app-clone-85e24.appspot.com",
  messagingSenderId: "588048175233",
  appId: "1:588048175233:web:6d9bbbb361915d4da23d80",
  measurementId: "G-0916FC5S2H",
};
const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app);
