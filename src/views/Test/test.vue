<template>
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
            <span class="w3-padding w3-black w3-opacity-min"><b>KUPPI</b></span>
            <span class="w3-hide-small w3-text-light-grey">Conductor</span>
          </h1>
        </div>
      </header>
      </nav>

      
      </body>
</template>
<script>
</script>
<style scoped>
body {
  background-color: aqua;
}


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


</style>
