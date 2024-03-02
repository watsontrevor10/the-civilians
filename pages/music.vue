<template>
  <b-container fluid>
    <b-row class="centered">
      <h1 class="subtitle">Music</h1>
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
            :alt="video.meta"
            class="vid-thumb"
          ></b-img>
        </div>
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
          name: "Seven Nation Army - Line in the Studio",
          alt:
            "YouTube video of The Civilians playing Seven Nation Army in the studio",
          src: "https://www.youtube.com/embed/MCLjcr8DLxc?si=e4UjulL4wtTh6ARn",
          thumbnail: "https://img.youtube.com/vi/MCLjcr8DLxc/0.jpg"
        },

        {
          name: "Play That Funky Music - Live At Ridgeline",
          alt:
            "YouTube video of The Civilians playing Play That Funky Music live at Ridgeline High School",
          src: "https://www.youtube.com/embed/EXjZtF1rwqk?si=l6YSzQqLHKIArCiG",
          thumbnail: "https://img.youtube.com/vi/EXjZtF1rwqk/0.jpg"
        },
        {
          name: "I Feel Good - Live at Ridgeline",
          meta:
            "YouTube video of The Civilians playing I Feel Good live at Ridgeline High School",
          src: "https://www.youtube.com/embed/xuXysCQEmH8?si=dUNV-yWTmnm2gF1V",
          thumbnail: "https://img.youtube.com/vi/xuXysCQEmH8/0.jpg"
        },
        {
          name: "Play That Funky Music - Live at The Birthday Party",
          meta:
            "youTube Video of The Civilians playing Play That Funky Music live at a birthday party",
          src: "https://www.youtube.com/embed/0MF0ZK_D7zk?si=J9RPjaB0E1WP3LLv",
          thumbnail: "https://img.youtube.com/vi/0MF0ZK_D7zk/0.jpg"
        }
      ],
      selectedVideo:
        "https://www.youtube.com/embed/MCLjcr8DLxc?si=e4UjulL4wtTh6ARn"
    };
  },
  head() {
    return {
      title: "The Civilians - Music",
      meta: [
        {
          hid: "The Civilians Band music page",
          name: "The Civilians Band music page",
          content:
            "The Civilians Band music page. Music of the people, by the people, for the people."
        }
      ]
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
