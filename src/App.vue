<template>
  <div id="app">
    <router-view />
    <loading-indicator />
  </div>
</template>

<script>
import LoadingIndicator from '@/components/LoadingIndicator'

export default {
  name: 'App',
  components: {
    LoadingIndicator
  }
}
</script>
