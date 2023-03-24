<template>
  <section class="intro">
    <div class="container-fluid px-1 py-5 mx-auto">
      <div class="row d-flex justify-content-center">
        <div class="col-xl-7 col-lg-8 col-md-9 col-11 text-center">
          <h3>Kuppi Request</h3>
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
                    v-model="kuppirequest.kuppiname"
                  />
                </div>
                <div class="form-group col-sm-6 flex-column d-flex">
                  <label class="form-control-label px-3"
                    >Subject<span class="text-danger"> *</span></label
                  >
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    placeholder="Enter Subject name "
                    onblur="validate(1)"
                    v-model="kuppirequest.subject"
                  />
                </div>
              </div>

              <div class="row justify-content-between text-left">
                <div class="form-group col-sm-6 flex-column d-flex">
                  <label class="form-control-label px-3"
                    >free time<span class="text-danger"> *</span></label
                  >
                  <input
                    type="text"
                    id="freetime"
                    name="freetime"
                    placeholder="Free time"
                    onblur="validate(1)"
                    v-model="kuppirequest.freetime"
                  />
                </div>
                <div class="form-group col-sm-6 flex-column d-flex">
                  <label class="form-control-label px-3"
                    >place<span class="text-danger"> *</span></label
                  >
                  <input
                    type="text"
                    id="place"
                    name="place"
                    placeholder="Ex TCL01"
                    onblur="validate(1)"
                    v-model="kuppirequest.place"
                  />
                </div>
              </div>

              <div class="row justify-content-between text-left">
                <div class="form-group col-sm-6 flex-column d-flex">
                  <label class="form-control-label px-3"
                    >Senior name<span class="text-danger"> *</span></label
                  >
                  <input
                    type="text"
                    id="seniorName"
                    name="seniorName"
                    placeholder="senior Name"
                    onblur="validate(1)"
                    v-model="kuppirequest.seniorName"
                  />
                </div>
                <div class="form-group col-sm-6 flex-column d-flex">
                  <label class="form-control-label px-3"
                    >Senor email<span class="text-danger"> *</span></label
                  >
                  <input
                    type="senioremail"
                    id="senioremail"
                    name="senioremail"
                    placeholder="sanjudilshan554@gmail.com"
                    onblur="validate(1)"
                    v-model="kuppirequest.senioremail"
                  />
                </div>
              </div>

              <div class="row justify-content-between text-left">
                <div class="form-group col-sm-6 flex-column d-flex">
                  <label class="form-control-label px-3"
                    >Senior Registration id<span class="text-danger">
                      *</span
                    ></label
                  >
                  <input
                    type="text"
                    id="seniourregid"
                    name="seniourregid"
                    placeholder="2018ICTSXX"
                    onblur="validate(1)"
                    v-model="kuppirequest.seniourregid"
                  />
                </div>
                <div class="form-group col-sm-6 flex-column d-flex">
                  <label class="form-control-label px-3"
                    >Type<span class="text-danger"> *</span></label
                  >
                  <input
                    type="text"
                    id="onoff"
                    name="onoff"
                    placeholder="Onlin/Offline"
                    onblur="validate(1)"
                    v-model="kuppirequest.onoff"
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
              <select v-model="form.years" class="form-control" @change="all()">
                <option
                  v-for="value in years"
                  v-bind:value="value.id"
                  :key="value.id"
                >
                  {{ value.name }}
                </option>
              </select>
            </div>

            <div class="form-group col-sm-6 flex-column d-flex">
              <label class="form-control-label px-3"
                >Choose semester<span class="text-danger"> *</span></label
              >
              <select
                v-model="form.semester"
                id="inputState"
                class="form-control"
                @change="allsub()"
              >
                <option
                  v-for="value in year_semster_result"
                  v-bind:value="value.name"
                  :key="value.id"
                >
                  {{ value.name }}
                </option>
              </select>
            </div>

            <div class="form-group mb-4 col-sm-6 flex-column d-flex">
              <label class="form-control-label px-3"
                >Choose subject<span class="text-danger"> *</span></label
              >
              <select v-model="form.subject" class="form-control">
                <option v-for="value in semester_subject_result">
                  {{ value.subject }}
                </option>
              </select>
            </div>
            <div class="form-group col-sm-6 flex-column d-flex">
              <label class="form-control-label px-3"
                ><span class="text-danger"> *</span></label
              >
              <button class="btn btn-success" @click="search()">Search</button>
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
                    <tr>
                      <th scope="col">Seniour name</th>
                      <th scope="col">Seniour email</th>
                      <th scope="col">Contact</th>
                      <th scope="col">AGE</th>
                      <th scope="col">ADDRESS</th>
                      <th scope="col">SALARY</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row" style="color: #666666">Tiger Nixon</th>
                      <td>System Architect</td>
                      <td>tnixon12@example.com</td>
                      <td>61</td>
                      <td>Edinburgh</td>
                      <td>$320,800</td>
                      <td>
                        <input
                          type="button"
                          name="button"
                          id="button"
                          value="select"
                        />
                      </td>
                    </tr>
                    <tr>
                      <th scope="row" style="color: #666666">Sonya Frost</th>
                      <td>Software Engineer</td>
                      <td>sfrost34@example.com</td>
                      <td>23</td>
                      <td>Edinburgh</td>
                      <td>$103,600</td>
                      <td>
                        <input
                          type="button"
                          name="button"
                          id="button"
                          value="select"
                        />
                      </td>
                    </tr>
                    <tr>
                      <th scope="row" style="color: #666666">Jena Gaines</th>
                      <td>Office Manager</td>
                      <td>jgaines75@example.com</td>
                      <td>30</td>
                      <td>London</td>
                      <td>$90,560</td>
                      <td>
                        <input
                          type="button"
                          name="button"
                          id="button"
                          value="select"
                        />
                      </td>
                    </tr>
                    <tr>
                      <th scope="row" style="color: #666666">Quinn Flynn</th>
                      <td>Support Lead</td>
                      <td>qflyn09@example.com</td>
                      <td>22</td>
                      <td>Edinburgh</td>
                      <td>$342,000</td>
                      <td>
                        <input
                          type="button"
                          name="button"
                          id="button"
                          value="select"
                        />
                      </td>
                    </tr>
                    <tr>
                      <th scope="row" style="color: #666666">
                        Charde Marshall
                      </th>
                      <td>Regional Director</td>
                      <td>cmarshall28@example.com</td>
                      <td>36</td>
                      <td>San Francisco</td>
                      <td>$470,600</td>
                      <td>
                        <input
                          type="button"
                          name="button"
                          id="button"
                          value="select"
                        />
                      </td>
                    </tr>
                    <tr>
                      <th scope="row" style="color: #666666">Haley Kennedy</th>
                      <td>Senior Marketing Designer</td>
                      <td>hkennedy63@example.com</td>
                      <td>43</td>
                      <td>London</td>
                      <td>$313,500</td>
                      <td>
                        <input
                          type="button"
                          name="button"
                          id="button"
                          value="select"
                        />
                      </td>
                    </tr>
                    <tr>
                      <th scope="row" style="color: #666666">
                        Tatyana Fitzpatrick
                      </th>
                      <td>Regional Director</td>
                      <td>tfitzpatrick00@example.com</td>
                      <td>19</td>
                      <td>Warsaw</td>
                      <td>$385,750</td>
                      <td>
                        <input
                          type="button"
                          name="button"
                          id="button"
                          value="select"
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
  </section>
