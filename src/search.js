const showResults = ({ albums }) => {
  const albumItems = albums.items;
  let artists, images, image, name;
  albumItems.forEach(item => {
    ({ artists, images, name } = item);
    [, image] = images;
    //image = images[1];
    console.log(artists.map(artist => artist.name).join(', '));
    console.log(name);
    console.log(image);
  });
}

const fetchResults = async (form) => {
  const query = form.search.value;
  const regex = /&/g;
  let url, trimmedQuery, sanitizedQuery, json;
  // nothing in search box
  if (!query) return;
  trimmedQuery = query.trim();
  // spaces in search box
  if (!trimmedQuery) return;
  sanitizedQuery = decodeURI(trimmedQuery.replace(regex, ''));

  url = `https://api.spotify.com/v1/search?q=${sanitizedQuery}&type=album`;
  headers = {
    'Authorization': `Bearer ${token}`
  }

  let response = await fetch(url, {
    headers
  });
  if (response.ok) {
    let json = await response.json();
    console.log(json);
    showResults(json);
  } else {
    console.log(response);
  }
}

const submitHandler = (e) => {
  const form = e.target;

  e.preventDefault();
  if (form.id === 'searchForm') {
    fetchResults(form);
  }
}

document.addEventListener('submit', submitHandler);