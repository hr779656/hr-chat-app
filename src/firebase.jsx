import { initializeApp } from "firebase/app";


const firebaseConfig = {
  apiKey: "AIzaSyDwxuXw1Qk8-biiles3lTvISWH8NBj-yOM",
  authDomain: "hrprogrammer-chatapp.firebaseapp.com",
  projectId: "hrprogrammer-chatapp",
  storageBucket: "hrprogrammer-chatapp.appspot.com",
  messagingSenderId: "1026323612862",
  appId: "1:1026323612862:web:d8e5b0cd3dfb9b28ae4aef"
};


export const app = initializeApp(firebaseConfig);