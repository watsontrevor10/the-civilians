<template>
  <b-container fluid>
    <b-row class="centered">
      <h1 class="subtitle">Book the Band</h1>
    </b-row>

    <hr />

    <b-row class="centered">
      <div>
        <b-img-lazy
          src="https://res.cloudinary.com/dx4uolokd/image/upload/v1630554638/Civilians/clark.wedding-2477_ax3vjn.jpg"
          fluid
          rounded
          alt="The civilians rocking out at a wedding party"
        ></b-img-lazy>
      </div>
    </b-row>

    <b-row class="extra-padding">
      <b-col cols="6">
        <b-form
          @reset="onReset"
          v-if="show"
          name="contact-form"
          method="post"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
        >
          <!-- add netlify form name -->
          <input type="hidden" name="form-name" value="contact-form" />
          <b-form-group id="name-group" label="Name" label-for="client-name">
            <b-form-input
              id="client-name"
              name="name"
              v-model="form.name"
              placeholder="Enter Name"
              required
            >
            </b-form-input>
          </b-form-group>

          <b-form-group
            id="email-group"
            label="Email Address"
            label-for="email-address"
          >
            <b-form-input
              id="email-address"
              name="email"
              v-model="form.email"
              type="email"
              placeholder="Email Address"
              required
            >
            </b-form-input>
          </b-form-group>

          <b-form-group id="phone-group" label="Phone Number" label-for="phone">
            <b-form-input
              id="phone"
              name="phone"
              v-model="form.phone"
              type="phone"
              placeholder="Phone Number"
              required
            >
            </b-form-input>
          </b-form-group>

          <b-form-group
            id="request-group"
            label="Details of the Gig"
            label-for="request"
          >
            <b-form-textarea
              id="request"
              name="request"
              v-model="form.request"
              placeholder="When and where, type of venue, music preferences, vibe you're going for, etc."
              required
            >
            </b-form-textarea>
          </b-form-group>

          <b-button type="submit" variant="success" size="sm">Submit</b-button>
          <b-button type="reset" variant="dark" size="sm">Reset</b-button>
        </b-form>
      </b-col>
      <b-col cols="6" class="center-text">
        <h4>Corporate Events</h4>
        <h4>Weddings</h4>
        <h4>Birthdays</h4>
        <h4>Dances</h4>
        <h4>And More . . .</h4>
        <hr />
        <div>
          <p>
            From Classic Rock, Country, Modern Pop to Irish Pub Rock we
            specialize in playing many genres and making every event a party
          </p>
          <p>
            From <strong> Johnny Cash </strong> to
            <strong> Taylor Swift </strong>, <strong>Stevie Wonder</strong>,
            <strong>Nirvana</strong>, <strong>The Beatles</strong>,
            <strong>Led Zeppelin</strong>, and many more.
          </p>
        </div>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {
  data() {
    return {
      form: {
        name: "",
        email: "",
        phone: "",
        gigDate: "",
        gigTime: "",
        request: ""
      },
      show: true
    };
  },
  head() {
    return {
      title: "The Civilians - Contact",
      meta: [
        {
          hid: "The Civilians Band contact page",
          name: "The Civilians Band contact page",
          content:
            "Contact The Civilians Band for your next event. Music of the people, by the people, for the people for your next event. Contact us for corporate events, weddings, parties and other events."
        }
      ]
    };
  },
  methods: {
    onReset(event) {
      event.preventDefault();
      // Reset our form values
      this.form.email = "";
      this.form.name = "";
      this.form.phone = "";
      this.form.gigDate = "";
      this.form.gigTime = "";
      this.form.request = "";
      // Trick to reset/clear native browser form validation state
      this.show = false;
      this.$nextTick(() => {
        this.show = true;
      });
    }
  }
};
</script>

<style>
.form-container {
  max-width: 700px;
}

.center-text {
  text-align: center;
}
</style>
