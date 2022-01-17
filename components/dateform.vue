<template>
    <div>
        <h2>{{date | formatDate}}</h2>
    </div>
</template>

<script>
export default {
    name: 'dateform',
    data(){
        return({
        })
    },
    props:{
        date:{}
    },
    filters:{
        formatDate: function(val) {
            return val.toLocaleDateString("en-US")
        }
    }
}
</script>

<style scoped>
    
</style>