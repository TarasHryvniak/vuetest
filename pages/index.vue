<template>
<div class="wrapper">
      <b-sidebar id="sidebar-right" title="Create/Edit" right shadow> 
      <b-form class="px-3 py-2" @submit.prevent="validateForm">
        <div class='title-wrapper'>
            <b-input 
              type="text" 
              class="mb-3" 
              required
              v-model="newVacancy.title"></b-input>
        </div>
        <b-input 
          type="text" 
          class="description"
          v-model="newVacancy.description"></b-input>
        <b-button 
          variant="danger mt-5" 
          @click="deleteVacancy">Delete</b-button>
        <b-button 
          variant="outline-primary mt-5"
          type="submit">Save</b-button>
        <b-alert
          :show="dismissCountDown"
          dismissible
          variant="warning"
          @dismissed="dismissCountDown=0"
          @dismiss-count-down="countDownChanged"
        >
          <p>{{ errors }}</p>
    </b-alert>
      </b-form>
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
      dismissCountDown: 0,
      showDrawer: false,
      newVacancy: {
        title: '',
        description: '',
        dates: [],
        id: null
      },
      errors:[]
    })
  },
  computed: {
    ...mapGetters('vacancies', ['getVacancies']),
    vacancies(){
      return (this.getVacancies)
    }
  },
  methods:{
      countDownChanged(dismissCountDown) {
        this.dismissCountDown = dismissCountDown
      },
    validateForm(){

      this.errors = []

      if (this.newVacancy.title.length > 100) this.errors.push('title must be less than 100 characters')
      if(this.newVacancy.description.length > 500) this.errors.push('description must be less than 500 characters')

      if(this.errors.length > 0){
      this.dismissCountDown = 3

      }
      else this.saveVacancy()
    },
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

.description{
  min-height: 100px;
}
</style>
