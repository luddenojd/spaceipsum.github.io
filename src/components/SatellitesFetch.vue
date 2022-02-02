<script>
  import axios from 'axios'
  import PropComp from '../components/PropComp.vue'
  import CustomEvent from '../components/CustomEvent.vue'
  import RenderSearch from '../components/RenderSearch.vue'
  export default {
    created() {
      axios
        .get('https://isro.vercel.app/api/customer_satellites')
        .then((response) => {
          console.log(response.data.customer_satellites)
          this.$store.commit('setSatellites', response.data.customer_satellites)
        })
    },
    data() {
      return {
        search: '',
        proparray: this.$store.state.customer_satellites,
        error: false
      }
    },
    computed: {
      filteredSatellites: function () {
        return this.$store.state.customer_satellites.filter(
          (customer_satellite) => {
            return customer_satellite.id
              .toUpperCase()
              .match(this.search.toUpperCase())
          }
        )
      }
    },
    methods: {
      onLaunchSatellite() {
        console.log('Satellite has been launched!')
      }
    },
    components: {
      PropComp,
      CustomEvent,
      RenderSearch
    }
  }
</script>

<template>
  <div id="inputDiv">
    <input
      id="searchbar"
      placeholder="Search..."
      v-model="search"
      type="text"
    />
    <custom-event
      @click="error = !error"
      @launch-satellite="onLaunchSatellite"
    />
  </div>
  <h4 v-if="error" style="color: black">
    Satellite {{ this.$route.params.id }} has been activated!
    <img src="/assets/iconmonstr-antenna-6-32.png" alt="" />
  </h4>
  <div id="flexBox">
    <table>
      <thead>
        <tr>
          <prop-comp table-names="ID" />
          <prop-comp table-names="Country" />
          <prop-comp table-names="Launch Date" />
          <prop-comp table-names="Launcher" />
          <prop-comp table-names="Mass" />
        </tr>
      </thead>
      <tbody v-if="this.$store.state.customer_satellites !== null">
        <tr
          :key="customer_satellite.id"
          v-for="customer_satellite in filteredSatellites"
        >
          <RouterLink :to="`/id/${customer_satellite.id}`">
            <td>{{ customer_satellite.id }}</td>
          </RouterLink>
          <td>
            {{ customer_satellite.country }}
          </td>
          <td>{{ customer_satellite.launch_date }}</td>
          <td>{{ customer_satellite.launcher }}</td>
          <td>{{ customer_satellite.mass }}</td>
        </tr>
      </tbody>
    </table>
    <img
      id="satPic"
      src="/assets/Satellite_FHM56J.jpg"
      width="500"
      height="400"
      alt=""
    />
  </div>

  <RenderSearch />
</template>

<style lang="scss" scoped>
  $text_color: black;

  table {
    font-family: arial, sans-serif;
    font-size: 12px;
    color: $text_color;
    border-collapse: collapse;
    width: 50%;
  }

  td,
  th {
    border: 1px solid rgba(185, 176, 49, 0.1);
    text-align: left;
    padding: 8px;
  }

  tr:nth-child(even) {
    background-color: rgba(185, 176, 49, 0.2);
  }

  #flexBox {
    display: flex;
    flex-direction: row;
  }

  #satPic {
    margin-left: 40px;
    border-radius: 10px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.7), 0 6px 20px 0 rgba(0, 0, 0, 0.7);
  }

  #inputDiv {
    margin-bottom: 30px;
    margin-left: 10px;
  }

  #searchbar {
    margin-right: 5px;
  }
</style>
