<template scoped>
  <!DOCTYPE html>
  <head>
    <title>home page</title>

    <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css" />
  </head>
  <section>
    <body>
      <nav class="navbar navbar-expand-lg navbar-light bg-dark card">
        <div class="container-fluid">
          <button
            class="navbar-toggler"
            type="button"
            data-mdb-toggle="collapse"
            data-mdb-target="#navbarTogglerDemo03"
            aria-controls="navbarTogglerDemo03"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i class="fas fa-bars"></i>
          </button>
          <div class="navtitle pr-5"><b>KUPPI</b> conductor</div>

          <a href="/createPost" class="new">Create post</a>
          <a href="/learns" class="new">Learn + </a>
          <a href="/kuppiRequest" v-if="has_lecture_role" class="new">Kuppi </a>
          <a href="/RevisionRequest" v-if="has_lecture_role" class="new"
            >Revision</a
          >

          <a
            href="/RequestedForLectures"
            v-if="has_student_role"
            class="newreqs"
            >Requested ({{ count3 }})</a
          >

          <a href="/kuppiAccept" v-if="has_lecture_role" class="newacpsd"
            >Revsn Accepted ({{ count2 }})</a
          >

          <a href="/RFO" v-if="has_lecture_role" class="newreq"
            >Requested ({{ count }})</a
          >

          <a href="/kuppiAccept" v-if="has_lecture_role" class="newacp"
            >Kuppi Accepted ({{ count2 }})</a
          >

          

          <div class="collapse navbar-collapse" id="navbarTogglerDemo03">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0"></ul>

            <form class="d-flex input-group w-auto">
              <a href="/user/profile">
                <button
                  class="btn btn-outline-success"
                  type="button"
                  data-mdb-ripple-color="dark"
                >
                  user Profile
                </button></a
              >

              <button
                @click="logout()"
                class="btn btn-outline-danger"
                type="button"
                data-mdb-ripple-color="dark"
              >
                Logout
              </button>
            </form>
          </div>
        </div>

        <header
          class="w3-display-container w3-content w3-wide"
          style="max-width: 15000px"
          id="home"
        >
          <div class="d-block w-120">
            <div class="slid">
              <div id="slider">
                <figure>
                  <!-- <img class="d-block w-500" src="@/assets/a1 (4).jpg" />
                <img class="d-block w-500" src="@/assets/a1 (8).jpg" /> -->

                  <!-- <img class="d-block w-500" src="@/assets/a1 (1).jpg" /> -->

                  <img class="d-block w-500" src="@/assets/cover1.jpg" />
                  <img class="d-block w-500" src="@/assets/cover8.jpg" />
                  <img class="d-block w-500" src="@/assets/cover3.jpg" />
                  <img class="d-block w-500" src="@/assets/cover4.jpg" />
                  <img class="d-block w-500" src="@/assets/cover5.jpg" />
                  <!--  <img class="d-block w-500" src="@/assets/cover6.jpg" />
                   <img class="d-block w-500" src="@/assets/cover7.jpg" /> -->
                </figure>
              </div>
            </div>
          </div>
          <div class="w3-display-middle w3-margin-top w3-center">
            <h1 class="w3-xxlarge w3-text-white">
              <span class="w3-padding w3-black w3-opacity-min"
                ><b>KUPPI</b></span
              >
              <span class="w3-hide-small w3-text-light-grey">Conductor</span>
            </h1>
          </div>
        </header>
      </nav>
      <!-- Header -->

      <!-- About Section -->
      <div class="w3-container w3-padding-32" id="about">
        <div class="hello">
          <h3 class="w3-border-bottom w3-border-light-grey w3-padding-16">
            <h5 class="name-profession card-title">About</h5>
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
      </div>

      <!-- Footer -->
      <footer class="w3-center w3-black w3-padding-16">
        <p>Dccreation</p>
      </footer>
    </body>
  </section>
</template>

<script>
import axios from "axios";
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";

// Import Swiper styles
import "swiper/css";

import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

export default {
  data() {
    return {
      form: {
        localid: "",
      },

      count: "",
      count2: "",
      count3: "",

      role: "",
      has_lecture_role: true,
      has_student_role: true,
    };
  },
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    return {
      modules: [Autoplay, Pagination, Navigation],
    };
  },

  methods: {
    logout() {
      let user = localStorage.getItem("userDetails");
      user = JSON.parse(user);
      if (user.role == "lecture") {
        localStorage.removeItem("userDetails");
        this.$router.push({ name: "LoginLecture" });
      } else if (user.role == "student") {
        localStorage.removeItem("userDetails");
        this.$router.push({ name: "Login" });
      }
    },
  },

  mounted() {
    let user = localStorage.getItem("userDetails");
    user = JSON.parse(user);
    this.role = user.role;
    this.form.localid = user.id;

    if (this.role == "lecture") {
      this.has_lecture_role = false;
    } else if (this.role == "student") {
      this.has_student_role = false;
    }

    axios

      .post("http://127.0.0.1:8000/api/countforhome", this.form)
      .then((response) => {
        if (response.status == "200") {
          this.count = response.data.data;
          this.count2 = response.data.data2;
        }
      })
      .catch((error) => {
        console.log(error);
      });

    axios

      .post("http://127.0.0.1:8000/api/revisionRequestHome", this.form)
      .then((response) => {
        if (response.status == "200") {
          this.count3 = response.data.data;
        }
      })
      .catch((error) => {
        console.log(error);
      });
  },
};
</script>

