<template>
  <nav class="navbar navbar-expand-lg fixed-top navbar-dark" style="background-color: #59CFD7;">
    <div class="container-fluid">
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <a class="nav-link active me-2" aria-current="page" href="#">Home</a>
          </li>
          <li class="nav-item dropdown me-2">
            <a
              class="nav-link dropdown-toggle"
              href="#"
              id="navbarDropdown"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Category
            </a>
            <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
              <li><a class="dropdown-item" href="#">Restaurant</a></li>
              <li><a class="dropdown-item" href="#">Accomodation</a></li>
              <li><a class="dropdown-item" href="#">Tour-Travel</a></li>
              <li><a class="dropdown-item" href="#">Attraction</a></li>
              <li><a class="dropdown-item" href="#">Merchant</a></li>
            </ul>
          </li>
        </ul>
        <form class="d-flex">
        <button class="btn btn-outline-light me-2" type="submit">Login</button>
        </form>
        <ul class="navbar-nav auto">
        <li class="nav-item dropdown me-2">
            <a
              class="nav-link dropdown-toggle"
              href="#"
              id="navbarDropdown"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              EN
            </a>
            <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
              <li><a class="dropdown-item" href="#">IDN</a></li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {};
</script>

<style>
</style>