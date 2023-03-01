<template>
   <form class="form-card" onsubmit="event.preventDefault()" @submit.prevent>
 
         
  
          <!------------------------------------Subject Part Start------------------------------------------->
          <h3>Subject</h3>
  
          <p class="blue-text">
            Just answer a few questions<br />
            so that we can personalize the right experience for you.
          </p>
  
          <h5 class="text-center mb-4">Specially trained Subject</h5>
  
          <!-- 1.1   -->
          <div class="row justify-content-between text-left">
            <div class="form-group col-sm-3 flex-column d-flex">
              <label class="form-control-label px-3"
                >First Year<span class="text-danger"> *</span></label >
  
              <!-- subject select 1-->
              <!-- make function for sending information-->
              <select @click="send()" class="btn btn-danger" v-model="semster_id">
              <!-- create a for loop for getting first year semesters-->
                <option  v-for="value in first_year_semester" v-bind:value="value.id" :key="value.id">
                  {{ value.name }}
                </option>
              </select>
            </div>
  
            <!-- 1.1  -->
            <div class="form-group col-sm-3 flex-column d-flex">
              <label class="form-control-label px-3">Select Subject <span class="text-danger"> *</span></label>
  
              <!-- select the subject one  -->
              <select class="btn btn-danger"  v-model="form.subject.subject_one" > 
                <!-- create a loop for get first sememster subjects -->
                <option v-for="value in subject_result" :key="value">
                  {{ value.subject }}
                </option>
              </select>
            </div>
        </div>
  
          <!----------------------------- Second year --------------------------->
  
          <br />
          <!-- 2.1 -->
          <div class="row justify-content-between text-left">
            <div class="form-group col-sm-3 flex-column d-flex">
              <label class="form-control-label px-3">Second year<span class="text-danger"> *</span>
                </label >
  
              <!-- Select semester-->
              <select @click="sendsecond()" class="btn btn-danger" v-model="subject_two_id">

                <option v-for="value in second_year_semester"  v-bind:value="value.id" :key="value.id"  >
                  {{value.name}}
                </option>
              </select>
            </div>
  
            <!-- 2.1 and 2.2 -->
            <div class="form-group col-sm-3 flex-column d-flex">
              <label class="form-control-label px-3"
                >Select subject<span class="text-danger"> *</span></label>
  
              <!-- subject select 2-->
              <select class="btn btn-danger" v-model="form.subject.subject_two">
                <option v-for="value in second_year_subject_result" :key="value">
                  {{ value.subject }}
                </option>
              </select>
            </div>
  
           
          </div>
  
      </form>
 
  </template>
  
  <script>
  import axios from "axios";
  export default {
    data() {
      return {
        // Declaration and itialize semester
        first_year_semester: [
          { id: "1", name: "1st semester" },
          { id: "2", name: "2nd semester" },
        ],

        // Declaration and itialize subject 
        first_year_subject: [
          { id: "1", subject: "English Language I - 2020/2021" },
          { id: "1", subject: "Principles of Management - 2020/2021" },
          { id: "1", subject: "Fundamentals of Web Technologies - 2020/2021" },
          { id: "1", subject: "Fundamentals of Computer Programming - 2020/2021"},
          { id: "1", subject: "Mathematics for Technology - 2020/2021" },
          { id: "1", subject: "Essentials of ICT - 2020/2021" },
          { id: "2", subject: " ICT 1261 - IT Law New" },
          { id: "2", subject: "TICT 1223 - Operating Systems New" },
          { id: "2", subject: "TICT 1224 - Object Oriented Programming New" },
          { id: "2", subject: "TICT 1212 - Discrete Structures - New" },
          { id: "2", subject: "TICT 1252 Computational Engineering Drawing" },
          { id: "2", subject: "TICT 1243 Electronics and Digital Circuit Designs"},
          { id: "2", subject: "TICT 1233 Operating Systems " },
        ],
  
        second_year_semester: [
          { id: "1", name: "1st semester" },
          { id: "2", name: "2nd semester" },
        ],
        second_year_subject: [
          { id: "1", subject: "AUX2113 - English Language II" },
          { id: "1", subject: "TICT2153 - Human Computer Interaction" },
          { id: "1", subject: "TICT2142 -Multimedia Design and Technologies" },
          { id: "1", subject: "TICT2134 - Advanced Computer Programming " },
          { id: "1", subject: "TICT2122 - Statistics for Technology" },
          { id: "1", subject: "TICT2113 - Data Structures and Algorithms" },
          { id: "2", subject: "TICT 2233-Database Management Systems" },
          { id: "2", subject: "TICT 2263-Accounting for Technology" },
          { id: "2", subject: "TICT 2212 Operational Research" },
          { id: "2", subject: "TICT 2252 System Analysis and Design" },
          { id: "2", subject: "TICT 2223 Introduction to DBMS" },
          { id: "2", subject: "AUX 2212 Soft skill and Career Guidance" },
        ],
  
       
        form: {
         
         
          subject: {
            subject_one: "",
            subject_two: "",
            subject_three: "",
            subject_four: "",
          },
        },


        semster_id: "",
        subject_two_id:"",

        subject_result:[],
        second_year_subject_result:[],
      };
    },
  
    methods: {
      save() {
        axios
          .post("http://127.0.0.1:8000/api/kuppi", this.kuppirequest)
          .then((response) => {
            if (response.status == 200) {
              alert("data saved");
            }
          })
          .catch((error) => {
            console.log(error);
          });
      },
      send() {
        this.subject_result = this.first_year_subject.filter(value => value.id == this.semster_id);
      },
      sendsecond(){
        this.second_year_subject_result=this.second_year_subject.filter(value=>value.id == this.subject_two_id);
      },
      
    },
  };
  </script>
  
  <style>


  </style>
  