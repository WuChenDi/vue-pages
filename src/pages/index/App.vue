<template>
  <div id="nav">
    <router-link to="/">Home</router-link>
    <router-link to="/about">About</router-link>
    <a href="/login/page1">a链接跳转回 login page1 页面</a>
    <a href="/login/page2">a链接跳转回 login page2 页面</a>
    <br />
    <br />
    <div>
      <a href="/login.html">这是index页面，跳转新的页面 login.html</a>
    </div>
    <br />
    <br />
    <img src="~@/assets/loginLogo.png" alt="" />
    <!-- <img src="~@/assets/logo.png.local" alt="" /> -->
    <br />
    <br />
    <select v-model="$i18n.locale">
      <option v-for="(lang, i) in langs" :key="`Lang${i}`" :value="lang">
        {{ lang }}
      </option>
    </select>
    <br />
    <br />
    {{ $t('message.hello') }}
    <br />
    <br />
    <router-view />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  data() {
    return { langs: ['zh', 'en'] };
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
