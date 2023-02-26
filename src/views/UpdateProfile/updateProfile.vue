<template>
  <section class="intro">
    <div class="card">
      <h3>Software</h3>

      <p class="blue-text">
        Just answer a few questions<br />
        so that we can personalize the right experience for you.
      </p>
      <!--------------------Software Part Started-------------------------->
      <h5 class="text-center mb-4">Specially trained Software</h5>

      <form class="form-card" onsubmit="event.preventDefault()" @submit.prevent>
        <!----------------Start First Section Collection ----------------->
        <div class="row justify-content-between text-left">
          <div class="form-group col-sm-3 flex-column d-flex">
            <label class="form-control-label px-3"
              >1 Year<span class="text-danger"> *</span></label
            >

            <!-- Selection part -->
            <select
             @click="send()"
              class="btn btn-danger"
              name="language"
              v-model="semster_id"
            >
              <option v-for="value in semester" v-bind:value="value.id" :key="value.id">{{value.name}}</option>
            </select>
          </div>
          <div class="form-group col-sm-3 flex-column d-flex">
            <label class="form-control-label px-3"
              >Software 1<span class="text-danger"> *</span></label
            >

            <!-- Selection part -->
            <select
              class="btn btn-danger"
              name="language"
              id="language"
              v-model="form.software.software_one"
            >
            <option v-for="value in semester_subject" :key="value">{{value.subject}}</option>
            </select>
          </div>

          <!-- Slider part -->
          <div class="form-group col-sm-6 flex-column d-flex">
            <label class="form-control-label px-3">
              <span class="text-danger"> </span>
            </label>

            <div class="slider">
              <input
                type="range"
                
                v-model="form.software_rate.software_one_rate"
              />
              <p id="rangeValue">10</p>
            </div>
          </div>
        </div>

        <!----------------End First Section Collection ----------------->
        <br />

        <!----------------Start Second Section Collection ----------------->
        <div class="row justify-content-between text-left">
          <div class="form-group col-sm-6 flex-column d-flex">
            <label class="form-control-label px-3"
              >Software 2 <span class="text-danger"> *</span></label
            >

            <!-- Selection part -->
            <select
              class="btn btn-danger"
              name="language"
              id="language"
              v-model="form.software.software_two"
            >
            <option value="Microsoft office 365">Microsoft office 365</option>
            <option value="Grammarly">Grammarly</option>
            <option value="Babun">Babun</option>
            <option value="Cam Scanner">Cam Scanner</option>
            <option value="Visual Studio">Visual Studio</option>
            <option value="Code Block">Code Block</option>
            <option value="Net Beans">Net Beans</option>
            <option value="Adobe XD">Adobe XD</option>
            <option value="Auto Cad">Auto Cad</option>
            <option value="Proteas 8">Proteas 8</option>
            <option value="Tally prime">Tally prime</option>
            <option value="xampp">xampp</option>
            <option value="postman">postman</option>
            <option value="Not Trained" selected>Not Trained</option>
            </select>
          </div>

          <!-- Slider part -->
          <div class="form-group col-sm-6 flex-column d-flex">
            <label class="form-control-label px-3"
              ><span class="text-danger"> </span
            ></label>
            <div class="slider">
              <input
                type="range"
                
                v-model="form.software_rate.software_two_rate"
              />
              <p id="rangeValue1">10</p>
            </div>
          </div>
        </div>
        <!----------------End Second Section Collection ----------------->
        <br />

        <!----------------Start Third Section Collection ----------------->
        <div class="row justify-content-between text-left">
          <div class="form-group col-sm-6 flex-column d-flex">
            <label class="form-control-label px-3"
              >Software 3<span class="text-danger"> *</span></label
            >

            <!-- Selection part -->
            <select
              class="btn btn-danger"
              name="language"
              id="language"
              v-model="form.software.software_three"
            >
            <option value="Microsoft office 365">Microsoft office 365</option>
            <option value="Grammarly">Grammarly</option>
            <option value="Babun">Babun</option>
            <option value="Cam Scanner">Cam Scanner</option>
            <option value="Visual Studio">Visual Studio</option>
            <option value="Code Block">Code Block</option>
            <option value="Net Beans">Net Beans</option>
            <option value="Adobe XD">Adobe XD</option>
            <option value="Auto Cad">Auto Cad</option>
            <option value="Proteas 8">Proteas 8</option>
            <option value="Tally prime">Tally prime</option>
            <option value="xampp">xampp</option>
            <option value="postman">postman</option>
            <option value="Not Trained" selected>Not Trained</option>
            </select>
          </div>
          <!-- Slider part -->
          <div class="form-group col-sm-6 flex-column d-flex">
            <label class="form-control-label px-3"
              ><span class="text-danger"> </span
            ></label>

            <div class="slider">
              <input
                type="range"
                
                v-model="form.software_rate.software_three_rate"
              />
              <p id="rangeValue2">10</p>
            </div>
          </div>
        </div>
        <!----------------End Third Section Collection ----------------->
        <br />

        <!----------------Start Fourth Section Collection ----------------->
        <div class="row justify-content-between text-left">
          <div class="form-group col-sm-6 flex-column d-flex">
            <label class="form-control-label px-3"
              >Software 4<span class="text-danger">*</span>
            </label>

            <!-- Selection part -->
            <select
              class="btn btn-danger"
              name="language"
              id="language"
              v-model="form.software.software_four"
            >
            <option value="Microsoft office 365">Microsoft office 365</option>
            <option value="Grammarly">Grammarly</option>
            <option value="Babun">Babun</option>
            <option value="Cam Scanner">Cam Scanner</option>
            <option value="Visual Studio">Visual Studio</option>
            <option value="Code Block">Code Block</option>
            <option value="Net Beans">Net Beans</option>
            <option value="Adobe XD">Adobe XD</option>
            <option value="Auto Cad">Auto Cad</option>
            <option value="Proteas 8">Proteas 8</option>
            <option value="Tally prime">Tally prime</option>
            <option value="xampp">xampp</option>
            <option value="postman">postman</option>
            <option value="Not Trained" selected>Not Trained</option>
            </select>
          </div>

          <!-- Slider part -->
          <div class="form-group col-sm-6 flex-column d-flex">
            <label class="form-control-label px-3"
              ><span class="text-danger"> </span
            ></label>
            <div class="slider">
              <input
                type="range"
                
                v-model="form.software_rate.software_four_rate"
              />
              <p id="rangeValue3">10</p>
            </div>
          </div>
        </div>
        <!----------------End Fourth Section Collection ----------------->

        <br />

        <!------------------------------------Software Part End------------------------------------------->

        <br />
        <hr />
        <br />

        <!------------------------------------Subject Part Start------------------------------------------->
        <h3>Subject</h3>

        <p class="blue-text">
          Just answer a few questions<br />
          so that we can personalize the right experience for you.
        </p>

        <h5 class="text-center mb-4">Specially trained Subject</h5>

        <div class="row justify-content-between text-left">
          <div class="form-group col-sm-6 flex-column d-flex">
            <label class="form-control-label px-3"
              >First Year<span class="text-danger"> *</span></label>
            <!-- <input
                      type="text"
                      id="revName"
                      name="revName"
                      placeholder="Create Name"
                      onblur="validate(1)"
                      v-model="kuppirequest.kuppiname"
                    /> -->
            <!-- subject select 1-->
            <select class="btn btn-danger" name="language" id="language" v-model="form.subject.subject_one">
              <option class="dropdown" value="javascript">JavaScript</option>
              <option value="python">Python</option>
              <option value="c++">C++</option>
              <option value="java" selected>No subject</option>
            </select>
          </div>


          <!-- subject slider 1-->
          <div class="form-group col-sm-6 flex-column d-flex">
            <label class="form-control-label px-3"
              ><span class="text-danger"> </span
            ></label>
            <div class="slider">
              <input
                type="range"
                
                v-model="form.subject_rate.subject_one_rate"/>
              <p id="rangeValue4">10</p>
            </div>
          </div>
        </div>

        <br>
        <div class="row justify-content-between text-left">
          <div class="form-group col-sm-6 flex-column d-flex">
            <label class="form-control-label px-3"
              >Second year<span class="text-danger"> *</span></label
            >
            


            <!-- subject select 2-->
            <select class="btn btn-danger" name="language" id="language" v-model="form.subject.subject_two">
              <option class="btn btn-danger" value="javascript">
                JavaScript
              </option>
              <option value="python">Python</option>
              <option value="c++" disabled>C++</option>
              <option value="java" selected>No subject</option>
            </select>
          </div>
          <div class="form-group col-sm-6 flex-column d-flex">
            <label class="form-control-label px-3"
              ><span class="text-danger"> </span
            ></label>

            <!-- subject slider 2-->
            <div class="slider">
              <input
                type="range"
                
                v-model="form.subject_rate.subject_two_rate"/>
              <p id="rangeValue5">10</p>
            </div>
          </div>
        </div>

        <br>
        <div class="row justify-content-between text-left">
          <div class="form-group col-sm-6 flex-column d-flex">
            <label class="form-control-label px-3"
              >Third year<span class="text-danger"> *</span></label
            >
            <!-- subject select 3-->
            <select class="btn btn-danger" name="language" id="language" v-model="form.subject.subject_three">
              <option class="btn btn-danger" value="javascript">
                JavaScript
              </option>
              <option value="python">Python</option>
              <option value="c++" disabled>C++</option>
              <option value="java" selected>No subject</option>
            </select>
          </div>
          <div class="form-group col-sm-6 flex-column d-flex">
            <label class="form-control-label px-3">
              <span class="text-danger"> </span
            ></label>

            <!-- subject slider 3-->
            <div class="slider">
              <input
                type="range"
               
                v-model="form.subject_rate.subject_three_rate"
              />
              <p id="rangeValue6">10</p>
            </div>
          </div>
        </div>

        <br>
        <div class="row justify-content-between text-left">
          <div class="form-group col-sm-6 flex-column d-flex">
            <label class="form-control-label px-3"
              >Fourth year<span class="text-danger"> *</span></label
            >

            <!-- subject select 4-->
            <select class="btn btn-danger" name="language" id="language" v-model="form.subject.subject_four">
              <option class="btn btn-danger" value="javascript">
                JavaScript
              </option>
              <option value="python">Python</option>
              <option value="c++" disabled>C++</option>
              <option value="java" selecte>Java</option>
              <option value="java" selected>No subject</option>
            </select>
          </div>

          <!-- subject slider 4-->
          <div class="form-group col-sm-6 flex-column d-flex">
            <label class="form-control-label px-3"
              ><span class="text-danger"> </span
            ></label>
            <div class="slider">
              <input
                type="range"
                
                v-model="form.subject_rate.subject_four_rate"
              />
              <p id="rangeValue7">10</p>
            </div>
          </div>
        </div>

        <!------------------------------------Subject Part End------------------------------------------->
        <br /><br />
        <hr />
        <br />

        <!------------------------------------Qualification Part Start------------------------------------------->
        <h3>Education Qualification</h3>

        <div class="form-group">
          <label for="exampleFormControlInput1">Add Qualification</label>
          <input
            type="text"
            class="form-control"
            id="exampleFormControlInput1"
            placeholder="W3Schools.com"
            v-model="form.education_qualification.qualification_one_title"
          />
        </div>

        <div class="form-group">
          <label for="exampleFormControlTextarea1">Add Qualification</label>
          <textarea
            class="form-control"
            id="exampleFormControlTextarea1"
            placeholder="Web Development! All I need to know in one place"
            rows="3"
            v-model="form.education_qualification.qualification_one_descripition"
          ></textarea>
        </div>
        <br />

        <div class="form-group">
          <label for="exampleFormControlInput1">Add Qualification</label>
          <input
            type="text"
            class="form-control"
            id="exampleFormControlInput1"
            placeholder="Master Degree"
            v-model="form.education_qualification.qualification_two_title"
          />
        </div>

        <div class="form-group">
          <label for="exampleFormControlTextarea1">Add Qualificationa</label>
          <textarea
            class="form-control"
            id="exampleFormControlTextarea1"
            placeholder="London Business School"
            rows="3"
            v-model="form.education_qualification.qualification_two_descripition"
          ></textarea>
        </div>
        <br />
        <div class="form-group">
          <label for="exampleFormControlInput1">Add Qualification</label>
          <input
            type="text"
            class="form-control"
            id="exampleFormControlInput1"
            placeholder="School of Coding"
            v-model="form.education_qualification.qualification_three_title"
          />
        </div>

        <div class="form-group">
          <label for="exampleFormControlTextarea1">Add Qualification</label>
          <textarea
            class="form-control"
            id="exampleFormControlTextarea1"
            placeholder="Bachelor Degree"
            rows="3"
            v-model="form.education_qualification.qualification_three_descripition"
          ></textarea>
        </div>
        <br />
        <hr />

        <h3>Work Experience</h3>

        <div class="form-group">
          <label for="exampleFormControlInput1">Add Experience</label>
          <input
            type="text"
            class="form-control"
            id="exampleFormControlInput1"
            placeholder="Front End Developer / w3schools.com"
            v-model="form.work_experince.work_experince_one_title"
          />
        </div>

        <div class="form-group">
          <label for="exampleFormControlTextarea1">Description</label>
          <textarea
            class="form-control"
            id="exampleFormControlTextarea1"
            rows="3"
            placeholder="Lorem ipsum dolor sit amet. Praesentium magnam consectetur vel in deserunt aspernatur est reprehenderit sunt hic. Nulla tempora soluta ea et odio, unde doloremque repellendus iure, iste."
            v-model="form.work_experince.work_experince_one_descripition"
          ></textarea>
        </div>
        <br />

        <div class="form-group">
          <label for="exampleFormControlInput1">Add Experience</label>
          <input
            type="text"
            class="form-control"
            id="exampleFormControlInput1"
            placeholder="Web Developer / something.com"
            v-model="form.work_experince.work_experince_two_title"
          />
        </div>

        <div class="form-group">
          <label for="exampleFormControlTextarea1">Description</label>
          <textarea
            class="form-control"
            id="exampleFormControlTextarea1"
            rows="3"
            placeholder="Consectetur adipisicing elit. Praesentium magnam consectetur vel in deserunt aspernatur est reprehenderit sunt hic. Nulla tempora soluta ea et odio, unde doloremque repellendus iure, iste."
            v-model="form.work_experince.work_experince_two_descripition"
          ></textarea>
        </div>
        <br />
        <div class="form-group">
          <label for="exampleFormControlInput1">Add Experience</label>
          <input
            type="text"
            class="form-control"
            id="exampleFormControlInput1"
            placeholder="nGraphic Designer / designsomething.com"
            v-model="form.work_experince.work_experince_three_title"
          />
        </div>

        <div class="form-group">
          <label for="exampleFormControlTextarea1">Description</label>
          <textarea
            class="form-control"
            id="exampleFormControlTextarea1"
            rows="3"
            placeholder="Lorem ipsum dolor sit amet, consectetur adipisicing elit."
            v-model="form.work_experince.work_experince_three_descripition"
          ></textarea>
        </div>
        <br />

        <br />
        <div class="row justify-content-end">
          <div class="form-group col-sm-6">
            <button type="submit" class="btn-block btn-primary" @click="save()">
              Update Profile
            </button>
          </div>
        </div>
        <br />
      </form>

      <!-- </div> -->
      <!-- </div> -->
    </div>
    <!-- </div> -->
  </section>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      semester:[
        {id:'1',name:"1 semester"},
        {id:'2',name:"2 semester"},
      ],
      semester_subject:[
        {id:'1',subject:"English Language I - 2020/2021"},
        {id:'1',subject:"Principles of Management - 2020/2021"},
        {id:'1',subject:"Fundamentals of Web Technologies - 2020/2021"},
        {id:'1',subject:"Fundamentals of Computer Programming - 2020/2021"},
        {id:'1',subject:"Mathematics for Technology - 2020/2021"},
        {id:'1',subject:"Essentials of ICT - 2020/2021"},
        {id:'2',subject:" ICT 1261 - IT Law New"},
        {id:'2',subject:"TICT 1223 - Operating Systems New"},
        {id:'2',subject:"TICT 1224 - Object Oriented Programming New"},
        {id:'2',subject:"TICT 1212 - Discrete Structures - New"},
        {id:'2',subject:"TICT 1252 Computational Engineering Drawing"},
        {id:'2',subject:"TICT 1243 Electronics and Digital Circuit Designs"},
        {id:'2',subject:"TICT 1233 Operating Systems "},
      ],
      form: {
        software: {
          software_one: "",
          software_two: "",
          software_three: "",
          software_four: "",
        },
        software_rate: {
          software_one_rate: "",
          software_two_rate: "",
          software_three_rate: "",
          software_four_rate: "",
        },
        subject: {
          subject_one: "",
          subject_two: "",
          subject_three: "",
          subject_four: "",
        },
        subject_rate: {
          subject_one_rate: "",
          subject_two_rate: "",
          subject_three_rate: "",
          subject_four_rate: "",
        },
        education_qualification :{
          qualification_one_title:"",
          qualification_one_descripition:"",

          qualification_two_title:"",
          qualification_two_descripition:"",

          qualification_three_title:"",
          qualification_three_descripition:""
        },
        work_experince :{
          work_experince_one_title:"",
          work_experince_one_descripition:"",

          work_experince_two_title:"",
          work_experince_two_descripition:"",

          work_experince_three_title:"",
          work_experince_three_descripition:""
        },
      },
      semster_id:"",
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
      
    },

  },
};
</script>

