<template>
  <div>



      <div class=" hero d-flex">

        <div class="container py-4">
          <div class="row d-flex">
            <div class="col-12 col-sm-7 align-self-center">
              <h2>T.B Johns designs and manufactures lighting control panels and bespoke keypads, for leading lighting control manufactures, installation contracting companies and end users.</h2>

            </div>
            <div class="col d-none d-sm-block align-self-end">
              <img alt="Hero images" class="img-fluid" src="../assets/hero-img.png" >
            </div>
          </div>
        </div>


      </div>
      <div class="py-1 strip text-center small align-self-end w-100">
        <div class="container">
          <div class="row">
            <div class="col text-center">
              Panel Design  - Panel Building - Bespoke Keypads - Research &amp; Development
            </div>
          </div>
        </div>
      </div>

<div class="container">
  <div class="row py-5">
    <div class="col-sm-6">
      <p>An independent company with over fifteen years experience,T.B Johns designs and builds panels using market leading control components.</p>
      <p>Our bespoke high quality, handmade, prewired enclosures are built to IEE Regulations BS 7671 and we guarantee design and functionality.</p>

      <div class="text-center p-5">
<img class="img-fluid w-75" src="../assets/img-1.png" >
      </div>
    </div>
    <div class="col-sm-6">
      <p>Building these panels on site can take four - six times longer to build than in our specialist workshop facility. Proving our panels to be more cost effective and ultimately more reliable, arriving on site fully operational.</p>
      <p>In 2013 alone T.B Johns built over 1000 panels for national and international projects, with shipments to the UK, Mainland Europe, Middle East and Africa. These projects include Iconic Buildings & Homes, Super Yachts and Residential Multi Dwelling
        Units.</p>
        <div class="text-center p-5">
  <img class="img-fluid w-75" src="../assets/img-2.png" >
        </div>
    </div>

  </div>
</div>
  </div>
</template>

<script>
export default {
  name: 'Homepage',
  data() {
    return {
      msg: 'TBJ Website',
    };
  },
  metaInfo: {
    title: 'TB Johns Engineering',
    titleTemplate: null
  }
};
</script>


<style lang="scss" scoped>
 @import '../styles/variables.scss';
.strip {
  background: lighten($blue,5%);
  color: rgba($white,0.5);
  text-transform: uppercase;

  z-index: 1;
  position: relative;
}

// Sass
@function randomBokeh($size, $spread) {
  $randomColor: rgba(255,255,255, random());
  $singleBokeh: radial-gradient(random()*$size+px at random()*$size*$spread+px random()*$size*$spread+px, $randomColor, $randomColor 96%, transparent);
  @return $singleBokeh;
}

@function gimmeBokehs($howMany, $size, $spread) {
  $bgList: ();
  @for $i from 1 through $howMany {
    $bgList: append($bgList, randomBokeh($size, $spread), comma);
  }
  @return $bgList;
}

.hero {
  position: relative;
  z-index: 2;
  img {
    position: relative;


  }
  &::before {
    content: '';
    position: absolute;
    bottom: 0px;
    top: 0px;
    left: 0px;
    right: 0px;
    width: 100%;
    height: 100%;
    background: gimmeBokehs(100, 200, 10);
    background-size: cover;
    opacity: 0.2;
  }
}

@media all and (max-width: 500px) { /* screen size until 500px */
    .hero {
        font-size:0.6em; /* 0.8x default size */
        }
    }

</style>
