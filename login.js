const firebaseConfig = {
  apiKey: "AIzaSyBGnMEflYGtwPvevQrshLyGVOo4dROucNM",
  authDomain: "databaselearn-ef103.firebaseapp.com",
  projectId: "databaselearn-ef103",
  storageBucket: "databaselearn-ef103.appspot.com",
  messagingSenderId: "172495992181",
  appId: "1:172495992181:web:5a367796e2a993587d8f3c",
  measurementId: "G-VFESK8BTHJ"
};
firebase.initializeApp(firebaseConfig);

const sign_in_btn = document.querySelector("#sign-in-btn");
const sign_up_btn = document.querySelector("#sign-up-btn");
const container = document.querySelector(".container");

sign_up_btn.addEventListener("click", () => {
  container.classList.add("sign-up-mode");
});

sign_in_btn.addEventListener("click", () => {
  container.classList.remove("sign-up-mode");
});








function sig() {
  console.log("Started");
  googleSignInPopup();
  console.log("Success");
  
}

var userdata;

firebase.auth().onAuthStateChanged((user) => {
  if (user) {
      console.log(firebase.auth().currentUser);
      console.log("changed");
      userdata = user;
      console.log(user);
      console.log(userdata.photoURL);
      console.log( userdata.displayName);
      //user1 = userdata.email.split("@")[0];
  } else {

  }
});

var provider1 = new firebase.auth.GoogleAuthProvider();

var credential;

function googleSignInPopup() {

  var provider1 = new firebase.auth.GoogleAuthProvider();
  console.log("here");
  firebase.auth().signInWithPopup(provider1).then((result) => {
      credential = result.credential;
      console.log(credential[photoURL]);
      console.log("suc");
      var token = credential.accessToken;
      var user = result.user;
      console.log("loggedin");



  }).catch((error) => {
      //var errorCode = error.code;
      //var errorMessage = error.message;

      //var email = error.email;

      //var credential = error.credential;

  });
}