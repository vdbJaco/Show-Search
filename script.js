const apiUrl = 'https://api.tvmaze.com/search/shows?q=';

function searchShows() {
  var searchIn = document.getElementById('searchbar').value;
  var searchUrl = apiUrl + encodeURIComponent(searchIn);

  fetch(searchUrl)
    .then((response) => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then((data) => {
      const showListItem = document.getElementById('outputItems');
      showListItem.innerHTML = '';

      data.forEach((result) => {
        const showName = result.show.name;
        const showImage = result.show.image.medium;

        const show = document.createElement('div');

        const name = document.createElement('p');
        name.textContent = showName;

        const image = document.createElement('img');
        image.src = showImage;

        show.appendChild(name);
        show.appendChild(image);

        showListItem.appendChild(show);
      });
    })
    .catch((error) => {
      console.error('Error:', error);
    });
}

document.getElementById('searchBtn').addEventListener('click', searchShows);
