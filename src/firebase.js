// src/firebase.js
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
    apiKey: "AIzaSyC2Wolsr9G11DnO0m-fN4npMb6NSaoeKHc",
    authDomain: "my-project-1-85f46.firebaseapp.com",
    projectId: "my-project-1-85f46",
    storageBucket: "my-project-1-85f46.appspot.com",
    messagingSenderId: "754715728212",
    appId: "1:754715728212:web:08caf63fe35d09960bd0c1",
    measurementId: "G-ZGJS37N4M4"
};

const app = initializeApp(firebaseConfig);
const projectFirestore = getFirestore(app);
const projectAuth = getAuth(app);
const projectStorage = getStorage(app);

export { projectFirestore, projectAuth, projectStorage };
