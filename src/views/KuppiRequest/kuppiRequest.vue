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

        <table>
        <tr>
          

          <td>
          <div class="pd-ltr-20 customscroll customscroll-10-p height-auto xs-pd-20-10">
            <div class="min-height-200px">
                <div class="mb-30">
                    <div class="row">
                        <div class="col-sm-12">
                            <div class="form-group">
                                <small class="form-text text-muted">1.1 Semester</small>
                                <div class="custom-file">
                                    <select class="font-14 selectpicker form-control" data-width="100%">
                                      <option value="">Select subject</option>
                                        <option value="">AUX1113 - English Language I - 2020/2021</option>
                                        <option value="">TICT1152 - Principles of Management - 2020/2021</option>
                                        <option value="">TICT1142 - Fundamentals of Web Technologies - 2020/2021</option>
                                        <option value="">TICT1134 - Fundamentals of Computer Programming - 2020/2021</option>
                                        <option value="">TICT1123 - Mathematics for Technology - 2020/2021</option>
                                        <option value="">TICT1114 - Essentials of ICT - 2020/2021</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
         </div>

         </td>

         <td>
          <div class="pd-ltr-20 customscroll customscroll-10-p height-auto xs-pd-20-10">
            <div class="min-height-200px">
                <div class="mb-30">
                    <div class="row">
                        <div class="col-sm-12">
                            <div class="form-group">
                                <small class="form-text text-muted">1.2 Semester</small>
                                <div class="custom-file">
                                    <select class="font-14 selectpicker form-control" data-width="100%">
                                      <option value="">Select subject</option>
                                        <option value="">TICT 1261 - IT Law New</option>
                                        <option value="">TICT 1223 - Operating Systems New</option>
                                        <option value="">TICT 1224 - Object Oriented Programming New</option>
                                        <option value="">TICT 1212 - Discrete Structures - New</option>
                                        <option value="">TICT 1252 - Computational Engineering Drawing</option>
                                        <option value="">TICT 1243 - Electronics and Digital Circuit Designs</option>
                                        <option value="">TICT 1233 - Operating Systems </option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
         </div>

         </td>

        </tr>

        <tr>

          <td>
            <div class="pd-ltr-20 customscroll customscroll-10-p height-auto xs-pd-20-10">
              <div class="min-height-200px">
                  <div class="mb-30">
                      <div class="row">
                          <div class="col-sm-12">
                              <div class="form-group">
                                  <small class="form-text text-muted">2.1 Semester</small>
                                  <div class="custom-file">
                                      <select class="font-14 selectpicker form-control" data-width="100%">
                                        <option value="">Select subject</option>
                                        <option value="">AUX2113 - English Language II -2019/2020</option>
                                        <option value="">TICT2153 - Human Computer Interaction - 2019/2020</option>
                                        <option value="">TICT2142 -Multimedia Design and Technologies - 2019/2020</option>
                                        <option value="">TICT2134 - Advanced Computer Programming - 2019/2020</option>
                                        <option value="">TICT2122 - Statistics for Technology - 2019/2020</option>
                                        <option value="">TICT2113 - Data Structures and Algorithms - 2019/2020</option>
                                      </select>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
           </div>
  
           </td>
  
           <td>
            <div class="pd-ltr-20 customscroll customscroll-10-p height-auto xs-pd-20-10">
              <div class="min-height-200px">
                  <div class="mb-30">
                      <div class="row">
                          <div class="col-sm-12">
                              <div class="form-group">
                                  <small class="form-text text-muted">2.2 Semester</small>
                                  <div class="custom-file">
                                      <select class="font-14 selectpicker form-control" data-width="100%">
                                        <option value="">Select subject</option>
                                        <option value="">TICT 2233-Database Management Systems</option>
                                        <option value="">TICT 2263-Accounting for Technology</option>
                                        <option value="">TICT 2212 Operational Research</option>
                                        <option value="">TICT 2252 System Analysis and Design</option>
                                        <option value="">TICT 2223 Introduction to DBMS</option>
                                        <option value="">AUX 2212 Soft skill and Career Guidance</option>
                                      </select>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
           </div>
  
           </td>

          </tr>
          <tr>

            <td>
              <div class="pd-ltr-20 customscroll customscroll-10-p height-auto xs-pd-20-10">
                <div class="min-height-200px">
                    <div class="mb-30">
                        <div class="row">
                            <div class="col-sm-12">
                                <div class="form-group">
                                    <small class="form-text text-muted">3.1 Semester</small>
                                    <div class="custom-file">
                                        <select class="font-14 selectpicker form-control" data-width="100%">
                                          <option value="">Select subject</option>
                                          <option value="">AUX3112 - Career Guidance - 2018/2019</option>
                                          <option value="">ICT3162 - Information Security - 2018/2019</option>
                                            <option value="">TICT3153 - Software Engineering - 2018/2019</option>
                                              <option value="">TICT3142 - Social and Professional Issues in IT - 2018/2019</option>
                                                <option value="">TICT3132 - Advanced Web Technologies - 2018/2019</option>
                                                  <option value="">TICT3123 - Advanced Database Management Systems - 2018/2019</option>
                                                    <option value="">TICT3113 - Computer Architecture and Organization - 2018/2019</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
             </div>
    
             </td>
    
             <td>
              <div class="pd-ltr-20 customscroll customscroll-10-p height-auto xs-pd-20-10">
                <div class="min-height-200px">
                    <div class="mb-30">
                        <div class="row">
                            <div class="col-sm-12">
                                <div class="form-group">
                                    <small class="form-text text-muted">3.2 Semester</small>
                                    <div class="custom-file">
                                        <select class="font-14 selectpicker form-control" data-width="100%">
                                          <option value="">Select subject</option>
                                          <option value="">AUX3212 - Research Methodology</option>
                                          <option value="">TICT3263 - Essential of E-Commerce </option>
                                          <option value="">TICT3253 - Digital Image Processing</option>
                                          <option value="">TICT3242 - Information Security</option>
                                          <option value="">TICT3232 - Project Management</option>
                                          <option value="">TICT3224 - Advanced Computer Networks and Administration</option>
                                          <option value="">TICT3213 - Advanced Database Management System</option>
                                          <option value="">TICT 3272 - Computerized Accounting</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
             </div>
    
             </td>
  
            </tr>


          <tr>
            <td>
              <div class="pd-ltr-20 customscroll customscroll-10-p height-auto xs-pd-20-10">
                <div class="min-height-200px">
                    <div class="mb-30">
                        <div class="row">
                            <div class="col-sm-12">
                                <div class="form-group">
                                    <small class="form-text text-muted">4.1 Semester</small>
                                    <div class="custom-file">
                                        <select class="font-14 selectpicker form-control" data-width="100%">
                                          <option value="">Select subject</option>
                                          <option value="">TICT4162 - Bioinformatics - 2017/2018</option>
                                          <option value="">TICT4152 - Cloud Application Development - 2017/2018</option>
                                          <option value="">TICT4143 - Intelligent Systems - 2017/2018</option>
                                          <option value="">TICT4133 - Mobile Application Development - 2017/2018</option>
                                          <option value="">TICT4122 - Green Computing - 2017/2018</option>
                                          <option value="">TICT4112 - Distributed Systems - 2017/2018</option>
                                          <option value="">TICT4162 - Bioinformatics</option>
                                          <option value="">ICT 4152 - Cloud Application Development</option>
                                          <option value="">ICT 4143 - Intelligent Systems</option>
                                          <option value="">ICT 4133 - Mobile Application Development</option>
                                          <option value="">ICT 4122 - Green Computing</option>
                                          <option value="">ICT 4112 - Distributed Systems</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
             </div>
    
             </td>
  
            </tr>
          </table>
      </div>
    </div>

    <br /><br /><br /><br /><br />

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
                    </tr>
                    <tr>
                      <th scope="row" style="color: #666666">Sonya Frost</th>
                      <td>Software Engineer</td>
                      <td>sfrost34@example.com</td>
                      <td>23</td>
                      <td>Edinburgh</td>
                      <td>$103,600</td>
                    </tr>
                    <tr>
                      <th scope="row" style="color: #666666">Jena Gaines</th>
                      <td>Office Manager</td>
                      <td>jgaines75@example.com</td>
                      <td>30</td>
                      <td>London</td>
                      <td>$90,560</td>
                    </tr>
                    <tr>
                      <th scope="row" style="color: #666666">Quinn Flynn</th>
                      <td>Support Lead</td>
                      <td>qflyn09@example.com</td>
                      <td>22</td>
                      <td>Edinburgh</td>
                      <td>$342,000</td>
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
                    </tr>
                    <tr>
                      <th scope="row" style="color: #666666">Haley Kennedy</th>
                      <td>Senior Marketing Designer</td>
                      <td>hkennedy63@example.com</td>
                      <td>43</td>
                      <td>London</td>
                      <td>$313,500</td>
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

<script>
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

      form:{
        id:"1",
      },
      
    };


  },

  created(){
    this.getkuppirequest();
  },

  methods: {
    save() {
      axios
        .post("http://127.0.0.1:8000/api/kuppi",this.kuppirequest)
        .then((response) => {
          if (response.status == 200) {
            alert("data saved");
          }
        })

        .catch((error) => {
          console.log(error);
        });
    },

    //getting data from back end

    getkuppirequest() {
      axios
        .post("http://127.0.0.1:8000/api/profile/kuppi",this.form)
        .then((response) => {
          this.kuppirequest = response.data.data;
        })
        .catch((error) => {
          console.log(error);
        });
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
</style>
