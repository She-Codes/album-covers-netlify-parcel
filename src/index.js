import 'bootstrap';
import renderLoggedOutTemplate from './landing_page/logged_out';
import renderLoggedInTemplate from './logged_in';
import './search';
import './styles.scss';


let loggedIn, token;

const setLogin = async () => {
  let url, hashFragment, headers, response, json;
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


const init = async () => {
  await setLogin();

  if (loggedIn) {
    renderLoggedInTemplate(token);
    console.log('logged in');

  } else {
    console.log('logged out');
    renderLoggedOutTemplate();
  }
}



init();

