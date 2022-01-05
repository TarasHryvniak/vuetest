<template>
    <div class='date-wrapper'>
        <b-card-text class='field'>{{date.date}}</b-card-text>
        <b-card-text class='field'>{{date.starttime}}</b-card-text>
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