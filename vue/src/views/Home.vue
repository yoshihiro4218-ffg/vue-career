<template>
  <div class="home">
    <Header/>
    <Content/>
    <Footer/>
  </div>
</template>

<script>
/* eslint-disable import/no-unresolved */
import Header from '@/components/Header.vue';
import Footer from '@/components/Footer.vue';
import Content from '@/components/Content.vue';

export default {
  name: 'home',
  components: {
    Header,
    Content,
    Footer,
  },
};

</script>
