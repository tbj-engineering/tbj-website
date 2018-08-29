<template>
<div>
  <div class="container">
    <div class="row">
      <div class="col">
        <b-navbar toggleable="md" type="light" class="p-0">



          <b-navbar-brand to="/" class="no-styling">
          <img alt="TB Johns logo" src="../assets/logo.png" width="180">
          </b-navbar-brand>

          <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>
          <b-collapse is-nav id="nav_collapse">

            <b-navbar-nav>
              <b-nav-item to="services">Services</b-nav-item>
              <b-nav-item to="contact">Contact</b-nav-item>
            </b-navbar-nav>

            <b-navbar-nav class="ml-auto">
              <span class="text-muted nav-item"><font-awesome-icon icon="phone" /><a class="font-weight-bold text-muted ml-2 no-link" href="tel://01724 763300">01724 763 300</a></span></b-navbar-brand>
            </b-navbar-nav>

          </b-collapse>
        </b-navbar>
      </div>
    </div>
  </div>



</div>
</template>

<script>
export default {
  name: 'Header',
  data() {
    return {};
  }
};
</script>


<style lang="scss" scoped>
  @import '../styles/variables.scss';
  .nav-item {
      margin: 0 5px;
      text-decoration: none;
      color: lighten($base,5%);
      font-weight: 600;

      .nav-link {
          border-bottom: 2px solid transparent;
          color: $base;
          &:hover {
              color: $base;
              border-color: #eaeaea;
          }
      }

      .nav-link {
          &.active {
              border-color: $blue;
          }
      }

  }

  .no-styling {
      .nav-link {
          &.active {
              border-color: transparent;
          }

      }
  }

  .no-link {
      text-decoration: none;
  }




@media (max-width: 575.98px) {
  #nav_collapse {


      .nav-item {
        text-align: center;
        margin: 10px 0px;
        .nav-link {
          display: inline-block;

        &.last-child {
          margin-top: 10px;
          margin-bottom: 20px;
        }
      }
    }

}
}
</style>
