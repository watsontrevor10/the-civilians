<template>
  <b-navbar sticky="true" variant="dark" type="dark" class="nav-logo">
    <b-navbar-brand to="/">
      <div>
        <h1 class="header">
          The Civilians
        </h1>
      </div>
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
.header {
  color: #b31942;
  margin: 1px auto;
}
</style>
