<template>
    <div class='date-wrapper'>
        <b-card-text class='field'>{{date.date | formatDate}}</b-card-text>
        <b-card-text class='field'>{{date.starttime | formatTime}}</b-card-text>
        <b-card-text class='field'>{{date.endtime | formatTime}}</b-card-text>
        <b-card-text class='field'>{{date.type}}</b-card-text>
        <b-card-text class='field'>{{date.price}}</b-card-text>
    </div>  
</template>

<script>
import moment from 'moment';

export default({
    name: 'date',
    props:{
        date: {
            date: String,
        },
    },
    filters:{
        formatDate: function(val) {
            return moment(val).format('DD MMM YYYY')
        },
        formatTime: function(val) {
            return moment(val).format('hh:mm')
        }
    },
})
</script>

<style scoped>
    .date-wrapper{
        display: flex;
        justify-content: space-evenly;
        color: white;
        background-color: #484848;
        margin: 5px;
        border-radius: 5px;
    }

    .field{
        margin: 0;
        padding: 5px;
        font-size: 12px;
    }
</style>