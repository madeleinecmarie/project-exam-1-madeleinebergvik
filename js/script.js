// HAMBURGER MENU

// const hamburger = document.querySelector(".hamburger");
// const navMenu = document.querySelector('.ul__elements');

// hamburger.addEventListener("click", mobileMenu);

// function mobileMenu() {
//     hamburger.classList.toggle("active");
//     navMenu.classList.toggle("active");
// }

// const navLink = document.querySelectorAll('.link');

// navLink.forEach(n => n.addEventListener("click", closeMenu));

// function closeMenu() {
//     hamburger.classList.remove("active");
//     navMenu.classList.remove("active");
// };

const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.ul__elements');
    const navLinks = document.querySelectorAll('.ul__elements li');

    burger.addEventListener('click', () => {
        nav.classList.toggle('nav-active');

        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = '';
            } else {
             link.style.animation = `navLinkFade 0.3s ease forwards ${index / 4 + 1}s`;
            }
             // console.log(index / 7);
         });

         // Burger animation
         burger.classList.toggle('toggle');
    });


}
navSlide();




function sliderFunction() {

$('.slide__container').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3
  });

}

  async function getSliderContent() {
    try {
    const response = await fetch(
        'https://noroffcors.herokuapp.com/https://travelapi.mcmo.tech/wp-json/wp/v2/posts');
        const jsonResults = await response.json();
        const SliderContent = jsonResults;
        SliderContent.forEach(function (value) {
        
            if (value.better_featured_image.media_details.sizes.large.source_url) {
            document.querySelector('#sliders').innerHTML += `
            <div class="posts">
                <img src="${value.better_featured_image.media_details.sizes.thumbnail.source_url}">
            </div>
            `;
            } else {
            document.querySelector('#sliders').innerHTML += `
                <div class="h2__container">   
                    <h2>${value.title.rendered}</h2>
                </div>
            `;
            }
        });
        sliderFunction();
    } catch (error) {   
    } finally {
    }
    }
    
    getSliderContent();
  