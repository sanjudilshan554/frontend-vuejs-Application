<template>
  <section class="h-100 gradient-form" style="background-color: #eee">
    <div class="container py-5 h-100">
      <div class="row d-flex justify-content-center align-items-center h-100">
        <div class="col-xl-10">
          <div class="card rounded-3 text-black">
            <div class="row g-0">
              <div class="col-lg-6">
                <div class="card-body p-md-5 mx-md-4">
                  <div class="text-center">
                    <img
                      src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/lotus.webp"
                      style="width: 185px"
                      alt="logo"
                    />
                    <h4 class="mt-1 mb-5 pb-1">Lectures Log in</h4>
                  </div>

                  <form @submit.prevent>
                    <p>Please login to your account</p>

                    <div class="form-outline mb-4">
                      <input
                        type="text"
                        id="form2Example11"
                        class="form-control"
                        v-model="lecture.empNo"
                        placeholder="Emp number"
                      />
                      <label class="form-label" for="form2Example11"
                        >Employee Number</label
                      >
                    </div>

                    <div class="form-outline mb-4">
                      <input
                        type="password"
                        id="form2Example22"
                        class="form-control"
                        v-model="lecture.password"
                      />
                      <label class="form-label" for="form2Example22"
                        >Password</label
                      >
                    </div>

                    <div class="text-center pt-1 mb-5 pb-1">
                    <button
                          class="btn btn-primary btn-block fa-lg gradient-custom-2 mb-3"
                          type="button"
                          @click="login()"
                        >
                          Log in
                        </button>
                      <a class="text-muted" href="#!">Forgot password?</a>
                    </div>

                    <div
                      class="d-flex align-items-center justify-content-center pb-4"
                    >
                      <p class="mb-0 me-2">Don't have an account?</p>
                      <router-link to="/leceture/register"
                        ><button type="button" class="btn btn-outline-danger">
                          Create new
                        </button></router-link
                      >
                    </div>
                  </form>
                </div>
              </div>
              <div class="col-lg-6 d-flex align-items-center gradient-custom-2">
                <div class="text-white px-3 py-4 p-md-5 mx-md-4">
                  <h4 class="mb-4">We are more than just a company</h4>
                  <p class="small mb-0">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </p>
                </div>
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
      lecture: {
        empNo: "",
        password: "",
      },
    };
  },

  methods: {
    login() {
      axios
        .post(this.$hostname + "/api/lecture/login", this.lecture)
        .then((response) => {
          console.log(response)
          localStorage.setItem(
            "userDetails",
            JSON.stringify(response.data.data)
          );
          if(response.data.status == "200") {
            alert("Verification succsessfully");
          } else if(response.data.status == "500") {
            alert('Incorect User');
          }
          let user = localStorage.getItem("userDetails");
          user = JSON.parse(user);
          if (user.role == "lecture") {
            this.$router.push({ name: "homeOrg" });
          } else {
            this.$router.back();
          }
        })
        .catch((error) => {
          console.log(error);
        })
        .finally(() => {});
    },
  },
};
</script>

<style scoped>
.gradient-custom-2 {
  /* fallback for old browsers */
  background: #fccb90;

  /* Chrome 10-25, Safari 5.1-6 */
  background: -webkit-linear-gradient(
    to right,
    #ee7724,
    #d8363a,
    #dd3675,
    #b44593
  );

  /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  background: linear-gradient(to right, #ee7724, #d8363a, #dd3675, #b44593);
}

@media (min-width: 768px) {
  .gradient-form {
    height: 100vh !important;
  }
}
@media (min-width: 769px) {
  .gradient-custom-2 {
    border-top-right-radius: 0.3rem;
    border-bottom-right-radius: 0.3rem;
  }
}
</style>
