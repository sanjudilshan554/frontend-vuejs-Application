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
          <div class="navbardd pr-5"><b>KUPPI</b> conductor</div>

          <a href="/createPost" class="new">Create post</a>
          <a href="/learns" class="new">Learn + </a>
          <a href="/kuppiRequest" class="new">Kuppi </a>
          <a href="/RevisionRequest" class="new">Revision</a>

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
                class="btn btn-outline-danger"
                type="button"
                data-mdb-ripple-color="dark"
              >
                Logout
              </button>
            </form>
          </div>
        </div>
      </nav>
      <!-- Header -->
      <header
        class="w3-display-container w3-content w3-wide"
        style="max-width: 15000px"
        id="home"
      >
        <div class="d-block w-120">
          <div class="slid">
            <div id="slider">
              <figure>
                <img class="d-block w-500" src="@/assets/HOME6.jpg" />
                <img class="d-block w-500" src="@/assets/HOME22.jpg" />
              </figure>
            </div>
          </div>
        </div>
        <div class="w3-display-middle w3-margin-top w3-center">
          <h1 class="w3-xxlarge w3-text-white">
            <span class="w3-padding w3-black w3-opacity-min"><b>KUPPI</b></span>
            <span class="w3-hide-small w3-text-light-grey">Conductor</span>
          </h1>
        </div>
      </header>

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
  </html>
</template>

<script>
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

    if (this.role == "lecture") {
      this.has_lecture_role = false;
    } else if (this.role == "student") {
      this.has_student_role = false;
    }
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
  animation: 25s slider infinite;
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
    left: 0;
  }
  20% {
    left: -0;
  }
  25% {
    left: -0%;
  }
  45% {
    left: -0%;
  }
  50% {
    left: -100%;
  }
  70% {
    left: -100%;
  }
  75% {
    left: -100%;
  }
  95% {
    left: -100%;
  }
  100% {
    left: 0%;
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

.navbardd {
  padding-top: 0;
  color: antiquewhite;
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
</style>
