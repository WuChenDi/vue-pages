<template>
  <div id="nav">
    <router-link to="/page1">page1</router-link>
    <router-link to="/page2">page2</router-link>
    <a href="/">a链接跳转回 index Home页面</a>
    <a href="/about">a链接跳转回 index About页面</a>
    <br />
    <br />
    <div>
      <a href="/index.html">这是login页面，跳转新的页面 index.html</a>
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
  background: violet;
  text-align: center;
}

#nav > a {
  display: inline;
  padding: 5px 10px;
}
</style>
