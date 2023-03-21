<template>
  <nav class="bg-dark navbar-dark">
    <div class="container">
      <div class="text">
        <a href="" class="navbar-brand" style="color: gray; text-align: center"
          ><i class="fas fa-tree mr-2"></i>Learning area for all users</a
        >
      </div>
    </div>
  </nav>
  <section id="header" class="jumbotron text-center">
    <br />
    <div class="imporve">
      <div class="textt">
        <h1 class="display-3">LEARN +</h1>
      </div>
      <br />
      <div class="dc">
        <p class="lead">Learning Today ... Leading Tommorrow.</p>
      </div>
    </div>
    <br />
  </section>

  <section id="gallery">
    <div class="dc2">
      <div class="container pt-0">
        <div class="row">
          <div class="col-lg-4" v-for="values in post_data" :key="values.id">
            <!-- <div class="card p-2 pt-2 pb-2 px-1 py-2" > -->
            <!-- <div class="card mt-2 mb-2 ml-2 mr-1 my-2 mx-2" > -->
            <div class="card p-2">
              <img
                :src="values.url"
                alt="no image"
                class="card-img-top"
              />
              <div class="card-body">
                <h5 class="card-title">{{values.title}}</h5>
                <p class="card-text">
                 {{values.description}}
                </p>
                <a href="" class="btn btn-outline-success btn-sm">Read More</a>
                <a href="" class="btn btn-outline-danger btn-sm"
                  ><i class="far fa-heart"></i
                ></a>
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
      post_data: [],
    };
  },

  created() {
    this.get_post_data();
  },

  methods: {
    get_post_data() {
      axios
        .get("http://127.0.0.1:8000/api/get-post")
        .then((response) => {
          if (response.status == 200) {
            this.post_data = response.data.post_data;
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
.text {
  color: black;
  font-family: "Accidental Presidency";
  padding-top: 10px;
  background-position: center;
  text-align: center;
}

#header {
  background: url("@/assets/learn.jpg") center center / cover no-repeat;
}

.imporve {
  color: aliceblue;
}

.dc {
  text-align: center;
  color: rgb(239, 229, 229);
  padding-left: 0%;
}

.dc1 {
  padding-top: 0%;
}

.dc2 {
  padding-bottom: 0%;
  padding-top: 0%;
}
</style>
