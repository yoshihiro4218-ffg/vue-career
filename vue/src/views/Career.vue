<template>
  <div class="career">
    <Nav></Nav>
    <div class="container">
      <div class="careerBox" ref="mm">
        <div v-for="d in cData" :key="d.title">
          <div class="cTitle">{{d.title}}</div>
          <pre class="cContent">{{d.content}}</pre>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Nav from '../components/Nav.vue';

export default {
  components: {
    Nav,
  },
  data() {
    return {
      cData: {},
    };
  },
  created() {
    this.cData = this.$store.state.career;
  },
};
</script>
<style>
@import url('https://fonts.googleapis.com/css?family=Nanum+Pen+Script&display=swap');
.career{
  min-height: 700px;
  height: auto;
  padding-top:100px;
  background-color: #52C5F2;
  font-family: 'Nanum Pen Script', cursive;
  margin: 5px 0px;
}
.container{
    width:100%;
    display: flex;
    align-items: center;
    vertical-align: middle;
    justify-content: center;
}
.careerBox{
  min-height: 500px;
  height: auto;
  margin: 40px;
  width: 60vw;
  background-color: white;
  border-radius: 20px;
  padding-bottom: 25px;
}
.cTitle{
  margin-top: 25px;
  color: rgb(78, 139, 218);
  font-size: 30px;
  padding-left: 20px;
  font-weight: bold;
}
.cContent{
  font-size: 25px;
  padding-left: 30px;
  font-family: 'Nanum Pen Script', cursive;
  margin: 0px;
  overflow-wrap: break-word;
  white-space: initial;
}
</style>
