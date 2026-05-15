// بيانات مشروعك من Firebase Console
const firebaseConfig = {
    apiKey: "AIzaSyBoP272OND7bbvuJlR_BCGsc-5c-HjVAl8",
    authDomain: "sam77-bef7d.firebaseapp.com",
    projectId: "sam77-bef7d",
    storageBucket: "sam77-bef7d.appspot.com",
    messagingSenderId: "184354393850",
    appId: "1:184354393850:web:718fb5a94980b00db64343"
};

// تهيئة التطبيق
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

// تحديث الرصيد مباشرة من Firestore
db.collection("wallet").doc("balance_info").onSnapshot((doc) => {
    if (doc.exists) {
        document.getElementById("balance").innerText = doc.data().amount + " ريال";
        document.getElementById("status").innerText = "متصل بالسحاب ✅";
    } else {
        document.getElementById("status").innerText = "لم يتم إنشاء المحفظة بعد";
    }
});
