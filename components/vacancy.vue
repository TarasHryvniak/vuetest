<template>
    <b-card
        class="item mb-5"
    >
        <div class='title-wrapper'>
            <b-card-title class="mb-3">{{vacancy.title}}</b-card-title>
            <img src='~/assets/edit.svg' class='edit' @click="edit" v-b-toggle.sidebar-right/>
        </div>
        <b-card-sub-title class="mb-3">{{vacancy.description}}</b-card-sub-title>
        <b-card-text>
            <b-card-title>Dates</b-card-title>
            <date 
                v-for="(date, i) in vacancy.dates"
                :key="i"
                :date="date"
            />
        </b-card-text>

    </b-card>
</template>


<script>
import date from '../components/date.vue'

export default({
    name: "Vacancy",
    components: { date},
    props:{
        vacancy: {
            title: String,
            description: String,
        },
        id: Number,
    },
    methods:{
        edit(){
            console.log('edit')
            this.$emit('edit', {...this.vacancy, id: this.id});
        }
    }
})
</script>

<style>
    .item{
        box-shadow: 0 0 7px 0px black;
        padding: 10px;
        border-radius: 5px;
    }
    .title-wrapper{
        display: flex;
        justify-content: space-between;
    }
    .edit{
        transform: scale(0.6);
    }
</style>