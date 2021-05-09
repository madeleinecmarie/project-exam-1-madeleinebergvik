// Loading gif
document.querySelector('.loading').innerHTML = `<img src="/img/sun.gif"/>`;

const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get('id');

async function getId(blogId) {
    try {
        // console.log(blogId);
        const response = await fetch('https://noroffcors.herokuapp.com/https://travelapi.mcmo.tech/wp-json/wp/v2/posts' + blogId);
        const jsonResults = await response.json();
        const blogArray = jsonResults.data;
        console.log(blogArray);

        document.title = blogArray.title.rendered;
        document.querySelector('.detail__container').innerHTML = `
        <h1>${blogArray.title.rendered}</h1>
        <img class="detail__img">${value.better_featured_image.media_details.sizes.medium.source_url}/>
        `;

    } catch{

    } finally {
    document.querySelector('.loading').classList.add('hide');
    }
}

getId(id);