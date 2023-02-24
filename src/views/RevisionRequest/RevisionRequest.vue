<template>
    <div class="container-fluid px-1 py-5 mx-auto">
        <div class="row d-flex justify-content-center">
            <div class="col-xl-7 col-lg-8 col-md-9 col-11 text-center">
                <h3>Request Revision Lecture</h3>
                <p class="blue-text">Just answer a few questions<br> so that we can personalize the right experience for you.</p>
                <div class="card">
                    <h5 class="text-center mb-4">Powering world-class companies</h5>
                    <form class="form-card" onsubmit="event.preventDefault()" @submit.prevent>
                        
                        <div class="row justify-content-between text-left">
                            <div class="form-group col-sm-6 flex-column d-flex"> <label class="form-control-label px-3">Revision Name<span class="text-danger"> *</span></label> <input type="text" id="revName" name="revName" placeholder="Create Name" onblur="validate(1)" v-model="revisionReq.revName"> </div>
                        </div>

                        <div class="row justify-content-between text-left">
                            <div class="form-group col-sm-6 flex-column d-flex"> <label class="form-control-label px-3">Subject<span class="text-danger"> *</span></label> <input type="text" id="subject" name="subject" placeholder="Enter Subject name " onblur="validate(1)" v-model="revisionReq.subject"> </div>
                            <div class="form-group col-sm-6 flex-column d-flex"> <label class="form-control-label px-3">Freetime<span class="text-danger"> *</span></label> <input type="text" id="freetime" name="freetime" placeholder="Enter Free time" onblur="validate(2)" v-model="revisionReq.freetime"> </div>
                        </div>
                        <div class="row justify-content-between text-left">
                            <div class="form-group col-sm-6 flex-column d-flex"> <label class="form-control-label px-3">lecture Hall Name<span class="text-danger"> *</span></label> <input type="text" id="lecHallName" name="lecHallName" placeholder="Ex TLH_1" onblur="validate(3)" v-model="revisionReq.lecHallName"> </div>
                            <div class="form-group col-sm-6 flex-column d-flex"> <label class="form-control-label px-3">lecture Name<span class="text-danger"> *</span></label> <input type="text" id="lectureName" name="lectureName" placeholder="Lecture name" onblur="validate(4)" v-model="revisionReq.lectureName"> </div>
                        </div>
                        <div class="row justify-content-between text-left">
                            <div class="form-group col-sm-6 flex-column d-flex"> <label class="form-control-label px-3">lectur E mail<span class="text-danger"> *</span></label> <input type="text" id="lecturemail" name="lecturemail" placeholder="" onblur="validate(5)" v-model="revisionReq.lecturemail"> </div>
                            <div class="form-group col-sm-6 flex-column d-flex"> <label class="form-control-label px-3">lecture Employee Id<span class="text-danger"> *</span></label> <input type="text" id="lectureempID" name="lectureempID" placeholder="" onblur="validate(4)" v-model="revisionReq.lectureempID"> </div>
                        </div>
                        
                        <br>
                        <div class="row justify-content-end">
                            <div class="form-group col-sm-6"> <button type="submit" class="btn-block btn-primary" @click="save()">Request</button> </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';

    export default{
        data(){
            return{
                revisionReq:{
                    revName:"",
                    subject:"",
                    freetime:"",
                    lecHallName:"",
                    lectureName:"",
                    lecturemail:"",
                    lectureempID:"",
                }
            };
        },

        methods:{
            save(){
                axios.post("http://127.0.0.1:8000/api/revision",this.revisionReq)
                .then((response)=>{
                    if(response.stats==200){
                        alert('data saved');
                        alert(response.data.message);
                    }
                })
                .catch((error)=>{
                    console.log(error);
                })
            }
        }
    };
</script>

<style>
body{color: #000;overflow-x: hidden;height: 100%;background-image: url("https://i.imgur.com/GMmCQHC.png");background-repeat: no-repeat;background-size: 100% 100%}.card{padding: 30px 40px;margin-top: 60px;margin-bottom: 60px;border: none !important;box-shadow: 0 6px 12px 0 rgba(0,0,0,0.2)}.blue-text{color: #00BCD4}.form-control-label{margin-bottom: 0}input, textarea, button{padding: 8px 15px;border-radius: 5px !important;margin: 5px 0px;box-sizing: border-box;border: 1px solid #ccc;font-size: 18px !important;font-weight: 300}input:focus, textarea:focus{-moz-box-shadow: none !important;-webkit-box-shadow: none !important;box-shadow: none !important;border: 1px solid #00BCD4;outline-width: 0;font-weight: 400}.btn-block{text-transform: uppercase;font-size: 15px !important;font-weight: 400;height: 43px;cursor: pointer}.btn-block:hover{color: #fff !important}button:focus{-moz-box-shadow: none !important;-webkit-box-shadow: none !important;box-shadow: none !important;outline-width: 0}
</style>