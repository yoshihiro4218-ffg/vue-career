<template>
  <div id="content">
    <div class="container">
      <div id="nav">
          <button>Career</button>
          <button>Accounts</button>
          <button>Contact</button>
      </div>
    </div>
    <div class="container">
      <div class="memo"></div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    name() {

    },
  },
};
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Nanum+Pen+Script&display=swap');
#content{
  padding-top:100px;
  background-color: #52C5F2;
  min-height: 800px;
  margin: 5px 0px;
}
.memo{
  height: 500px;
  margin: 40px;
  width: 60vw;
  background-color: white;
}
button{
  background-color:#0A4B73;
  color: white;
  border: none;
  height: 35px;
  width: 10vw;
  min-width: 100px;
  margin: 0px 1vw;
  border-radius: 15px;
  overflow: hidden;
  font-family: 'Nanum Pen Script', cursive;
  font-weight: 100;
  font-size: 25px;
}

</style>