<style scoped>
#slider {
  overflow: hidden;
}
#slider figure {
  position: relative;
  width: 500%;
  margin: 0;
  animation: 60s slider infinite;
}
#slider figure img {
  width: 20%;
  float: left;
}

.slider {
  width: 150px;
  margin-left: 200px;
}
@keyframes slider {
  0% {
    left: -0%;
  }
  10% {
    left: -0%;
  }
  15% {
    left: -100%;
  }

  15% {
    left: -100%;
  }

  20% {
    left: -200%;
  }
  20% {
    left: -200%;
  }

  30% {
    left: -300%;
  }
  30% {
    left: -300%;
  }

  40% {
    left: -400%;
  }
  40% {
    left: -400%;
  }

  65% {
    left: -300%;
  }
  85% {
    left: -200%;
  }
  90% {
    left: -100%;
  }
  100% {
    left: -0%;
  }
}

.card {
  padding: 0;
}
.card-wrapper {
}

@import url("https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,300;1,500&display=swap");

.card {
  padding: 0;
}
.card-wrapper {
}

.button {
  background: rgba(0, 0, 0, 0.056);

  align-items: center;
  border-radius: 100px;
  padding: 8px 8px;
  border: none;
  outline: none;
  justify-content: space-around;
}

.button .buttons {
  padding-left: 35%;
  justify-self: unset;
  justify-items: center;
}

.button .buttons:hover {
  color: rgb(245, 242, 242);
}
.button:hover {
  background-color: rgba(0, 0, 0, 0.392);
  transition: 0.5s;
}

.hello {
  text-align: center;
}

.new {
  align-items: center;
  color: white;
  padding-top: 5px;
  padding: 10px;
  background-position: center center;
}
.news {
  align-items: center;
  color: white;
  padding-top: 5px;
  padding: 10px;
  background-position: center center;
}
.new:hover {
  background-color: rgba(240, 248, 255, 0.492);
  position: relative;
  transition: 200ms;
}

.news:hover {
  background-color: rgba(21, 121, 209, 0.492);
  position: relative;
  transition: 200ms;
}

.card {
  box-shadow: 10cap;
  border-radius: 0px 0px 0px 0px;
  box-shadow: 0 2px 4px 0 rgba(136, 144, 195, 0.2),
    0 5px 15px 0 rgba(37, 44, 97, 0.15);
}

a {
  background-color: #333;
  color: #0142f6;
  text-align: center;
  text-decoration: none;
  transition: all 0.5s ease-out;
}

a:hover,
a:focus {
  background-color: #ffffff;
  color: #ffffff;
}
html {
  background-color: black;
  color: #333;
}

.navtitle {
  color: white;
}

body {
  background-color: #f9ffe8;
}

section {
  background-color: rgb(241, 229, 194);
}

.newreq {
  margin-left: 30vh;
  justify-content: center;
  align-items: center;
  padding: 10px;
  color: white;
  border-radius: 50px;
  background-color: rgba(250, 7, 7, 0.194);
}

.newreq:hover {
  color: rgb(255, 255, 255);
  background-color: rgba(250, 7, 7, 0.622);
}

.newreqs {
  margin-left: 50vh;
  justify-content: center;
  align-items: center;
  padding: 10px;
  color: white;
  border-radius: 50px;
  background-color: rgba(250, 7, 7, 0.194);
}

.newreqs:hover {
  color: rgb(255, 255, 255);
  background-color: rgba(250, 7, 7, 0.622);
}

.newacp {
  margin-left: 0vh;
  justify-content: center;
  align-items: center;
  padding: 10px;
  color: white;
  border-radius: 50px;
  background-color: rgba(7, 250, 112, 0.35);
}
.newacp:hover {
  color: rgb(255, 255, 255);
  background-color: #0cc712d6;
}

.newacpsd{
  margin-right: -30vh;
  margin-left:10vh;
  justify-content: center;
  align-items: center;
  padding: 10px;
  color: white;
  border-radius: 50px;
  background-color: rgba(7, 250, 112, 0.35);
}
.newacpsd:hover {
  color: rgb(255, 255, 255);
  background-color: #0cc712d6;
}
</style>
