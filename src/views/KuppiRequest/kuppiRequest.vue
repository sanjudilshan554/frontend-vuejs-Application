<template scoped>
  <section class="intro">
    <body>
      <div class="container-fluid px-1 py-5 mx-auto">
        <div class="row d-flex justify-content-center">
          <div class="col-xl-7 col-lg-8 col-md-9 col-11 text-center">
            <h1>Kuppi Request</h1>
            <p class="black-text">
              Just answer a few questions<br />
              so that we can personalize the right experience for you.
            </p>
            <div class="card cd1">
              <h5 class="text-center mb-4 text-white">
                Fill all the entier field
              </h5>
              <form class="form-card" @submit.prevent>
                <div class="row justify-content-between text-left">
                  <div class="form-group col-sm-6 flex-column d-flex">
                    <label class="form-control-label px-3"
                      >Kuppi Name<span class="text-danger"> *</span></label
                    >
                    <input
                      type="text"
                      id="revName"
                      name="revName"
                      placeholder="Create Name"
                      onblur="validate(1)"
                      v-model="user_data.revison_name"
                    />
                  </div>
                  <div class="form-group col-sm-6 flex-column d-flex">
                    <label class="form-control-label px-3"
                      >Subject<span class="text-danger"> *</span></label
                    >
                    <input
                      type="text"
                      placeholder="Enter Subject name "
                      onblur="validate(1)"
                      v-model="user_data.subject"
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
                      v-model="user_data.free_time"
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
                      v-model="user_data.place"
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
                      placeholder="senior Name"
                      onblur="validate(1)"
                      v-model="user_data.name"
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
                      v-model="user_data.email"
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
                      v-model="user_data.regId"
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
                      v-model="user_data.type"
                    />
                  </div>
                </div>

                <div class="row justify-content-between text-left">
                  <div class="form-group col-sm-6 flex-column d-flex">
                    <label class="form-control-label px-3"
                      >How many members do you like to join<span
                        class="text-danger"
                      >
                        *</span
                      ></label
                    >
                    <input
                      type="text"
                      id="onoff"
                      name="onoff"
                      placeholder="ex: 50 members"
                      onblur="validate(1)"
                      v-model="user_data.members"
                    />
                  </div>
                  <div class="form-group col-sm-6 flex-column d-flex">
                    <label class="form-control-label px-3"
                      >Type<span class="text-danger"> *</span></label
                    >
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

      <div class="container-fluid px-1 py-5 mx-auto cd2">
        <div class="row d-flex justify-content-center">
          <div class="col-xl-7 col-lg-8 col-md-9 col-11 text-center">
            <div class="row justify-content-between text-left">
              <div class="form-group col-sm-6 flex-column d-flex">
                <label class="form-control-label px-3"
                  >Choose year<span class="text-danger"> *</span></label
                >
                <select
                  v-model="form.years"
                  class="form-control"
                  @change="all()"
                >
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
                <button class="btn btn-success" @click="search()">
                  Search
                </button>
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
                  <table class="table mb-0" v-show="has_data">
                    <thead>
                      <tr>
                        <th scope="col">Seniour name</th>
                        <th scope="col">Seniour email</th>
                        <th scope="col">Contact</th>
                        <th scope="col">AGE</th>
                        <th scope="col">Gender</th>
                        <th scope="col">Seniour Reg no</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr v-for="values in users_data" :key="values.id">
                        <th scope="row" style="color: #666666">
                          {{ values.fname }}
                        </th>
                        <td>{{ values.email }}</td>
                        <td>{{ values.mobNo }}</td>
                        <td>{{ values.age }}</td>
                        <td>{{ values.gender }}</td>
                        <td>{{ values.unvRegNo }}</td>
                        <td>
                          <input
                            @click="setUser(values)"
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
    </body>
  </section>
</template>

