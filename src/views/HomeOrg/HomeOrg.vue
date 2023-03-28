<template>
  <!DOCTYPE html>
  <html>
    <head>
      <title>home page</title>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css" />
    </head>
    <body>
      <!-- Navbar (sit on top) -->
      <div class="w3-top">
        <div class="w3-bar w3-white w3-wide w3-padding w3-card">
          <a href="#home" class="w3-bar-item w3-button"
            ><b>KUPPI</b> Conductor</a
          >
          <!-- Float links to the right. Hide them on small screens -->
          <div class="w3-right w3-hide-small">
            <router-link to="/createPost" class="w3-bar-item w3-button"
              >Create post |</router-link
            >
            <router-link to="/learn" class="w3-bar-item w3-button"
              >Learn + |</router-link
            >
            <router-link to="/kuppiRequest" v-if="has_lecture_role" class="w3-bar-item w3-button"
              >Kuppi |</router-link
            >
            <router-link to="/RevisionRequest" v-if="has_lecture_role" class="w3-bar-item w3-button"
              >Revision |</router-link
            >
            <router-link to="/user/profile" class="w3-bar-item w3-button"
              >User Profile |
            </router-link>
            <button class="btn btn-dark" @click="logout()">Logout</button>
          </div>
        </div>
      </div>

      <!-- Header -->
      <header
        class="w3-display-container w3-content w3-wide"
        style="max-width: 1500px"
        id="home"
      >
        <!-- <img class="w3-image" src="@/assets/HOME6.jpg" alt="Architecture" width="1500" height="800"> -->
        <!-- <div class="w3-display-middle w3-margin-top w3-center">
    <h1 class="w3-xxlarge w3-text-white"><span class="w3-padding w3-black w3-opacity-min"><b>KUPPPI</b></span> <span class="w3-hide-small w3-text-light-grey">Conductor</span></h1>
  </div>  -->

        <div
          id="carouselExampleSlidesOnly"
          class="carousel slide"
          data-ride="carousel"
        >
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img
                class="d-block w-100"
                src="@/assets/HOME6.jpg"
                alt="First slide"
              />
            </div>

            <div class="w3-display-middle w3-margin-top w3-center">
              <h1 class="w3-xxlarge w3-text-white">
                <span class="w3-padding w3-black w3-opacity-min"
                  ><b>KUPPI</b></span
                >
                <span class="w3-hide-small w3-text-light-grey">Conductor</span>
              </h1>
            </div>

            <div class="carousel-item">
              <img
                class="d-block w-100"
                src="@/assets/HOME2.jpg"
                alt="SecondImage"
              />
            </div>

            <div class="carousel-item">
              <img
                class="d-block w-100"
                src="@/assets/HOME4.jpg"
                alt="ThirdImage"
                width="1500"
                height="800"
              />
            </div>
          </div>
        </div>
      </header>

      <!-- Page content -->
      <div class="w3-content w3-padding" style="max-width: 1564px">
        <!-- Project Section -->
        <div class="w3-container w3-padding-32" id="projects">
          <h3 class="w3-border-bottom w3-border-light-grey w3-padding-16">
            Projects
          </h3>
        </div>

        <div class="w3-row-padding">
          <div class="w3-col l3 m6 w3-margin-bottom">
            <div class="w3-display-container">
              <div class="w3-display-topleft w3-black w3-padding">
                Summer House
              </div>
              <img src="@/assets/2.jpg" alt="House" style="width: 100%" />
            </div>
          </div>
          <div class="w3-col l3 m6 w3-margin-bottom">
            <div class="w3-display-container">
              <div class="w3-display-topleft w3-black w3-padding">
                Brick House
              </div>
              <img src="@/assets/2.jpg" alt="House" style="width: 100%" />
            </div>
          </div>
          <div class="w3-col l3 m6 w3-margin-bottom">
            <div class="w3-display-container">
              <div class="w3-display-topleft w3-black w3-padding">
                Renovated
              </div>
              <img src="@/assets/2.jpg" alt="House" style="width: 100%" />
            </div>
          </div>
          <div class="w3-col l3 m6 w3-margin-bottom">
            <div class="w3-display-container">
              <div class="w3-display-topleft w3-black w3-padding">
                Barn House
              </div>
              <img src="@/assets/2.jpg" alt="House" style="width: 100%" />
            </div>
          </div>
        </div>

        <div class="w3-row-padding">
          <div class="w3-col l3 m6 w3-margin-bottom">
            <div class="w3-display-container">
              <div class="w3-display-topleft w3-black w3-padding">
                Summer House
              </div>
              <img src="@/assets/2.jpg" alt="House" style="width: 99%" />
            </div>
          </div>
          <div class="w3-col l3 m6 w3-margin-bottom">
            <div class="w3-display-container">
              <div class="w3-display-topleft w3-black w3-padding">
                Brick House
              </div>
              <img src="@/assets/2.jpg" alt="House" style="width: 99%" />
            </div>
          </div>
          <div class="w3-col l3 m6 w3-margin-bottom">
            <div class="w3-display-container">
              <div class="w3-display-topleft w3-black w3-padding">
                Renovated
              </div>
              <img src="@/assets/2.jpg" alt="House" style="width: 99%" />
            </div>
          </div>
          <div class="w3-col l3 m6 w3-margin-bottom">
            <div class="w3-display-container">
              <div class="w3-display-topleft w3-black w3-padding">
                Barn House
              </div>
              <img src="@/assets/2.jpg" alt="House" style="width: 99%" />
            </div>
          </div>
        </div>

        <!-- About Section -->
        <div class="w3-container w3-padding-32" id="about">
          <h3 class="w3-border-bottom w3-border-light-grey w3-padding-16">
            About
          </h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Excepteur sint occaecat cupidatat
            non proident, sunt in culpa qui officia deserunt mollit anim id est
            laborum consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim
            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat.
          </p>
        </div>

        <div class="w3-row-padding w3-grayscale">
          <div class="w3-col l3 m6 w3-margin-bottom">
            <img src="@/assets/2.jpg" alt="John" style="width: 100%" />
            <h3>John Doe</h3>
            <p class="w3-opacity">CEO & Founder</p>
            <p>
              Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse
              sodales pellentesque elementum.
            </p>
            <p>
              <button class="w3-button w3-light-grey w3-block">Contact</button>
            </p>
          </div>
          <div class="w3-col l3 m6 w3-margin-bottom">
            <img src="@/assets/2.jpg" alt="Jane" style="width: 100%" />
            <h3>Jane Doe</h3>
            <p class="w3-opacity">Architect</p>
            <p>
              Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse
              sodales pellentesque elementum.
            </p>
            <p>
              <button class="w3-button w3-light-grey w3-block">Contact</button>
            </p>
          </div>
          <div class="w3-col l3 m6 w3-margin-bottom">
            <img src="@/assets/2.jpg" alt="Mike" style="width: 100%" />
            <h3>Mike Ross</h3>
            <p class="w3-opacity">Architect</p>
            <p>
              Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse
              sodales pellentesque elementum.
            </p>
            <p>
              <button class="w3-button w3-light-grey w3-block">Contact</button>
            </p>
          </div>
          <div class="w3-col l3 m6 w3-margin-bottom">
            <img src="@/assets/2.jpg" alt="Dan" style="width: 100%" />
            <h3>Dan Star</h3>
            <p class="w3-opacity">Architect</p>
            <p>
              Phasellus eget enim eu lectus faucibus vestibulum. Suspendisse
              sodales pellentesque elementum.
            </p>
            <p>
              <button class="w3-button w3-light-grey w3-block">Contact</button>
            </p>
          </div>
        </div>

        <!-- Image of location/map -->
        <div class="w3-container">
          <img src="/@/assets/2.jpg" class="w3-image" style="width: 100%" />
        </div>

        <!-- End page content -->
      </div>

      <!-- Footer -->
      <footer class="w3-center w3-black w3-padding-16">
        <p>Dccreation</p>
      </footer>
    </body>
  </html>
</template>

<script>
export default {

  data(){
    return{
    role:"",
    has_lecture_role:true,
    has_student_role:true,
    };
  },
  

  methods: {
    logout() {
      let user = localStorage.getItem("userDetails");
      user = JSON.parse(user);
      if(user.role == "lecture") {
        localStorage.removeItem("userDetails");
        this.$router.push({ name: "LoginLecture" });
      } else if(user.role == "student") {
        localStorage.removeItem("userDetails");
        this.$router.push({ name: "Login" });
      }
    },
  },

  mounted(){
    let user=localStorage.getItem("userDetails");
    user=JSON.parse(user);
    this.role=user.role;

    if(this.role=="lecture"){
      this.has_lecture_role=false;
    }
    else if(this.role=="student"){
      this.has_student_role=false;
    }
  }
};

</script>

<style scoped></style>
