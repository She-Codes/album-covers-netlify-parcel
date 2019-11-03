const renderLoggedInTemplate = () => {
  document.body.classList.remove('logged-out');

  document.getElementById('app').innerHTML = `
  <nav class="navbar navbar-light bg-light justify-content-start">
    <a class="navbar-brand" href="#">
      Covers
    </a>
    
    <form id="searchForm" class="form-inline">
      <input class="form-control mr-sm-2" type="search" name="search" placeholder="Search" aria-label="Search">
      <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
    </form>
  </nav>

  <nav class="navbar navbar-dark bg-dark">
    <form class="form-inline">
      <select name="" id="" class="custom-select form-control">
        <option value="new releases">New Releases</option>
        <option value="my covers">My Covers</option>
      </select>
    </form>
  </nav>

  <div class="content pt-4 mx-3">
    <div class="album"></div>
    <div class="album"></div>
    <div class="album"></div>
    <div class="album"></div>
    <div class="album"></div>
    <div class="album"></div>
    <div class="album"></div>
    <div class="album"></div>
  </div>
  `;
}

export default renderLoggedInTemplate;