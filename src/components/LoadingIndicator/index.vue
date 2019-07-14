<template>
  <loading
    :active.sync="showIndicator"
    :can-cancel="true"
    :is-full-page="true"
    color="#409EFF"
    :height="96"
    :width="96"
  />
</template>

<script>
import eb from '@/utils/event-bus'
import Loading from 'vue-loading-overlay'
import 'vue-loading-overlay/dist/vue-loading.css'
import { setTimeout } from 'timers'

export default {
  components: {
    Loading
  },

  data() {
    return {
      loadingCount: 0,
      showIndicator: false
    }
  },

  created() {
    eb.eventBus.$on('loadingon', this.showLoading)
    eb.eventBus.$on('loadingoff', this.hideLoading)
  },

  beforeDestroy() {
    eb.eventBus.$off('loadingon', this.showLoading)
    eb.eventBus.$off('loadingoff', this.hideLoading)
  },

  methods: {
    showLoading() {
      this.loadingCount++
      if (this.loadingCount === 1) {
        this.showIndicator = true
      }
    },
    hideLoading() {
      setTimeout(() => {
        if (this.loadingCount > 0) {
          this.loadingCount--
        }
        if (this.loadingCount <= 0) {
          this.showIndicator = false
        }
      }, 100)
    }
  }
}
</script>
