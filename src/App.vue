<template>
  <div id="app">
    <img src="./assets/logo.png">
    <ul>
      <!--<li><router-link to="/hello">Hello</router-link></li>-->
      <!--<li><router-link to="/learn">Learn</router-link></li>-->
      <li><router-link :to="{name:'HelloWorld',params:{id: helloParams}}">Hello</router-link></li>
      <li><router-link :to="{name:'LearnVue'}">Learn</router-link></li>
    </ul>
    <button @click='goToHello' type="button">去hello</button>
    <router-view />
  </div>
</template>

<script>

export default {
  name: 'App',
  data(){
    return{
      helloParams:"helloDemo",
      clickParams:'哈哈啊哈哈'
    }
  },
  methods:{
    goToHello(){
      //this.$router.push({path:'/hello'})
      //this.$router.replace({path:'/hello'})
      //this.$router.go(-1) //回退多少次页面

      this.$router.push({ name: 'HelloWorld', params: { id: this.clickParams }})
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
  ul li{
    list-style:none;
    display: inline-block;
    margin:0 20px;

  }
  .active{
    color:red;
  }
</style>
