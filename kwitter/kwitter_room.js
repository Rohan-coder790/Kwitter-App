
//ADD YOUR FIREBASE LINKS HERE

var firebaseConfig = {
      apiKey: "AIzaSyBi413WtdO2MDpiC-EqItLmtMRuRpiHJhc",
      authDomain: "kwitter-app-c54b8.firebaseapp.com",
      databaseURL: "https://kwitter-app-c54b8-default-rtdb.firebaseio.com",
      projectId: "kwitter-app-c54b8",
      storageBucket: "kwitter-app-c54b8.appspot.com",
      messagingSenderId: "873558404409",
      appId: "1:873558404409:web:978127ac8a39a47c1c0ce8"
    };


firebase.initializeApp(firebaseConfig);

    user_name = localStorage.getItem("user_name");
    document.getElementById("user_name").innerHTML = "Hello  " + user_name + "  Welcome To Kwitter!!! ";

    function addRoom()
{

  room_name = document.getElementById("room_name").value;

  firebase.database().ref("/").child(room_name).update({
sangri : "pizza"});

  localStorage.setItem("room_name", room_name);

  window.location = "kwitter_page.html";
}


function getData() {firebase.database().ref("/").on('value', 
function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(
      function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room Name - " + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#" + Room_names +"</div><hr>";
      document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();

function redirectToRoomName(name)
{

  console.log(name);
  localStorage.setItem("room_name", name);
  window.location = "kwitter_page.html";
}

function logout()
{

  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
  window.location = "index.html";
}

