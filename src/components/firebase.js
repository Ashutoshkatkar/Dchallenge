import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
var firebaseConfig = {
    apiKey: "AIzaSyB3b-WofHBKWBEe3OR_CBkfPuzBj3gZSiE",
    authDomain: "glogin-e98ae.firebaseapp.com",
    projectId: "glogin-e98ae",
    storageBucket: "glogin-e98ae.appspot.com",
    messagingSenderId: "994554902249",
    appId: "1:994554902249:web:1128b7820c6e3bcc6ae278"
};

const app = initializeApp(firebaseConfig)

export const authentication = getAuth(app)