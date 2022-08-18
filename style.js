const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector("#nav-menu");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
});

document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}));




    function Clear() {
       length = document.getElementsByClassName("app-form-control").length
       boll = confirm("you are clearning the form...")

       if(boll){
        for(i=0; i<=length; i++){
            document.getElementsByClassName("app-form-control")[i].value = "";
        }
       }
       else{
        //do nothing
       }
        
    }

