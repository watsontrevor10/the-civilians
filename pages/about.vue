<template>
  <b-container fluid>
    <b-row class="centered">
      <h1 class="subtitle">About The Band</h1>
    </b-row>

    <hr />

    <b-row class="band-bio">
      <b-col>
        <p>
          The Civilians are, in a literal sense, weekend warriors. They each
          serve as musicians in the U.S. Army in addition to performing as The
          Civilians. As Army musicians these five have been performing together
          for over a decade, and have performed extensively throughout the state
          and abroad supporting our troops and local communities of Utah.
        </p>
        <p>
          As The Civilians, they are well-versed in multiple genres; but focus
          heavily on popular, danceable tunes that appeal to a wide range of
          audiences. They bring that decade of performance experience to the
          Civilian side to create amazing experiences for audiences, and for any
          event.
        </p>
        <p>
          Whether as soldiers or Civilians, they want to continue performing and
          spreading their love of music and freedom to everyone around them.
          They are a group of patriotic rock stars, ready to turn any event into
          a party, and take that party to the next level.
        </p>
        <Book-button />
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
    <b-row>
      <Book-button />
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
            "https://res.cloudinary.com/dx4uolokd/image/upload/ar_16:9,c_fill,e_sharpen,q_auto:eco,f_auto,w_1000/v1630554628/Civilians/clark.wedding-2548_f24xnd.png",
          imgAlt: "Morgan Davidson playing trumpet",
          cardText:
            "Engineer by day, Swiss-army-knife multi-instrumentalist by night. Anything the song demands, Morgan plays, and does it well."
        },
        {
          title: "Tyler Putnam",
          subTitle: "Guitar, Vocals",
          imgSrc:
            "https://res.cloudinary.com/dx4uolokd/image/upload/ar_16:9,c_fill,e_sharpen,q_auto:eco,f_auto,w_1000/f_auto/q_auto:good/v1632179606/Civilians/clark.wedding-2506_msofzt.png",
          imgAlt:
            "Tyler Putnam playing guitar and singing in what looks like a painful face",
          cardText:
            "A music teacher with a passion for an obscure band called The Beatles. But we don't hold that against him, because this man can shred on the guitar."
        },
        {
          title: "Zach Putnam",
          subTitle: "Guitar, Vocals",
          imgSrc:
            "https://res.cloudinary.com/dx4uolokd/image/upload/ar_16:9,c_fill,e_sharpen,q_auto:eco,f_auto,w_1000/f_auto/q_auto:good/v1632179605/Civilians/clark.wedding-2541_bklmhy.png",
          imgAlt:
            "Zach Putnam playing guitar and singing in what looks like a painful face",
          cardText:
            "Those who can't do, teach; and those who can't teach, teach gym. While he does teach gym, those words don't apply to his guitar playing, or vocal prowess."
        },
        {
          title: "Neil Baxter",
          subTitle: "Drums, Percussion, Vocals",
          imgSrc:
            "https://res.cloudinary.com/dx4uolokd/image/upload/ar_16:9,c_fill,e_sharpen,q_auto:eco,f_auto,w_1000/f_auto/q_auto:good/v1630554637/Civilians/clark.wedding-2520_hpmbpm.png",
          imgAlt:
            "Neil Baxter playing drums as if lost in a trance of groove and awesomeness",
          cardText:
            'Neil "Taxman" Baxter is (you guessed it) a taxman by day, and a solid drummer by night. Besides keeping the rhythm, he also watches the books.'
        },
        {
          title: "Trevor Watson",
          subTitle: "Bass, Vocals",
          imgSrc:
            "https://res.cloudinary.com/dx4uolokd/image/upload/ar_16:9,c_fill,e_sharpen,q_auto:eco,f_auto,w_1000/f_auto/q_auto:good/v1630554628/Civilians/clark.wedding-3171_cqazlh.png",
          imgAlt:
            "Trevor Watson playing bass and singing in a very normal and bass-like manner",
          cardText:
            "Bassist. Yep, that's what he does. He also builds our websites. He’s pretty useful to have around, so we let him stay."
        }
      ]
    };
  },
  head() {
    return {
      title: "About",
      meta: [
        {
          hid: "About The Civilians Band",
          name: "About The Civilians Band",
          content:
            "The Civilians Band is a group of Army Musicians performing out of uniform. They play music from every decade of rock 'n roll for all types of events."
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
