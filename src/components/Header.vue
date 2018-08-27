<template>
<div>
  <b-navbar toggleable="md" type="light" class="p-0">



    <b-navbar-brand>
      <router-link to="/"><img alt="TB Johns logo" src="../assets/logo.png" width="180"></router-link>
    </b-navbar-brand>
    <b-navbar-toggle target="nav_collapse" class="mr-3"></b-navbar-toggle>
    <b-collapse is-nav id="nav_collapse">

      <b-navbar-nav>
        <router-link class="nav-item" to="services">Services</router-link>
        <router-link class="nav-item" to="contact">Contact</router-link>
      </b-navbar-nav>

      <b-navbar-nav class="ml-auto">
          <span class="text-muted mr-3"><font-awesome-icon icon="phone" /><a class="font-weight-bold text-muted ml-2 no-link" href="tel://01724 763300">01724 763 300</a></span></b-navbar-brand>
      </b-navbar-nav>

    </b-collapse>
  </b-navbar>


</div>
</template>

<script>
export default {
  name: 'Header',
  data() {
    return {};
  },
};
</script>


<style lang="scss" scoped>
@import '../styles/variables.scss';
.nav-item {
    margin: 10px;
    text-decoration: none;
    color: lighten($base,5%);
    font-weight: 600;
    border-bottom: 2px solid transparent;

    &:hover {
        color: $base;
        border-color: #eaeaea;
    }
    &.router-link-active {
        border-color: $blue;
    }
}

.no-link {
  text-decoration: none;
}
</style>
