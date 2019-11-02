const renderLoggedOutTemplate = () => {
  const url = window.location.href;
  let redirectUri, link;

  if (url.includes('localhost')) {
    redirectUri = 'http://localhost:8888/';
  } else {
    redirectUri = 'https://covers.netlify.com/';
  }

  // create link - url depends whether local or prod
  document.body.classList.add('logged-out');
  document.getElementById('app').innerHTML = `
    <h1 class="text-center">Covers.</h1>
    <h3 class="text-center mt-4">Your favorite album art.  All in one place.</h3>
    <div class="text-center mt-4">
      <a class="btn btn-primary btn-lg login-button" href="${url}.netlify/functions/callSpotifyApi?redirect_uri=${redirectUri}">
        Log In With Spotify
      </a>
    </div>
  `;
}

export default renderLoggedOutTemplate;