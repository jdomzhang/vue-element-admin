import Vue from 'vue'

const eventBus = new Vue({})

export default {
  eventBus,
  loadingOn() {
    this.eventBus.$emit('loadingon')
  },
  loadingOff() {
    this.eventBus.$emit('loadingoff')
  }
}