<style>
body {
  background: #efcda4;
}
.slider {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 300px;
  height: 60px;
  padding: 30px;
  padding-left: 40px;
  background: #fcfcfc;
  border-radius: 20px;
  display: flex;
  align-items: center;
  box-shadow: 0px 15px 40px #7e6d5766;
}
.slider p {
  font-size: 26px;
  font-weight: 60;
  font-family: Open Sans;
  padding-left: 30px;
  color: #7e6d57;
}
.slider input[type="”range”"] {
  -webkit-appearance: none !important;
  width: 100px;
  height: 2px;
  background: #7e6d57;
  border: none;
  outline: none;
}
.slider input[type="”range”"]::-webkit-slider-thumb {
  -webkit-appearance: none !important;
  width: 30px;
  height: 30px;
  background: #fcfcfc;
  border: 2px solid #7e6d57;
  border-radius: 50%;
  cursor: pointer;
}
.slider input[type="”range”"]::-webkit-slider-thumb:hover {
  background: #7e6d57;
}
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
.dropdown {
  position: relative;
  display: inline-block;
}

.dropdown-content {
  display: none;
  position: absolute;
  background-color: #f9f9f9;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  padding: 12px 16px;
  z-index: 1;
}

.dropdown:hover .dropdown-content {
  display: block;
}
/* Style The Dropdown Button */
.dropbtn {
  background-color: #4caf50;
  color: white;
  padding: 16px;
  font-size: 16px;
  border: none;
  cursor: pointer;
}

