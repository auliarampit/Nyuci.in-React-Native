import firebase from 'firebase'

class config {
    constructor() {
        var firebaseConfig = {
            apiKey: "AIzaSyDwQJcPgfihEzrXc0bZIikm-VKqUaTaRBg",
            authDomain: "nyuciin-413ae.firebaseapp.com",
            databaseURL: "https://nyuciin-413ae.firebaseio.com",
            projectId: "nyuciin-413ae",
            storageBucket: "",
            messagingSenderId: "72340651371",
            appId: "1:72340651371:web:31b3ee1fcbc8c4cbce202e",
            measurementId: "G-LG2EDKSGM7"
          };
          // Initialize Firebase
          firebase.initializeApp(firebaseConfig);
        //   firebase.analytics();
    } 
}
const FirebaseSvc = new config()
export default FirebaseSvc