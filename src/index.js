import './styles.scss';


let loggedIn;

const setLogin = async () => {
  let url, hashFragment, token, headers, response, json;
  if (window.location.href.includes('#')) {
    hashFragment = window.location.href.split("#access_token=")[1];
    [token] = hashFragment.split("&token_type=Bearer&expires_in");

    url = 'https://api.spotify.com/v1/me';
    headers = {
      'Authorization': `Bearer ${token}`
    }

    // if ajax request to spotify successful
    // then user is really logged in
    response = await fetch(url, {
      headers
    });

    if (response.ok) {
      json = await response.json();
      console.log(json);
      loggedIn = true;
    } else {
      console.log(response);
      loggedIn = false;
    }
  // if no hash
  } else {
    loggedIn = false;
  }  
}


const renderLoggedInTemplate = () => {

}


const renderLoggedOutTemplate = () => {
  const url = window.location.href;
  let redirectUri, link;

  if (url.includes('localhost')) {
    redirectUri = 'http://localhost:8888/';
  } else {
    redirectUri = 'https://covers.netlify.com/';
  }

  // create link - url depends whether local or prod
  link = document.createElement('a');
  link.innerText = 'Login';
  link.href = `${url}.netlify/functions/callSpotifyApi?redirect_uri=${redirectUri}`;

  // render logged out template
  document.getElementById('app')
    .appendChild(link);
}


const init = async () => {
  await setLogin();

  if (loggedIn) {
    // show loggedin template
    console.log('logged in');
    
  } else {
    console.log('logged out');
    renderLoggedOutTemplate();
  }  
}



init();

