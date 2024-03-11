<template>
  <div class="max-height">
    <b-navbar sticky="true" type="light" variant="light" class="nav-logo">
      <b-navbar-brand to="/">
        <b-img-lazy
          height="60"
          src="https://res.cloudinary.com/dx4uolokd/image/upload/v1710192597/Civilians/The_Civilians_1_1_ctm5r4.png"
        ></b-img-lazy>
      </b-navbar-brand>
      <b-nav>
        <b-nav-item to="/about">About</b-nav-item>
        <b-nav-item to="/music">Music</b-nav-item>
        <b-nav-item to="/contact">Contact</b-nav-item>
      </b-nav>
    </b-navbar>
  </div>
</template>

<style>
.nav-logo {
  font-family: "CallOfOpsDuty";
}
.max-height {
  height: 20px;
  margin-bottom: 2em;
  padding-bottom: 4em;
}
</style>
