const menu = document.querySelector("#menu");
const nav = document.querySelector(".links");

menu.onclick = () => {
    console.log("Menu clicked!");
    menu.classList.toggle('bx-x');
    nav.classList.toggle('active');
};
/*=========================================scroll section active link================================= */
const section = document.querySelector("section");
const navLinks = document.querySelector("header nav a");
window.onscroll = () => {
    section.forEach(sec => {
        const top = window.scrollY;
        const offset  = sec.offsetTop - 150;
        const height = sec.offsetHeight;
        const id = sec.getAttribute('id');
        if (top >= offset && top < offset + height){
            navLinks.forEach.apply(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };
    }); 

/*=========================================sticky navbar================================= */

    const header = document.querySelector('header');
    header.classList.toggle('sticky',window.scrollY > 100);


/*=========================================remove toggle icon and navbar================================= */

    menu.classList.remove('bx-x');
    nav.classList.remove('active');

};


