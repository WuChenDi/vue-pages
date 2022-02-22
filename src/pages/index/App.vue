<template>
  <div id="nav">
    <router-link to="/">Home</router-link>
    <router-link to="/about">About</router-link>
    <br />
    <br />
    <div>
      <a href="login.html">这是index页面，跳转新的页面 login.html</a>
    </div>
    <router-view />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  data() {
    return {};
  },
  mounted() {
    console.log(this);
    console.log(this.$router);
  }
});
</script>
<style>
#nav {
  background: cadetblue;
  text-align: center;
}

#nav > a {
  display: inline;
  padding: 5px 10px;
}
</style>
