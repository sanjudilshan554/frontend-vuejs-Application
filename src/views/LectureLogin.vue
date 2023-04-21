<template scoped>
  <head> </head>
  <body>
    <section>
      <div class="form-box">
        <div class="form-value">
          <form @submit.prevent>
            <h2>Lecuture Login</h2>

            <label class="placeholder">Employee Number</label>
            <div class="set">
              <input
                v-model="lecture.empNo"
                type="text"
                placeholder="T4515428"
              />
              <p></p>
            </div>

            <label class="placeholder">Password</label>
            <div class="set">
              <input
                v-model="lecture.password"
                type="password"
                placeholder="Enter your password here"
              />
              <lable for=""><p></p></lable>
            </div>

            <div class="forget">
              <label for=""><input type="checkbox" />Remember me</label>
            </div>

            <button @click="login()">Login</button>

            <div class="register">
              <p>
                Dont' have an accout<a href="/leceture/register"> Register</a>
              </p>
            </div>
          </form>
        </div>
      </div>
    </section>
  </body>
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
          console.log(response);
          localStorage.setItem(
            "userDetails",
            JSON.stringify(response.data.data)
          );

          if (response.data.status == "200") {
            alert("Verification succsessfully");
          } else if (response.data.status == "500") {
            alert("Incorect User");
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
* {
  padding: 0;
  margin: 0;
  font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
    "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
}
section {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background-image: url("@/assest/test2.jpg");
}

.form-box {
  display: flex;
  min-width: 400px;
  min-height: 450px;
  background-color: rgba(243, 239, 239, 0.392);
  align-items: center;
  justify-content: center;
  border-radius: 50px;
  background: transparent;
  border: 2px solid rgba(235, 233, 233, 0.5);
  backdrop-filter: blur(15px);
}
h2 {
  font-size: 2em;
  color: rgba(255, 255, 255, 0.786);
  text-align: center;
}

.set {
  position: relative;
  margin: 30px 0;
  width: 310px;
  border-bottom: 2px solid rgb(255, 255, 255);
  color: aliceblue;
  text-align: left;
}

body {
  background-image: url("@/assets/test4.jpg");
  background-repeat: no-repeat;
  background-size: cover;
}

input {
  border-color: none;
  color: rgb(254, 254, 255);
  outline: none;
}

button {
  background-color: rgba(16, 140, 201, 0.829);
  color: rgba(222, 242, 255, 0.98);
  background-position: center;
  align-items: center;
  border-radius: 25px;
  justify-content: center;
  width: 100%;
  height: 40px;
  backdrop-filter: blur(10px);
}
button:hover {
  color: black;
  background-color: rgb(255, 255, 255);
  transition: all 0.5s ease-out;
}
.forget {
  position: relative;
  padding-left: 65px;
  padding-bottom: 15px;
  align-items: center;
  justify-items: center;
  color: rgba(219, 229, 238, 0.908);
}
.register {
  position: relative;
  justify-items: center;
  justify-content: center;
  color: aliceblue;
  text-align: center;
  margin: 25px 0 10px;
}

.register p a {
  color: rgb(241, 241, 248);
}

.register p a:hover {
  color: rgb(246, 0, 0);
  text-decoration: none;
}

input:focus ~ lable,
input:valid ~ lable {
  top: -5px;
}

input::placeholder {
  color: rgba(250, 249, 249, 0.576);
  background-color: transparent;
}

.placeholder {
  bottom: -30px;
  color: aliceblue;
  background-color: transparent;
}

input {
  color: aliceblue;
  background-color: transparent;
}

input::before {
  background-color: rgb(4, 7, 9);
  color: rgb(4, 7, 9);
}

input::after {
  background-color: rgb(4, 7, 9);
  color: rgb(4, 7, 9);
}
input:hover {
  background-color: transparent;
}

:-ms-input-placeholder {
  color: black;
}

:-ms-input-placeholder:hover {
  color: black;
}

::placeholder {
  background-color: aquamarine;
}

::-webkit-input-placeholder {
  background-color: blue;
}
</style>
