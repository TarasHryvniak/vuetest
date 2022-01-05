<template>
    <div class="item">
        <h4>{{vacancy.title}}</h4>
        <h4>{{vacancy.description}}</h4>
        <div>
            <h3>Dates</h3>
        </div>
    </div>
</template>


<script>


export default({
    name: "Vacancy",
    props:{
        vacancy: {
            title: String,
            description: String,
        },
    },
})
</script>

<style>
    .item{
        max-width: 400px;
        box-shadow: 0 0 50px 100px black;
    }
</style>