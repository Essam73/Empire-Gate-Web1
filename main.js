const firebaseConfig = {
  apiKey: "AIzaSyAdPl4TmkXgeAD_PIY9dCgvifug-ez6WM",
  authDomain: "decent-atlas-310515.firebaseapp.com",
  projectId: "decent-atlas-310515",
  storageBucket: "decent-atlas-310515.firebasestorage.app",
  messagingSenderId: "388050632237",
  appId: "1:388050632237:web:7e5efa0b93e016bf1cc2a1"
};

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

// عرض الرصيد
db.collection("wallet").doc("balance_info").onSnapshot((doc) => {
    if (doc.exists) {
        document.getElementById("balance").innerText = doc.data().amount + " ريال";
    }
});
