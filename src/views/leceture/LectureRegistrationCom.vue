<template>
  <form @submit.prevent>
    <section class="h-100 bg-dark">
      <div class="container py-5 h-100">
        <div class="row d-flex justify-content-center align-items-center h-100">
          <div class="col">
            <div class="card card-registration my-4">
              <div class="row g-0">
                <div class="col-xl-6 d-none d-xl-block">
                  <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/img4.webp"
                    alt="Sample photo" class="img-fluid"
                    style="border-top-left-radius: .25rem; border-bottom-left-radius: .25rem;" />
                </div>
                <div class="col-xl-6">
                  <div class="card-body p-md-5 text-black">
                    <h3 class="mb-5 text-uppercase">Lecture registration form</h3>
                    <div class="overflow-scroll">

                    <div class="row">
                      <div class="col-md-6 mb-4">
                        <div class="form-outline">
                          <input type="text" id="fname" v-model="Lecture.fname" class="form-control form-control-lg" />
                          <label class="form-label" for="form3Example1m">First name</label>
                        </div>
                      </div>
                      <div class="col-md-6 mb-4">
                        <div class="form-outline">
                          <input type="text" id="last_name" v-model="Lecture.lname" class="form-control form-control-lg" />
                          <label class="form-label" for="form3Example1n">Last name</label>
                        </div>
                      </div>
                    </div>

                    
    
                    <div class="row">
                      <div class="col-md-6 mb-4">
                        <div class="form-outline">
                          <input type="text" id="age" v-model="Lecture.age" class="form-control form-control-lg" />
                          <label class="form-label" for="age">age</label>
                        </div>
                      </div>
                  </div>

                  <div class="form-outline mb-4">
                    <div class="form-outline">
                      <input type="text" id="address" v-model="Lecture.address" class="form-control form-control-lg" />
                      <label class="form-label" for="address">address</label>
                    </div>
                  </div>

                    <div class="form-outline mb-4">
                      <input type="text" id="postelCode" v-model="Lecture.postelCode" class="form-control form-control-lg" />
                      <label class="form-label" for="school">postelCode</label>
                    </div>
    
                    <div class="form-outline mb-4">
                      <input type="text" id="city" v-model="Lecture.city" class="form-control form-control-lg" />
                      <label class="form-label" for="email">city</label>
                    </div>
  
                    <div class="form-outline mb-4">
                      <input type="text" id="province" v-model="Lecture.province" class="form-control form-control-lg" />
                      <label class="form-label" for="province">province</label>
                    </div>
  
                    
                    <div class="form-outline mb-4">
                      <input type="text" id="district" v-model="Lecture.district" class="form-control form-control-lg" />
                      <label class="form-label" for="district">district</label>
                    </div>
  
                    <div class="form-outline mb-4">
                      <input type="text" id="country" v-model="Lecture.country" class="form-control form-control-lg" />
                      <label class="form-label" for="country">country</label>
                    </div>
  
                    <div class="form-outline mb-4">
                      <input type="text" id="styrSub" v-model="Lecture.styrSub" class="form-control form-control-lg" />
                      <label class="form-label" for="province">First year Sub</label>
                    </div>
  
                    <div class="form-outline mb-4">
                      <input type="text" id="ndyrSub" v-model="Lecture.ndyrSub" class="form-control form-control-lg" />
                      <label class="form-label" for="ndyrSub">Seconnd year Sub</label>
                    </div>
  
                    <div class="form-outline mb-4">
                      <input type="text" id="rdyrSub" v-model="Lecture.rdyrSub" class="form-control form-control-lg" />
                      <label class="form-label" for="coutry">Third year Sub</label>
                    </div>

                    <div class="form-outline mb-4">
                      <input type="text" id="thyrSub" v-model="Lecture.thyrSub" class="form-control form-control-lg" />
                      <label class="form-label" for="thyrSub">Fourth year Sub</label>
                    </div>

                    <div class="form-outline mb-4">
                      <input type="text" id="EduQualification" v-model="Lecture.EduQualification" class="form-control form-control-lg" />
                      <label class="form-label" for="thyrSub">Education Qualification</label>
                    </div>

                    <div class="form-outline mb-4">
                      <input type="text" id="mobNumber" v-model="Lecture.mobNumber" class="form-control form-control-lg" />
                      <label class="form-label" for="mobNumber">Mobile Number</label>
                    </div>

                    <div class="form-outline mb-4">
                      <input type="text" id="Role" v-model="Lecture.role" class="form-control form-control-lg" />
                      <label class="form-label" for="Role">Role</label>
                    </div>
  
                    <div class="d-md-flex justify-content-start align-items-center mb-4 py-2">
    
                      <h6 class="mb-0 me-4">Gender: </h6>
    
                      <div class="form-check form-check-inline mb-0 me-4">
                        <input class="form-check-input" v-model="Lecture.gender" type="radio" name="inlineRadioOptions" id="maleGender"
                          value="Male" selected/>
                        <label class="form-check-label" for="maleGender">Male</label>
                      </div>
  
                      <div class="form-check form-check-inline mb-0 me-4">
                        <input class="form-check-input" v-model="Lecture.gender" type="radio" name="inlineRadioOptions" id="femaleGender"
                          value="Female" />
                        <label class="form-check-label"  for="femaleGender">Female</label>
                      </div>
                    </div>
                    
                    <div class="form-outline mb-4">
                      <input type="email" id="email" v-model="Lecture.email" class="form-control form-control-lg" />
                      <label class="form-label" for="email">Email</label>
                    </div>
  
                    <div class="form-outline mb-4">
                      <input type="text" id="empNo" v-model="Lecture.empNo" class="form-control form-control-lg" />
                      <label class="form-label" for="empNo">Emp no</label>
                    </div>
  
                    <div class="form-outline mb-4">
                      <input type="password" id="password" v-model="Lecture.password" class="form-control form-control-lg" />
                      <label class="form-label" for="password">New Password</label>
                    </div>
  

    
                    <div class="d-flex justify-content-end pt-3">
                      <button type="button" class="btn btn-light btn-lg">Reset all</button>
                      <button type="button" class="btn btn-warning btn-lg ms-2" @click="save()">Submit form</button>
                    </div>
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
</template>

<script>
import axios from "axios";
export default{
  data(){
    return{
      Lecture:{
      fname:"",
      lname:"",
      age:"",
      address:"",
      postelCode:"",
      city:"",
      province:"",
      district:"",
      country:"",
      styrSub:"",
      ndyrSub:"",
      rdyrSub:"",
      thyrSub:"",
      EduQualification:"",
      mobNumber:"",
      gender:"",
      email:"",
      empNo:"",
      password:"",
      role:"",
    }
  };

},

  methods: {
    save() {
      axios.post("http://127.0.0.1:8000/api/lecturereg",this.Lecture)
      .then((response)=>{
        alert('data saved');
          alert(response.data.message);
        if(response.status==200){
          alert('data saved');
          alert(response.data.message);
        }
      })
      .catch((error)=>{
        console.log(error);
      })
    },
  },
};
</script>

<style>
.card-registration .select-input.form-control[readonly]:not([disabled]) {
  font-size: 1rem;
  line-height: 2.15;
  padding-left: .75em;
  padding-right: .75em;
  }
  .card-registration .select-arrow {
  top: 13px;
  }
</style>