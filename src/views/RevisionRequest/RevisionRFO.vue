<template scoped>
  <body>
    <div class="container-fluid px-1 py-5 mx-auto">
      <div class="row d-flex justify-content-center">
        <div class="col-xl-7 col-lg-8 col-md-9 col-11 text-center">
          <h1>Request Revision Lecture</h1>
          <p class="b;ack-text">
            Just answer a few questions<br />
            so that we can personalize the right experience for you.
          </p>
          <div class="card cd1">
            <h5 class="text-center mb-4 text-white">
              Fill all the entier field
            </h5>
            <form
              class="form-card"
              onsubmit="event.preventDefault()"
              @submit.prevent
            >
              <div class="row justify-content-between text-left">
                <div class="form-group col-sm-6 flex-column d-flex">
                  <label class="form-control-label px-3 text-white"
                    >Revision Name<span class="text-danger"> *</span></label
                  >
                  <input
                    type="text"
                    placeholder="Create Name"
                    onblur="validate(1)"
                    v-model="userdata.revName"
                  />
                </div>
                <div class="form-group col-sm-6 flex-column d-flex text-white">
                  <label class="form-control-label px-3"
                    >Subject<span class="text-danger"> *</span></label
                  >
                  <input
                    type="text"
                    placeholder="Create Name"
                    onblur="validate(1)"
                    v-model="userdata.subject"
                  />
                </div>
              </div>

              <div class="row justify-content-between text-left">
                <div class="form-group col-sm-6 flex-column d-flex text-white">
                  <label class="form-control-label px-3"
                    >Contact no<span class="text-danger"> *</span></label
                  >
                  <input
                    type="text"
                    placeholder="Contact number "
                    onblur="validate(1)"
                    v-model="userdata.contact"
                  />
                </div>
                <div class="form-group col-sm-6 flex-column d-flex text-white">
                  <label class="form-control-label px-3"
                    >Freetime<span class="text-danger"> *</span></label
                  >
                  <input
                    type="text"
                    placeholder="03/05/2023 Monday untill 6pm"
                    onblur="validate(2)"
                    v-model="userdata.freetime"
                  />
                </div>
              </div>
              <div class="row justify-content-between text-left">
                <div class="form-group col-sm-6 flex-column d-flex text-white">
                  <label class="form-control-label px-3"
                    >lecture Hall Name<span class="text-danger"> *</span></label
                  >
                  <input
                    type="text"
                    placeholder="Ex TLH_1"
                    onblur="validate(3)"
                    v-model="userdata.lecHallName"
                  />
                </div>
                <div class="form-group col-sm-6 flex-column d-flex text-white">
                  <label class="form-control-label px-3"
                    >lecture Name<span class="text-danger"> *</span></label
                  >
                  <input
                    type="text"
                    placeholder="Lecture name"
                    onblur="validate(4)"
                    v-model="userdata.lectureName"
                  />
                </div>
              </div>
              <div class="row justify-content-between text-left">
                <div class="form-group col-sm-6 flex-column d-flex text-white">
                  <label class="form-control-label px-3"
                    >lectur E mail<span class="text-danger"> *</span></label
                  >
                  <input
                    type="text"
                    placeholder="sample@gmail.com"
                    onblur="validate(5)"
                    v-model="userdata.lecturemail"
                  />
                </div>

                <div class="form-group col-sm-6 flex-column d-flex text-white">
                  <label class="form-control-label px-3"
                    >How many members do you like to join<span
                      class="text-danger"
                    >
                      *</span
                    ></label
                  >
                  <input
                    type="text"
                    placeholder="ex:50 members"
                    onblur="validate(5)"
                    v-model="userdata.members"
                  />
                </div>
              </div>

              <div class="row justify-content-between text-left">
                <div
                  class="form-group col-sm-6 flex-column d-flex text-white"
                ></div>
                <div class="form-group col-sm-6 flex-column d-flex text-white">
                  <label class="form-control-label px-3"
                    ><span class="text-danger"> .</span></label
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
            <div class="form-group col-sm-6 flex-column d-flex text-white">
              <label class="form-control-label px-3"
                >Choose year<span class="text-danger"> *</span></label
              >
              <select
                v-model="form.year"
                @click="semester_filter()"
                class="form-control"
              >
                <option
                  v-for="value in year"
                  v-bind:value="value.id"
                  :key="value.id"
                >
                  {{ value.name }}
                </option>
              </select>
            </div>

            <div class="form-group col-sm-6 flex-column d-flex">
              <label class="form-control-label px-3 text-white"
                >Choose semester<span class="text-danger"> *</span></label
              >
              <select
                v-model="form.semester"
                @click="subject_filter()"
                class="form-control"
              >
                <option
                  v-for="value in semester_selection"
                  v-bind:value="value.name"
                  :key="value.id"
                >
                  {{ value.name }}
                </option>
              </select>
            </div>

            <div class="form-group mb-4 col-sm-6 flex-column d-flex">
              <label class="form-control-label px-3 text-white"
                >Choose subject<span class="text-danger"> *</span></label
              >
              <select v-model="form.subject" class="form-control">
                <option
                  v-for="value in subject_selection"
                  v-bind:key="value.subject"
                  :key="value.subject"
                >
                  {{ value.subject }}
                </option>
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
                <table class="table mb-0" v-show="has_data">
                  <thead>
                    <tr>
                      <th scope="col">Lecturer name</th>
                      <th scope="col">Lecture email</th>
                      <th scope="col">Contact</th>
                      <th scope="col">Age</th>
                      <th scope="col">Gender</th>
                      <th scope="col">Selection</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="values in users_data" :key="values.id">
                      <td>{{ values.fname }}</td>
                      <td>{{ values.email }}</td>
                      <td>{{ values.mobNumber }}</td>
                      <td>{{ values.age }}</td>
                      <td>{{ values.gender }}</td>

                      <td>
                        <input
                          @click="selectValue(values)"
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
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      form: {
        year: "",
        subject: "",
        semester: "",
      },

      year: [
        { id: "1", name: "1" },
        { id: "2", name: "2" },
        { id: "3", name: "3" },
        { id: "4", name: "4" },
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

      semester_selection: [],
      subject_selection: [],

      users_data: [],

      userdata: {
        Requester_id: "",
        lectureRegId: "",
        revName: "",
        subject: "",
        contact: "",
        freetime: "",
        lecHallName: "",
        lectureName: "",
        lecturemail: "",
        lectureempID: "",
        members: "",
      },
    };
  },

  mounted() {
    let user = localStorage.getItem("userDetails");
    user = JSON.parse(user);
    this.userdata.Requester_id = user.id;
  },

  methods: {
    save() {
      axios
        .post("http://127.0.0.1:8000/api/revision", this.userdata)
        .then((response) => {
          if (response.status == 200) {
            alert(response.data.message);
          }
        })
        .catch((error) => {
          console.log(error);
        });
    },

    semester_filter() {
      if (this.form.year == "1") {
        this.semester_selection = this.first_year_semester.filter(
          (value) => value.id == this.form.year
        );
      } else if (this.form.year == "2") {
        this.semester_selection = this.secound_year_semester.filter(
          (value) => value.id == this.form.year
        );
      } else if (this.form.year == "3") {
        this.semester_selection = this.third_year_semester.filter(
          (value) => value.id == this.form.year
        );
      } else if (this.form.year == "4") {
        this.semester_selection = this.fourth_year_semester.filter(
          (value) => value.id == this.form.year
        );
      }
    },

    subject_filter() {
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

    search() {
      axios
        .post("http://127.0.0.1:8000/api/search/subject/lectures", this.form)
        .then((response) => {
          if (response.status == 200) {
            alert("Recode found");
            this.users_data = response.data.data;
            this.userdata.subject = this.form.subject;
            this.has_data = this.users_data.length > 0;
          }
        })

        .catch((error) => {
          console.log(error);
          alert("No recode found");
        });
    },

    has_data: false,

    // passing table values in to that function
    selectValue(values) {
      this.userdata.lectureName = values.fname;
      this.userdata.lecturemail = values.email;
      this.userdata.lectureempID = values.empNo;
      this.userdata.contact = values.mobNumber;
      this.userdata.lectureRegId = values.lecture_regs_ids;
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
  background: linear-gradient(0deg, rgb(57, 5, 179) 0%, rgb(14, 152, 203) 100%);
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

.cd1 {
  border-radius: 10px;
  border-color: #000 transparent;
}
.card {
  background-color: rgb(1, 1, 2, 0.2);
}

::placeholder {
  color: #fff;
}

input {
  color: #fff;
}

.cd2 {
  background-color: rgba(70, 100, 69, 0.5);
}
</style>
