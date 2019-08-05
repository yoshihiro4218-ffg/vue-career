<template>
  <div class="accounts">
    <Nav/>
    <div class="container">
      <div class="memo" ref="mm">
        <div class="accountBox" v-for="(v, k) in accounts" :key="k">
          <div class="account_name">{{k}}</div>
          <div class="account_url" @click=directUrl(v)>{{v}}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Nav from '../components/Nav.vue';

export default {
  data() {
    return {
      accounts: {},
    };
  },
  components: {
    Nav,
  },
  created() {
    this.accounts = this.$store.state.accounts;
  },
  methods: {
    directUrl(url) {
      window.open(url);
    },
  },
};
</script>
<style>
@import url('https://fonts.googleapis.com/css?family=Nanum+Pen+Script&display=swap');
.accounts{
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
  min-height: 200px;
  height: auto;
  margin: 40px;
  width: 60vw;
  background-color: white;
  padding-top:20px;
  border-radius: 20px;
  padding-bottom:20px;
}
.accountBox{
  text-align: center;
}
.account_name{
  color: rgb(101, 111, 204);
  font-size: 30px;
  margin-bottom: 5px;
}
.account_url{
  color: rgb(159, 173, 105);
  font-size: 20px;
  margin-bottom: 15px;
}
.account_url:hover{
  color: rgb(218, 166, 108);
  text-decoration-line: underline;
  text-decoration-color: rgb(245, 133, 5);
}

</style>
