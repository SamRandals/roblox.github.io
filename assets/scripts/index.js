

const aside = document.querySelector(".menu__roblox-container");
const menuLogo = document.querySelector(".main__menu");

menuLogo.addEventListener("click", () => {
  if (aside.classList.contains("hidden")) {
    aside.classList.remove("hidden");
    aside.classList.add("appear");
  } else {
    aside.classList.add("hidden");
    aside.classList.remove("appear");
  }
});




//mediaquery toggle
const searchToggleContainer= document.querySelector(".search__toggle-container");
const screenWidth= document.documentElement.clientWidth;

function toggleSearchIcon(){

  
  if( screenWidth < 393){

    if(searchToggleContainer.classList.contains("hidden")){
      searchToggleContainer.classList.remove("hidden")
        searchToggleContainer.classList.add("appear");
    }
  }
  else{
    searchToggleContainer.classList.add("hidden");
  }
}
toggleSearchIcon();
window.addEventListener("resize", toggleSearchIcon)


//input toggle mediaquery


const inputContainer= document.querySelector(".header__input-container");

searchToggleContainer.addEventListener("click",()=>{

    if(screenWidth <393){
      if(inputContainer.style.display.contains("none")){
        inputContainer.style.display="flex";
      }
      else{
        inputContainer.style.display="none";
      }
        
    }
    
})