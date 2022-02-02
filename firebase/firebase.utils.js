// Import the functions you need from the SDKs you need
import {
    FIREBASE_apiKey,
    FIREBASE_messagingSenderId,
    FIREBASE_measurementId,
    FIREBASE_appId,
} from "@env";
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: FIREBASE_apiKey,
    authDomain: "megabus-bca89.firebaseapp.com",
    projectId: "megabus-bca89",
    storageBucket: "megabus-bca89.appspot.com",
    messagingSenderId: FIREBASE_messagingSenderId,
    appId: FIREBASE_appId,
    measurementId: FIREBASE_measurementId,
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
