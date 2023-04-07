<template scoped>
  <body>
    <form @submit.prevent>
      <section>
        <div class="container py-5 h-100">
          <div
            class="row d-flex justify-content-center align-items-center h-100"
          >
            <div class="col">
              <div class="card card-registration my-4">
                <div class="row g-0">
                  <div class="col-xl-12">
                    <div class="card-body p-md-5 text-black">
                      <h3 >
                        Student registration form
                      </h3>

                      <div class="row">
                        <div class="col-md-6 mb-4">
                          <div class="form-outline">
                            <input
                              type="text"
                              id="first_name"
                              v-model="student.first_name"
                              class="form-control form-control-lg"
                            />
                            <label class="form-label" for="form3Example1m"
                              >First name</label
                            >
                          </div>
                        </div>
                        <div class="col-md-6 mb-4">
                          <div class="form-outline">
                            <input
                              type="text"
                              id="last_name"
                              v-model="student.last_name"
                              class="form-control form-control-lg"
                            />
                            <label class="form-label" for="form3Example1n"
                              >Last name</label
                            >
                          </div>
                        </div>
                      </div>

                      <div class="row">
                        <div class="col-md-6 mb-4">
                          <div class="form-outline">
                            <input
                              type="text"
                              id="age"
                              v-model="student.age"
                              class="form-control form-control-lg"
                            />
                            <label class="form-label" for="age">age</label>
                          </div>
                        </div>
                        <div class="col-md-6 mb-4">
                          <div class="form-outline">
                            <input
                              type="text"
                              id="work_place"
                              v-model="student.work_place"
                              class="form-control form-control-lg"
                            />
                            <label class="form-label" for="work_place"
                              >work_place</label
                            >
                          </div>
                        </div>
                      </div>

                      <div class="form-outline mb-4">
                        <input
                          type="text"
                          id="school"
                          v-model="student.school"
                          class="form-control form-control-lg"
                        />
                        <label class="form-label" for="school">school</label>
                      </div>

                      <div class="form-outline mb-4">
                        <input
                          type="text"
                          id="email"
                          v-model="student.email"
                          class="form-control form-control-lg"
                        />
                        <label class="form-label" for="email">Email ID</label>
                      </div>

                      <div class="form-outline mb-4">
                        <input
                          type="text"
                          id="address"
                          v-model="student.address"
                          class="form-control form-control-lg"
                        />
                        <label class="form-label" for="address">Address</label>
                      </div>

                      <div class="form-outline mb-4">
                        <input
                          type="text"
                          id="postal_code"
                          v-model="student.postal_code"
                          class="form-control form-control-lg"
                        />
                        <label class="form-label" for="postal_code"
                          >postal code</label
                        >
                      </div>

                      <div class="form-outline mb-4">
                        <input
                          type="text"
                          id="city"
                          v-model="student.city"
                          class="form-control form-control-lg"
                        />
                        <label class="form-label" for="city">city</label>
                      </div>

                      <div class="form-outline mb-4">
                        <input
                          type="text"
                          id="province"
                          v-model="student.province"
                          class="form-control form-control-lg"
                        />
                        <label class="form-label" for="province"
                          >province</label
                        >
                      </div>

                      <div class="form-outline mb-4">
                        <input
                          type="text"
                          id="district"
                          v-model="student.district"
                          class="form-control form-control-lg"
                        />
                        <label class="form-label" for="district"
                          >district</label
                        >
                      </div>

                      <div class="form-outline mb-4">
                        <input
                          type="text"
                          id="coutry"
                          v-model="student.coutry"
                          class="form-control form-control-lg"
                        />
                        <label class="form-label" for="coutry">country</label>
                      </div>

                      <div
                        class="d-md-flex justify-content-start align-items-center mb-4 py-2"
                      >
                        <h6 class="mb-0 me-4">Gender:</h6>

                        <div class="form-check form-check-inline mb-0 me-4">
                          <input
                            class="form-check-input"
                            v-model="student.gender"
                            type="radio"
                            name="inlineRadioOptions"
                            id="maleGender"
                            value="Male"
                            selected
                          />
                          <label class="form-check-label" for="maleGender"
                            >Male</label
                          >
                        </div>

                        <div class="form-check form-check-inline mb-0 me-4">
                          <input
                            class="form-check-input"
                            v-model="student.gender"
                            type="radio"
                            name="inlineRadioOptions"
                            id="femaleGender"
                            value="Female"
                          />
                          <label class="form-check-label" for="femaleGender"
                            >Female</label
                          >
                        </div>
                      </div>
                      <div class="form-outline mb-4">
                        <input
                          type="text"
                          id="mb_No"
                          v-model="student.mb_No"
                          class="form-control form-control-lg"
                        />
                        <label class="form-label" for="mb_No"
                          >mobile Number</label
                        >
                      </div>

                      <div class="form-outline mb-4">
                        <input
                          type="text"
                          id="current_Degree"
                          v-model="student.current_Degree"
                          class="form-control form-control-lg"
                        />
                        <label class="form-label" for="current_Degree"
                          >current Degree</label
                        >
                      </div>

                      <div class="form-outline mb-4">
                        <input
                          type="text"
                          id="current_year"
                          v-model="student.current_year"
                          class="form-control form-control-lg"
                        />
                        <label class="form-label" for="current_year"
                          >current year</label
                        >
                      </div>

                      <div class="form-outline mb-4">
                        <input
                          type="text"
                          id="Special_knowledge"
                          v-model="student.Special_knowledge"
                          class="form-control form-control-lg"
                        />
                        <label class="form-label" for="Special_knowledge"
                          >Special knowledge</label
                        >
                      </div>

                      <div class="form-outline mb-4">
                        <input
                          type="text"
                          id="Edu_qualification"
                          v-model="student.Edu_qualification"
                          class="form-control form-control-lg"
                        />
                        <label class="form-label" for="Edu_qualification"
                          >Edu_qualification</label
                        >
                      </div>

                      <div class="form-outline mb-4">
                        <input
                          type="text"
                          id="Fam_soft"
                          v-model="student.Fam_soft"
                          class="form-control form-control-lg"
                        />
                        <label class="form-label" for="Fam_soft"
                          >Fam soft</label
                        >
                      </div>

                      <!-- <div class="form-outline mb-4">
                    <input type="text" id="role" v-model="student.role" class="form-control form-control-lg" placeholder="Student"/>
                    <label class="form-label" for="role">Post </label>
                  </div> -->

                      <div class="form-outline mb-4">
                        <input
                          type="text"
                          id="Special_Sub"
                          v-model="student.Special_Sub"
                          class="form-control form-control-lg"
                        />
                        <label class="form-label" for="Fam_soft"
                          >Special_Sub</label
                        >
                      </div>

                      <div class="form-outline mb-4">
                        <input
                          type="text"
                          id="Certification"
                          v-model="student.Certification"
                          class="form-control form-control-lg"
                        />
                        <label class="form-label" for="Fam_soft"
                          >Certification</label
                        >
                      </div>

                      <div class="form-outline mb-4">
                        <input
                          type="text"
                          id="University_Reg_No"
                          v-model="student.University_Reg_No"
                          class="form-control form-control-lg"
                        />
                        <label class="form-label" for="Fam_soft"
                          >University_Reg_No</label
                        >
                      </div>

                      <div class="form-outline mb-4">
                        <input
                          type="password"
                          id="New_Password"
                          v-model="student.New_Password"
                          class="form-control form-control-lg"
                        />
                        <label class="form-label" for="Fam_soft"
                          >New_Password</label
                        >
                      </div>

                      <div class="d-flex justify-content-end pt-3">
                        <button type="button" class="btn btn-light btn-lg">
                          Reset all
                        </button>
                        <button
                          type="button"
                          class="btn btn-warning btn-lg ms-2"
                          @click="saveStudent()"
                        >
                          Submit form
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </form>
  </body>
