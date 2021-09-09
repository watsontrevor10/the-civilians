<template>
  <b-container fluid="sm">
    <b-row class="centered">
      <h1 class="subtitle">Music</h1>
    </b-row>

    <hr />

    <b-row>
      <b-col class="video-container">
        <div
          v-for="video in videos"
          :key="video.name"
          role="button"
          v-on:click="selectedVideo = video.src"
        >
          <b-img
            :src="video.thumbnail"
            fluid
            rounded
            alt="The civilians rocking out at a wedding party"
            class="vid-thumb"
          ></b-img>
        </div>
      </b-col>
    </b-row>
    <b-row class="video-container">
      <b-col>
        <b-embed
          type="iframe"
          aspect="16by9"
          :src="selectedVideo"
          allowfullscreen
          class="video"
        >
        </b-embed>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {
  name: "music",
  components: {},
  data() {
    return {
      videos: [
        {
          name: "video 1",
          src: "https://www.youtube.com/embed/lNz9gDH2-j8",
          thumbnail: "https://img.youtube.com/vi/lNz9gDH2-j8/0.jpg"
        },
        {
          name: "soundcloud",
          src:
            "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/26638905%3Fsecret_token%3Ds-HidDk&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true",
          thumbnail:
            "https://i1.sndcdn.com/avatars-000124907985-cqjagg-t500x500.jpg"
        },
        {
          name: "video 2",
          src: "https://www.youtube.com/embed/rNNdz0f5hdg",
          thumbnail: "https://img.youtube.com/vi/rNNdz0f5hdg/0.jpg"
        }
      ],
      selectedVideo: "https://www.youtube.com/embed/lNz9gDH2-j8"
    };
  }
};
</script>

<style>
.video-container {
  display: flex;
  margin: 0 auto;
}

.video {
  padding: 1em;
}

.video-container {
  display: flex;
  flex-direction: row;
  flex-wrap: no-wrap;
  margin: auto;
  justify-content: center;
}

.vid-thumb {
  max-width: 6em;
  max-height: 4em;
  height: auto;
  position: relative;
  margin-right: 0.7em;
  cursor: pointer;
  transition: transform 0.3s;
}

.vid-thumb:hover {
  transform: scale(1.2);
}
</style>
