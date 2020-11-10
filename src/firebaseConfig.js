import firebase from "firebase";

const firebaseConfig = {
	apiKey: "AIzaSyDxp9cxEZOvxJqLyRdkoa6BQLiPEvEsPNU",
	authDomain: "whatsapp-clone-6a134.firebaseapp.com",
	databaseURL: "https://whatsapp-clone-6a134.firebaseio.com",
	projectId: "whatsapp-clone-6a134",
	storageBucket: "whatsapp-clone-6a134.appspot.com",
	messagingSenderId: "137950378234",
	appId: "1:137950378234:web:3d570781d1a7250132f143",
	measurementId: "G-DHPRCE33XP",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

const auth = firebase.auth();

const provider = new firebase.auth.GoogleAuthProvider();

export { provider, auth };

export default db;
