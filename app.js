const menu = document.querySelector('#mobile-menu')
const menuLinks = document.querySelector('.navbar-menu')

menu.addEventListener('click', function() {
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
})

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if(entry.isIntersecting){
            document.querySelectorAll(".animated")[0].classList.add("fadeInLeft");
            document.querySelectorAll(".animated")[1].classList.add("fadeInRight");
            document.querySelectorAll(".animated")[2].classList.add("fadeInLeft");
            document.querySelectorAll(".animated")[3].classList.add("fadeInRight");
            document.querySelectorAll(".animated")[4].classList.add("fadeInLeft");
            document.querySelectorAll(".animated")[5].classList.add("fadeInRight");
        }
    })
})

observer.observe(document.querySelector(".grid-experience"))
