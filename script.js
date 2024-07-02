// Side Menu //

function showSidebar() {
    const sidebar = document.querySelector(".sidebar");
    sidebar.style.display = "flex";
  }
  
  function closeSidebar(){
    const closeMenu = document.querySelector(".sidebar");
    closeMenu.style.display = "none"; 
  }
  
  // Read more section //

function readMore(){
    let dots = document.getElementById("dots");
    let invisibleText = document.getElementById("invisible-text");
    let button = document.getElementById("pressBtn");
  
    if(dots.style.display !="none"){
      dots.style.display ="none";
      invisibleText.style.display = "inline";
      button.innerHTML ="Read Less";
    }
    else{
      dots.style.display ="inline";
      invisibleText.style.display = "none";
      button.innerHTML = "Read More";
    }
  }

  // Sign In / UP form 

let signupBtn = document.getElementById("signupBtn");
let signinBtn = document.getElementById("signinBtn");
let nameField = document.getElementById("nameField");
let title = document.getElementById("title");

signinBtn.onclick = function(){
  nameField.style.maxHeight = "0";
  title.innerHTML = "Sign In";
  signupBtn.classList.add("disabled");
  signinBtn.classList.remove("disabled");
}

signupBtn.onclick = function(){
  nameField.style.maxHeight = "60px";
  title.innerHTML = "Sign Up";
  signupBtn.classList.remove("disabled");
  signinBtn.classList.add("disabled")
 

}