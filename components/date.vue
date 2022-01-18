<template>
    <div class='date-wrapper'>
        <b-card-text class='field'>{{date.date | formatDate}}</b-card-text>
        <b-card-text class='field'>{{date.starttime | formatTime}}</b-card-text>
        <b-card-text class='field'>{{date.endtime}}</b-card-text>
        <b-card-text class='field'>{{date.type}}</b-card-text>
        <b-card-text class='field'>{{date.price}}</b-card-text>
    </div>  
</template>

<script>

export default({
    name: 'date',
    props:{
        date: {
            date: String,
        },
    },
    filters:{
        formatDate: function(val) {
            return new Date(val).toLocaleDateString("en-US")||''
        },
        formatTime: function(val) {
            console.log(new Date(val).toLocaleDateString("en-US"))
            return val
           // return (`${parsed[0]}:${parsed[1]}`)
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