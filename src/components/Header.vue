<template>
<div class="container">
  <div class="row">
    <div class="col p-2 d-flex justify-content-between align-items-center">
      <div>
        <router-link to="/"><img alt="TB Johns logo" src="../assets/logo.png" width="180"></router-link>
        <span class="text-muted ml-2"><font-awesome-icon icon="phone" /><a class="font-weight-bold text-muted ml-2" href="tel://01724 763300">01724 763300</a></span>
      </div>

        <div class="d-flex align-items-center nav">

      <router-link class="nav-item" to="services">Services</router-link>
      <router-link class="nav-item" to="contact">Contact Us</router-link>
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
      border-color: $primary;
    }
  }
</style>
