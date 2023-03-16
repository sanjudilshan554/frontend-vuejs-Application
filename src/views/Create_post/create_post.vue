<template>
  <nav class="bg-dark navbar-dark">
    <div class="container">
      <div class="text pt-2 p-2">
      <a href="" class="navbar-brand" style="color:gray;text-align:center;" ><i class="fas fa-tree mr-2"></i>Post your creative idea</a>
    </div>
    </div>
    </nav>
     <section id="header_create_post" class="jumbotron text-center">
      <br>
      <div class="imporve">
        <div class="textt">
       <h1 class="display-3">Create Post</h1>
        </div>
       <br>
       <div class="dcc">
       <p class="lead" >Embark on a voyage of learning</p>
      </div>
      </div>
       <br>
  </section>


  <div class="container">
    <div class="row justify-content-center">
      <div class="col-md-11">
        <div class="card">
          
          <div class="card-body">
            <div v-if="success != ''" class="alert alert-success" role="alert">
              {{ success }}
            </div>
            <form @submit="formSubmit" enctype="multipart/form-data">
              
              <strong>Title:</strong>
              <input type="text" class="form-control" v-model="title" />

              <strong>Description:</strong>
              <textarea rows="4" class="form-control" v-model="description" />
              <strong>Image:</strong>

              <input
                type="file"
                class="form-control"
                v-on:change="onImageChange"
                ref="fileInput"
                @input="pickFile"
                />

                <!-- display image -->
                
              <div class="hello">
              
            </div>

            <div class="button">
              <input type="submit" class="btn btn-success">
            </div>
             
            <div class="imagePreviewWrapper" :style="{ 'background-image': `url(${previewImage})` }" @click="selectImage">
            </div>
          </form>
        </div>
       </div>
      </div>
    </div>

  </div>
</template>

<script>
import axios from "axios";
export default {
  mounted() {
    console.log("Component mounted.");
  },
  data() {
    return {
      title:"",
      description: "",
      image: "",
      success: "",
      previewImage: null
    };
  },
  methods: {
    onImageChange(e) {
      console.log(e.target.files[0]);
      this.image = e.target.files[0];
    },
    formSubmit(e) {
      e.preventDefault();
      let currentObj = this;

      const config = {
        headers: { "content-type": "multipart/form-data" },
      };

      let formData = new FormData();
      formData.append("image", this.image);
      formData.append('description',this.description);
      formData.append('title',this.title);

      axios
        .post("http://127.0.0.1:8000/api/formSubmit", formData, config)
        .then(function (response) {
          currentObj.success = response.data.success;
        })
        .catch(function (error) {
          currentObj.output = error;
        });
    },


    selectImage () {
          this.$refs.fileInput.click()
      },
      pickFile () {
        let input = this.$refs.fileInput
        let file = input.files
        if (file && file[0]) {
          let reader = new FileReader
          reader.onload = e => {
            this.previewImage = e.target.result
          }
          reader.readAsDataURL(file[0])
          this.$emit('input', file[0])
        }
      }


  },
};
</script>

<style scope>
.imagePreviewWrapper {
    
    padding:150px;
    width: 500px;
    height: 150px;
    display: block;
    cursor: pointer;
    margin: 12 auto 30px;
    background-size: cover;
    background-position: center center;
      
}
.button{
    margin-left: 90%;
    margin-top:5%
}

.td{
  color:aliceblue;
  padding-left: 0%;
  text-align: center;
}
.dc{
  color:azure;
  text-align: center;
  
}
.textt{
  text-align: center;
  color:rgb(255, 255, 255);
}
#header_create_post {
  background: url('@/assets/learn.jpg') center center / cover no-repeat ;
}

.containers {
  font-family: arial;


  width: 350px;
  height: 2000px;

  /* Setup */
  position: relative;
}

.childs {
  width: 1600px;
  height: 90px;
  /* Center vertically and horizontally */
  position: absolute;

  left: 10%;
  transform: translate(+1%, +50%);
}


</style>