<template>
<div>

  <div class="py-5 hero">
    <div class="container">
      <div class="row">
        <div class="col">
          <h2>Services</h2>
        </div>
      </div>
    </div>
  </div>
  <div class="container py-4">
    <div class="row no-transition">

      <div class="col-sm-3">

        <ul class="list-group list-group-flush sticky-top py-3">
          <li class="list-group-item" v-b-toggle.collapse1>Panel Design</li>
          <li class="list-group-item" v-b-toggle.collapse2>Industrial Commercial panels</li>
          <li class="list-group-item" v-b-toggle.collapse3>Bespoke Lighting Encolusures</li>
          <li class="list-group-item" v-b-toggle.collapse4>Bespoke Keypads and Faceplates</li>
          <li class="list-group-item" v-b-toggle.collapse5>Exhibition, Showroom &amp; Demonstration</li>
        </ul>
      </div>
      <div class="col">
        <div class="is-collapse py-3">


          <b-collapse visible id="collapse1" accordion="my-accordion">
            <h2 class="mb-4">Panel Design</h2>
            <h5 class="leader mb-4">T.B Johns can offer a large range of panel types and control component solutions, which can be supplied or issued by the customer.</h5>
            <p>Ensuring ease of installation all our panels have a fully removable mounting frame, are supplied with a mounting kit and instruction sheet, all cables, circuits and devices are labelled to customer requirements.</p>
            <p>From basic lighting control to comprehensive scaled systems enabling expansion as your needs grow, T.B Johns will develop a control strategy most appropriate to your needs</p>
            <ul class="mt-4 mb-5">
              <li>Options of switching only, wireless, 1-10V, DSI and Dali
              </li>
              <li>Create Circuit List and loading Schedules from the client lighting fixtures schedule</li>
              <li>Advise on appropriate Control Components options
              </li>
              <li>Panel sizing</li>
              <li>Options of top or bottom field cable entry</li>
              <li>Wall or floor mount panels</li>
              <li>MCB protection for field circuits or feed through terminals</li>
              <li>Internal control components protected by RCBO</li>
            </ul>
            <h4 class="mt-4 mb-5">Stages of the build</h4>
            <div class="row d-flex align-items-center">
              <div class="col-4 text-center">
                <div class="has-large w-75">
                  <img class="img-fluid" src="../assets/IMG_0990.jpg" @click="showModal($event)">
                  <font-awesome-icon icon="search-plus" />
                </div>

              </div>
              <div class="col">
                <p class="font-weight-bold ">Removable Frame with Components</p>
                <ul class="mt-4 ml-0 pl-3">
                  <li>Frame is removed from enclosure by one screw in each corner.</li>
                  <li>A Cable Management System (CMS) is installed.</li>
                  <li>Components and other equipment are installed onto the frame.</li>
                  <li>Enclosure is wired, labelled and tested</li>
                </ul>
              </div>

            </div>

            <div class="row d-flex align-items-center mt-5">
              <div class="col-4 text-center">
                <div class="has-large w-75">
                  <img class="img-fluid" src="../assets/IMG_1005.jpg" @click="showModal($event)">
                  <font-awesome-icon icon="search-plus" />
                </div>
              </div>
              <div class="col">
                <p class="font-weight-bold ">Enclosure Fully Wired with Fitted Covers</p>
                <ul class="mt-4 ml-0 pl-3">
                  <li>Each cover is fitted by a locking screw at each corner.</li>
                  <li>Fixing Kit and Instructions come with the enclosure.</li>
                  <li>Wiring Diagrams and RCBO Test Sheets come with the enclosure.</li>
                </ul>
              </div>

            </div>

            <div class="row d-flex align-items-center mt-5">
              <div class="col-4 text-center">
                <div class="has-large w-75">
                  <img class="img-fluid" src="../assets/IMG_1001.jpg" @click="showModal($event)">
                  <font-awesome-icon icon="search-plus" />
                </div>
              </div>
              <div class="col">
                <p class="font-weight-bold ">Completed Enclosure with Door</p>
                <ul class="mt-4 ml-0 pl-3">
                  <li>Colour combinations are avail able to suit clients needs.</li>
                  <li>Doors can be fitted to either side of enclosure.</li>
                  <li>Doors can be closed by a handle or key lock.</li>
                  <li>Clear doors available up to 6 row.</li>
                  <li>Plain doors are available up to 8 row.</li>
                  <li>Company Logo and branding services are available.</li>
                </ul>
              </div>

            </div>
            <div class="row mt-5 mb-5">
              <div class="col">
                <img class="img-fluid" src="../assets/sotb-5.png">
              </div>
            </div>
            <div class="row mt-5 mb-5 d-flex align-items-center">
              <div class="col-sm-6">
                <p class="font-weight-bold ">Photographs showing a 1250mm x 800mm x 210mm Wall Mount 8 row enclosure comprising.</p>
                <ul class="mt-4 ml-0 pl-3">
                  <li>2 x Universal Dimmers each with 4 Channels of forward or reverse phase dimming.</li>
                  <li>12 Units each with 4 x Channels of 0-10v fluorescent and LED dimming or switching of lighting and fans.</li>
                </ul>

              </div>
              <div class="col text-center">
                <div class="has-large w-50">
                  <img class="img-fluid" src="../assets/5M9B1803.jpg" @click="showModal($event)">
                  <font-awesome-icon icon="search-plus" />
                </div>
              </div>
            </div>

            <div class="row mt-5">
              <div class="col">
                <h5 class="mb-5">T.B Johns Designed &amp; Built a multiple planel lighting control system for a luxury hotel utilising Lutron dimming &amp; switching modules including processing units.</h5>
              </div>
            </div>
            <div class="row mt-5 d-flex align-items-center">
              <div class="col-sm-4">
                <div class="has-large w-75">
                  <img class="img-fluid" src="../assets/5M9B4778.jpg" @click="showModal($event)">
                  <font-awesome-icon icon="search-plus" />
                </div>
              </div>
              <div class="col-sm-4">
                <div class="has-large w-75">
                  <img class="img-fluid" src="../assets/5M9B4795.jpg" @click="showModal($event)">
                  <font-awesome-icon icon="search-plus" />
                </div>
              </div>
              <div class="col-sm-4">
                <div class="has-large w-75">
                  <img class="img-fluid" src="../assets/5M9B4808.jpg" @click="showModal($event)">
                  <font-awesome-icon icon="search-plus" />
                </div>
              </div>
            </div>
          </b-collapse>
          <b-collapse id="collapse2" accordion="my-accordion">
            <h2 class="mb-4">Industrial Commercial Panels</h2>
            <h5 class="leader mb-4">T.B Johns Designed & Built a large scalable multiple panel lighting control system for an International Airport in the Middle East utilising Crestron Industrial dimming & switching modules.</h5>
            <div class="text-center p-5">
              <img class="img-fluid w-75" src="../assets/icp-1.png" @click="showModal($event)">
            </div>

          </b-collapse>
          <b-collapse id="collapse3" accordion="my-accordion">
            <h2 class="mb-4">Bespoke Lighting Enclosures</h2>
            <h5 class="leader mb-4">T.B. Johns can design and manufacture lighting enclosures to meet the client’s design and specification requirements.</h5>
            <p class="font-weight-bold">The enclosures can be manufactured in any: -</p>
            <ul class="mt-4 mb-5">
              <li>Size.</li>
              <li>Colour.</li>
              <li>Top, bottom or side cable entry.</li>
              <li>Door can be designed to suit installation needs.</li>
              <li>Removable frames to allow easy installation.</li>
              <li>Wall or floor mount.</li>
              <li>Surface or flush mount.</li>
            </ul>
            <img class="img-fluid" src="../assets/ble-1.png" @click="showModal($event)">
          </b-collapse>
          <b-collapse id="collapse4" accordion="my-accordion">
            <h2 class="mb-4">Bespoke Keypads and Faceplates</h2>
            <h5 class="leader mb-4">T.B Johns can manufacture unique keypads to architects design and specifications for individual projects in a variety of finishes, button configurations, screw or screw-less application.</h5>
            <p>T.B Johns designed and manufactured this control module and Face Plate combination to accommodate the Crestron C2N-UN1810.This application allowed for a very narrow Face Plate and back box, as specified by the architects designing a luxury
              Italian Super Yacht.</p>
            <div class="text-center p-5">
              <img class="img-fluid w-75" src="../assets/bkf-1.png" @click="showModal($event)">
            </div>
          </b-collapse>
          <b-collapse id="collapse5" accordion="my-accordion">
            <h2 class="mb-4">Exhibition, Showroom & Demonstration</h2>
            <h5 class="leader mb-4">T.B Johns Designs and builds a range of Exhibition, Showroom & Demonstration Panels.These can include demonstration cases as shown in the photographs.</h5>
            <div class="row text-center">
              <div class="col-sm-6">
                <div class="text-center p-5">
                  <img class="img-fluid w-75" src="../assets/esd-1.png">
                </div>

                <p>CLWI - DIM UEX Demonstration Case showing internal components and wiring</p>
              </div>
              <div class="col">
                <div class="text-center p-5">
                  <img class="img-fluid w-75" src="../assets/esd-2.png">
                </div>
                <p>Complete CLWI - DIM UEX Demonstration Case</p>
              </div>
            </div>
            <div class="row text-center">
              <div class="col-sm-6">
                <div class="text-center p-5">
                  <img class="img-fluid w-75" src="../assets/esd-3.png">
                </div>
                <p>CLWI - DIM UEX Demonstration Case featuring reliable internet wireless technology</p>
              </div>
              <div class="col">
                <div class="text-center p-5">
                  <img class="img-fluid w-75" src="../assets/esd-4.png">
                </div>
                <p>Dimmer Unit panel designed to show the smooth dimming of Crestron LED down lights</p>
              </div>
            </div>
          </b-collapse>
        </div>
      </div>




    </div>
  </div>
  <b-modal ref="myModalRef" size="lg" centered no-fade hide-footer>
    <div class="d-block text-center">
      <img class="img-fluid" v-bind:src="imageLink">
    </div>
  </b-modal>
</div>
</template>

<script>
export default {
  name: 'Services',
  data() {
    return {
      msg: 'Services',
      imageLink: ''
    };
  },
  metaInfo: {
    title: 'Services',
  },
  methods: {
    showModal(img) {
      this.imageLink = img.target.src;
      this.$refs.myModalRef.show();
    },
    hideModal() {
      this.$refs.myModalRef.hide();
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
@import '../styles/variables.scss';

.is-collapse > * {
    transition: none!important;
}

.list-group-item {
    box-shadow: inset 11px 0 0 -7px $blue;
    border: none;
    pointer-events: none;
    color: $base;
    font-weight: bold;
    &.collapsed {
        font-weight: normal;
        box-shadow: none;
        color: inherit;
        pointer-events: all;
        cursor: pointer;
    }

}
img {

    position: relative;
}

.has-large {
    position: relative;
    margin: 0 auto;
    img {
        border: 4px solid #f8f8f8;
        cursor: zoom-in;
    }

    svg {
      position: absolute;
      bottom: 0px;
      right: 0px;
      padding: 5px;
      z-index: 33;
      background: #f8f8f8;
      font-size: 24px;
      color: #b6b6b6;
    }

    &:hover {
      svg {
            color: $base;
      }
    }
}
</style>
