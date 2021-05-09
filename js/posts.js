// Loading gif
document.querySelector('.loading').innerHTML = `<img src="/img/sun.gif"/>`;

const apiUrl = 'https://noroffcors.herokuapp.com/https://travelapi.mcmo.tech/wp-json/wp/v2/posts';

const getBlogPosts = async () => {
    try {
		const repsonse = await fetch(apiUrl);
		const blogs = await repsonse.json();
        console.log(blogs);

   blogs.forEach((value) => {
       document.querySelector('.blog__container').innerHTML += `
       <a class="blog__link" href="details_post.html?id=${value.id}">
       <div class="blog__card">
       <div class="blog__img blog${value.id}"></div>
       <h2 class="h2__js">${value.title.rendered}</h2>
       <div class="bodytext__js">
       <p>${value.excerpt.rendered}</p>
       </div>
       </a>
       `;

        document.querySelector(`.blog${value.id}`).style.backgroundImage = `url(${value.better_featured_image.media_details.sizes.medium.source_url})`;
   });

	} catch {
        } finally {
          document.querySelector('.loading').classList.add('hide');
      }
  }

getBlogPosts();

