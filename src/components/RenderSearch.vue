<script>
  // import axios from 'axios'
  export default {
    data() {
      return {
        id: this.$route.params
      }
    },
    created() {
      this.$watch(
        () => this.$route.params,
        () => {
          // this.fetchData()
        }
      )
    },

    methods: {
      // fetchData() {
      //   axios
      //   this.get(
      //     'https://isro.vercel.app/api/customer_satellites' +
      //       this.$route.params.id
      //   ).then((response) => {
      //     console.log(response.data.customer_satellites)
      //     this.$store.commit('setSatellites', response.data.customer_satellites)
      //   })
      // }
    }
  }
</script>

<template>
  <div>
    <h1>{{ $route.params.id }}</h1>
  </div>
</template>
