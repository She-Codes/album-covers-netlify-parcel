import './styles.scss';

let link, url, redirectUri;
  
  //<a href="/.netlify/functions/callSpotifyApi">Login</a>
if (window.location.href.includes('#')) {
  url = window.location.href.split('#')[0];
} else {
  url = window.location.href;
}

if (url.includes('localhost')) {
  redirectUri = 'http://localhost:8888/';
} else {
  redirectUri = 'https://covers.netlify.com/';
}

link = document.createElement('a');
link.innerText = 'Login';
link.href = `${url}.netlify/function/callSpotifyApi?redirect_uri=${redirectUri}`;

document.getElementById('app')
  .appendChild(link);