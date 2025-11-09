import { initializeApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
  measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID
};

// Check if Firebase credentials are configured
const isFirebaseConfigured = firebaseConfig.apiKey && 
                              firebaseConfig.apiKey !== 'your_api_key_here' &&
                              firebaseConfig.projectId && 
                              firebaseConfig.projectId !== 'your_project_id_here';

let app = null;
let db = null;
let analytics = null;

// Only initialize Firebase if credentials are properly configured
if (isFirebaseConfigured) {
  try {
    app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];
    db = getFirestore(app);
    
    // Initialize Analytics (only in browser)
    if (typeof window !== 'undefined') {
      analytics = getAnalytics(app);
    }
  } catch (error) {
    console.warn('Firebase initialization error:', error.message);
    console.warn('Please configure Firebase credentials in .env.local');
  }
} else {
  console.warn('Firebase is not configured. Please add your Firebase credentials to .env.local');
}

export { db, analytics };
export default app;
