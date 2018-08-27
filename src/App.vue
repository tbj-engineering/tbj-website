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
    Footer
  },
  metaInfo: {
      titleTemplate: '%s | TB Johns Engineering'
    }
};
</script>

<style lang="scss">

 @import '../node_modules/bootstrap/scss/bootstrap.scss';
 @import './styles/variables.scss';


#app {
  font-family: -apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: $base;
}

.leader {
  color: $primary;
}
html, body, #app {
  height: 100%;
  padding: 0px;
  margin: 0px;
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

</style>
