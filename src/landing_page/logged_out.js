const renderLoggedOutTemplate = () => {
  const url = window.location.href.includes('#') ? window.location.href.split('#')[0] : window.location.href;
  // redirect URI for Spotify depends whether local or prod
  const redirectUri = url.includes('localhost') ? 'http://localhost:8888/' : 'https://covers.netlify.com/';

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