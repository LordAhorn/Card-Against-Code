 //for main.html

 function from_mainpage_to_createlobby(){
    location.replace("lobbycreate.html"); 

  }

  var create_lobby_button_pressed = document.getElementById('createlobbybutton');
  create_lobby_button_pressed.addEventListener("click",from_mainpage_to_createlobby, true);