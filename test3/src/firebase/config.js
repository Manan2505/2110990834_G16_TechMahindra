import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyCP1-dr8B2ShPFXkslGWt17yVw79SbrHDM",
  authDomain: "april2025-16ad0.firebaseapp.com",
  projectId: "april2025-16ad0",
  storageBucket: "april2025-16ad0.firebasestorage.app",
  messagingSenderId: "19834794446",
  appId: "1:19834794446:web:811c5c33bb21c9ed0c3b9f",
  measurementId: "G-6S2V7V6SJG"
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

export default db;
