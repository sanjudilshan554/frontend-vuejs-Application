<template scoped>
  <!DOCTYPE html>
<section>
    <head>
      <title>User Profile</title>
     
   
      <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css" />
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css?family=Roboto"
      />
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
      />
    </head>
    <body>
      <!-- Page Container -->
      <div class="w3-content w3-margin-top" style="max-width: 1400px">
        <!-- The Grid -->
        <div class="w3-row-padding">
          <!-- Left Column -->
          <div class="w3-third">
            <div class="w3-white w3-text-grey w3-card-4">
              <div class="w3-display-container">
                <img
                  class="rounded-circle shadow-4-strong"
                  alt="avatar2"
                  src="https://mdbcdn.b-cdn.net/img/new/avatars/1.webp"
                />
                <br /><br /><br />
                <!-- Assigning user details -->
                <div class="w3-display-bottomleft w3-container w3-text-black">
                  <h2>{{ name }}</h2>
                </div>
              </div>
              <div class="w3-container">
                <p>
                  <i
                    class="fa fa-briefcase fa-fw w3-margin-right w3-large w3-text-teal"
                  ></i
                  >{{ role }}
                </p>
                <p>
                  <i
                    class="fa fa-home fa-fw w3-margin-right w3-large w3-text-teal"
                  ></i
                  >{{ address }}
                </p>
                <p>
                  <i
                    class="fa fa-envelope fa-fw w3-margin-right w3-large w3-text-teal"
                  ></i
                  >{{ email }}
                </p>
                <p>
                  <i
                    class="fa fa-phone fa-fw w3-margin-right w3-large w3-text-teal"
                  ></i
                  >{{ number }}
                </p>
                <hr />

                <p class="w3-large">
                  <b
                    ><i
                      class="fa fa-asterisk fa-fw w3-margin-right w3-text-teal"
                    ></i
                    >Software Skills</b
                  >
                </p>
                <!-- <p>{{ software_data[0].software1 }}</p> -->
                <div
                  v-if="this.software_data.length > 0"
                  class="w3-light-grey w3-round-xlarge w3-small"
                >
                  <div
                    class="w3-container w3-center w3-round-xlarge w3-teal"
                    style="width: 50%"
                  >
                    {{ software_data[0].rating.s1 }}%
                  </div>
                </div>
                <p  v-if="this.software_data.length > 0">{{ software_data[0].software2 }}</p>

                <div
                  class="w3-light-grey w3-round-xlarge w3-small"
                >
                  <div
                  v-if="this.software_data.length > 0"
                    class="w3-container w3-center w3-round-xlarge w3-teal"
                    style="width: 40%"
                  >
                    {{ software_data[0].rating.s2 }}%
                    <div  class="w3-center w3-text-white"></div>
                  </div>
                </div>
                <p  v-if="this.software_data.length > 0">{{ software_data[0].software3 }}</p>
                <div
                  
                  class="w3-light-grey w3-round-xlarge w3-small"
                >
                  <div
                   v-if="this.software_data.length > 0"
                    class="w3-container w3-center w3-round-xlarge w3-teal"
                    style="width: 75%"
                  >
                    {{ software_data[0].rating.s3 }}%
                  </div>
                </div>
                <p v-if="this.software_data.length > 0">{{ software_data[0].software4 }}</p>
                <div
                
                  class="w3-light-grey w3-round-xlarge w3-small"
                >
                  <div
                    v-if="this.software_data.length > 0"
                    class="w3-container w3-center w3-round-xlarge w3-teal"
                    style="width: 50%"
                  >
                    {{ software_data[0].rating.s4 }}%
                  </div>
                </div>
                <br />

                <p  class="w3-large w3-text-theme">
                  <b
                    ><i
                      
                      class="fa fa-globe fa-fw w3-margin-right w3-text-teal"
                    ></i
                    >Selected Subject performance</b
                  >
                </p>
                <p v-if="this.subject_data.length > 0">
                  {{ subject_data[0].year.year1 }}/semester
                  {{ subject_data[0].semester.sse1 }}/
                </p>
                <!-- {{subject_data[0].subject.ssa1}} -->
                <div  class="w3-light-grey w3-round-xlarge">
                  <div
                
                    class="w3-round-xlarge w3-teal"
                    style="height: 24px; width: 100%"
                  >
                    <div v-if="this.subject_data.length > 0" class="w3-center w3-text-white">
                      {{ subject_data[0].rating.sr1 }}%
                    </div>
                  </div>
                </div>
                <p v-if="this.subject_data.length > 0">
                  {{ subject_data[0].year.year2 }}/semester
                  {{ subject_data[0].semester.sse2 }}/
                </p>
                <!-- {{subject_data[0].subject.ssa2}} -->
                <div class="w3-light-grey w3-round-xlarge">
                  <div
                  
                    class="w3-round-xlarge w3-teal"
                    style="height: 24px; width: 55%"
                  >
                    <div v-if="this.subject_data.length > 0" class="w3-center w3-text-white">
                      {{ subject_data[0].rating.sr2 }}%
                    </div>
                  </div>
                </div>
                <p v-if="this.subject_data.length > 0">
                  {{ subject_data[0].year.year3 }}/semester
                  {{ subject_data[0].semester.sse1 }}
                </p>
                <!-- {{subject_data[0].subject.ssa3}}</p> -->

                <div  class="w3-light-grey w3-round-xlarge">
                  <div
                  
                    class="w3-round-xlarge w3-teal"
                    style="height: 24px; width: 25%"
                  >
                    <div v-if="this.subject_data.length > 0" class="w3-center w3-text-white">
                      {{ subject_data[0].rating.sr3 }}%
                    </div>
                  </div>
                </div>

                <p v-if="this.subject_data.length > 0">{{ subject_data[0].year.year4 }}</p>
                <!-- {{subject_data[0].subject.ssa4}}</p> -->

                <div  class="w3-light-grey w3-round-xlarge">
                  <div
                    
                    class="w3-round-xlarge w3-teal"
                    style="height: 24px; width: 25%"
                  >
                    <div v-if="this.subject_data.length > 0" class="w3-center w3-text-white">
                      {{ subject_data[0].rating.sr4 }}%
                    </div>
                  </div>
                </div>

                <br />
              </div>
            </div>
            <br />

            <!-- End Left Column -->
          </div>

          <!-- Right Column -->
          <div  class="w3-twothird">
            <div
          
              class="w3-container w3-card w3-white w3-margin-bottom"
            >
              <h2 class="w3-text-grey w3-padding-16">
                <i
                  
                  class="fa fa-suitcase fa-fw w3-margin-right w3-xxlarge w3-text-teal"
                ></i
                >Work Experience
              </h2>
              <router-link to="/updateProfile"
                ><button>Update Profile</button></router-link
              >

              <!-- <img src="@/assets/avatar.png"> -->

              <div  class="w3-container">
                <h5 v-if="this.work_data.length > 0" class="w3-opacity">
                  <b>{{ work_data[0].name.n1 }}</b>
                </h5>
                <h6 v-if="this.work_data.length > 0" class="w3-text-teal">
                  <i v-if="this.work_data.length > 0" class="fa fa-calendar fa-fw w3-margin-right"></i> from -
                  {{ work_data[0].datefrom.date_one_of_three }} / to -
                  {{ work_data[0].dateto.date_one_of_three }}
                </h6>
                <p v-if="this.work_data.length > 0">
                  {{ work_data[0].Description.d1 }}
                </p>
                <hr />
              </div>
              <div class="w3-container">
                <h5 class="w3-opacity">
                  <b v-if="this.work_data.length > 0">{{ work_data[0].name.n2 }}</b>
                </h5>
                <h6  class="w3-text-teal">
                  <i  class="fa fa-calendar fa-fw w3-margin-right">

                  </i> 
                  <p v-if="this.work_data.length > 0">from -
                  {{ work_data[0].datefrom.date_two_of_three }} / to -
                  {{ work_data[0].dateto.date_two_of_three }}</p>
                </h6>
                <p v-if="this.work_data.length > 0">
                  {{ work_data[0].Description.d2 }}
                </p>
                <hr />
              </div>
              <div  class="w3-container">
                <h5  vclass="w3-opacity">
                  <b v-if="this.work_data.length > 0">{{ work_data[0].name.n3 }}</b>
                </h5>
                <h6  class="w3-text-teal">
                  <i  class="fa fa-calendar fa-fw w3-margin-right"></i>
                  <p v-if="this.work_data.length > 0">
                  from -
                  {{ work_data[0].datefrom.date_three_of_three }} / to -
                  {{ work_data[0].dateto.date_three_of_three }}</p>
                </h6>
                <p v-if="this.work_data.length > 0">{{ work_data[0].Description.d3 }}</p>
                <br />
              </div>
            </div>

            <div class="w3-container w3-card w3-white">
              <h2 class="w3-text-grey w3-padding-16">
                <i
                  class="fa fa-certificate fa-fw w3-margin-right w3-xxlarge w3-text-teal"
                ></i
                >Education
              </h2>
              <div class="w3-container">
                <h5 class="w3-opacity">
                  <b v-if="this.edu_qualify_data.length > 0">{{ edu_qualify_data[0].name.n1 }}</b>
                </h5>
                <h6 class="w3-text-teal">
                  <i
                  
                    class="fa fa-calendar fa-fw w3-margin-right"
                  >
                  </i >
                  <p v-if="this.edu_qualify_data.length > 0">
                  From - {{ edu_qualify_data[0].datefrom.date_one_of_three }} /
                  To -
                  {{ edu_qualify_data[0].dateto.date_one_of_three }}</p>
                </h6>
                <p v-if="this.edu_qualify_data.length > 0">{{ edu_qualify_data[0].description.d1 }}</p>
                <hr />
              </div>
              <div class="w3-container">
                <h5 class="w3-opacity">
                  <b v-if="this.edu_qualify_data.length > 0">{{ edu_qualify_data[0].name.n2 }}</b>
                </h5>
                <h6 class="w3-text-teal">
                  <i
                   
                    class="fa fa-calendar fa-fw w3-margin-right"
                  ></i>
                  <p v-if="this.edu_qualify_data.length > 0">
                  From - {{ edu_qualify_data[0].datefrom.date_two_of_three }} /
                  To -
                  {{ edu_qualify_data[0].dateto.date_two_of_three }}</p>
                </h6>
                <p v-if="this.edu_qualify_data.length > 0">{{ edu_qualify_data[0].description.d2 }}</p>
                <hr />
              </div>
              <div class="w3-container">
                <h5 class="w3-opacity">
                  <b v-if="this.edu_qualify_data.length > 0">{{ edu_qualify_data[0].name.n3 }}</b>
                </h5>
                <h6 class="w3-text-teal">
                  <i
                    
                    class="fa fa-calendar fa-fw w3-margin-right"
                  ></i>
                  <p v-if="this.edu_qualify_data.length > 0">From -
                  {{ edu_qualify_data[0].datefrom.date_three_of_three }} / To -
                  {{ edu_qualify_data[0].dateto.date_three_of_three }}</p>
                </h6>
                <p v-if="this.edu_qualify_data.length > 0">{{ edu_qualify_data[0].description.d3 }}</p>
                <br />
              </div>
            </div>

            <!-- End Right Column -->
          </div>

          <!-- End Grid -->
        </div>

        <!-- End Page Container -->
      </div>

      <footer class="w3-container w3-teal w3-center w3-margin-top">
        <p>Find me on social media.</p>
        <i class="fa fa-facebook-official w3-hover-opacity"></i>
        <i class="fa fa-instagram w3-hover-opacity"></i>
        <i class="fa fa-snapchat w3-hover-opacity"></i>
        <i class="fa fa-pinterest-p w3-hover-opacity"></i>
        <i class="fa fa-twitter w3-hover-opacity"></i>
        <i class="fa fa-linkedin w3-hover-opacity"></i>
        <p></p>
      </footer>
    </body>
