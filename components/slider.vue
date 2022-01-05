<template>
    <vue-range-slider v-model="filterValue" :min="min" :max="max"></vue-range-slider>
</template>

<script>
import VueRangeSlider from 'vue-range-component'
import 'vue-range-component/dist/vue-range-slider.css'

export default ({
    name: 'slider', 
    components: {VueRangeSlider},
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
