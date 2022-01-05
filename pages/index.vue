<template>
  <div>
    <h4>Filter</h4>
    <h4>Shifts</h4>
    <vacancy 
      v-for="(vacancy, i) in vacancies"
      :key="i"
      :vacancy="vacancy"/>
    
  </div>
</template>

<script>
import vacancy from '../components/vacancy.vue'
import { mapGetters } from 'vuex';

export default {
  components: { vacancy },
  name: 'IndexPage',
  computed: {
    ...mapGetters('vacancies', ['getVacancies']),
    vacancies(){
      return (this.getVacancies)
    }
  }
}

</script>
