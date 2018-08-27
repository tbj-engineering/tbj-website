<template>
<div class="container ">
  <div class="row">
    <div class="small text-muted col py-4 text-center">
    &copy; TB Johns Ltd {{year}}
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'Footer',
  data() {
    return {
      year: new Date().getFullYear(),
    };
  },
};
</script>


<style scoped>
</style>
