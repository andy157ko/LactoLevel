import { initializeApp } from '';
import { getDatabase, ref, onValue } from 'https://www.gstatic.com/firebasejs/9.0.0/firebase-database.js';

const firebaseConfig = {
    apiKey: "AIzaSyAC7uRuB2AswuhkOi_-jFEmMdj-k-62sX4",
    authDomain: "justest-b24bd.firebaseapp.com",
    databaseURL: "https://justest-b24bd-default-rtdb.firebaseio.com",
    projectId: "justest-b24bd",
    storageBucket: "justest-b24bd.appspot.com",
    messagingSenderId: "123836320181",
    appId: "1:123836320181:web:5e0d6f0bcc7a551bb431fc",
    measurementId: "G-8CVQWMZR5V"
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

const testRef = ref(db, 'user/' + "meazDgpQq1hyJUCz1H3CplHUXea2" + "/sensorRaw");

onValue(testRef, (snapshot) => {
    const data = snapshot.val();
    updateDistance(postElement, data);
});

function updateData(value) {
    document.getElementById('data').innerText = value;
}
