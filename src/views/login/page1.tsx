import Vue from 'vue';
import type { VNode } from 'vue';

export default Vue.extend({
  name: 'page1',
  render(): VNode {
    return (
      <div>
        page1 <br /><br />
        accessToken: {this.$route.params.accessToken ?? ''}
      </div>
    );
  }
});
