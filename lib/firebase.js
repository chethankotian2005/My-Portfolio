import { initializeApp, getApps } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';
import { getAnalytics, isSupported } from 'firebase/analytics';

// Your Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB0_nLfK96nIMpIXnG3asjxTTXhVsGTaYU",
  authDomain: "my-portfolio-cvk.firebaseapp.com",
  projectId: "my-portfolio-cvk",
  storageBucket: "my-portfolio-cvk.firebasestorage.app",
  messagingSenderId: "459701648063",
  appId: "1:459701648063:web:6d7df6ca326ef087e4e40a",
  measurementId: "G-LWLE5R2F0Z"
};

// Initialize Firebase
let app;
if (!getApps().length) {
  app = initializeApp(firebaseConfig);
} else {
  app = getApps()[0];
}

// Initialize Firebase services
export const db = getFirestore(app);
export const storage = getStorage(app);

// Initialize Analytics (only in browser)
export const analytics = typeof window !== 'undefined' && isSupported().then(yes => yes ? getAnalytics(app) : null);

export default app;
