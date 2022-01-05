<template>
<div class="wrapper">
      <b-sidebar id="sidebar-right" title="Create/Edit" right shadow> 
      <div class="px-3 py-2">
        <div class='title-wrapper'>
            <b-textarea class="mb-3" v-model="newVacancy.title" disabled></b-textarea>
        </div>
        <b-textarea v-model="newVacancy.description" disabled></b-textarea>
        <b-button variant="outline-primary mt-5" @click="saveVacancy">Save</b-button>
        <b-button variant="danger mt-5" @click="deleteVacancy">Delete</b-button>
      </div>
    </b-sidebar>
  <h4 class="mb-4">Filter</h4>
      <slider />
  <h4 class="mt-4">Shifts</h4>
  <div class="edit-bar">

    <b-button v-b-toggle.sidebar-right>Add shift</b-button>
  </div>
  <div>
    <vacancy 
      v-for="(vacancy, i) in vacancies"
      :key="i"
      :vacancy="vacancy"
      :id="i"
      @edit="setToEdit"/>
  </div>

</div>
</template>

<script>
import vacancy from '../components/vacancy.vue'
import { mapGetters } from 'vuex';
import slider from '../components/slider.vue'


export default {
  components: { vacancy, slider},
  name: 'IndexPage',
  data(){
    return({
      showDrawer: false,
      newVacancy: {
        title: '',
        description: '',
        dates: [],
        id: null
      }
    })
  },
  computed: {
    ...mapGetters('vacancies', ['getVacancies']),
    vacancies(){
      return (this.getVacancies)
    }
  },
  methods:{
    setToEdit(vacancy){
      this.newVacancy = {...vacancy}
    },
    deleteVacancy(){
      this.$store.dispatch('vacancies/delete', { id: this.newVacancy.id})
    },
    saveVacancy(){

      if(this.newVacancy.id === null){
        this.$store.dispatch('vacancies/add', {...this.newVacancy})
      }
      else{
        this.$store.dispatch('vacancies/edit', {...this.newVacancy})
      }
        this.newVacancy = {
        title: '',
        description: '',
        dates: [],
        id: null
      }
    }
  }
}
</script>

<style>
.wrapper {
  flex-direction: column;
  display: flex;
  width: 500px;
  padding: 40px;
  margin: auto;
}
.edit-bar {
  display: flex;
  justify-content: flex-end;
  padding: 10px 0;
}

h4 {
  font-size: 20px;
}

h6 {
  font-size: 14px;
}
</style>
