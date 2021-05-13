// Loading gif
document.querySelector('.loading').innerHTML = `<img src="/img/sun.gif"/>`;

const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get('id');

async function getId(blogId) {
    try {
        // console.log(blogId);
        const response = await fetch('https://noroffcors.herokuapp.com/https://travelapi.mcmo.tech/wp-json/wp/v2/posts/' + blogId);
        const jsonResults = await response.json();
        // const blogArray = jsonResults.data;
        // console.log(blogArray);

        // document.title = jsonResults.title.rendered;

        document.querySelector('.detail__container').innerHTML = `
        <h1 class="h1__headline__js">${jsonResults.title.rendered}</h1>
        <div class="content__text">${jsonResults.content.rendered}</div>
        `;

    } catch{

    } finally {
    document.querySelector('.loading').classList.add('hide');
    }
}

getId(id);

