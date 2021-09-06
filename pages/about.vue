<template>
  <b-container fluid="sm">
    <div class="centered">
      <h1 class="subtitle">About The Band</h1>
    </div>

    <b-row class="artist-row">
      <div v-for="artist in artistBios" :key="artist.title">
        <b-col md="auto" class="artist-row">
          <b-card
            :title="artist.title"
            :sub-title="artist.subTitle"
            :img-src="artist.imgSrc"
            :img-alt="artist.imgAlt"
            img-top
            style="max-width: 30em"
          >
            <card-text>
              {{ artist.cardText }}
            </card-text>
          </b-card>
        </b-col>
      </div>
    </b-row>
  </b-container>
</template>

<script>
export default {
  name: "about",
  components: {},
  data() {
    return {
      artistBios: [
        {
          title: "Morgan Davidson",
          subTitle: "Trumpet, Guitar, Banjo, Vocals, Recorder, Bagpipes, etc.",
          imgSrc:
            "https://res.cloudinary.com/dx4uolokd/image/upload/v1630554628/Civilians/clark.wedding-2548_f24xnd.jpg",
          imgAlt: "Morgan Davidson playing trumpet",
          cardText:
            "Engineer by day, Swiss-army-knife multi-instrumentalist by night. Anything the song demands, Morgan plays, and does it well.",
          style: "max-width: 30em"
        },
        {
          title: "Tyler Putnam",
          subTitle: "Guitar, Vocals",
          imgSrc:
            "https://res.cloudinary.com/dx4uolokd/image/upload/v1630554626/Civilians/clark.wedding-2506_sdyrtf.jpg",
          imgAlt:
            "Tyler Putnam playing guitar and singing in what looks like a painful face",
          cardText:
            "A music teacher with a passion for an obscure band called The Beatles. But we don't hold that against him, because this man can shred on the guitar.",
          style: ""
        },
        {
          title: "Zach Putnam",
          subTitle: "Guitar, Vocals",
          imgSrc:
            "https://res.cloudinary.com/dx4uolokd/image/upload/v1630554629/Civilians/clark.wedding-2541_ilaugt.jpg",
          imgAlt:
            "Zach Putnam playing guitar and singing in what looks like a painful face",
          cardText:
            "Those who can't do teach, and those who can't teach teach gym. While he does teach gym, those words don't apply to his guitar playing, or vocal prowess.",
          style: ""
        },
        {
          title: "Neil Baxter",
          subTitle: "Drums, Percussion, Vocals",
          imgSrc:
            "https://res.cloudinary.com/dx4uolokd/image/upload/v1630554637/Civilians/clark.wedding-2520_hpmbpm.jpg",
          imgAlt:
            "Neil Baxter playing drums as if lost in a trance of groove and awesomeness",
          cardText:
            'Neil "Taxman" Baxter is (you guessed it) a taxman by day, and a solid drummer by night. Besides keeping the rhythm, he also watches the books.',
          style: ""
        },
        {
          title: "Trevor Watson",
          subTitle: "Bass, Vocals",
          imgSrc:
            "https://res.cloudinary.com/dx4uolokd/image/upload/v1630554628/Civilians/clark.wedding-3171_cqazlh.jpg",
          imgAlt:
            "Trevor Watson playing bass and singing in a very normal and bass-like manner",
          cardText:
            "Bassist. Yep, that's what he does. He also builds our websites. If he wasn't so good at both, we probably wouldn't keep him around.",
          style: ""
        }
      ]
    };
  }
};
</script>

<style>
.artist-row {
  padding-bottom: 10px;
  justify-content: center;
}
</style>
