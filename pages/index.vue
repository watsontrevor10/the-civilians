<template>
  <b-container fluid>
    <div class="extra-padding">
      <b-img
        src="https://res.cloudinary.com/dx4uolokd/image/upload/f_auto/q_auto/Civilians/the-civilians-banner_mykwyv.png"
        alt="The Civilians - Music of the people, by the people, for the people"
        fluid
      ></b-img>
    </div>

    <hr />
    <b-row style="justify-content: center;" class="extra-margin-top">
      <b-card
        title="The Civilians Band"
        bg-variant="light"
        border-variant="secondary"
        sub-title="Rock/pop/country wedding and party band"
        img-right
        img-width="500"
        img-src="https://res.cloudinary.com/dx4uolokd/image/upload/q_auto:eco/v1630554638/Civilians/clark.wedding-2477_ax3vjn.webp"
      >
        <hr />
        <b-card-text>
          With over a decade of music performance experience as Military
          musicians
        </b-card-text>
        <b-card-text>
          They play rock, pop, and country hits from every decade of Rock 'n
          Roll.
        </b-card-text>
        <b-card-text
          >The Civilians is the band to take your event and turn it into a
          rockin' party!</b-card-text
        >
      </b-card>
    </b-row>
    <b-row class="centered extra-margin-top extra-margin-bottom">
      <b-button variant="outline-secondary">
        <a href="/about">Meet The Band</a>
      </b-button>
    </b-row>
    <hr />
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
  padding: 1em;
}

.extra-margin-top {
  padding-top: 2em;
}

.extra-margin-bottom {
  margin-bottom: 2em;
}

.accent {
  color: #b31942;
}
</style>
