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
          @submit.prevent="onSubmit"
          @reset="onReset"
          v-if="show"
          name="civilians-form"
          method="post"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
        >
          <!-- add netlify form name -->
          <input type="hidden" name="civilians-form" value="civilians-form" />
          <b-form-group id="name-group" label="Name" label-for="client-name">
            <b-form-input
              id="client-name"
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
              v-model="form.phone"
              type="phone"
              placeholder="Phone Number"
              required
            >
            </b-form-input>
          </b-form-group>
          <b-form-group
            id="date-group"
            label="Date of Your Event"
            label-for="gigDate"
          >
            <b-form-datepicker id="gigDate" v-model="form.gigDate" required>
            </b-form-datepicker>

            <b-form-timepicker id="gigTime" v-model="form.gigTime" required>
            </b-form-timepicker>
          </b-form-group>
          <b-form-group
            id="request-group"
            label="Details of the Gig"
            label-for="request"
          >
            <b-form-textarea
              id="request"
              v-model="form.request"
              type="text"
              placeholder="Type of venue, music preferences, vibe you're going for, etc."
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
import axios from "axios";

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
    encode(data) {
      return Object.keys(data)
        .map(
          key => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`
        )
        .join("&");
    },
    onSubmit(event) {
      event.preventDefault();
      const axiosConfig = {
        header: { "Content-Type": "application/x-www-form-urlencoded" }
      };
      axios.post(
        "/about",
        this.encode({
          "form-name": "ask-question",
          ...this.form
        }),
        axiosConfig
      );
      this.form.email = "";
      this.form.name = "";
      this.form.phone = "";
      this.form.gigDate = "";
      this.form.gigTime = "";
      this.form.request = "";
      this.show = false;
      this.$nextTick(() => {
        this.show = true;
      });
    },
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