/* The container <div> - needed to position the dropdown content */
.dropdown {
  position: relative;
  display: inline-block;
}

/* Dropdown Content (Hidden by Default) */
.dropdown-content {
  display: none;
  position: absolute;
  background-color: #f9f9f9;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
}

/* Links inside the dropdown */
.dropdown-content a {
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
}

/* Change color of dropdown links on hover */
.dropdown-content a:hover {
  background-color: #f1f1f1;
}

/* Show the dropdown menu on hover */
.dropdown:hover .dropdown-content {
  display: block;
}

/* Change the background color of the dropdown button when the dropdown content is shown */
.dropdown:hover .dropbtn {
  background-color: #3e8e41;
}

html,
body,
.intro {
  height: 100%;
}

.gradient-custom-1 {
  /* fallback for old browsers */
  background: #250e36;

  /* Chrome 10-25, Safari 5.1-6 */
  background: -webkit-linear-gradient(
    to top,
    rgb(195, 146, 233),
    rgb(255, 255, 255)
  );

  /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  background: linear-gradient(to top, rgb(29, 27, 31), rgb(255, 255, 255));
}

table td,
table th {
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
}
tbody td {
  font-weight: 500;
  color: #999999;
}
.dropdown {
  position: relative;
  display: inline-block;
}

.dropdown-content {
  display: none;
  position: absolute;
  background-color: #f9f9f9;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  padding: 12px 16px;
  z-index: 1;
}

.dropdown:hover .dropdown-content {
  display: block;
}
/* Style The Dropdown Button */
.dropbtn {
  background-color: #4caf50;
  color: white;
  padding: 16px;
  font-size: 16px;
  border: none;
  cursor: pointer;
}

/* The container <div> - needed to position the dropdown content */
.dropdown {
  position: relative;
  display: inline-block;
}

/* Dropdown Content (Hidden by Default) */
.dropdown-content {
  display: none;
  position: absolute;
  background-color: #f9f9f9;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
}

/* Links inside the dropdown */
.dropdown-content a {
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
}

/* Change color of dropdown links on hover */
.dropdown-content a:hover {
  background-color: #f1f1f1;
}

/* Show the dropdown menu on hover */
.dropdown:hover .dropdown-content {
  display: block;
}

/* Change the background color of the dropdown button when the dropdown content is shown */
.dropdown:hover .dropbtn {
  background-color: #3e8e41;
}

.drop:hover {
  badkgorund-color: blue;
}
</style>
