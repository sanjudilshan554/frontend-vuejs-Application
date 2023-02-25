<template>
    <section class="intro">
        <div class="card">
        <!-- <div class="container-fluid px-1 py-5 mx-auto"> -->
          <!-- <div class="row d-flex justify-content-center"> -->
            <!-- <div class="col-xl-7 col-lg-8 col-md-9 col-11 text-center"> -->
            <!-- <div class="card"> -->
              <h3>Software</h3>
              
              <p class="blue-text">
                Just answer a few questions<br />
                so that we can personalize the right experience for you.
              </p>
              
                <h5 class="text-center mb-4">Specially trained Software </h5>

                <form class="form-card" onsubmit="event.preventDefault()" @submit.prevent >

                  <div class="row justify-content-between text-left">
                    <div class="form-group col-sm-6 flex-column d-flex">
                      <label class="form-control-label px-3"
                        >Software 1<span class="text-danger"> *</span></label
                      >
                      <select class="btn btn-danger" name="language" id="language">
                        <option class="dropdown" value="javascript">JavaScript</option>
                        <option value="python">Python</option>
                        <option value="c++" disabled>C++</option>
                        <option value="java" selected>No Software</option>
                        </select>
                    </div>

                    <div class="form-group col-sm-6 flex-column d-flex">
                      <label class="form-control-label px-3"
                        ><span class="text-danger"> </span></label
                      >
                      <div class="slider">
        
                        <input type="range" min="0" max="100" value="10"   oninput="rangeValue.innerText = this.value">
                        <p id="rangeValue"> 10 </p>
                    </div>
                    </div>
                  </div>
    
                  <div class="row justify-content-between text-left">
                    <div class="form-group col-sm-6 flex-column d-flex">
                      <label class="form-control-label px-3"
                        >Software 2 <span class="text-danger"> *</span></label
                      >
                      <select class="btn btn-danger" name="language" id="language">
                        <option class="dropdown" value="javascript">JavaScript</option>
                        <option value="python">Python</option>
                        <option value="c++" disabled>C++</option>
                        <option value="java" selected>No Software</option>
                        </select>
                    </div>
                    <div class="form-group col-sm-6 flex-column d-flex">
                      <label class="form-control-label px-3"
                        ><span class="text-danger"> </span></label>
                         <div class="slider">
                            <input type="range" min="0" max="100" value="10"   oninput="rangeValue1.innerText = this.value">
                            <p id="rangeValue1"> 10 </p>
                        </div> 
                    </div>
                  </div>
    
                  <div class="row justify-content-between text-left">
                    <div class="form-group col-sm-6 flex-column d-flex">
                      <label class="form-control-label px-3"
                        >Software 3<span class="text-danger"> *</span></label
                      >
                      <select class="btn btn-danger" name="language" id="language">
                        <option class="dropdown" value="javascript">JavaScript</option>
                        <option value="python">Python</option>
                        <option value="c++" disabled>C++</option>
                        <option value="java" selected>No Software</option>
                        </select>

                    </div>
                    <div class="form-group col-sm-6 flex-column d-flex">
                      <label class="form-control-label px-3"
                        ><span class="text-danger"> </span></label>
                      
                        <div class="slider">
                            <input type="range" min="0" max="100" value="10"   oninput="rangeValue2.innerText = this.value">
                            <p id="rangeValue2"> 10 </p>
                        </div>
                    </div>
                  </div>
    
                  <div class="row justify-content-between text-left">
                    <div class="form-group col-sm-6 flex-column d-flex">
                      <label class="form-control-label px-3"
                        >Software 4<span class="text-danger">*
                          </span
                        ></label
                      >
                      <select class="btn btn-danger" name="language" id="language">
                        <option class="dropdown" value="javascript">JavaScript</option>
                        <option value="python">Python</option>
                        <option value="c++" disabled>C++</option>
                        <option value="java" selected>No Software</option>
                        </select>

                    </div>
                    <div class="form-group col-sm-6 flex-column d-flex">
                      <label class="form-control-label px-3"
                        ><span class="text-danger"> </span></label
                      >
                      <div class="slider">
                        <input type="range" min="0" max="100" value="10"   oninput="rangeValue3.innerText = this.value">
                        <p id="rangeValue3"> 10 </p>
                    </div>
                    </div>
                  </div>
    
                <br />
        

               <!-- </div> -->
              <!-- </div> -->
             <!-- </div> -->


             <br><hr><br>

             <h3>Subject</h3>
              
              <p class="blue-text">
                Just answer a few questions<br />
                so that we can personalize the right experience for you.
              </p>
              
                <h5 class="text-center mb-4">Specially trained Subject</h5>

            

                  <div class="row justify-content-between text-left">
                    <div class="form-group col-sm-6 flex-column d-flex">
                      <label class="form-control-label px-3"
                        >First Year<span class="text-danger"> *</span></label
                      >
                      <!-- <input
                        type="text"
                        id="revName"
                        name="revName"
                        placeholder="Create Name"
                        onblur="validate(1)"
                        v-model="kuppirequest.kuppiname"
                      /> -->
                            
                            
                    <select class="btn btn-danger" name="language" id="language">
                    <option class="dropdown" value="javascript">JavaScript</option>
                    <option value="python">Python</option>
                    <option value="c++" disabled>C++</option>
                    <option value="java" selected>No subject</option>
                    </select>
                
                    </div>

                    <div class="form-group col-sm-6 flex-column d-flex">
                      <label class="form-control-label px-3"
                        ><span class="text-danger"> </span></label
                      >
                      <div class="slider">
        
                        <input type="range" min="0" max="100" value="10"   oninput="rangeValue4.innerText = this.value">
                        <p id="rangeValue4"> 10 </p>
                    </div>
                    </div>
                  </div>
    
                  <div class="row justify-content-between text-left">
                    <div class="form-group col-sm-6 flex-column d-flex">
                      <label class="form-control-label px-3"
                        >Second year<span class="text-danger"> *</span></label
                      >
                      <select class="btn btn-danger" name="language" id="language">
                        <option class="btn btn-danger" value="javascript">JavaScript</option>
                        <option value="python">Python</option>
                        <option value="c++" disabled>C++</option>
                        <option value="java" selected>No subject</option>
                        </select>

                    </div>
                    <div class="form-group col-sm-6 flex-column d-flex">
                      <label class="form-control-label px-3"
                        ><span class="text-danger"> </span></label>
                         <div class="slider">
                            <input type="range" min="0" max="100" value="10"   oninput="rangeValue5.innerText = this.value">
                            <p id="rangeValue5"> 10 </p>
                        </div> 
                    </div>
                  </div>
    
                  <div class="row justify-content-between text-left">
                    <div class="form-group col-sm-6 flex-column d-flex">
                      <label class="form-control-label px-3"
                        >Third year<span class="text-danger"> *</span></label
                      >
                      <select class="btn btn-danger" name="language" id="language">
                    <option class="btn btn-danger" value="javascript">JavaScript</option>
                    <option value="python">Python</option>
                    <option value="c++" disabled>C++</option>
                    <option value="java" selected>No subject</option>
                    </select>
                    </div>
                    <div class="form-group col-sm-6 flex-column d-flex">
                      <label class="form-control-label px-3"
                        > <span class="text-danger"> </span></label>
                      
                        <div class="slider">
                            <input type="range" min="0" max="100" value="10"   oninput="rangeValue6.innerText = this.value">
                            <p id="rangeValue6"> 10 </p>
                        </div>
                    </div>
                  </div>
    
                  <div class="row justify-content-between text-left">
                    <div class="form-group col-sm-6 flex-column d-flex">
                      <label class="form-control-label px-3"
                        >Fourth year<span class="text-danger">
                          *</span
                        ></label
                      >
                      <select class="btn btn-danger" name="language" id="language">
                        <option class="btn btn-danger" value="javascript">JavaScript</option>
                        <option value="python">Python</option>
                        <option value="c++" disabled>C++</option>
                        <option value="java" selecte>Java</option>
                        <option value="java" selected>No subject</option>
                        </select>
                    </div>

                    <div class="form-group col-sm-6 flex-column d-flex">
                      <label class="form-control-label px-3"
                        ><span class="text-danger"> </span></label
                      >
                      <div class="slider">
                        <input type="range" min="0" max="100" value="10"   oninput="rangeValue7.innerText = this.value">
                        <p id="rangeValue7"> 10 </p>
                    </div>
                    </div>
                  </div>

                  

                  <br><br><hr><br>

                  <h3>Education Qualification</h3>
              
              
                <div class="form-group">
                <label for="exampleFormControlInput1">Add Qualification</label>
                <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="W3Schools.com">
                </div>
  
                <div class="form-group">
                <label for="exampleFormControlTextarea1">Add Qualification</label>
                <textarea class="form-control" id="exampleFormControlTextarea1" placeholder="Web Development! All I need to know in one place" rows="3"></textarea>
                </div>
                <br>

                <div class="form-group">
                    <label for="exampleFormControlInput1">Add Qualification</label>
                    <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Master Degree">
                    </div>
      
                    <div class="form-group">
                    <label for="exampleFormControlTextarea1">Add Qualificationa</label>
                    <textarea class="form-control" id="exampleFormControlTextarea1" placeholder="London Business School"  rows="3"></textarea>
                    </div>
                <br>
                <div class="form-group">
                    <label for="exampleFormControlInput1">Add Qualification</label>
                    <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="School of Coding">
                    </div>
          
                    <div class="form-group">
                    <label for="exampleFormControlTextarea1">Add Qualification</label>
                    <textarea class="form-control" id="exampleFormControlTextarea1" placeholder="Bachelor Degree" rows="3"></textarea>
                    </div>
                <br>
                <hr>


                <h3>Work Experience</h3>
              
              
                <div class="form-group">
                <label for="exampleFormControlInput1">Add Experience</label>
                <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Front End Developer / w3schools.com">
                </div>
  
                <div class="form-group">
                <label for="exampleFormControlTextarea1">Description</label>
                <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="Lorem ipsum dolor sit amet. Praesentium magnam consectetur vel in deserunt aspernatur est reprehenderit sunt hic. Nulla tempora soluta ea et odio, unde doloremque repellendus iure, iste."></textarea>
                </div>
                <br>

                <div class="form-group">
                    <label for="exampleFormControlInput1">Add Experience</label>
                    <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Web Developer / something.com">
                    </div>
      
                    <div class="form-group">
                    <label for="exampleFormControlTextarea1">Description</label>
                    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="Consectetur adipisicing elit. Praesentium magnam consectetur vel in deserunt aspernatur est reprehenderit sunt hic. Nulla tempora soluta ea et odio, unde doloremque repellendus iure, iste."></textarea>
                    </div>
                <br>
                <div class="form-group">
                    <label for="exampleFormControlInput1">Add Experience</label>
                    <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="nGraphic Designer / designsomething.com">
                    </div>
          
                    <div class="form-group">
                    <label for="exampleFormControlTextarea1">Description</label>
                    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="Lorem ipsum dolor sit amet, consectetur adipisicing elit."></textarea>
                    </div>
                <br>

                <br />
                  <div class="row justify-content-end">
                    <div class="form-group col-sm-6">
                      <button type="submit" class="btn-block btn-primary" @click="save()">
                        Update Profile
                      </button>
                    </div>
                </div>
            <br>
         </form>
                 
               <!-- </div> -->
              <!-- </div> -->
            </div>
        <!-- </div> -->
 </section>
