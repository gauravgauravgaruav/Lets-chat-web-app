
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
    apiKey: "AIzaSyBzpVhEA_30nFeHkt90Rux2In6lvq-QGVY",
    authDomain: "kwitter-ed319.firebaseapp.com",
    databaseURL: "https://kwitter-ed319-default-rtdb.firebaseio.com",
    projectId: "kwitter-ed319",
    storageBucket: "kwitter-ed319.appspot.com",
    messagingSenderId: "556999001006",
    appId: "1:556999001006:web:2d2618ce2d42f3d076fe3f"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  

  user_name=localStorage.getItem("user_name");
  document.getElementById("user_name").innerHTML="Welcome "+user_name+"!";

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
     Room_names = childKey;
    //Start code
    console.log("Room Name - "+Room_names);
    row="<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+Room_names+"</div><hr>"
    document.getElementById("output").innerHTML+=row;

    //End code
    });});}
getData();

function redirectToRoomName(name){
    console.log(name);
    localStorage.setItem("room_name",name);
    window.location="chat_page.html";
}

function addRoom(){
    room_name=document.getElementById("room_name").value;

    firebase.database().ref("/").child(room_name).update({
          purpose:"adding room_name"
    });

    localStorage.setItem("room_name",room_name);

    window.location="chat_page.html";
}


function logout() {
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location="index.html";
    
}   

function send() {
    msg=document.getElementById("msg").value;
    firebase.database().ref(room_name).push({
          name:user_name,
          message:msg,
          like:0
    });
    document.getElementById("msg").value="";
}


