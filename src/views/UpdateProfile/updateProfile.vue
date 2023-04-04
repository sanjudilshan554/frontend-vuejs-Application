<template scoped>
  <body>
  <div class="titel">
      <h1>Update point</h1>
  </div>
  

  <section class="cd1 pt-0">
    <form
      class="form-card cd1 pt-0"
      onsubmit="event.preventDefault()"
      @submit.prevent
    >
      <div class="card cd1 ">
        <section class="card">
          <h3>Software</h3>

          <p class="blue-text">
            Just answer a few questions<br />
            so that we can personalize the right experience for you.
          </p>
          <!--------------------Software Part Started-------------------------->
          <h5 class="text-center mb-4">Specially trained Software</h5>

          <!----------------Start First Section Collection ----------------->
          <div class="row justify-content-between text-left">
            <div class="form-group col-sm-6 flex-column d-flex">
              <label class="form-control-label px-3"
                >Software 1 <span class="text-danger"> *</span></label
              >

              <!-- Selection part -->
              <select
                class="btn btn-light"
                name="language"
                id="language"
                v-model="form.software.software_one"
              >
                <option value="Microsoft office 365">
                  Microsoft office 365
                </option>
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
                  v-model="form.software_rate.software_one_rate"
                />
                <p id="rangeValue1">10</p>
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
                class="btn btn-light"
                name="language"
                id="language"
                v-model="form.software.software_two"
              >
                <option value="Microsoft office 365">
                  Microsoft office 365
                </option>
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
                class="btn btn-light"
                name="language"
                id="language"
                v-model="form.software.software_three"
              >
                <option value="Microsoft office 365">
                  Microsoft office 365
                </option>
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
          <!-------------------------------End Third Section Collection ---------------------------->
          <br />

          <!------------------------------Start Fourth Section Collection -------------------------->
          <div class="row justify-content-between text-left">
            <div class="form-group col-sm-6 flex-column d-flex">
              <label class="form-control-label px-3"
                >Software 4<span class="text-danger">*</span>
              </label>

              <!-- Selection part -->
              <select
                class="btn btn-light"
                name="language"
                id="language"
                v-model="form.software.software_four"
              >
                <option value="Microsoft office 365">
                  Microsoft office 365
                </option>
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
          <!------------------------------End Fourth Section Collection ----------------------------------->
        </section>
        <br />

        <!------------------------------------Software Part End------------------------------------------->

        <section class="card">
          <!------------------------------------Subject Part Start------------------------------------------->
          <h3>Subject</h3>

          <p class="blue-text">
            Just answer a few questions<br />
            so that we can personalize the right experience for you.
          </p>

          <h5 class="text-center mb-4">Specially trained Subject</h5>

          <div class="row justify-content-between text-left">
            <div class="form-group col-sm-2 flex-column d-flex">
              <!-- Showing year from the selection box -->
              <select
                class="form-select"
                v-model="form.subject.year_1"
                aria-label="Default select example"
              >
                <option selected>{{ this.form.subject.year_1 }}</option>
              </select>
            </div>
          </div>

          <!-- 1.1   -->
          <div class="row justify-content-between text-left">
            <div class="form-group col-sm-3 flex-column d-flex">
              <label class="form-control-label px-3"
                >Select semester<span class="text-danger"> *</span></label
              >

              <!-- select semester using method with combine below script -->
              <select
                @click="send()"
                class="btn btn-light"
                v-model="form.subject.semster_id"
              >
                <option
                  v-for="value in first_year_semester"
                  v-bind:value="value.id"
                  :key="value.id"
                >
                  {{ value.name }}
                </option>
              </select>
            </div>

            <!-- 1.1 After click semester you can use the perticular semester subject with using script filter -->
            <div class="form-group col-sm-3 flex-column d-flex">
              <label class="form-control-label px-3"
                >Select Subject <span class="text-danger"> *</span></label
              >

              <select class="btn btn-light" v-model="form.subject.subject_one">
                <option v-for="value in subject_result" :key="value">
                  {{ value.subject }}
                </option>
              </select>
            </div>

            <!-- subject slider 1-->
            <div class="form-group col-sm-6 flex-column d-flex">
              <label class="form-control-label px-3"
                ><span class="text-danger"> </span
              ></label>
              <div class="slider">
                <input type="range" v-model="form.subject.subject_one_rate" />
                <p id="rangeValue4">10</p>
              </div>
            </div>
          </div>

          <!-------------------------------------- Second year ------------------------------------>

          <br />

          <div class="form-group col-sm-2 flex-column d-flex">
            <select
              class="form-select"
              v-model="form.subject.year_2"
              aria-label="Default select example"
            >
              <option selected>{{ this.form.subject.year_2 }}</option>
            </select>
          </div>

          <!-- 2.1 -->
          <div class="row justify-content-between text-left">
            <div class="form-group col-sm-3 flex-column d-flex">
              <label class="form-control-label px-3"
                >Select semester<span class="text-danger"> *</span>
              </label>

              <!-- Select semester-->
              <select
                @click="sendsecond()"
                class="btn btn-light"
                v-model="form.subject.subject_two_id"
              >
                <option
                  v-for="value in second_year_semester"
                  v-bind:value="value.id"
                  :key="value.id"
                >
                  {{ value.name }}
                </option>
              </select>
            </div>

            <!-- 2.1 and 2.2 -->
            <div class="form-group col-sm-3 flex-column d-flex">
              <label class="form-control-label px-3"
                >Select subject<span class="text-danger"> *</span></label
              >

              <!-- subject select 2-->
              <select class="btn btn-light" v-model="form.subject.subject_two">
                <option
                  v-for="value in second_year_subject_result"
                  :key="value"
                >
                  {{ value.subject }}
                </option>
              </select>
            </div>

            <div class="form-group col-sm-6 flex-column d-flex">
              <label class="form-control-label px-3"
                ><span class="text-danger"> </span
              ></label>

              <!-- subject slider 2-->
              <div class="slider">
                <input type="range" v-model="form.subject.subject_two_rate" />
                <p id="rangeValue5">10</p>
              </div>
            </div>
          </div>

          <!---------------------------------Third year------------------------------>
          <br />

          <div class="form-group col-sm-2 flex-column d-flex">
            <select
              class="form-select"
              v-model="form.subject.year_3"
              aria-label="Default select example"
            >
              <option selected>{{ this.form.subject.year_3 }}</option>
            </select>
          </div>

          <div class="row justify-content-between text-left">
            <div class="form-group col-sm-3 flex-column d-flex">
              <label class="form-control-label px-3"
                >Select semester<span class="text-danger"> *</span></label
              >
              <!-- select semester-->
              <select
                @click="sendthird()"
                class="btn btn-light"
                v-model="form.subject.third_year_R"
              >
                <option
                  v-for="value in third_year_semester"
                  v-bind:value="value.id"
                  :key="value.id"
                >
                  {{ value.name }}
                </option>
              </select>
            </div>

            <div class="form-group col-sm-3 flex-column d-flex">
              <label class="form-control-label px-3"
                >Select subject<span class="text-danger"> *</span></label
              >
              <!-- subject select -->
              <select
                class="btn btn-light"
                v-model="form.subject.subject_three"
              >
                <option v-for="value in third_year_subject_result" :key="value">
                  {{ value.subject }}
                </option>
              </select>
            </div>

            <!--Third year subject slider 3-->

            <div class="form-group col-sm-6 flex-column d-flex">
              <label class="form-control-label px-3">
                <span class="text-danger"> </span
              ></label>

              <div class="slider">
                <input type="range" v-model="form.subject.subject_three_rate" />
                <p id="rangeValue6">10</p>
              </div>
            </div>
          </div>

          <!--------------------------- Fourth year ------------------------------------->

          <br />

          <div class="form-group col-sm-2 flex-column d-flex">
            <select
              class="form-select"
              v-model="form.subject.year_4"
              aria-label="Default select example"
            >
              <option selected>{{ this.form.subject.year_4 }}</option>
            </select>
          </div>

          <div class="row justify-content-between text-left">
            <!--4.1-->
            <div class="form-group col-sm-6 flex-column d-flex">
              <label class="form-control-label px-3"
                >Select subject<span class="text-danger"> *</span></label
              >

              <select
                class="btn btn-light"
                @click="sendFourth()"
                v-model="form.subject.subject_four"
              >
                <option
                  v-for="value in fourth_year_subject"
                  v-bind="value.id"
                  :key="value.id"
                >
                  {{ value.name }}
                </option>
              </select>
            </div>

            <!-- subject slider 4-->
            <div class="form-group col-sm-6 flex-column d-flex">
              <label class="form-control-label px-3"
                ><span class="text-danger"> </span
              ></label>
              <div class="slider">
                <input type="range" v-model="form.subject.subject_four_rate" />
                <p id="rangeValue7">10</p>
              </div>
            </div>
          </div>
        </section>
        <!---------------------------------------Subject Part End--------------------------------------------->

        <!---------------------------------------Qualification part strated--------------------------------------------->
        <section class="card">
          <div>
            <h3>Qualification</h3>
            <h6>Qualification 01</h6>
            <div class="form-row">
              <div class="col-md-6 mb-3">
                <label for="validationCustom03">Title </label>
                <input
                  type="text"
                  class="form-control"
                  id="validationCustom03"
                  placeholder="Sri Lanka Qualifications Framework"
                  required
                />
                <div class="invalid-feedback">Please provide a valid city.</div>
              </div>
              <div class="col-md-2">
                <label for="validationCustom04">From</label>
                <div class="form-controls"><input type="date" /></div>
              </div>
              <div class="col-md-2">
                <label for="validationCustom05">To</label>
                <div class="form-controls"><input type="date" /></div>
              </div>
            </div>

            <div class="form-row">
              <div class="col-md-6">
                <label for="validationCustom03">Description</label>
                <textarea
                  class="form-control"
                  rows="5"
                  placeholder="Educational qualifications refers to the official confirmation, usually in the form of a certificate, diploma or degree, certifying the successful completion of an education program or a stage of a program"
                ></textarea>
              </div>
            </div>
          </div>

          <div>
            <div class="form-row pt-5">
              <div class="col-md-6 mb-3">
                <h6>Qualification 02</h6>
                <label for="validationCustom03">Title </label>
                <input
                  type="text"
                  class="form-control"
                  placeholder="Information and Communication Technology"
                />
                <div class="invalid-feedback">Please provide a valid city.</div>
              </div>
              <div class="col-md-2 pt-4">
                <label for="validationCustom04">From</label>
                <div class="form-controls"><input type="date" /></div>
              </div>
              <div class="col-md-2 pt-4">
                <label for="validationCustom05">To</label>
                <div class="form-controls"><input type="date" /></div>
              </div>
            </div>

            <div class="form-row">
              <div class="col-md-6">
                <label for="validationCustom03">Description</label>
                <textarea
                  class="form-control"
                  rows="5"
                  placeholder="Educational qualifications refers to the official confirmation, usually in the form of a certificate, diploma or degree, certifying the successful completion of an education program or a stage of a program"
                ></textarea>
              </div>
            </div>
          </div>

          <div>
            <div class="form-row pt-5">
              <div class="col-md-6 mb-3">
                <h6>Qualification 03</h6>
                <label for="validationCustom03">Title </label>
                <input
                  type="text"
                  class="form-control"
                  id="validationCustom03"
                  placeholder="Bachelor of Commerce Honours"
                  required
                />
                <div class="invalid-feedback">Please provide a valid city.</div>
              </div>
              <div class="col-md-2 pt-4">
                <label for="validationCustom04">From</label>
                <div class="form-controls"><input type="date" /></div>
              </div>
              <div class="col-md-2 pt-4">
                <label for="validationCustom05">To</label>
                <div class="form-controls"><input type="date" /></div>
              </div>
            </div>

            <div class="form-row">
              <div class="col-md-6">
                <label for="validationCustom03">Description</label>
                <textarea
                  class="form-control"
                  rows="5"
                  placeholder="Educational qualifications refers to the official confirmation, usually in the form of a certificate, diploma or degree, certifying the successful completion of an education program or a stage of a program"
                ></textarea>
              </div>
            </div>
          </div>
        </section>

        <!---------------------------------------Expirence part strated--------------------------------------------->
        <section class="card">
          <div>
            <h3>Work Experience</h3>
            <h6>Experience 01</h6>
            <div class="form-row">
              <div class="col-md-6 mb-3">
                <label for="validationCustom03">Title </label>
                <input
                  type="text"
                  class="form-control"
                  id="validationCustom03"
                  placeholder="Sri Lanka Qualifications Framework"
                  required
                />
                <div class="invalid-feedback">Please provide a valid city.</div>
              </div>
              <div class="col-md-2">
                <label for="validationCustom04">From</label>
                <div class="form-controls"><input type="date" /></div>
              </div>
              <div class="col-md-2">
                <label for="validationCustom05">To</label>
                <div class="form-controls"><input type="date" /></div>
              </div>
            </div>

            <div class="form-row">
              <div class="col-md-6">
                <label for="validationCustom03">Description</label>
                <textarea
                  class="form-control"
                  rows="5"
                  placeholder="Educational qualifications refers to the official confirmation, usually in the form of a certificate, diploma or degree, certifying the successful completion of an education program or a stage of a program"
                ></textarea>
              </div>
            </div>
          </div>

          <div>
            <div class="form-row pt-5">
              <div class="col-md-6 mb-3">
                <h6>Experience 02</h6>
                <label for="validationCustom03">Title </label>
                <input
                  type="text"
                  class="form-control"
                  placeholder="Information and Communication Technology"
                />
                <div class="invalid-feedback">Please provide a valid city.</div>
              </div>
              <div class="col-md-2 pt-4">
                <label for="validationCustom04">From</label>
                <div class="form-controls"><input type="date" /></div>
              </div>
              <div class="col-md-2 pt-4">
                <label for="validationCustom05">To</label>
                <div class="form-controls"><input type="date" /></div>
              </div>
            </div>

            <div class="form-row">
              <div class="col-md-6">
                <label for="validationCustom03">Description</label>
                <textarea
                  class="form-control"
                  rows="5"
                  placeholder="Educational qualifications refers to the official confirmation, usually in the form of a certificate, diploma or degree, certifying the successful completion of an education program or a stage of a program"
                ></textarea>
              </div>
            </div>
          </div>

          <div>
            <div class="form-row pt-5">
              <div class="col-md-6 mb-3">
                <h6>Experience 03</h6>
                <label for="validationCustom03">Title </label>
                <input
                  type="text"
                  class="form-control"
                  id="validationCustom03"
                  placeholder="Bachelor of Commerce Honours"
                  required
                />
                <div class="invalid-feedback">Please provide a valid city.</div>
              </div>
              <div class="col-md-2 pt-4">
                <label for="validationCustom04">From</label>
                <div class="form-controls"><input type="date" /></div>
              </div>
              <div class="col-md-2 pt-4">
                <label for="validationCustom05">To</label>
                <div class="form-controls"><input type="date" /></div>
              </div>
            </div>

            <div class="form-row">
              <div class="col-md-6">
                <label for="validationCustom03">Description</label>
                <textarea
                  class="form-control"
                  rows="5"
                  placeholder="Educational qualifications refers to the official confirmation, usually in the form of a certificate, diploma or degree, certifying the successful completion of an education program or a stage of a program"
                ></textarea>
              </div>
            </div>

          </div>

        <div class="text-right ">
          <button type="button" class="btn btn-primary btn-sm ">Updae Profile</button>
           
      

      </div>
        </section>
        

      </div>

     
    </form>
  </section>
  </body>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      first_year_semester: [
        { id: "1", name: "1st semester" },
        { id: "2", name: "2nd semester" },
      ],
      first_year_subject: [
        { id: "1", subject: "English Language I - 2020/2021" },
        { id: "1", subject: "Principles of Management - 2020/2021" },
        { id: "1", subject: "Fundamentals of Web Technologies - 2020/2021" },
        {
          id: "1",
          subject: "Fundamentals of Computer Programming - 2020/2021",
        },
        { id: "1", subject: "Mathematics for Technology - 2020/2021" },
        { id: "1", subject: "Essentials of ICT - 2020/2021" },
        { id: "2", subject: " ICT 1261 - IT Law New" },
        { id: "2", subject: "TICT 1223 - Operating Systems New" },
        { id: "2", subject: "TICT 1224 - Object Oriented Programming New" },
        { id: "2", subject: "TICT 1212 - Discrete Structures - New" },
        { id: "2", subject: "TICT 1252 Computational Engineering Drawing" },
        {
          id: "2",
          subject: "TICT 1243 Electronics and Digital Circuit Designs",
        },
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

      third_year_semester: [
        { id: "1", name: "1st smester" },
        { id: "2", name: "2nd semester" },
      ],
      third_year_subject: [
        { id: "1", subject: "AUX3112 - Career Guidance" },
        { id: "1", subject: "TICT3162 - Information Security" },
        { id: "1", subject: "TICT3153 - Software Engineering" },
        { id: "1", subject: "TICT3142 - Social and Professional Issues in IT" },
        { id: "1", subject: "TICT3132 - Advanced Web Technologies" },
        { id: "1", subject: "TICT3123 - Advanced Database Management Systems" },
        { id: "1", subject: "AUX3212 - Research Methodology" },
        { id: "2", subject: "TICT3263 - Essential of E-Commerce " },
        { id: "2", subject: "TICT3253 - Digital Image Processing" },
        { id: "2", subject: "TICT3242 - Information Security" },
        { id: "2", subject: "TICT3232 - Project Management" },
        {
          id: "2",
          name: "TICT3224 - Advanced Computer Networks and Administration",
        },
        { id: "2", name: "TICT3213 - Advanced Database Management System" },
        { id: "2", name: "TICT 3272 - Computerized Accounting" },
      ],

      fourth_year_semster: [
        { id: "1", name: "1st semester" },
        { id: "2", name: "2nd semester" },
      ],

      fourth_year_subject: [
        { id: "", name: "TICT4162 - Bioinformatics" },
        { id: "", name: "TICT4152 - Cloud Application Development" },
        { id: "", name: "TICT4143 - Intelligent Systems" },
        { id: "", name: "TICT4133 - Mobile Application Development" },
        { id: "", name: "TICT4122 - Green Computing" },
        { id: "", name: "TICT4112 - Distributed Systems" },
        { id: "", name: "ICT 4152 - Cloud Application Development" },
        { id: "", name: "ICT 4143 - Intelligent Systems" },
        { id: "", name: "ICT 4133 - Mobile Application Development" },
        { id: "", name: "ICT 4122 - Green Computing" },
        { id: "", name: "ICT 4112 - Distributed Systems" },
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
          year_1: "1",
          semster_id: "",
          subject_one: "",
          subject_one_rate: "",

          year_2: "2",
          subject_two_id: "",
          subject_two: "",
          subject_two_rate: "",

          year_3: "3",
          third_year_R: "",
          subject_three: "",
          subject_three_rate: "",

          year_4: "4",
          subject_four: "",
          subject_four_rate: "",
        },

        education_qualification: {
          qualification_one_title: "",
          qualification_one_descripition: "",
          qualification_one_date_from: "",
          qualification_one_date_to: "",

          qualification_two_title: "",
          qualification_two_descripition: "",
          qualification_two_date_from: "",
          qualification_two_date_to: "",

          qualification_three_title: "",
          qualification_three_descripition: "",
          qualification_three_date_from: "",
          qualification_three_date_to: "",
        },

        work_experince: {
          work_experince_one_title: "",
          work_experince_one_descripition: "",
          work_experince_one_date_from: "",
          work_experince_one_date_to: "",

          work_experince_two_title: "",
          work_experince_two_descripition: "",
          work_experince_two_date_from: "",
          work_experince_one_date_to: "",

          work_experince_three_title: "",
          work_experince_three_descripition: "",
          work_experince_three_date_from: "",
          work_experince_one_date_to: "",
        },
        id: "",
        role: "",
      },

      subject_result: [],
      second_year_subject_result: [],
      third_year_subject_result: [],
      fourth_year_subject_result: [],
    };
  },

  mounted() {
    let user = localStorage.getItem("userDetails");
    user = JSON.parse(user);
    this.form.id = user.id;
    this.form.role = user.role;
  },
  methods: {
    save() {
      axios
        .post("http://127.0.0.1:8000/api/update_profile", this.form)
        .then((response) => {
          if (response.status == 200) {
            alert(response.data.message);
          }
        })
        .catch((error) => {
          console.log(error);
        });
    },

    send() {
      this.subject_result = this.first_year_subject.filter(
        (value) => value.id == this.form.subject.semster_id
      );
    },
    sendsecond() {
      this.second_year_subject_result = this.second_year_subject.filter(
        (value) => value.id == this.form.subject.subject_two_id
      );
    },
    sendthird() {
      this.third_year_subject_result = this.third_year_subject.filter(
        (value) => value.id == this.form.subject.third_year_R
      );
    },
    sendFourth() {
      this.fourth_year_subject_result = this.fourth_year_subject.filter(
        (value) => value.id == this.form.subject.fourth_year
      );
    },
  },

  // Data Picker Initialization
};
</script>

