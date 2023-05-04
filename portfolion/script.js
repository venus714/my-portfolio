const navToggle = document.querySelector(".nav_toggle"),
navMenu = document.querySelector(".nav_menu");

navToggle.addEventListener("click",() => {
    navMenu.classList.toggle("show-menu");
    navToggle.classList.toggle("active");
})

var typed = new Typed(".profession_text",{
 strings:['Web Developer',"Web Designer","Software Developer"],
    typeSpeed: 70,
    backSpeed:70,
    loop: true,
})



const counters = document.querySelectorAll(".counter");
counters.forEach((counter)=>{
    counter.innerText= "0";

    const updateCounter = () => {
        const target = +counter.getAttribute("data-counter");
        const c = +counter.innerText;

        const increment = target / 200;
        if(c < target){
            counter.innerText = `${Math.cell(c + increment)}`;
            setTimeout(updateCounter, 40);
        
        }else{
            counter.innerText = target
        }
    }
    updateCounter();
})