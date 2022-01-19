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
                    <label for="endtime">Endtime</label>
                    <ejs-timepicker id='endtime' v-model="endtime"></ejs-timepicker>
                </div>
                <div class='inputitem'>
                    <label for="price">Price</label>
                    <input type="text" id='price' class='price' v-model="price">
                </div>
            </div>
            <b-select v-model="type">
                <option value="Consultation">Consultation</option>
                <option value="Telephone">Telephone</option>
                <option value="Ambulance">Ambulance</option>
            </b-select>
        </div>
    </div>
</template>

<script>
import moment from 'moment';
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
            type: String,
        })
    },
    props:{
        date:{},
        id: Number,
    },
    filters:{
        formatDate: function(val) {
            return moment(val).format('DD MMM YYYY')
        }
    },
    mounted(){
        this.starttime = this.date.starttime
        this.endtime = this.date.endtime
        this.price = this.date.price
        this.type = this.date.type
    },
    watch:{
        starttime:function(val){
            this.$emit('editdate',{index:this.id, field: {starttime:val}})
        },
        endttime:function(val){
            this.$emit('editdate',{index:this.id, field: {endtime:val}})
        },
        price:function(val){
            this.$emit('editdate',{index:this.id, field: {price: val}})
        },
        type:function(val){
            this.$emit('editdate',{index: this.id, field: {type: val}})
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
        line-height: 1.75;
        background-color: #f8f9fa;
    }
</style>