 var firebaseConfig = {
    apiKey: "AIzaSyDTzB81fxCqdKLy9jz28gGMn-696_dD8jw",
    authDomain: "ng-courseapp.firebaseapp.com",
    databaseURL: "https://ng-courseapp.firebaseio.com",
    projectId: "ng-courseapp",
    storageBucket: "ng-courseapp.appspot.com",
    messagingSenderId: "666657406193",
    appId: "1:666657406193:web:e68ffa2b1c9b5fa8b47d50"
  };
 firebase.initializeApp(firebaseConfig);

function addUser() {

  user_name = document.getElementById("user_name").value;

  localStorage.setItem("user_name", user_name);
  
    window.location = "kwitter_room.html";
}