import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

import { firebaseConfigProd } from 'src/constants/secret/firebaseConfig'

// Initialize Firebase
export const app = initializeApp(firebaseConfigProd);
export const analytics = getAnalytics(app);
export const auth = getAuth(app);