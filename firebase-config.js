// Replace with your Firebase config
const firebaseConfig = {
    apiKey: "AIzaSyCYiSAF6Z4m0AHL7ZXi_loWk0qTJAw1pfI",
    authDomain: "hackteamfinder.firebaseapp.com",
    databaseURL: "YOUR_DATABASE_URL",
    projectId: "hackteamfinder",
    storageBucket: "hackteamfinder.firebasestorage.app",
    messagingSenderId: "558140894841",
    appId: "1:558140894841:web:45f11e4519ed93fb432ea8"
  };
  
  firebase.initializeApp(firebaseConfig);
  const database = firebase.database();
  const app = initializeApp(firebaseConfig);
    const analytics = getAnalytics(app);
  