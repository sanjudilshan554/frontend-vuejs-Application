<template>
  <div class="container-fluid px-1 py-5 mx-auto">
    <div class="row d-flex justify-content-center">
      <div class="col-xl-7 col-lg-8 col-md-9 col-11 text-center">
        <h3>Request Revision Lecture</h3>
        <p class="blue-text">
          Just answer a few questions<br />
          so that we can personalize the right experience for you.
        </p>
        <div class="card">
          <h5 class="text-center mb-4">Powering world-class companies</h5>
          <form
            class="form-card"
            onsubmit="event.preventDefault()"
            @submit.prevent
          >
            <div class="row justify-content-between text-left">
              <div class="form-group col-sm-6 flex-column d-flex">
                <label class="form-control-label px-3"
                  >Revision Name<span class="text-danger"> *</span></label
                >
                <input
                  type="text"
                  id="revName"
                  name="revName"
                  placeholder="Create Name"
                  onblur="validate(1)"
                  v-model="userdata.revName"
                />
              </div>
              <div class="form-group col-sm-6 flex-column d-flex">
                <label class="form-control-label px-3"
                  >Subject<span class="text-danger"> *</span></label
                >
                <input
                  type="text"
                  id="revName"
                  name="revName"
                  placeholder="Create Name"
                  onblur="validate(1)"
                  v-model="userdata.revName"
                />
              </div>
            </div>

            <div class="row justify-content-between text-left">
              <div class="form-group col-sm-6 flex-column d-flex">
                <label class="form-control-label px-3"
                  >Contact no<span class="text-danger"> *</span></label
                >
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  placeholder="Enter Subject name "
                  onblur="validate(1)"
                  v-model="userdata.subject"
                />
              </div>
              <div class="form-group col-sm-6 flex-column d-flex">
                <label class="form-control-label px-3"
                  >Freetime<span class="text-danger"> *</span></label
                >
                <input
                  type="text"
                  id="freetime"
                  name="freetime"
                  placeholder="Enter Free time"
                  onblur="validate(2)"
                  v-model="userdata.freetime"
                />
              </div>
            </div>
            <div class="row justify-content-between text-left">
              <div class="form-group col-sm-6 flex-column d-flex">
                <label class="form-control-label px-3"
                  >lecture Hall Name<span class="text-danger"> *</span></label
                >
                <input
                  type="text"
                  id="lecHallName"
                  name="lecHallName"
                  placeholder="Ex TLH_1"
                  onblur="validate(3)"
                  v-model="userdata.lecHallName"
                />
              </div>
              <div class="form-group col-sm-6 flex-column d-flex">
                <label class="form-control-label px-3"
                  >lecture Name<span class="text-danger"> *</span></label
                >
                <input
                  type="text"
                  id="lectureName"
                  name="lectureName"
                  placeholder="Lecture name"
                  onblur="validate(4)"
                  v-model="userdata.lectureName"
                />
              </div>
            </div>
            <div class="row justify-content-between text-left">
              <div class="form-group col-sm-6 flex-column d-flex">
                <label class="form-control-label px-3"
                  >lectur E mail<span class="text-danger"> *</span></label
                >
                <input
                  type="text"
                  id="lecturemail"
                  name="lecturemail"
                  placeholder=""
                  onblur="validate(5)"
                  v-model="userdata.lecturemail"
                />
              </div>
              <div class="form-group col-sm-6 flex-column d-flex">
                <label class="form-control-label px-3"
                  >lecture Employee Id<span class="text-danger"> *</span></label
                >
                <input
                  type="text"
                  id="lectureempID"
                  name="lectureempID"
                  placeholder=""
                  onblur="validate(4)"
                  v-model="userdata.lectureempID"
                />
              </div>
            </div>

            <br />
            <div class="row justify-content-end">
              <div class="form-group col-sm-6">
                <button
                  type="submit"
                  class="btn-block btn-primary"
                  @click="save()"
                >
                  Request
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>

  <div class="container-fluid px-1 py-5 mx-auto">
    <div class="row d-flex justify-content-center">
      <div class="col-xl-7 col-lg-8 col-md-9 col-11 text-center">
        <div class="row justify-content-between text-left">
          <div class="form-group col-sm-6 flex-column d-flex">
            <label class="form-control-label px-3"
              >Choose year<span class="text-danger"> *</span></label
            >
            <select v-model="form.year" @click="semester_filter()" class="form-control">
              <option v-for="value in year" v-bind:value="value.id" :key="value.id">{{value.name}}</option>
    
            </select>
          </div>

          <div class="form-group col-sm-6 flex-column d-flex">
            <label class="form-control-label px-3"
              >Choose semester<span class="text-danger"> *</span></label
            >
            <select v-model="form.semester" @click="subject_filter()" class="form-control">
              <option v-for="value in semester_selection" v-bind:value="value.name" :key="value.id">{{value.name}}</option>
            </select>
          </div>

          <div class="form-group mb-4 col-sm-6 flex-column d-flex">
            <label class="form-control-label px-3"
              >Choose subject<span class="text-danger"> *</span></label
            >
            <select v-model="form.subject" class="form-control">
              <option v-for="value in subject_selection" v-bind:key="value.subject" :key="value.subject">{{value.subject}}</option>
            </select>
          </div>
          <div class="form-group col-sm-6 flex-column d-flex">
            <label class="form-control-label px-3"
              ><span class="text-danger"> *</span></label
            >
            <button @click="search()" class="btn btn-success">Search</button>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="gradient-custom-1 h-100">
    <div class="mask d-flex align-items-center h-100">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-12">
            <div class="table-responsive bg-white">
              <table class="table mb-0">
                <thead>
                  <tr >
                    <th scope="col">Lecturer name</th>
                    <th scope="col">Lecture email</th>
                    <th scope="col">Contact</th>
                    <th scope="col">Age</th>
                    <th scope="col">Gender</th>
                    <th scope="col">Lecture Employee id</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="values in users_data" :key="values.id">
                    
                    <td>{{values.fname}}</td>
                    <td>{{values.email}}</td>
                    <td>{{values.mobNumber}}</td>
                    <td>{{values.age}}</td>
                    <td>{{values.gender}}</td>
                   
                        <td>
                      <input
                        type="button"
                        value="select"
                        class="btn btn-primary"
                      />
                    </td> 
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      
      form:{
        year:"",
        subject:"",
        semester:"",
      },

      year:[
        {id:"1",name:"1"},
        {id:"2",name:"2"},
        {id:"3",name:"3"},
        {id:"4",name:"4"},
      ],

      first_year_semester: [
        { id: "1", name: "1" },
        { id: "1", name: "2" },
      ],
      secound_year_semester: [
        { id: "2", name: "1" },
        { id: "2", name: "2" },
      ],
      third_year_semester: [
        { id: "3", name: "1" },
        { id: "3", name: "2" },
      ],

      fourth_year_semester: [{ id: "4", name: "1" }],


      first_year_subject: [
        {
          id: "1",
          name: "1",
          subject: "English Language I - 2020/2021",
        },
        {
          id: "1",
          name: "1",
          subject: "Principles of Management - 2020/2021",
        },
        {
          id: "1",
          name: "1",
          subject: "Fundamentals of Web Technologies - 2020/2021",
        },
        {
          id: "1",
          name: "1",
          subject: "Fundamentals of Computer Programming - 2020/2021",
        },
        {
          id: "1",
          name: "1",
          subject: "Mathematics for Technology - 2020/2021",
        },
        {
          id: "1",
          name: "1",
          subject: "Essentials of ICT - 2020/2021",
        },

        { id: "1", name: "2nd semester", subject: " ICT 1261 - IT Law New" },
        {
          id: "1",
          name: "2",
          subject: "TICT 1223 - Operating Systems New",
        },
        {
          id: "1",
          name: "2",
          subject: "TICT 1224 - Object Oriented Programming New",
        },
        {
          id: "1",
          name: "2",
          subject: "TICT 1212 - Discrete Structures - New",
        },
        {
          id: "1",
          name: "2",
          subject: "TICT 1252 Computational Engineering Drawing",
        },
        {
          id: "1",
          name: "2",
          subject: "TICT 1243 Electronics and Digital Circuit Designs",
        },
        {
          id: "1",
          name: "2",
          subject: "TICT 1233 Operating Systems",
        },
      ],

      second_year_subject: [
        {
          id: "2",
          name: "1",
          subject: "AUX2113 - English Language II",
        },
        {
          id: "2",
          name: "1",
          subject: "TICT2153 - Human Computer Interaction",
        },
        {
          id: "2",
          name: "1",
          subject: "TICT2142 -Multimedia Design and Technologies",
        },
        {
          id: "2",
          name: "1",
          subject: "TICT2134 - Advanced Computer Programming ",
        },
        {
          id: "2",
          name: "1",
          subject: "TICT2122 - Statistics for Technology",
        },
        {
          id: "2",
          name: "1",
          subject: "TICT2113 - Data Structures and Algorithms",
        },

        {
          id: "2",
          name: "2",
          subject: "TICT 2233-Database Management Systems",
        },
        {
          id: "2",
          name: "2",
          subject: "TICT 2263-Accounting for Technology",
        },
        {
          id: "2",
          name: "2",
          subject: "TICT 2212 Operational Research",
        },
        {
          id: "2",
          name: "2",
          subject: "TICT 2252 System Analysis and Design",
        },
        {
          id: "2",
          name: "2",
          subject: "TICT 2223 Introduction to DBMS",
        },
        {
          id: "2",
          name: "2",
          subject: "AUX 2212 Soft skill and Career Guidance",
        },
      ],

      third_year_subject: [
        { id: "3", name: "1st semester", subject: "AUX3112 - Career Guidance" },
        {
          id: "3",
          name: "1",
          subject: "TICT3162 - Information Security",
        },
        {
          id: "3",
          name: "1",
          subject: "TICT3153 - Software Engineering",
        },
        {
          id: "3",
          name: "1",
          subject: "TICT3142 - Social and Professional Issues in IT",
        },
        {
          id: "3",
          name: "1",
          subject: "TICT3132 - Advanced Web Technologies",
        },
        {
          id: "3",
          name: "1",
          subject: "TICT3123 - Advanced Database Management Systems",
        },

        {
          id: "3",
          name: "2",
          subject: "AUX3212 - Research Methodology",
        },
        {
          id: "3",
          name: "2",
          subject: "TICT3263 - Essential of E-Commerce ",
        },
        {
          id: "3",
          name: "2",
          subject: "TICT3253 - Digital Image Processing",
        },
        {
          id: "3",
          name: "2",
          subject: "TICT3242 - Information Security",
        },
        {
          id: "3",
          name: "2",
          subject: "TICT3232 - Project Management",
        },
        {
          id: "3",
          name: "2",
          subject: "TICT3224 - Advanced Computer Networks and Administration",
        },
        {
          id: "3",
          name: "2",
          subject: "TICT3213 - Advanced Database Management System",
        },
        {
          id: "3",
          name: "2",
          subject: "TICT 3272 - Computerized Accounting",
        },
      ],

      fourth_year_subject: [
        { id: "4", name: "1", subject: "TICT4162 - Bioinformatics" },
        {
          id: "4",
          name: "1",
          subject: "TICT4152 - Cloud Application Development",
        },
        {
          id: "4",
          name: "1",
          subject: "TICT4143 - Intelligent Systems",
        },
        {
          id: "4",
          name: "1",
          subject: "TICT4133 - Mobile Application Development",
        },
        {
          id: "4",
          name: "1",
          subject: "TICT4122 - Green Computing",
        },
        {
          id: "4",
          name: "1",
          subject: "TICT4112 - Distributed Systems",
        },
        {
          id: "4",
          name: "1",
          subject: "ICT 4152 - Cloud Application Development",
        },
        {
          id: "4",
          name: "1",
          subject: "ICT 4143 - Intelligent Systems",
        },
        {
          id: "4",
          name: "1",
          subject: "ICT 4133 - Mobile Application Development",
        },
        {
          id: "4",
          name: "1",
          subject: "ICT 4122 - Green Computing",
        },
        {
          id: "4",
          name: "1",
          subject: "ICT 4112 - Distributed Systems",
        },
      ],


      semester_selection:[],
      subject_selection:[],

      users_data:[],

      userdata: {
        revName: "",
        subject: "",
        contact: "",
        lecHallName: "",
        lectureName: "",
        lecturemail: "",
        lectureempID: "",
      },
    };

    
    
  },

  methods: {
    save() {
      axios
        .post("http://127.0.0.1:8000/api/revision", this.userdata)
        .then((response) => {
          if (response.status == 200) {
            alert("data saved");
            alert(response.data.message);
          }
        })
        .catch((error) => {
          console.log(error);
        });
    },

    semester_filter(){
      if(this.form.year=="1"){
        this.semester_selection=this.first_year_semester.filter((value)=>value.id==this.form.year);
      }
      else if(this.form.year=="2"){
        this.semester_selection=this.secound_year_semester.filter((value)=>value.id==this.form.year);
      }
      else if(this.form.year=="3"){
        this.semester_selection=this.third_year_semester.filter((value)=>value.id==this.form.year);
      }
      else if(this.form.year=="4"){
        this.semester_selection=this.fourth_year_semester.filter((value)=>value.id==this.form.year);
      }
    },

    subject_filter(){
      if (this.form.year == "1") {
        if (this.form.semester == "1") {
          this.subject_selection = this.first_year_subject.filter(
            (value) => value.name == this.form.semester
          );
        } else if (this.form.semester == "2") {
          this.subject_selection = this.first_year_subject.filter(
            (value) => value.name == this.form.semester
          );
        }
      } else if (this.form.year == "2") {
        if (this.form.semester == "1") {
          this.subject_selection = this.second_year_subject.filter(
            (value) => value.name == this.form.semester
          );
        } else if (this.form.semester == "2") {
          this.subject_selection = this.second_year_subject.filter(
            (value) => value.name == this.form.semester
          );
        }
      } else if (this.form.year == "3") {
        if (this.form.semester == "1") {
          this.subject_selection = this.third_year_subject.filter(
            (value) => value.name == this.form.semester
          );
        } else if (this.form.semester == "2") {
          this.subject_selection = this.third_year_subject.filter(
            (value) => value.name == this.form.semester
          );
        }
      } else if (this.form.year == "4") {
        if (this.form.semester == "1") {
          this.subject_selection = this.fourth_year_subject.filter(
            (value) => value.name == this.form.semester
          );
        }
      }
    },

    search(){
       axios
        .post("http://127.0.0.1:8000/api/search/subject/lectures",this.form)
        .then((response)=>{
          if(response.status==200){
              // alert("check ok");
              this.users_data = response.data.data;
              this.userdata=[1];
            // return response.message;
            // return from.data.data;

          }
          
        })

        .catch((error) => {
          console.log(error);
          alert("no recode found");
        });

    },

  },
};
</script>

