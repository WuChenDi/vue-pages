import Vue from 'vue';
import type { VNode } from 'vue';
import './logo.css';

export default Vue.extend({
  data() {
    return {
      pages: process.env.VUE_APP_PAGES
    };
  },
  mounted() {
    console.log(this);
    console.log(this.$route.params);
  },
  render(): VNode {
    return (
      <div id="nav">
        <router-link to="/page1/123312">page1</router-link>
        <router-link to="/page2">page2</router-link>
        <a href={`${this.pages}/`}>a链接跳转回 index Home页面</a>
        <a href={`${this.pages}/about`}>a链接跳转回 index About页面</a>
        <br />
        <br />
        <div>
          <a href={`${this.pages}/index.html`}>这是login页面，跳转新的页面 index.html</a>
        </div>
        <br />
        <br />
        <router-view />
        <br />
        <br />
      </div>
    );
  }
});
