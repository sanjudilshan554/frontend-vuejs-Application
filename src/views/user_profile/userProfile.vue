<template>
  <!DOCTYPE html>
  <html>
    <head>
      <title>User Profile</title>
      <meta charset="UTF-8"/>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
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
    <body class="w3-light-grey">
      <!-- Page Container -->
      <div class="w3-content w3-margin-top" style="max-width: 1400px">
        <!-- The Grid -->
        <div class="w3-row-padding">
          <!-- Left Column -->
          <div class="w3-third">
            <div class="w3-white w3-text-grey w3-card-4">
              <div class="w3-display-container">
                <img
                  src="/w3images/avatar_hat.jpg"
                  style="width: 100%"
                  alt="Avatar"
                />
                <div class="w3-display-bottomleft w3-container w3-text-black">
                  <h2>Jane Doe</h2>
                </div>
              </div>
              <div class="w3-container">
                <p>
                  <i
                    class="fa fa-briefcase fa-fw w3-margin-right w3-large w3-text-teal"
                  ></i
                  >Designer
                </p>
                <p>
                  <i
                    class="fa fa-home fa-fw w3-margin-right w3-large w3-text-teal"
                  ></i
                  >London, UK
                </p>
                <p>
                  <i
                    class="fa fa-envelope fa-fw w3-margin-right w3-large w3-text-teal"
                  ></i
                  >ex@mail.com
                </p>
                <p>
                  <i
                    class="fa fa-phone fa-fw w3-margin-right w3-large w3-text-teal"
                  ></i
                  >1224435534
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
                <p>{{software_data[0].software1}}</p>
                <div class="w3-light-grey w3-round-xlarge w3-small">
                  <div
                    class="w3-container w3-center w3-round-xlarge w3-teal"
                    style="width: 100%"
                  >
                   {{ software_data[0].rating.s1}}%
                  </div>
                </div>
                <p>{{software_data[0].software2}}</p>
                <div class="w3-light-grey w3-round-xlarge w3-small">
                  <div
                    class="w3-container w3-center w3-round-xlarge w3-teal"
                    style="width: 40%"
                  >
                  {{ software_data[0].rating.s2}}%
                    <div class="w3-center w3-text-white"> </div>
                  </div>
                </div>
                <p>{{software_data[0].software3}}</p>
                <div class="w3-light-grey w3-round-xlarge w3-small">
                  <div
                    class="w3-container w3-center w3-round-xlarge w3-teal"
                    style="width: 75%"
                  >
                  {{ software_data[0].rating.s3}}%
                  </div>
                </div>
                <p>{{software_data[0].software4}}</p>
                <div class="w3-light-grey w3-round-xlarge w3-small">
                  <div
                    class="w3-container w3-center w3-round-xlarge w3-teal"
                    style="width: 50%"
                  >
                  {{ software_data[0].rating.s4}}%
                  </div>
                </div>
                <br />

                <p class="w3-large w3-text-theme">
                  <b
                    ><i
                      class="fa fa-globe fa-fw w3-margin-right w3-text-teal"
                    ></i
                    >Subject performance</b
                  >
                </p>
                <p>{{subject_data[0].year.year1}}/</p>
                  <!-- {{subject_data[0].semester.sse1}}/ -->
                  <!-- {{subject_data[0].subject.ssa1}}</p> -->
                <div class="w3-light-grey w3-round-xlarge">
                  <div
                    class="w3-round-xlarge w3-teal"
                    style="height: 24px; width: 100%"
                  ><div class="w3-center w3-text-white">{{subject_data[0].rating.sr1}}%</div></div>
                </div>
                <p>{{subject_data[0].year.year2}}/</p>
                  <!-- {{subject_data[0].semester.sse1}}/ -->
                  <!-- {{subject_data[0].subject.ssa2}}</p> -->
                <div class="w3-light-grey w3-round-xlarge">
                  <div
                    class="w3-round-xlarge w3-teal"
                    style="height: 24px; width: 55%"
                  ><div class="w3-center w3-text-white">{{subject_data[0].rating.sr2}}%</div></div>
                </div>
                <p>{{subject_data[0].year.year3}}/</p>
                  <!-- {{subject_data[0].semester.sse1}}/ -->
                  <!-- {{subject_data[0].subject.ssa3}}</p> -->

                <div class="w3-light-grey w3-round-xlarge">
                  <div
                    class="w3-round-xlarge w3-teal"
                    style="height: 24px; width: 25%"
                  ><div class="w3-center w3-text-white">{{subject_data[0].rating.sr3}}%</div></div>
                </div>

                <p>{{subject_data[0].year.year4}}/</p>
                  <!-- {{subject_data[0].semester.sse4}}/ -->
                  <!-- {{subject_data[0].subject.ssa4}}</p> -->

                <div class="w3-light-grey w3-round-xlarge">
                  <div
                    class="w3-round-xlarge w3-teal"
                    style="height: 24px; width: 25%"
                  ><div class="w3-center w3-text-white">{{subject_data[0].rating.sr4}}%</div></div>
                </div>

                <br />
              </div>
            </div>
            <br />

            <!-- End Left Column -->
          </div>

          <!-- Right Column -->
          <div class="w3-twothird">
            <div class="w3-container w3-card w3-white w3-margin-bottom">
              <h2 class="w3-text-grey w3-padding-16">
                <i
                  class="fa fa-suitcase fa-fw w3-margin-right w3-xxlarge w3-text-teal"
                ></i
                >Work Experience
              </h2>
              <router-link to="/updateProfile"
                ><button>Update Profile</button></router-link
              >
              <div class="w3-container">
                <h5 class="w3-opacity">
                  <b>{{work_data[0].name.n1}}</b>
                </h5>
                <h6 class="w3-text-teal">
                  <i class="fa fa-calendar fa-fw w3-margin-right"></i>Jan 2015 -
                  <span class="w3-tag w3-teal w3-round">Current</span>
                </h6>
                <p>
                  Lorem ipsum dolor sit amet. Praesentium magnam consectetur vel
                  in deserunt aspernatur est reprehenderit sunt hic. Nulla
                  tempora soluta ea et odio, unde doloremque repellendus iure,
                  iste.
                </p>
                <hr />
              </div>
              <div class="w3-container">
                <h5 class="w3-opacity"><b>{{work_data[0].name.n2}}</b></h5>
                <h6 class="w3-text-teal">
                  <i class="fa fa-calendar fa-fw w3-margin-right"></i>Mar 2012 -
                  Dec 2014
                </h6>
                <p>
                  Consectetur adipisicing elit. Praesentium magnam consectetur
                  vel in deserunt aspernatur est reprehenderit sunt hic. Nulla
                  tempora soluta ea et odio, unde doloremque repellendus iure,
                  iste.
                </p>
                <hr />
              </div>
              <div class="w3-container">
                <h5 class="w3-opacity">
                  <b>{{work_data[0].name.n3}}</b>
                </h5>
                <h6 class="w3-text-teal">
                  <i class="fa fa-calendar fa-fw w3-margin-right"></i>Jun 2010 -
                  Mar 2012
                </h6>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
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
                <h5 class="w3-opacity"><b>{{edu_qualify_data[0].name.n1}}</b></h5>
                <h6 class="w3-text-teal">
                  <i class="fa fa-calendar fa-fw w3-margin-right"></i>Forever
                </h6>
                <p>{{edu_qualify_data[0].description.d1}}</p>
                <hr />
              </div>
              <div class="w3-container">
                <h5 class="w3-opacity"><b>{{edu_qualify_data[0].name.n2}}</b></h5>
                <h6 class="w3-text-teal">
                  <i class="fa fa-calendar fa-fw w3-margin-right"></i>2013 -
                  2015
                </h6>
                <p>{{edu_qualify_data[0].description.d2}}</p>
                <hr />
              </div>
              <div class="w3-container">
                <h5 class="w3-opacity"><b>{{edu_qualify_data[0].name.n3}}</b></h5>
                <h6 class="w3-text-teal">
                  <i class="fa fa-calendar fa-fw w3-margin-right"></i>2010 -
                  2013
                </h6>
                <p>{{edu_qualify_data[0].description.d3}}</p>
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
        <p>
          
        </p>
      </footer>
    </body>
  </html>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      photo: 40,
      software_data:{},
      subject_data:{},
      work_data:{},
      edu_qualify_data:{},
      Lect_reg:{},
      customer_reg:{},

      form: {
        id:"1",
      }
    };
  },

  
  created() {
    this.getProfileData();
  },
  
  methods: {
    getProfileData() {
      axios
        .post("http://127.0.0.1:8000/api/profile/data",this.form)
        .then((response) => {
          this.software_data = response.data.software_data;
          this.subject_data=response.data.subject_data;
          this.work_data=response.data.work_data;
          this.edu_qualify_data=response.data.edu_qualify_data;
          this.Lect_reg=response.data.Lect_reg;
          this.customer_reg=response.data.customer_reg;
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
  
};
</script>

<style>
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
</style>
