
//ADD YOUR FIREBASE LINKS HERE
// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyD40LcSqMh-9KrOFjE_iCrdacO9hzyVdco",
    authDomain: "kwitter-app-cc493.firebaseapp.com",
    databaseURL: "https://kwitter-app-cc493-default-rtdb.firebaseio.com",
    projectId: "kwitter-app-cc493",
    storageBucket: "kwitter-app-cc493.appspot.com",
    messagingSenderId: "449153301162",
    appId: "1:449153301162:web:32369a5cd4491662122ed3"
  };
  
  // Initialize Firebase
 firebase.initializeApp(firebaseConfig);
   
  user_name = localStorage.getItem("User_name");
   document.getElementById("User_name").innerHTML="welcome  "+ user_name + " !";
  
  function addroom(){
        room_name=document.getElementById("add_room").value;
        firebase.database().ref("/").child(room_name).update({ purpose : "adding room name"
  });
  localStorage.setItem("room_name",room_name);
  window.location="kwitter_page.HTML";
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
     Room_names = childKey;
    //Start code
console.log("room_name"+Room_names);
row = "<div class='room_name' id=" + Room_names + " onclick='redirectToRoomName(this.id)' >#" + Room_names + "</div><hr>";
document.getElementById("output").innerHTML +=row;
    //End code
    });});}
getData();
function redirectToRoomName(name){
    console.log(name);
    localStorage.setItem("room_name",name);
    window.location="kwitter_page.html";

}
function logout(){
localStorage.removeItem("User_name");
localStorage.removeItem("room_name");
window.location="index.html";
}  