
//for index.html

function gotomainpage(){
    
    var username = document.querySelector(".username-input").value;
    
    
   
    if(username!=""){
    localStorage.setItem("username", username);
    //localStorage.getItem("username");
    location.replace('main.html');

    }
   
    
    
    
    
    
    
}

var loginbutttonpressed = document.getElementById('gotomainpage');
loginbutttonpressed.addEventListener("click",gotomainpage, true);

document.addEventListener('keypress', (event) => {
    var keyName = event.key;
  
    if(keyName == "Enter"){
        gotomainpage();
    }
  });

 