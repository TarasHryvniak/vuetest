<template>
  <div>
    <span>price: {{filterValue}}</span>
    <input class="slider" type="range" v-model="filterValue" min="0" max="500"/>
  </div>
</template>

<script>

export default ({
    name: 'slider', 
    data(){
        return({
            filterValue: 500,
            min: 0,
             max: 500,
        })
    },
    watch: {
    filterValue:{
      handler(){
        this.$store.dispatch('vacancies/filter', { value: this.filterValue })
      }
    }
  },
})
</script>

<style scoped>
  .slider{
    width: 100%;
  }
</style>