</section>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      photo: 40,
      software_data: [],
      subject_data: [],
      work_data: [],
      edu_qualify_data: [],
      Lect_reg: [],
      customer_reg: [],

      form: {
        id: "",
        role:"",
      },
      
      name: "",
      role: "",
      address: "",
      email: "",
      number: "",

      no_data: true,
    };
  },

  created() {
    this.getLoggedUserDetails();
    this.getProfileData();
  },
  methods: {
    getProfileData() {
      axios
        .post("http://127.0.0.1:8000/api/profile/data", this.form)
        .then((response) => {
          if (response.data) { 
                this.software_data = response.data.software_data;
                this.subject_data = response.data.subject_data;
                this.work_data = response.data.work_data;
                this.edu_qualify_data = response.data.edu_qualify_data;
                this.Lect_reg = response.data.Lect_reg;
                this.customer_reg = response.data.customer_reg;
          }
        })
        .catch((error) => {
          console.log(error);
        });
    },
    //Getting localhost user details
    getLoggedUserDetails() {
      let user = localStorage.getItem("userDetails");
      user = JSON.parse(user);
      this.form.id = user.id;
      this.name = user.fname;
      this.role = user.role;
      this.address = user.address;
      this.email = user.email;
      this.number = user.mobNo;
      this.form.role = user.role;
    },
  },
};
</script>

<style scoped>
html,
body,
h1,
h2,
h3,
h4,
h5,
h6 {
  font-family: "Roboto", sans-serif;

}
section{
  background: rgb(10, 6, 6);
background: linear-gradient(0deg, rgb(62, 52, 52) 0%, rgba(170,143,143,1) 100%);
}
</style>
