<template>
  <div id="nav">
    <router-link to="/">Home</router-link>
    <router-link to="/about">About</router-link>
    <a :href="`${pages}/login/page1`">a链接跳转回 login page1 页面</a>
    <a :href="`${pages}/login/page2`">a链接跳转回 login page2 页面</a>
    <br />
    <br />
    <div>
      <a :href="`${pages}/login/page1/index`">这是index页面，跳转新的页面 login.html</a>
    </div>
    <br />
    <br />
    <!-- <img src="~@/assets/logo.png" alt="" /> -->
    <img :src="$t('message.logo')" alt="" />
    <img :src="imgLogo[$i18n.locale]" alt="">
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
import imgLogozh from '@/assets/logo.png';
import imgLogoen from '@/assets/loginLogo.png';

export default Vue.extend({
  data() {
    return {
      pages: process.env.VUE_APP_PAGES,
      langs: ['zh', 'en'],
      imgLogo: {
        zh: imgLogozh,
        en: imgLogoen
      }
    };
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
