function sliderFunction() {
  $('.responsive').slick({
    dots: true,
    infinite: false,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 4,
          infinite: true,
          arrows: false,
          dots: true
        }
      },
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          arrows: false
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false
        }
      }
    ]
  });
    
};

async function getSliderContent() {
    try {
    const response = await fetch(
            'https://noroffcors.herokuapp.com/https://travelapi.mcmo.tech/wp-json/wp/v2/posts');
        const jsonResults = await response.json();
        const sliderArray = jsonResults;
        
        sliderArray.forEach(function (element) {
        
            if (element.better_featured_image.media_details.sizes.thumbnail.source_url) {
            document.querySelector('.slide__container').innerHTML += `
            <div class="slider__cont">
            <a href="details_post.html?id=${element.id}">
                <div class="slider__img slide${element.id}"></div>
                <h4 class="slider__headline">${element.title.rendered}</h4>
                <div class="slider__info">
                    <p>${element.excerpt.rendered}</p>
                </div>
                </a>
            </div>
    
            `;

            document.querySelector(`.slide${element.id}`).style.backgroundImage = `url(${element.better_featured_image.media_details.sizes.large.source_url})`;
            } else {
            document.querySelector('#slider').innerHTML += `
                <div class="h4__headline">   
                    <h4>${element.title.rendered}</h4>
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

