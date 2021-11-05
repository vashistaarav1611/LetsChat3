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
  room_name = localStorage.getItem("room_name");

  function send() {
  	msg = document.getElementById("msg").value;
  	msat = msg + "<h6>" + new Date().toLocaleString() + "</h6>";
  	firebase.database().ref(room_name).push({
  		name: user_name,
  		massage: msat,
  		like: 0
  	});
  	document.getElementById("msg").value = "";
  }

  function say() {
  	synth = new Tone.Synth().toDestination();
  	synth.triggerAttackRelease("C4", "8n");
	 console.log("ding");
  }

  function getData() {
  	firebase.database().ref("/" + room_name).on('value', function (snapshot) {
  		document.getElementById("output").innerHTML = "";
  		snapshot.forEach(function (childSnapshot) {
  			childKey = childSnapshot.key;
  			childData = childSnapshot.val();
  			if (childKey != "purpose") {
  				firebase_message_id = childKey;
  				message_data = childData;
  				console.log(firebase_message_id);
  				console.log(message_data);
  				name = message_data['name'];
  				message = message_data['massage'];
  				like = message_data['like'];
  				name_with_tag = "<h4> " + name + " 📥</h4>";
  				message_with_tag = "<div id='hi'><h4 class='message_h4'>" + message + "</h4>";
  				like_button = "<button class='btn btn-warning' id=" + firebase_message_id + " value=" + like + " onclick='updateLike(this.id)'>";
  				span_with_tag = "<span class='glyphicon glyphicon-thumbs-up'>Like: " + like + "</span></button></div><hr>";
  				row = name_with_tag + message_with_tag + like_button + span_with_tag;
  				document.getElementById("output").innerHTML += row;
  				say();
  			}
  		});
  	});
  }

  getData();

  function updateLike(message_id) {
  	console.log("clicked on button - " + message_id);
  	button_id = message_id;
  	likes = document.getElementById(button_id).value;
  	update_likes = Number(likes) + 1;
  	console.log(update_likes);
  	firebase.database().ref(room_name).child(message_id).update({
  		like: update_likes
  	});
  }

  function logout() {
  	localStorage.removeItem("user_name");
  	localStorage.removeItem("room_name");
  	window.location.replace("index.html");
  }
