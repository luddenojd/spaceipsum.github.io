<script>
  import axios from 'axios'
  import RenderSearch3 from '../components/RenderSearch3.vue'
  import picture from '../../assets/Science_crippenTA_90758725.jpg'
  export default {
    created() {
      axios.get('https://isro.vercel.app/api/spacecrafts').then((response) => {
        console.log(response.data.spacecrafts)
        this.$store.commit('setSpaceCrafts', response.data.spacecrafts)
      })
    },
    data() {
      return {
        search: '',
        picture,
        error: false
      }
    },
    computed: {
      filteredSpacecrafts: function () {
        return this.$store.state.spacecrafts.filter((spacecraft) => {
          return spacecraft.name.toUpperCase().match(this.search.toUpperCase())
        })
      }
    },
    components: {
      RenderSearch3
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
    <input @click="error = !error" type="button" value="Launch spacecraft!" />
  </div>
  <h4 v-if="error" style="color: black">
    Spacecraft {{ this.$route.params.id }} has been launched!
    <img src="/assets/iconmonstr-rocket-11-32.png" alt="" />
  </h4>
  <div id="spaceDiv">
    <table>
      <thead>
        <tr>
          <th>Name</th>
        </tr>
      </thead>
      <tbody v-if="this.$store.state.spacecrafts !== null">
        <tr :key="spacecraft.id" v-for="spacecraft in filteredSpacecrafts">
          <RouterLink :to="`/thatid/${spacecraft.name}`">
            <td>{{ spacecraft.name }}</td>
          </RouterLink>
        </tr>
      </tbody>
    </table>
    <img id="craftPic" :src="picture" width="500" height="300" alt="" />
  </div>
  <RenderSearch3 />
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
    background-color: rgba(185, 176, 49, 0.1);
  }

  #spaceDiv {
    display: flex;
    flex-direction: row;
  }

  #craftPic {
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
