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