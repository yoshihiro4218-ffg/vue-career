<template>
  <div id="footer">
    <div class="container">
      <img src="@/assets/git_logo.png" alt="go git" @click="gogit"/>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      git_url: 'https://github.com/deokgoo',
    };
  },
  methods: {
    gogit() {
      window.open(this.git_url);
    },
  },
};
</script>

<style>
  #footer{
    background-color: #11A0D9;
    width:100%;
    height:60px;
  }
  .container{
    width:100%;
    height:100%;
    display: flex;
    align-items: center;
    vertical-align: middle;
    justify-content: center;
  }
  img{
    text-align: center;
  }
</style>
