<template>
  <b-container fluid>
    <b-row class="centered">
      <h1 class="subtitle">About The Band</h1>
    </b-row>

    <hr />

    <b-row class="band-bio">
      <b-col>
        <p>
          The Civilians are in a literal sense weekend warriors. They each serve
          in the Utah Army National Guard as part of the 23rd Army Band, and
          take the skills that they have learned as Army musicians to the
          civilian side.
        </p>
        <p>
          As members of the National Guard these five musicians have been
          playing together for over a decade, and have performed extensively
          throughout the state and abroad supporting our troops and local
          communities of Utah.
        </p>
        <p>
          They are well-versed in multiple genres; but focus heavily on popular,
          danceable tunes that appeal to a wide range of audiences.
        </p>
        <p>
          Whether as soldiers or Civilians, they want to continue performing and
          spreading their love of music and freedom to everyone around them.
          Thus The Civilians was born, a group of patriotic rock stars ready to
          take your event to the next level.
        </p>
        <b-button variant="outline-secondary" class="centered">
          <a href="/contact">
            Book the Band
          </a>
        </b-button>
      </b-col>
    </b-row>

    <hr />

    <b-row>
      <b-col class="centered">
        <h2 class="subtitle">The Band</h2>
      </b-col>
    </b-row>
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
            "Engineer by day, Swiss-army-knife multi-instrumentalist by night. Anything the song demands, Morgan plays, and does it well."
        },
        {
          title: "Tyler Putnam",
          subTitle: "Guitar, Vocals",
          imgSrc:
            "https://res.cloudinary.com/dx4uolokd/image/upload/v1630554626/Civilians/clark.wedding-2506_sdyrtf.jpg",
          imgAlt:
            "Tyler Putnam playing guitar and singing in what looks like a painful face",
          cardText:
            "A music teacher with a passion for an obscure band called The Beatles. But we don't hold that against him, because this man can shred on the guitar."
        },
        {
          title: "Zach Putnam",
          subTitle: "Guitar, Vocals",
          imgSrc:
            "https://res.cloudinary.com/dx4uolokd/image/upload/v1630554629/Civilians/clark.wedding-2541_ilaugt.jpg",
          imgAlt:
            "Zach Putnam playing guitar and singing in what looks like a painful face",
          cardText:
            "Those who can't do teach, and those who can't teach teach gym. While he does teach gym, those words don't apply to his guitar playing, or vocal prowess."
        },
        {
          title: "Neil Baxter",
          subTitle: "Drums, Percussion, Vocals",
          imgSrc:
            "https://res.cloudinary.com/dx4uolokd/image/upload/v1630554637/Civilians/clark.wedding-2520_hpmbpm.jpg",
          imgAlt:
            "Neil Baxter playing drums as if lost in a trance of groove and awesomeness",
          cardText:
            'Neil "Taxman" Baxter is (you guessed it) a taxman by day, and a solid drummer by night. Besides keeping the rhythm, he also watches the books.'
        },
        {
          title: "Trevor Watson",
          subTitle: "Bass, Vocals",
          imgSrc:
            "https://res.cloudinary.com/dx4uolokd/image/upload/v1630554628/Civilians/clark.wedding-3171_cqazlh.jpg",
          imgAlt:
            "Trevor Watson playing bass and singing in a very normal and bass-like manner",
          cardText:
            "Bassist. Yep, that's what he does. He also builds our websites. If he wasn't so good at both, we probably wouldn't keep him around."
        }
      ]
    };
  }
};
</script>

<style>
.band-bio {
  max-width: 1000px;
  display: flex;
  margin: auto;
  justify-content: center;
}

.artist-row {
  padding-bottom: 10px;
  justify-content: center;
}
</style>
