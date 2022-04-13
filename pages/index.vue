<template>
  <b-container fluid>
    <b-row class="centered">
      <b-col>
        <h2>Music of the people, by the people, for the people</h2>
        <h4>Utah cover band covering hits from every decade of rock 'n roll</h4>
        <hr />
      </b-col>
    </b-row>
    <b-row class="centered">
      <b-col>
        <Logo />
      </b-col>
    </b-row>
    <b-row class="centered">
      <b-button variant="outline-secondary">
        <a href="/about">Meet The Band</a>
      </b-button>
    </b-row>
  </b-container>
</template>

<script>
export default {
  head() {
    return {
      title: 'The Civilians Band',
      meta: [
        {
          hid: 'The Civilians Home Page',
          name: 'The Civilians Home Page',
          content:
            'The Civilians Rock band, a patriotic cover band from Utah. Playing corporate events, weddings, parties and other events.',
        },
      ],
    };
  },
};
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
  margin: 1em auto;
  display: flex;
  justify-content: center;
  text-align: center;
  align-items: center;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
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
