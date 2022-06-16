import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyDWtKDPuJzahBx3ych5afQ9or0l4I5s_fE",
  authDomain: "bakendreactapp.firebaseapp.com",
  projectId: "bakendreactapp",
  storageBucket: "bakendreactapp.appspot.com",
  messagingSenderId: "911040196526",
  appId: "1:911040196526:web:d25ea438ae99a7e968e23f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)

export const collectionsName = {
  products: 'products',
  orders: 'orders'
}