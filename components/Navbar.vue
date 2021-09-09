<template>
  <b-navbar sticky="true" variant="dark" type="dark" class="nav-logo">
    <b-navbar-brand to="/">
      <img
        src="https://res.cloudinary.com/dx4uolokd/image/upload/v1631159597/Civilians/civilians-fav_n5iz9c.jpg"
        alt="The Civilians logo"
        class="logo"
      />
      The Civilians
    </b-navbar-brand>
    <b-navbar-nav align="center">
      <b-nav-item to="/about">About</b-nav-item>
      <b-nav-item to="/music">Music</b-nav-item>
      <b-nav-item to="/contact">Book Us</b-nav-item>
    </b-navbar-nav>
  </b-navbar>
</template>

<style>
.logo {
  max-width: 40px;
  margin-right: 0.5em;
}
.nav-logo {
  font-family: "CallOfOpsDuty";
}
</style>
