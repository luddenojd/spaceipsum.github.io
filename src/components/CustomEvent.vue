<script>
  export default {
    emits: ['launch-satellite'],
    data() {
      return {
        error: false
      }
    },
    methods: {
      onLaunchSatellite() {
        this.$emit('launch-satellite')
      }
    }
  }
</script>

<template>
  <input @click="onLaunchSatellite" type="button" value="Activate satellite!" />
</template>
