<template>
<div id="app">
  <Header/>
  <div id="content">
    <router-view/>
  </div>
  <Footer/>
</div>
</template>

<script>
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default {
  name: 'App',
  components: {
    Header,
    Footer,
  },
  metaInfo: {
    titleTemplate: '%s | TB Johns Engineering',
  },
};
</script>

<style lang="scss">
@import '../node_modules/bootstrap/scss/bootstrap.scss';
@import './styles/variables.scss';

#app {
    font-family: -apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif; // eslint-disable-line
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: $base;
}

.leader {
    color: $primary;
}
#app,
body,
html {
    height: 100%;
    padding: 0;
    margin: 0;
}
#app {
    display: flex;
    flex-direction: column;
}
#content {
    flex: 1 0 auto;
}

.hero {
    background: -webkit-linear-gradient(-45deg, rgba(27,90,143,1) 0%,rgba(9,38,83,1) 100%);
    color: $white;
}

.brand-color {
    background: $primary;
}

.brand-color-light {
    background: lighten($primary,10%);
}

.modal-dialog {
  min-width: 80%;
  overflow: hidden;
  border-radius: 5px;
      position: relative;
  box-shadow: 0 15px 35px rgba(50,50,93,.1), 0 5px 15px rgba(0,0,0,.07);
  .modal-content {
    border: none;

  }
  .modal-header {
  border: none;
  position: absolute;
  top: 0px;
  left: 0px;
  right: 0px;
  z-index: 333;
.close {
  opacity: 0.8;
}

  }

  .modal-body {
    padding: 0px;
    margin: 0px;
    overflow: hidden;
    border-radius: 0px 0px 5px 5px;
  }

  img {
    cursor: default;
  }
}


</style>
