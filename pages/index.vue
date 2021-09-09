<template>
  <div class="centered extra-padding">
    <div>
      <Logo />
      <div>
        <h2 class="subtitle extra-padding">
          Music of the people, by the people, for the people
        </h2>
        <h4>
          covering hits from every decade of rock 'n roll
        </h4>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.centered {
  margin: 1.5em auto;
  display: flex;
  justify-content: center;
  text-align: center;
  align-items: center;
}

.title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #0a3161;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #0a3161;
  word-spacing: 5px;
}

.links {
  padding-top: 15px;
}

.extra-padding {
  padding: 0.5em;
}
</style>
