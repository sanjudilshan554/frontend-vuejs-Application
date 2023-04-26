<template scoped>
  <body style="background-color: rgba(0, 0, 0, 0.85)">
    <div class="back">
      <div class="content">
        <div class="grid">
          <div class="block">
            <figure class="effect-milo">
              <img
                src="@/assets/logincover1.jpg"
                alt="img13"
                class="img-size"
              />
              <figcaption>
                <h2>.<span>Student</span></h2>
                <p
                  style="
                    color: white;
                    font-size: 1em;
                    text-shadow: 5px 5px 5px 5px black;
                  "
                >
                  Select this slide to log in or sign up login as a Student
                </p>
                <router-link to="/Login"></router-link>
              </figcaption>
            </figure>
          </div>

          <figure class="effect-milo">
            <img src="@/assets/logincover4.jpg" alt="img13" class="img-size" />
            <figcaption>
              <h2>.<span>Lecture</span></h2>
              <p
                style="
                  color: white;
                  font-size: 1em;
                  text-shadow: 2px 4px 1px rgba(46, 91, 173, 0.6);
                "
              >
                Select this slide to log in or sign up login as a Lecturer
              </p>
              <router-link to="/Login/Lecture"></router-link>
            </figcaption>
          </figure>
        </div>
      </div>
    </div>
  </body>
</template>

<style scoped>
.img-size {
  width: 90vw;
  height: 50vw;
  object-fit: cover;
}

.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}

.clearfix:after {
  clear: both;
}

.content > h2:first-child {
  padding-top: 0em;
}

.grid figure {
  float: left;
  overflow: hidden;
  margin-top: 0px;
  padding-bottom: 0%;
  width: 50%;
  height: 50%;
  background: #d6e4e9;
  text-align: center;
  cursor: pointer;
}

.grid figure figcaption {
  padding: 2em;
  color: #f8f7f7;
  text-transform: uppercase;
  font-size: 1.25em;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
}

.grid figure figcaption,
.grid figure figcaption > a {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.grid figure figcaption > a {
  z-index: 1000;
  text-indent: 200%;
  white-space: nowrap;
  font-size: 0;
  opacity: 0;
}

.grid figure h2 {
  word-spacing: -0.15em;
  font-weight: 300;
}

.grid figure h2 span {
  font-weight: 800;
}

.grid figure h2,
.grid figure p {
  margin: 0;
}

.grid figure p {
  letter-spacing: 1px;
  font-size: 68.5%;
}

figure.effect-lily figcaption {
  text-align: left;
}

figure.effect-lily:hover p {
  -webkit-transition-delay: 0.05s;
  transition-delay: 0.05s;
  -webkit-transition-duration: 0.35s;
  transition-duration: 0.35s;
}

figure.effect-milo {
  background: none;
}

figure.effect-milo img {
  max-width: none;
  width: -webkit-calc(360% + 360px);
  width: calc(100% + 100px);
  opacity: 100;
  -webkit-transition: opacity 0.35s, -webkit-transform 0.35s;
  transition: opacity 0.35s, transform 0.35s;
  -webkit-transform: translate3d(-30px, 0, 0) scale(1.12);
  transform: translate3d(-30px, 0, 0) scale(1.12);
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
}

figure.effect-milo:hover img {
  opacity: 100;
  -webkit-transform: translate3d(0, 0, 0) scale(0);
  transform: translate3d(0, 0, 0) scale(1);
}

figure.effect-milo h2 {
  position: absolute;
  right: 0;
  bottom: 0;
  padding: 1em 1.2em;
}

figure.effect-milo p {
  padding: 0 0px 0 0;
  width: 50%;
  border-right: 1px solid #ffffff;
  text-align: right;
  opacity: 0;
  -webkit-transition: opacity 0.35s, -webkit-transform 0.35s;
  transition: opacity 0.35s, transform 0.35s;
  -webkit-transform: translate3d(-40px, 0, 0);
  transform: translate3d(-40px, 0, 0);
}

figure.effect-milo:hover p {
  opacity: 100;
  -webkit-transform: translate3d(0, 0, 0);
  transform: translate3d(0, 0, 0);
}
</style>

<script></script>
