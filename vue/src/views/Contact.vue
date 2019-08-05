<template>
  <div class="career">
    <Nav></Nav>
    <div class="container">
      <iframe class="survey" :src="contact_url" frameborder="0"></iframe>
    </div>
  </div>
</template>

<script>
import Nav from '../components/Nav.vue';

export default {
  data() {
    return {
      contact_url: '',
    };
  },
  components: {
    Nav,
  },
  created() {
    this.contact_url = this.$store.state.contact_url;
  },
};
</script>
<style>
@import url('https://fonts.googleapis.com/css?family=Nanum+Pen+Script&display=swap');
.career{
  padding-top:100px;
  background-color: #52C5F2;
  min-height: 800px;
  margin: 5px 0px;
}
.container{
    width:100%;
    height:100%;
    display: flex;
    align-items: center;
    vertical-align: middle;
    justify-content: center;
}
.survey{
  margin: 40px;
  width: 60vw;
  min-height: 800px;
  height: auto;
  background-color: white;
  border-radius: 20px;
}
</style>
