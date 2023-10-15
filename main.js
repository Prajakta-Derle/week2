const mahaswad = document.getElementById('mahaswad');
const navMenu = document.getElementById('nav-menu');
const closeIcon = document.getElementById('nav-close');
const navLink = document.querySelectorAll(".nav__link")


navLink.forEach(link => 

    link.addEventListener("click",() => {
        navMenu.classList.add('hidden')
    })
    
    )


closeIcon.addEventListener("click",() => {
    navMenu.classList.add('hidden')
})

mahaswad.addEventListener("click",() => {

    navMenu.classList.remove('hidden')

})

const tabs = document.querySelectorAll(".tabs_wrap ul li");
const all = document.querySelectorAll('.item_wrap');
const foods = document.querySelectorAll('.food');
const snacks = document.querySelectorAll('.snack');
const beverages = document.querySelectorAll('.beverage');


tabs.forEach(tab => {
    tab.addEventListener("click", () =>{
        tabs.forEach(tab => {
            tab.classList.remove("active")
        })

        tab.classList.add('active')

        const tabval = tab.getAttribute('data-tabs')

        all.forEach(item => {
            item.style.display ='none'
        })

        if(tabval == 'food'){
            foods.forEach(item => {
                item.style.display ='block'
            })
        }
        else if(tabval == 'snack'){
            snacks.forEach(item => {
                item.style.display ='block'
            })
        }
        else if(tabval == 'beverage'){
            beverages.forEach(item => {
                item.style.display ='block'
            })
        }
        else{
            all.forEach(item => {
                item.style.display ='block'
            })
        }
    })
})


const html = document.querySelector("html");
const themeBtn = document.getElementById("theme-toggle");

if(localStorage.getItem("mode") == "dark"){
    darkMode();
}
else{
    lightMode();
}

themeBtn.addEventListener('click',(e) => {
    if (localStorage.getItem("mode") == "light"){
        darkMode();
    }
    else{
        lightMode();
    }
})

function darkMode () {
    html.classList.add("dark");
    themeBtn.classList.replace("ri-moon-line","ri-sun-line");
    localStorage.setItem("mode","dark");
}

function lightMode () {
    html.classList.remove("dark");
    themeBtn.classList.replace("ri-sun-line","ri-moon-line");
    localStorage.setItem("mode","light");
}




function addData(){
    var email = document.getElementById('inpuEmail').value;

    localStorage.setItem('inpuEmail',email);

    alert('Thank You!!! for Subscribing Us');

}


const scrollUp = () => {
     const scrollUpBtn = document.getElementById("scroll-up");

     if(this.scrollY >= 250) {
        scrollUpBtn.classList.remove("-bottom-1/2");
        scrollUpBtn.classList.add("bottom-4");
     }

     else {
        scrollUpBtn.classList.add("-bottom-1/2");
        scrollUpBtn.classList.remove("bottom-4");
     }
}

window.addEventListener('scroll',scrollUp)