</template>

<script>
import axios from "axios";
export default {
  mounted() {},
  created() {},
  data() {
    return {
      student: {
        first_name: "",
        last_name: "",
        age: "",
        work_place: "",
        school: "",
        email: "",
        address: "",
        postal_code: "",
        city: "",
        province: "",
        district: "",
        coutry: "",
        gender: "",
        mb_No: "",
        current_Degree: "",
        current_year: "",
        Special_knowledge: "",
        Edu_qualification: "",
        Fam_soft: "",
        Special_Sub: "",
        Certification: "",
        University_Reg_No: "",
        New_Password: "",
        // role:"",
        // Confirm_Pass: "",
      },
    };
  },

  methods: {
    saveStudent() {
      axios
        .post("http://127.0.0.1:8000/api/registration", this.student)
        .then((response) => {
          if (response.status == 200) {
            alert(response.data.message);
          }
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>

<style scoped>
.card-registration .select-input.form-control[readonly]:not([disabled]) {
  font-size: 1rem;
  line-height: 2.15;
  padding-left: 0.75em;
  padding-right: 0.75em;
}
.card-registration .select-arrow {
  top: 13px;
}
.card {
  border-radius: 20px;
  background-color: rgba(255, 255, 255, 0.5);
  backdrop-filter: blur(25px);
}

section {
  background-image: url("@/assets/test2.jpg");
  background-position: center;
  background-repeat: no-repeat;
  background: cover;
  background-size: cover;
  background-attachment: fixed;
}

h3{
  color:white;
  font-size: 3em;
  text-align: center;
  padding-bottom: 10px;
}
</style>