<style scoped>
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

*{
  padding:0;
  margin:0;
}
body {
background-color: #f9fcff;
background-image: linear-gradient(135deg, #edf2f2 50%, #bbe4cc 50%);

}

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

.qualifided_title {
  max-width: 60%;
}

.dateFixer {
  padding-bottom: 1%;
  float: left;
}

.hello {
  text-align: left;
  color: #00bcd4;
}

.cd1 {
  background-color: #74ebd5;
  background-image: linear-gradient(90deg, #74ebd5 0%, #9face6 100%);
}

.form-control,
.form-control:active,
.form-control:focus {
  background-color: rgba(32, 21, 21, 0.043);
  color: rgb(0, 0, 0);
  border-color: rgba(0, 0, 0, 0.127);
}

.form-control::placeholder {
  color: rgb(0, 0, 0);
}

.form-controls {
  background-color: #ffffff4b;
  border-radius: 10px;
  color: white;
  align-items: center;
  padding-left: 10px;
  border-color: white;
}

body
.btn1 {
  padding: 0;
  margin: 0;
  padding-left:0 ;
}

h1{
  text-align: center;
  padding-top:0px;
  text-decoration: solid;
  text-shadow: 10px;
  text-shadow: 1px 0px 3px rgba(0, 0, 0, 0.396);
  padding-bottom: 5px;
}
</style>
