<script>
  export default {
    data() {
      return {
        name: this.tableNames
      }
    },
    props: {
      tableNames: {
        validator: (tableNames) => {
          return tableNames
        },
        type: String,
        required: true,
        default: 'Data'
      }
    }
  }
</script>

<template>
  <th>{{ tableNames }}</th>
</template>
