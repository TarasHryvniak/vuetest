<template>
    <div class="dateitem">
        <div class="datetitle">
            <span>{{date.date | formatDate}}</span>
            <img src='~/assets/cross.svg' @click="onDelete"/>
        </div>
        <div class="datevalues">
            <div class="dateinputs">
                <div class='inputitem'>
                    <label for="starttime">Starttime</label>
                    <ejs-timepicker id='starttime' v-model="starttime"></ejs-timepicker>
                </div>
                <div class='inputitem'>
                    <lable for="endtime">Endtime</lable>
                    <ejs-timepicker id='endtime' v-model="endtime"></ejs-timepicker>
                </div>
                <div class='inputitem'>
                    <label for="price">Price</label>
                    <input type="text" id='price' class='price' v-model="price">
                </div>
            </div>
            <b-select>
                <option>Consultation</option>
                <option>Telephone</option>
                <option>Ambulance</option>
            </b-select>
        </div>
    </div>
</template>

<script>

import Vue from "vue";
import { TimePickerPlugin } from "@syncfusion/ej2-vue-calendars";
Vue.use(TimePickerPlugin);

export default {
    name: 'dateform',
    data(){
        return({
            starttime: null,
            endtime: null,
            price: 0,
        })
    },
    props:{
        date:{},
        id: Number,
    },
    filters:{
        formatDate: function(val) {
            return new Date(val).toLocaleDateString("en-US")
        }
    },
    mounted(){
        this.starttime = this.date.starttime
        this.endtime = this.date.endtime
        this.price = this.date.price
    },
    watch:{
        date:function(val){
            console.log('date',val)
        },
        starttime:function(val){
            console.log('val',this.id)
            this.$emit('editdate',{index:this.id, field: {starttime:new Date(val).toTimeString()}})
        }
    },
    methods:{
        onDelete(){
            this.$emit('deletedate', this.id);
        },
        onChange(){

        }
    }

}
</script>

<style scoped>
    .dateitem {
    }
    .datetitle {
        display: flex;
        justify-content: space-between;
        font-size: 16px;
        font-weight: 500;
    }
    .dateinputs {
        display: flex;
        flex-direction: row;
    }
    .inputitem {
        display: flex;
        flex-direction: column;
    }
    .price{
        width:100%;
        border: none;
        border-bottom-width: 1px;
        border-bottom-style: solid;
        border-block-color: gray;
    }
</style>