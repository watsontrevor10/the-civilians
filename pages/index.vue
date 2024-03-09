<template>
  <b-container fluid>
    <div class="extra-padding">
      <b-img
        src="../assets/the-civilians-banner.png"
        alt="The Civilians - Music of the people, by the people, for the people"
        fluid
      ></b-img>
    </div>

    <b-row class="centered">
      <b-col>
        <Logo />
      </b-col>
    </b-row>
    <hr />
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
      title: "The Civilians Band",
      meta: [
        {
          hid: "The Civilians Home Page",
          name: "The Civilians Home Page",
          content:
            "The Civilians Rock band, a patriotic cover band from Utah. Playing corporate events, weddings, parties and other events."
        }
      ]
    };
  }
};
</script>

<style>
.header {
  color: #b31942;
  margin: 0.3px auto;
}

.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.centered {
  margin: 0.5em auto;
  display: flex;
  justify-content: center;
  text-align: center;
  align-items: center;
}

.right-align {
  margin: 0.5em auto;
  display: flex;
  justify-content: center;
  text-align: center;
  align-items: right;
}

.title {
  font-family: "CallOfOpsDuty", "Quicksand", "Source Sans Pro", -apple-system,
    BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  display: block;
  font-weight: 100;
  font-size: 90px;
  color: #b31942;
  letter-spacing: 2px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #0a3161;
  word-spacing: 5px;
  margin: 0.5em;
}

.links {
  padding-top: 15px;
}

.extra-padding {
  padding: 0.5em;
}

.extra-margin-top {
  margin-top: 2em;
}

.accent {
  color: #b31942;
}
</style>
