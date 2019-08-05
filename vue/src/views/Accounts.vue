<template>
  <div class="career">
    <Nav></Nav>
    <div class="container">
      <div class="memo" ref="mm"></div>
    </div>
  </div>
</template>

<script>
import Nav from '../components/Nav.vue';

export default {
  components: {
    Nav,
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
.memo{
  height: 500px;
  margin: 40px;
  width: 60vw;
  background-color: white;
}
</style>
