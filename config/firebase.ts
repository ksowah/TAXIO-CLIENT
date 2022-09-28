import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDsXHP1KKnzHnLL6zQm__Yc-cUPVaysEiw",
  authDomain: "taxio-f83bd.firebaseapp.com",
  projectId: "taxio-f83bd",
  storageBucket: "taxio-f83bd.appspot.com",
  messagingSenderId: "449161587628",
  appId: "1:449161587628:web:9bafda154e4766fc586809"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp()
export const auth = getAuth(app)

