<template>
  <div>
    <Navbar />
    <Nuxt class="main-window" />
    <Footer />
  </div>
</template>

<style>
@font-face {
  font-family: "CallOfOpsDuty";
  src: local("CallOfOpsDuty"), url("./assets/CallOfOpsDuty.otf");
}

html {
  font-family: "CallOfOpsDuty", Roboto, "Helvetica Neue", Arial, sans-serif;
  background-color: #ffffff;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

.main-window {
  margin: auto;
  max-width: 1600px;
}

a,
h1,
h2,
h3,
h4 {
  font-family: "CallOfOpsDuty";
  color: #0a3161;
  padding: .5em;
}

a:hover {
  color: #465f7a;
}

hr {
  border-width: 4px;
  background-color: #0a3161;
  margin-bottom: 2em;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}

.button--green {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #3b8070;
  color: #3b8070;
  text-decoration: none;
  padding: 10px 30px;
}

.button--green:hover {
  color: #fff;
  background-color: #3b8070;
}

.button--grey {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #35495e;
  color: #35495e;
  text-decoration: none;
  padding: 10px 30px;
  margin-left: 15px;
}

.button--grey:hover {
  color: #fff;
  background-color: #35495e;
}
</style>