<style scoped>
body {
  color: #000;
  overflow-x: hidden;
  height: 100%;
  background-image: url("https://i.imgur.com/GMmCQHC.png");
  background-repeat: no-repeat;
  background-size: 100% 100%;
}
.card {
  padding: 30px 40px;
  margin-top: 60px;
  margin-bottom: 60px;
  border: none !important;
  box-shadow: 0 6px 12px 0 rgba(0, 0, 0, 0.2);
}
.blue-text {
  color: #00bcd4;
}
.form-control-label {
  margin-bottom: 0;
}
input,
textarea,
button {
  padding: 8px 15px;
  border-radius: 5px !important;
  margin: 5px 0px;
  box-sizing: border-box;
  border: 1px solid #ccc;
  font-size: 18px !important;
  font-weight: 300;
}
input:focus,
textarea:focus {
  -moz-box-shadow: none !important;
  -webkit-box-shadow: none !important;
  box-shadow: none !important;
  border: 1px solid #00bcd4;
  outline-width: 0;
  font-weight: 400;
}
.btn-block {
  text-transform: uppercase;
  font-size: 15px !important;
  font-weight: 400;
  height: 43px;
  cursor: pointer;
}
.btn-block:hover {
  color: #fff !important;
}
button:focus {
  -moz-box-shadow: none !important;
  -webkit-box-shadow: none !important;
  box-shadow: none !important;
  outline-width: 0;
}
</style>
