// Your web app's Firebase configuration
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
  

function addUser()
{
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose : "adding user"
    });
    
    localStorage.setItem("user_name", user_name);

    window.location = "chat_room.html";
    
}

