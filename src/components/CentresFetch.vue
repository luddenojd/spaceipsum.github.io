<script>
  import axios from 'axios'
  import RenderSearch2 from '../components/RenderSearch2.vue'
  export default {
    created() {
      axios.get('https://isro.vercel.app/api/centres').then((response) => {
        console.log(response.data.centres)
        this.$store.commit('setCenters', response.data.centres)
      })
    },
    data() {
      return {
        search: '',
        error: false
      }
    },
    computed: {
      filteredCentres: function () {
        return this.$store.state.centres.filter((center) => {
          return center.name.toUpperCase().match(this.search.toUpperCase())
        })
      }
    },
    components: {
      RenderSearch2
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
    <input @click="error = !error" type="button" value="Enter this center!" />
  </div>
  <h4 v-if="error" style="color: black">
    {{ this.$route.params.id }} has been entered!
    <img src="/assets/iconmonstr-door-7-32.png" alt="" />
  </h4>
  <div id="centerDiv">
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>City</th>
          <th>State</th>
        </tr>
      </thead>
      <tbody v-if="this.$store.state.centres !== null">
        <tr :key="center.id" v-for="center in filteredCentres">
          <RouterLink :to="`/thisid/${center.name}`">
            <td>{{ center.name }}</td>
          </RouterLink>
          <td>{{ center.Place }}</td>
          <td>{{ center.State }}</td>
        </tr>
      </tbody>
    </table>
    <div id="picDiv">
      <img id="centerPic" src="/assets/527057_1280.jpeg" width="500" alt="" />
      <img id="nextPic" src="/assets/88.jpg" width="500" alt="" />
    </div>
  </div>
  <RenderSearch2 />
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

  #centerDiv {
    display: flex;
    flex-direction: row;
  }
  #picDiv {
    display: flex;
    flex-direction: column;
    margin-left: 40px;
  }

  #centerPic {
    margin-bottom: 20px;
    border-radius: 10px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.7), 0 6px 20px 0 rgba(0, 0, 0, 0.7);
  }

  #nextPic {
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
