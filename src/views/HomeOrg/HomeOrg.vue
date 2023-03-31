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
            <router-link
              to="/kuppiRequest"
              v-if="has_lecture_role"
              class="w3-bar-item w3-button"
              >Kuppi |</router-link
            >
            <router-link
              to="/RevisionRequest"
              v-if="has_lecture_role"
              class="w3-bar-item w3-button"
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
        <div class="d-block w-100">
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
        <h3 class="w3-border-bottom w3-border-light-grey w3-padding-16">
          About
        </h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Excepteur sint occaecat cupidatat non
          proident, sunt in culpa qui officia deserunt mollit anim id est
          laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
          nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
          consequat.
        </p>
      </div>

      <div class="card mb-0 ml-0 mt-0 pt-0 pb-0 pl-0 pr-0">
        <div class="card-body mb-0 ml-0 mt-0 pt-0 pb-0 pl-0 pr-0">
          <swiper
            :navigation="true"
            :modules="modules"
            class="mySwiper"
            ref="{swiperRef}"
            :slidesPerView="5"
            :spaceBetween="20"
            :centeredSlides="true"
            :autoplay="{
              delay: 3000,
              disableOnInteraction: false,
            }"
            :pagination="{
              clickable: true,
            }"
          >
            <swiper-slide
              ><div
                id="carouselExampleControls"
                class="carousel carousel-dark slide"
                data-bs-ride="carousel"
              >
                <div class="carousel-inner">
                  <div class="carousel-item active">
                    <div
                      class="card-wrapper container-sm d-flex justify-content-around"
                    >
                      <div class="card" style="width: 18rem">
                        <img
                          src="https://source.unsplash.com/collection/190727/1600x900"
                          class="card-img-top"
                          alt="..."
                        />

                        <div class="card-body">
                          <h5 class="name-profession card-title">Card title</h5>
                          <div class="button">
                            <button class="buttons">view</button>
                            <button class="buttons">meet</button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </swiper-slide>

            <swiper-slide
              ><div
                id="carouselExampleControls"
                class="carousel carousel-dark slide"
                data-bs-ride="carousel"
              >
                <div class="carousel-inner">
                  <div class="carousel-item active">
                    <div
                      class="card-wrapper container-sm d-flex justify-content-around"
                    >
                      <div class="card" style="width: 18rem">
                        <img
                          src="https://source.unsplash.com/collection/190727/1600x900"
                          class="card-img-top"
                          alt="..."
                        />

                        <div class="card-body">
                          <h5 class="name-profession card-title">Card title</h5>
                          <div class="button">
                            <button class="buttons">view</button>
                            <button class="buttons">meet</button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </swiper-slide>
            <swiper-slide
              ><div
                id="carouselExampleControls"
                class="carousel carousel-dark slide"
                data-bs-ride="carousel"
              >
                <div class="carousel-inner">
                  <div class="carousel-item active">
                    <div
                      class="card-wrapper container-sm d-flex justify-content-around"
                    >
                      <div class="card" style="width: 18rem">
                        <img
                          src="https://source.unsplash.com/collection/190727/1600x900"
                          class="card-img-top"
                          alt="..."
                        />

                        <div class="card-body">
                          <h5 class="name-profession card-title">Card title</h5>
                          <div class="button">
                            <button class="buttons">view</button>
                            <button class="buttons">meet</button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </swiper-slide>
            <swiper-slide
              ><div
                id="carouselExampleControls"
                class="carousel carousel-dark slide"
                data-bs-ride="carousel"
              >
                <div class="carousel-inner">
                  <div class="carousel-item active">
                    <div
                      class="card-wrapper container-sm d-flex justify-content-around"
                    >
                      <div class="card" style="width: 18rem">
                        <img
                          src="https://source.unsplash.com/collection/190727/1600x900"
                          class="card-img-top"
                          alt="..."
                        />

                        <div class="card-body">
                          <h5 class="name-profession card-title">Card title</h5>
                          <div class="button">
                            <button class="buttons">view</button>
                            <button class="buttons">meet</button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </swiper-slide>
            <swiper-slide
              ><div
                id="carouselExampleControls"
                class="carousel carousel-dark slide"
                data-bs-ride="carousel"
              >
                <div class="carousel-inner">
                  <div class="carousel-item active">
                    <div
                      class="card-wrapper container-sm d-flex justify-content-around"
                    >
                      <div class="card" style="width: 18rem">
                        <img
                          src="https://source.unsplash.com/collection/190727/1600x900"
                          class="card-img-top"
                          alt="..."
                        />

                        <div class="card-body">
                          <h5 class="name-profession card-title">Card title</h5>
                          <div class="button">
                            <button class="buttons">view</button>
                            <button class="buttons">meet</button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </swiper-slide>
            <swiper-slide
              ><div
                id="carouselExampleControls"
                class="carousel carousel-dark slide"
                data-bs-ride="carousel"
              >
                <div class="carousel-inner">
                  <div class="carousel-item active">
                    <div
                      class="card-wrapper container-sm d-flex justify-content-around"
                    >
                      <div class="card" style="width: 18rem">
                        <img
                          src="https://source.unsplash.com/collection/190727/1600x900"
                          class="card-img-top"
                          alt="..."
                        />

                        <div class="card-body">
                          <h5 class="name-profession card-title">Card title</h5>
                          <div class="button">
                            <button class="buttons">view</button>
                            <button class="buttons">meet</button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </swiper-slide>
            <swiper-slide
              ><div
                id="carouselExampleControls"
                class="carousel carousel-dark slide"
                data-bs-ride="carousel"
              >
                <div class="carousel-inner">
                  <div class="carousel-item active">
                    <div
                      class="card-wrapper container-sm d-flex justify-content-around"
                    >
                      <div class="card" style="width: 18rem">
                        <img
                          src="https://source.unsplash.com/collection/190727/1600x900"
                          class="card-img-top"
                          alt="..."
                        />

                        <div class="card-body">
                          <h5 class="name-profession card-title">Card title</h5>
                          <div class="button">
                            <button class="buttons">view</button>
                            <button class="buttons">meet</button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </swiper-slide>
            <swiper-slide
              ><div
                id="carouselExampleControls"
                class="carousel carousel-dark slide"
                data-bs-ride="carousel"
              >
                <div class="carousel-inner">
                  <div class="carousel-item active">
                    <div
                      class="card-wrapper container-sm d-flex justify-content-around"
                    >
                      <div class="card" style="width: 18rem">
                        <img
                          src="https://source.unsplash.com/collection/190727/1600x900"
                          class="card-img-top"
                          alt="..."
                        />

                        <div class="card-body">
                          <h5 class="name-profession card-title">Card title</h5>
                          <div class="button">
                            <button class="buttons">view</button>
                            <button class="buttons">meet</button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </swiper-slide>
          </swiper>
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
</style>
