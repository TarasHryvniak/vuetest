<template>
<div class="wrapper">
      <b-sidebar id="sidebar-right" title="Create/Edit" right shadow> 
      <b-form class="px-3 py-2" @submit.prevent="validateForm">
        <label for="title">Title</label>
        <b-input 
          id="title"
          type="text" 
          class="mb-3" 
          required
          v-model="newVacancy.title"></b-input>
        <label for="description">Description</label>
        <b-input 
          id="description"
          type="text" 
          class="description"
          v-model="newVacancy.description"></b-input>
        <label for="dates">Dates</label>
        <ejs-datepicker :placeholder="waterMark" v-model="selectedDate" :format="dateFormat"></ejs-datepicker>
      <dateform 
        v-for="(date, index) in newVacancy.dates"
        :key="index"
        :date="date"
        :id="index"
        @deletedate="onDelete"
        @editdate="editDate"
      />
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
import { DatePickerPlugin } from '@syncfusion/ej2-vue-calendars';
import Vue from 'vue';

Vue.use(DatePickerPlugin)

export default {
  components: { 
    vacancy,
    slider,
    },
  name: 'IndexPage',
  data(){
    return({
      waterMark : 'Select a date',
      dateFormat : 'yyyy-MM-dd',
      selectedDate: null,
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
  watch:{
    selectedDate: function(val){
      this.newVacancy.dates.push({date: val})
    }
  },
  computed: {
    ...mapGetters('vacancies', ['getVacancies']),
    vacancies(){
      return (this.getVacancies)
    }
  },
  methods:{
    onDelete(id){
      this.newVacancy.dates.splice(id, 1)
    },
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
    editDate(data){
      console.log(data.index, data.field)
      this.newVacancy.dates[data.index] = {
        ...this.newVacancy.dates[data.index],
        ...data.field,
      }
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
@import '../node_modules/@syncfusion/ej2-base/styles/material.css';
@import '../node_modules/@syncfusion/ej2-buttons/styles/material.css';
@import '../node_modules/@syncfusion/ej2-inputs/styles/material.css';
@import '../node_modules/@syncfusion/ej2-popups/styles/material.css';
@import "../node_modules/@syncfusion/ej2-vue-calendars/styles/material.css";
.datepicker {
  display: flex;
}

.dateinput {
  width: 100%;
}

.wrapper {
  flex-direction: column;
  display: flex;
  width: 700px;
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