</template>

<script scoped>
import axios from "axios";
export default {
  data() {
    return {
      kuppirequest: {
        kuppiname: "",
        subject: "",
        freetime: "",
        place: "",
        seniorName: "",
        senioremail: "",
        seniourregid: "",
        onoff: "",
      },

      years: [
        { id: "1", name: "1st year" },
        { id: "2", name: "2nd year" },
        { id: "3", name: "3rd year" },
        { id: "4", name: "4th year" },
      ],

      first_year_semester: [
        { id: "1", name: "1st semester" },
        { id: "1", name: "2nd semester" },
      ],
      secound_year_semester: [
        { id: "2", name: "1st semester" },
        { id: "2", name: "2nd semester" },
      ],
      third_year_semester: [
        { id: "3", name: "1st semester" },
        { id: "3", name: "2nd semester" },
      ],
      fourth_year_semester: [{ id: "4", name: "1st semester" }],

      first_year_subject: [
        {
          id: "1",
          name: "1st semester",
          subject: "English Language I - 2020/2021",
        },
        {
          id: "1",
          name: "1st semester",
          subject: "Principles of Management - 2020/2021",
        },
        {
          id: "1",
          name: "1st semester",
          subject: "Fundamentals of Web Technologies - 2020/2021",
        },
        {
          id: "1",
          name: "1st semester",
          subject: "Fundamentals of Computer Programming - 2020/2021",
        },
        {
          id: "1",
          name: "1st semester",
          subject: "Mathematics for Technology - 2020/2021",
        },
        {
          id: "1",
          name: "1st semester",
          subject: "Essentials of ICT - 2020/2021",
        },

        { id: "1", name: "2nd semester", subject: " ICT 1261 - IT Law New" },
        {
          id: "1",
          name: "2nd semester",
          subject: "TICT 1223 - Operating Systems New",
        },
        {
          id: "1",
          name: "2nd semester",
          subject: "TICT 1224 - Object Oriented Programming New",
        },
        {
          id: "1",
          name: "2nd semester",
          subject: "TICT 1212 - Discrete Structures - New",
        },
        {
          id: "1",
          name: "2nd semester",
          subject: "TICT 1252 Computational Engineering Drawing",
        },
        {
          id: "1",
          name: "2nd semester",
          subject: "TICT 1243 Electronics and Digital Circuit Designs",
        },
        {
          id: "1",
          name: "2nd semester",
          subject: "TICT 1233 Operating Systems",
        },
      ],

      second_year_subject: [
        {
          id: "2",
          name: "1st semester",
          subject: "AUX2113 - English Language II",
        },
        {
          id: "2",
          name: "1st semester",
          subject: "TICT2153 - Human Computer Interaction",
        },
        {
          id: "2",
          name: "1st semester",
          subject: "TICT2142 -Multimedia Design and Technologies",
        },
        {
          id: "2",
          name: "1st semester",
          subject: "TICT2134 - Advanced Computer Programming ",
        },
        {
          id: "2",
          name: "1st semester",
          subject: "TICT2122 - Statistics for Technology",
        },
        {
          id: "2",
          name: "1st semester",
          subject: "TICT2113 - Data Structures and Algorithms",
        },

        {
          id: "2",
          name: "2nd semester",
          subject: "TICT 2233-Database Management Systems",
        },
        {
          id: "2",
          name: "2nd semester",
          subject: "TICT 2263-Accounting for Technology",
        },
        {
          id: "2",
          name: "2nd semester",
          subject: "TICT 2212 Operational Research",
        },
        {
          id: "2",
          name: "2nd semester",
          subject: "TICT 2252 System Analysis and Design",
        },
        {
          id: "2",
          name: "2nd semester",
          subject: "TICT 2223 Introduction to DBMS",
        },
        {
          id: "2",
          name: "2nd semester",
          subject: "AUX 2212 Soft skill and Career Guidance",
        },
      ],

      third_year_subject: [
        { id: "3", name: "1st semester", subject: "AUX3112 - Career Guidance" },
        {
          id: "3",
          name: "1st semester",
          subject: "TICT3162 - Information Security",
        },
        {
          id: "3",
          name: "1st semester",
          subject: "TICT3153 - Software Engineering",
        },
        {
          id: "3",
          name: "1st semester",
          subject: "TICT3142 - Social and Professional Issues in IT",
        },
        {
          id: "3",
          name: "1st semester",
          subject: "TICT3132 - Advanced Web Technologies",
        },
        {
          id: "3",
          name: "1st semester",
          subject: "TICT3123 - Advanced Database Management Systems",
        },

        {
          id: "3",
          name: "2nd semester",
          subject: "AUX3212 - Research Methodology",
        },
        {
          id: "3",
          name: "2nd semester",
          subject: "TICT3263 - Essential of E-Commerce ",
        },
        {
          id: "3",
          name: "2nd semester",
          subject: "TICT3253 - Digital Image Processing",
        },
        {
          id: "3",
          name: "2nd semester",
          subject: "TICT3242 - Information Security",
        },
        {
          id: "3",
          name: "2nd semester",
          subject: "TICT3232 - Project Management",
        },
        {
          id: "3",
          name: "2nd semester",
          subject: "TICT3224 - Advanced Computer Networks and Administration",
        },
        {
          id: "3",
          name: "2nd semester",
          subject: "TICT3213 - Advanced Database Management System",
        },
        {
          id: "3",
          name: "2nd semester",
          subject: "TICT 3272 - Computerized Accounting",
        },
      ],

      fourth_year_subject: [
        { id: "4", name: "1st semester", subject: "TICT4162 - Bioinformatics" },
        {
          id: "4",
          name: "1st semester",
          subject: "TICT4152 - Cloud Application Development",
        },
        {
          id: "4",
          name: "1st semester",
          subject: "TICT4143 - Intelligent Systems",
        },
        {
          id: "4",
          name: "1st semester",
          subject: "TICT4133 - Mobile Application Development",
        },
        {
          id: "4",
          name: "1st semester",
          subject: "TICT4122 - Green Computing",
        },
        {
          id: "4",
          name: "1st semester",
          subject: "TICT4112 - Distributed Systems",
        },
        {
          id: "4",
          name: "1st semester",
          subject: "ICT 4152 - Cloud Application Development",
        },
        {
          id: "4",
          name: "1st semester",
          subject: "ICT 4143 - Intelligent Systems",
        },
        {
          id: "4",
          name: "1st semester",
          subject: "ICT 4133 - Mobile Application Development",
        },
        {
          id: "4",
          name: "1st semester",
          subject: "ICT 4122 - Green Computing",
        },
        {
          id: "4",
          name: "1st semester",
          subject: "ICT 4112 - Distributed Systems",
        },
      ],
      form: {
        years: "",
        semester: "",
        subject:""
      },
      year_semster_result: [],
      semester_subject_result: [],
    };
  },

  created() {
    this.getkuppirequest();
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

    //searching form user inputs to the table
    search(){
      axios
        .post("http://127.0.0.1:8000/api/search/subject", this.form)
        .then((response) => {
          if (response.status == 200) {
            alert("search successfully");
          }
        })

        .catch((error) => {
          console.log(error);
        });
    },
    //getting data from back end

    getkuppirequest() {
      axios
        .post("http://127.0.0.1:8000/api/profile/kuppi", this.form)
        .then((response) => {
          this.kuppirequest = response.data.data;
        })
        .catch((error) => {
          console.log(error);
        });
    },

    all() {
      if (this.form.years == "1") {
        this.year_semster_result = this.first_year_semester.filter(
          (value) => value.id == this.form.years
        );
      } else if (this.form.years == "2") {
        this.year_semster_result = this.secound_year_semester.filter(
          (value) => value.id == this.form.years
        );
      } else if (this.form.years == "3") {
        this.year_semster_result = this.third_year_semester.filter(
          (value) => value.id == this.form.years
        );
      } else if (this.form.years == "4") {
        this.year_semster_result = this.fourth_year_semester.filter(
          (value) => value.id == this.form.years
        );
      }
    },

    allsub() {
      if (this.form.years == "1") {
        if (this.form.semester == "1st semester") {
          this.semester_subject_result = this.first_year_subject.filter(
            (value) => value.name == this.form.semester
          );
        } else if (this.form.semester == "2nd semester") {
          this.semester_subject_result = this.first_year_subject.filter(
            (value) => value.name == this.form.semester
          );
        }
      } else if (this.form.years == "2") {
        if (this.form.semester == "1st semester") {
          this.semester_subject_result = this.second_year_subject.filter(
            (value) => value.name == this.form.semester
          );
        } else if (this.form.semester == "2nd semester") {
          this.semester_subject_result = this.second_year_subject.filter(
            (value) => value.name == this.form.semester
          );
        }
      } else if (this.form.years == "3") {
        if (this.form.semester == "1st semester") {
          this.semester_subject_result = this.third_year_subject.filter(
            (value) => value.name == this.form.semester
          );
        } else if (this.form.semester == "2nd semester") {
          this.semester_subject_result = this.third_year_subject.filter(
            (value) => value.name == this.form.semester
          );
        }
      } else if (this.form.years == "4") {
        if (this.form.semester == "1st semester") {
          this.semester_subject_result = this.fourth_year_subject.filter(
            (value) => value.name == this.form.semester
          );
        }
      }
    },
  },
};
</script>

<style>
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
    rgba(205, 156, 242, 1),
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

.dropdown-menu li {
  position: relative;
}
.dropdown-menu .dropdown-submenu {
  display: none;
  position: absolute;
  left: 100%;
  top: -7px;
}
.dropdown-menu .dropdown-submenu-left {
  right: 100%;
  left: auto;
}
.dropdown-menu > li:hover > .dropdown-submenu {
  display: block;
}
</style>
