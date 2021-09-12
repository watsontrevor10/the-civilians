<template>
  <b-container fluid>
    <b-row class="centered">
      <h1 class="subtitle">Book the Band</h1>
    </b-row>

    <hr />

    <b-row>
      <b-col cols="6">
        <div class="centered">
          <b-img-lazy
            src="https://res.cloudinary.com/dx4uolokd/image/upload/v1630554638/Civilians/clark.wedding-2477_ax3vjn.jpg"
            fluid
            rounded
            alt="The civilians rocking out at a wedding party"
          ></b-img-lazy>
        </div>
        <div class="center-text">
          <h3>Corporate Events</h3>
          <h3>Weddings</h3>
          <h3>Birthdays</h3>
          <h3>Dances</h3>
          <h3>And More . . .</h3>
        </div>
      </b-col>
      <b-col cols="5">
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

          <b-button type="submit" variant="success">Submit</b-button>
          <b-button type="reset" variant="dark">Reset</b-button>
        </b-form>
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