</template>
   
  <script>
 import axios from "axios";
export default {
  data() {
    return {
      kuppirequest: {
        kuppiname: "",
        subject: "",
        freetime: "",
        place: "",
        seniorName: "",
        senioremail: "",
        seniourregid: "",
        onoff: "",
      },
    };
  },

  methods: {
    save() {
      axios
        .post("http://127.0.0.1:8000/api/kuppi", this.kuppirequest)
        .then((response) => {
          if (response.status == 200) {
            alert("data saved");
          }
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
  </script> 
   
  <style>
  body {
    background: #EFCDA4;
   }
   .slider {
    position:absolute;
    top:50%;
    left:50%;
    transform:translate(-50%,-50%);
    width:300px;
    height:60px;
    padding:30px;
    padding-left: 40px;
    background:#fcfcfc;
    border-radius:20px;
    display:flex;
    align-items:center;
    box-shadow:0px 15px 40px #7E6D5766;
   }
   .slider p {
    font-size:26px;
    font-weight:60;
    font-family: Open Sans;
    padding-left:30px;
    color:#7E6D57;
   }
   .slider input[type=”range”] {
    -webkit-appearance:none !important;
    width:100px;
    height:2px;
    background:#7E6D57;
    border:none;
    outline:none;
   }
   .slider input[type=”range”]::-webkit-slider-thumb {
    -webkit-appearance:none !important;
    width:30px;
    height:30px;
    background:#fcfcfc;
    border:2px solid #7E6D57;
    border-radius:50%;
    cursor:pointer;
   }
   .slider input[type=”range”]::-webkit-slider-thumb:hover {
    background:#7E6D57;
   }
   body {
    color: #000;
    overflow-x: hidden;
    height: 100%;
    background-image: url("https://i.imgur.com/GMmCQHC.png");
    background-repeat: no-repeat;
    background-size: 100% 100%;
  }
  .card {
    padding: 30px 40px;
    margin-top: 60px;
    margin-bottom: 60px;
    border: none !important;
    box-shadow: 0 6px 12px 0 rgba(0, 0, 0, 0.2);
  }
  .blue-text {
    color: #00bcd4;
  }
  .form-control-label {
    margin-bottom: 0;
  }
  input,
  textarea,
  button {
    padding: 8px 15px;
    border-radius: 5px !important;
    margin: 5px 0px;
    box-sizing: border-box;
    border: 1px solid #ccc;
    font-size: 18px !important;
    font-weight: 300;
  }
  input:focus,
  textarea:focus {
    -moz-box-shadow: none !important;
    -webkit-box-shadow: none !important;
    box-shadow: none !important;
    border: 1px solid #00bcd4;
    outline-width: 0;
    font-weight: 400;
  }
  .btn-block {
    text-transform: uppercase;
    font-size: 15px !important;
    font-weight: 400;
    height: 43px;
    cursor: pointer;
  }
  .btn-block:hover {
    color: #fff !important;
  }
  button:focus {
    -moz-box-shadow: none !important;
    -webkit-box-shadow: none !important;
    box-shadow: none !important;
    outline-width: 0;
  }
  .dropdown {
    position: relative;
    display: inline-block;
  }
  
  .dropdown-content {
    display: none;
    position: absolute;
    background-color: #f9f9f9;
    min-width: 160px;
    box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
    padding: 12px 16px;
    z-index: 1;
  }
  
  .dropdown:hover .dropdown-content {
    display: block;
  }
  /* Style The Dropdown Button */
  .dropbtn {
    background-color: #4caf50;
    color: white;
    padding: 16px;
    font-size: 16px;
    border: none;
    cursor: pointer;
  }
  
  /* The container <div> - needed to position the dropdown content */
  .dropdown {
    position: relative;
    display: inline-block;
  }
  
  /* Dropdown Content (Hidden by Default) */
  .dropdown-content {
    display: none;
    position: absolute;
    background-color: #f9f9f9;
    min-width: 160px;
    box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
    z-index: 1;
  }
  
  /* Links inside the dropdown */
  .dropdown-content a {
    color: black;
    padding: 12px 16px;
    text-decoration: none;
    display: block;
  }
  
  /* Change color of dropdown links on hover */
  .dropdown-content a:hover {
    background-color: #f1f1f1;
  }
  
  /* Show the dropdown menu on hover */
  .dropdown:hover .dropdown-content {
    display: block;
  }
  
  /* Change the background color of the dropdown button when the dropdown content is shown */
  .dropdown:hover .dropbtn {
    background-color: #3e8e41;
  }
  
  html,
  body,
  .intro {
    height: 100%;
  }
  
  .gradient-custom-1 {
    /* fallback for old browsers */
    background: #250e36;
  
    /* Chrome 10-25, Safari 5.1-6 */
    background: -webkit-linear-gradient(
      to top,
      rgb(195, 146, 233),
      rgb(255, 255, 255)
    );
  
    /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
    background: linear-gradient(to top, rgb(29, 27, 31), rgb(255, 255, 255));
  }
  
  table td,
  table th {
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
  }
  tbody td {
    font-weight: 500;
    color: #999999;
  }
  .dropdown {
    position: relative;
    display: inline-block;
  }
  
  .dropdown-content {
    display: none;
    position: absolute;
    background-color: #f9f9f9;
    min-width: 160px;
    box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
    padding: 12px 16px;
    z-index: 1;
  }
  
  .dropdown:hover .dropdown-content {
    display: block;
  }
  /* Style The Dropdown Button */
.dropbtn {
    background-color: #4CAF50;
    color: white;
    padding: 16px;
    font-size: 16px;
    border: none;
    cursor: pointer;
  }
  
  /* The container <div> - needed to position the dropdown content */
  .dropdown {
    position: relative;
    display: inline-block;
  }
  
  /* Dropdown Content (Hidden by Default) */
  .dropdown-content {
    display: none;
    position: absolute;
    background-color: #f9f9f9;
    min-width: 160px;
    box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
    z-index: 1;
  }
  
  /* Links inside the dropdown */
  .dropdown-content a {
    color: black;
    padding: 12px 16px;
    text-decoration: none;
    display: block;
  }
  
  /* Change color of dropdown links on hover */
  .dropdown-content a:hover {background-color: #f1f1f1}
  
  /* Show the dropdown menu on hover */
  .dropdown:hover .dropdown-content {
    display: block;
  }
  
  /* Change the background color of the dropdown button when the dropdown content is shown */
  .dropdown:hover .dropbtn {
    background-color: #3e8e41;
  }
  
  .drop:hover{
    badkgorund-color:blue;
  }
  </style>