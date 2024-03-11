<template>
  <div>
    <b-carousel
      id="main-carousel"
      class="carousel"
      v-model="slide"
      controls
      indicators
      :interval="8000"
      @sliding-start="onSlideStart"
      @sliding-end="onSlideEnd"
    >
      <div v-for="image in images" :key="image.number">
        <b-carousel-slide>
          <b-img-lazy
            slot="img"
            width="1000"
            fluid
            :src="image.url"
          ></b-img-lazy>
        </b-carousel-slide>
      </div>
    </b-carousel>
  </div>
</template>

<style>
.carousel {
  max-width: 1080px;
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
            "https://res.cloudinary.com/dx4uolokd/image/upload/ar_16:9,c_fill,e_sharpen,g_auto,q_auto:eco,w_1000/f_auto/Civilians/Civilians_yvnx4x.png"
        },
        {
          number: 2,
          url:
            "https://res.cloudinary.com/dx4uolokd/image/upload/w_1000,ar_16:9,c_fill,g_auto,e_sharpen/f_auto/Civilians/clark.wedding-2477_ax3vjn.png"
        },
        {
          number: 3,
          url:
            "https://res.cloudinary.com/dx4uolokd/image/upload/w_1000,ar_16:9,c_fill,g_auto,e_sharpen/f_auto/Civilians/clark.wedding-3764_xwcnkp.png"
        },
        {
          number: 4,
          url:
            "https://res.cloudinary.com/dx4uolokd/image/upload/w_1000,ar_16:9,c_fill,g_auto,e_sharpen/f_auto/Civilians/clark.wedding-2064_sf6nra.png"
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
