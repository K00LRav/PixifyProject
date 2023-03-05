//Theme Toggling

const themeButton=document.querySelector(".theme-btn")
const toggleTheme=()=>{
  // alert('works')
  const body = document.querySelector("body")
  const div = document.querySelector("div")

  if(body.style.backgroundColor==="white"){
    body.style.backgroundColor="#2A3B49"
    div.style.color ="white"
    themeButton.innerHTML="Dark Mode"
  }else{
    body.style.backgroundColor="white"
    div.style.color = "black"
    themeButton.innerHTML="Light Mode"
  }

}
themeButton.onclick=toggleTheme;


