<script scoped>
import axios from "axios";
export default {
  data() {
    return {
      years: [
        { id: "1", name: "1st year" },
        { id: "2", name: "2nd year" },
        { id: "3", name: "3rd year" },
        { id: "4", name: "4th year" },
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
      form: {
        years: "",
        semester: "",
        subject: "",
      },

      year_semster_result: [],
      semester_subject_result: [],

      users_data: [],

      has_data: false,

      user_data: {
        name: "",
        subject: "",
        email: "",
        regId: "",
        revison_name: "",
        free_time: "",
        place: "",
        type: "",
        local_id: "",
        members: "",
      },
    };
  },

  created() {
    // this.getkuppirequest();
  },

  mounted() {
    let user = localStorage.getItem("userDetails");
    user = JSON.parse(user);
    this.user_data.local_id = user.id;
  },

  methods: {
    save() {
      axios
        .post("http://127.0.0.1:8000/api/kuppi", this.user_data)
        .then((response) => {
          if (response.status == 200) {
            alert("Request send successfully");
          }
        })

        .catch((error) => {
          console.log(error);
        });
    },

    //searching form user inputs to the table
    search() {
      axios
        .post("http://127.0.0.1:8000/api/search/subject", this.form)
        .then((response) => {
          if (response.status == "200") {
            // console.warn(response);
            alert("Recode found");
            this.users_data = response.data.data;
            this.user_data.subject = this.form.subject;
            this.has_data = this.users_data.length > 0;
          }
        })

        .catch((error) => {
          alert("Recode not found");
          console.log(error);
        });
    },

    setUser(data) {
      this.user_data.name = data.fname;
      this.user_data.email = data.email;
      this.user_data.regId = data.unvRegNo;
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
        if (this.form.semester == "1") {
          this.semester_subject_result = this.first_year_subject.filter(
            (value) => value.name == this.form.semester
          );
        } else if (this.form.semester == "2") {
          this.semester_subject_result = this.first_year_subject.filter(
            (value) => value.name == this.form.semester
          );
        }
      } else if (this.form.years == "2") {
        if (this.form.semester == "1") {
          this.semester_subject_result = this.second_year_subject.filter(
            (value) => value.name == this.form.semester
          );
        } else if (this.form.semester == "2") {
          this.semester_subject_result = this.second_year_subject.filter(
            (value) => value.name == this.form.semester
          );
        }
      } else if (this.form.years == "3") {
        if (this.form.semester == "1") {
          this.semester_subject_result = this.third_year_subject.filter(
            (value) => value.name == this.form.semester
          );
        } else if (this.form.semester == "2") {
          this.semester_subject_result = this.third_year_subject.filter(
            (value) => value.name == this.form.semester
          );
        }
      } else if (this.form.years == "4") {
        if (this.form.semester == "1") {
          this.semester_subject_result = this.fourth_year_subject.filter(
            (value) => value.name == this.form.semester
          );
        }
      }
    },
  },
};
</script>

<style scoped>
body {
  color: #000;
  overflow-x: hidden;
  height: 100%;
  background-repeat: no-repeat;
  background-size: 100% 100%;
  background: rgb(27, 110, 208);
  background: linear-gradient(
    0deg,
    rgba(27, 110, 208, 1) 0%,
    rgba(8, 233, 200, 1) 100%
  );
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

.form-control-label {
  color: #f1f1f1;
}

.card {
  border-radius: 1rem;
  border: 1px solid transparent;

  backdrop-filter: blur(5rem);
  box-shadow: 0.1rem 0.1rem rgba(0, 0, 0, 0.2);

  border-top-color: rgba(255, 255, 255, 0.5);
  border-top-color: rgba(255, 255, 255, 0.5);
  border-top-color: rgba(255, 255, 255, 0.1);
  border-top-color: rgba(255, 255, 255, 0.1);
}
.cd1 {
  background-color: rgba(0, 0, 0, 0.361);
}

input {
  color: #fff;
}
::placeholder {
  color: #fff;
}
.cd2 {
  background-color: rgba(6, 9, 5, 0.1);
}
</style>
