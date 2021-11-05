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


  user_name = localStorage.getItem("user_name");

  document.getElementById("user_name").innerHTML = "hello " + user_name + "!";

  function addRoom() {
  	room_name = document.getElementById("room_name").value;

  	firebase.database().ref("/").child(room_name).update({
  		purpose: "adding room name"
  	});

  	localStorage.setItem("room_name", room_name);

  	window.location = "kwitter_page.html";
  }

  function getData() {
  	firebase.database().ref("/").on('value', function (snapshot) {
  		snapshot.forEach(function (childSnapshot) {
  			childKey = childSnapshot.key;
  			Room_names = childKey;
  		});
  	});

  }

  getData();

  function redirectToRoomName() {
  	var name = document.getElementById("get_room").value;
  	console.log(name);
  	localStorage.setItem("room_name", name);
  	window.location = "kwitter_page.html";
  }

  function logout() {
  	localStorage.removeItem("user_name");
  	localStorage.removeItem("room_name");
  	window.location = "index.html";
  }
