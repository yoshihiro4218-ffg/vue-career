<template>
  <div class="container">
    <div id="nav">
        <button @click=replacePage>career</button>
        <button @click=replacePage>accounts</button>
        <button @click=replacePage>contact</button>
    </div>
  </div>
</template>

<script>

export default {
  methods: {
    replacePage(e) {
      const param = e.target.textContent;
      this.$router.push(param);
    },
  },
};
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Nanum+Pen+Script&display=swap');
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
