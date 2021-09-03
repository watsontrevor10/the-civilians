<template>
  <div>
    <b-carousel
      id="main-carousel"
      v-model="slide"
      controls
      indicators
      :interval="6000"
      @sliding-start="onSlideStart"
      @sliding-end="onSlideEnd"
    >
      <div v-for="image in images" :key="image.number">
        <b-carousel-slide :img-src="image.url"></b-carousel-slide>
      </div>
    </b-carousel>
  </div>
</template>

<style>
.NuxtLogo {
  animation: 1s appear;
  margin: auto;
}

@keyframes appear {
  0% {
    opacity: 0;
  }
}
</style>

<script>
export default {
  data() {
    return {
      slide: 0,
      sliding: null,
      images: [
        {
          number: 1,
          url:
            "https://res.cloudinary.com/dx4uolokd/image/upload/w_1000,ar_16:9,c_fill,g_auto,e_sharpen/v1630554743/Civilians/Civilians_yvnx4x.jpg"
        },
        {
          number: 2,
          url:
            "https://res.cloudinary.com/dx4uolokd/image/upload/w_1000,ar_16:9,c_fill,g_auto,e_sharpen/v1630554638/Civilians/clark.wedding-2477_ax3vjn.jpg"
        },
        {
          number: 3,
          url:
            "https://res.cloudinary.com/dx4uolokd/image/upload/w_1000,ar_16:9,c_fill,g_auto,e_sharpen/v1630554636/Civilians/clark.wedding-3764_xwcnkp.jpg"
        },
        {
          number: 4,
          url:
            "https://res.cloudinary.com/dx4uolokd/image/upload/w_1000,ar_16:9,c_fill,g_auto,e_sharpen/v1630554632/Civilians/clark.wedding-2064_sf6nra.jpg"
        }
      ]
    };
  },
  methods: {
    onSlideStart(slide) {
      this.sliding = true;
    },
    onSlideEnd(slide) {
      this.sliding = false;
    }
  }
};
</script>
