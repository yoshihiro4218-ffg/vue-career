<template>
    <div id="header">
      <div id="profile">
        <div class="dotBox">
          <div class="dot"></div>
        </div>
      </div>
    </div>
</template>

<script>
export default {

};
</script>

<style>
#header{
  background-color: #072A40;
  width:100%;
  height:100px;
}
.dotBox{
  width:100%;
  height:100%;
  align-items: center;
  vertical-align: middle;
  justify-content: center;
  display: flex;
}
.dot {
  height: 120px;
  width: 120px;
  background-color: #bbb;
  background-image: url('https://avatars3.githubusercontent.com/u/20182365?s=460&v=4');
  -webkit-background-size: contain;
  -moz-background-size: contain;
  -o-background-size: contain;
  background-size: contain;
  border-radius: 50%;
  border: 3px solid white;
  margin-top:50px;
}
</style>
