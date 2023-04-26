<script>
import header from "@/views/header.vue";
import sidebar from "@/components/sidebar.vue";
import axios from "axios";
export default {
  components: {
    header,
    sidebar,
  },

  data() {
    return {
      form: {
        totalKuppi: "",
        totalRevision: "",
        totalKuppiAccept: "",
        totalRevisonAccept: "",

        totalPost: "",
        totalStudents: "",
        totalLecture: "",
        totalAdmins: "",

        subject: "",
        software: "",
        work_exp: "",
        edu_qulification: "",

        kuppitable: [],
        revisiontable: [],
        kuppiAcceptTable: [],
        revisoinAcceptTable: [],
        studentTable: [],
        lectureTable: [],
        postTable: [],
        subjectTable: [],
        softwareTable: [],
        work_expTable: [],
        edu_qulificationTable: [],
      },

      postDetails: {
        postId: "",
        title: "",
        url: "",
        description: "",
        registrations_id: "",
        created_at: "",
        updated_at: "",
      },
    };
  },

  methods: {
    updatePostTable(values) {
      this.postDetails.postId = values.id;
      this.postDetails.title = values.title;
      this.postDetails.url = values.url;
      this.postDetails.description = values.description;
      this.postDetails.registrations_id = values.registrations_id;
      this.postDetails.created_at = values.created_at;
      this.postDetails.updated_at = values.updated_at;

      axios
        .post("http://127.0.0.1:8000/api/updatePostTable", this.postDetails)
        .then((response) => {
          if (response.status == "200") {
            alert(response.message);
          }
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },

  mounted() {
    axios
      .get("http://127.0.0.1:8000/api/getTotalkuppiCount")
      .then((response) => {
        if (response.status == "200") {
          this.form.totalKuppi = response.data.kuppiTotal;
          this.form.totalRevision = response.data.revisionTotal;
          this.form.totalKuppiAccept = response.data.kuppiAcceptTotal;

          this.form.totalRevisonAccept = response.data.revisoinAcceptTotal;
          this.form.totalPost = response.data.postTotal;
          this.form.totalStudents = response.data.studentTotal;
          this.form.totalLecture = response.data.lectureTotal;

          this.form.subject = response.data.subject;
          this.form.software = response.data.software;
          this.form.work_exp = response.data.work_exp;
          this.form.edu_qulification = response.data.edu_qulification;
        }
      })
      .catch((error) => {
        console.log(error);
      });

    axios
      .get("http://127.0.0.1:8000/api/getTableDetails")
      .then((response) => {
        // alert("ok");

        this.form.postId = response.data.postTable.id;

        this.form.kuppitable = response.data.kuppitable;
        this.form.revisiontable = response.data.revisiontable;
        this.form.kuppiAcceptTable = response.data.kuppiAcceptTable;

        this.form.revisoinAcceptTable = response.data.revisoinAcceptTable;
        this.form.postTable = response.data.postTable;
        this.form.studentTable = response.data.studentTable;
        this.form.lectureTable = response.data.lectureTable;

        this.form.subjectTable = response.data.subjectTable;
        this.form.softwareTable = response.data.softwareTable;
        this.form.work_expTable = response.data.work_expTable;
        this.form.edu_qulificationTable = response.data.edu_qulificationTable;
      })
      .catch((error) => {
        console.log(error);
      });
  },
};
</script>

<template>
  <!DOCTYPE html>
  <!-- Designined by CodingLab | www.youtube.com/codinglabyt -->
  <html lang="en" dir="ltr">
    <head>
      <meta charset="UTF-8" />
      <!--<title> Responsiive Admin Dashboard | CodingLab </title>-->
      <link rel="stylesheet" href="style.css" />
      <!-- Boxicons CDN Link -->
      <link
        href="https://unpkg.com/boxicons@2.0.7/css/boxicons.min.css"
        rel="stylesheet"
      />

      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    </head>
    <body>
      <sidebar />
      <section class="home-section">
        <nav>
          <div class="sidebar-button">
            <i class="bx bx-menu sidebarBtn"></i>
            <span class="dashboard">Kuppi Conductor Main Administration</span>
          </div>
        </nav>

        <div class="home-content">
          <div class="overview-boxes">
            <div class="box">
              <div class="right-side">
                <div class="box-topic">Total Kuppi's</div>
                <div class="number">{{ form.totalKuppi }}</div>
                <div class="indicator">
                  <i class="bx bx-up-arrow-alt"></i>
                  <span class="text">Up from yesterday</span>
                </div>
              </div>
            </div>
            <div class="box">
              <div class="right-side">
                <div class="box-topic">Total Revision's</div>
                <div class="number">{{ form.totalRevision }}</div>
                <div class="indicator">
                  <i class="bx bx-up-arrow-alt"></i>
                  <span class="text">Up from yesterday</span>
                </div>
              </div>
            </div>
            <div class="box">
              <div class="right-side">
                <div class="box-topic">Total Accept (K)</div>
                <div class="number">{{ form.totalKuppiAccept }}</div>
                <div class="indicator">
                  <i class="bx bx-up-arrow-alt"></i>
                  <span class="text">Up from yesterday</span>
                </div>
              </div>
            </div>
            <div class="box">
              <div class="right-side">
                <div class="box-topic">Total Accept (R)</div>
                <div class="number">{{ form.totalRevisonAccept }}</div>
                <div class="indicator">
                  <i class="bx bx-down-arrow-alt down"></i>
                  <span class="text">Down From Today</span>
                </div>
              </div>
            </div>
          </div>

          <div class="overview-boxes">
            <div class="box">
              <div class="right-side">
                <div class="box-topic">Total Post's</div>
                <div class="number">{{ form.totalPost }}</div>
                <div class="indicator">
                  <i class="bx bx-up-arrow-alt"></i>
                  <span class="text">Up from yesterday</span>
                </div>
              </div>
            </div>
            <div class="box">
              <div class="right-side">
                <div class="box-topic">Total Students</div>
                <div class="number">{{ form.totalStudents }}</div>
                <div class="indicator">
                  <i class="bx bx-up-arrow-alt"></i>
                  <span class="text">Up from yesterday</span>
                </div>
              </div>
            </div>
            <div class="box">
              <div class="right-side">
                <div class="box-topic">Total Lectures</div>
                <div class="number">{{ form.totalLecture }}</div>
                <div class="indicator">
                  <i class="bx bx-up-arrow-alt"></i>
                  <span class="text">Up from yesterday</span>
                </div>
              </div>
            </div>
            <div class="box">
              <div class="right-side">
                <div class="box-topic">Total Admins</div>
                <div class="number">3</div>
                <div class="indicator">
                  <i class="bx bx-down-arrow-alt down"></i>
                  <span class="text">Down From Today</span>
                </div>
              </div>
            </div>
          </div>

          <div class="overview-boxes">
            <div class="box">
              <div class="right-side">
                <div class="box-topic">Total Incertion Subject's</div>
                <div class="number">{{ form.subject }}</div>
                <div class="indicator">
                  <i class="bx bx-up-arrow-alt"></i>
                  <span class="text">Up from yesterday</span>
                </div>
              </div>
            </div>
            <div class="box">
              <div class="right-side">
                <div class="box-topic">Total Incertion Softwares</div>
                <div class="number">{{ form.software }}</div>
                <div class="indicator">
                  <i class="bx bx-up-arrow-alt"></i>
                  <span class="text">Up from yesterday</span>
                </div>
              </div>
            </div>
            <div class="box">
              <div class="right-side">
                <div class="box-topic">Total Incertion Work exps</div>
                <div class="number">{{ form.work_exp }}</div>
                <div class="indicator">
                  <i class="bx bx-up-arrow-alt"></i>
                  <span class="text">Up from yesterday</span>
                </div>
              </div>
            </div>
            <div class="box">
              <div class="right-side">
                <div class="box-topic">Total Incertion Edu qualification</div>
                <div class="number">{{ form.edu_qulification }}</div>
                <div class="indicator">
                  <i class="bx bx-down-arrow-alt down"></i>
                  <span class="text">Down From Today</span>
                </div>
              </div>
            </div>
          </div>

          <div class="card mb-5 m-4">
            <div class="table-content">
              <lable>Students</lable>
            </div>

            <div class="table-wrapper-scroll-y my-custom-scrollbar">
              <table class="table table-bordered table-striped mb-0">
                <thead>
                  <tr>
                    <th scope="col">Id</th>
                    <th scope="col">Fname</th>
                    <th scope="col">Lname</th>
                    <th scope="col">Age</th>
                    <th scope="col">WorkinPlace</th>
                    <th scope="col">School</th>
                    <th scope="col">Email</th>
                    <th scope="col">Address</th>
                    <th scope="col">Postel Code</th>
                    <th scope="col">City</th>
                    <th scope="col">Province</th>
                    <th scope="col">District</th>
                    <th scope="col">Country</th>
                    <th scope="col">Gender</th>
                    <th scope="col">MobNo</th>
                    <th scope="col">CurrentDegree</th>
                    <th scope="col">Current year</th>
                    <th scope="col">SpKnowledge</th>
                    <th scope="col">Ed Quealification</th>
                    <th scope="col">Fam Soft</th>
                    <th scope="col">Subject Know</th>
                    <th scope="col">Certification</th>
                    <th scope="col">UNVREGNo</th>
                    <th scope="col">Password</th>
                    <th scope="col">Role</th>
                    <th scope="col">Created At</th>
                    <th scope="col">Updated At</th>
                    <th scope="col">Update</th>
                    <th scope="col">Delete</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="values in form.studentTable" :key="values.id">
                    <!--  -->
                    <th scope="row">{{ values.id }}</th>

                    <td>
                      <input
                        type="text"
                        :value="values.fname"
                        placeholder="Text"
                      />
                    </td>
                    <td>
                      <input
                        type="text"
                        :value="values.lname"
                        placeholder="Text"
                      />
                    </td>
                    <td>
                      <input
                        type="text"
                        :value="values.age"
                        placeholder="Text"
                      />
                    </td>

                    <td>
                      <input
                        type="text"
                        :value="values.workingPlace"
                        placeholder="Text"
                      />
                    </td>
                    <td>
                      <input
                        type="text"
                        :value="values.school"
                        placeholder="Text"
                      />
                    </td>
                    <td>
                      <input
                        type="text"
                        :value="values.email"
                        placeholder="Text"
                      />
                    </td>

                    <td>
                      <input
                        type="text"
                        :value="values.address"
                        placeholder="Text"
                      />
                    </td>
                    <td>
                      <input
                        type="text"
                        :value="values.postelcode"
                        placeholder="Text"
                      />
                    </td>
                    <td>
                      <input
                        type="text"
                        :value="values.city"
                        placeholder="Text"
                      />
                    </td>

                    <td>
                      <input
                        type="text"
                        :value="values.Province"
                        placeholder="Text"
                      />
                    </td>
                    <td>
                      <input
                        type="text"
                        :value="values.District"
                        placeholder="Text"
                      />
                    </td>
                    <td>
                      <input
                        type="text"
                        :value="values.country"
                        placeholder="Text"
                      />
                    </td>
                    <td>
                      <input
                        type="text"
                        :value="values.gender"
                        placeholder="Text"
                      />f
                    </td>
                    <td>
                      <input
                        type="text"
                        :value="values.mobNo"
                        placeholder="Text"
                      />
                    </td>
                    <td>
                      <input
                        type="text"
                        :value="values.currentDegree"
                        placeholder="Text"
                      />
                    </td>
                    <td>
                      <input
                        type="text"
                        :value="values.currentYear"
                        placeholder="Text"
                      />
                    </td>
                    <td>
                      <input
                        type="text"
                        :value="values.SpKnowledge"
                        placeholder="Text"
                      />
                    </td>
                    <td>
                      <input
                        type="text"
                        :value="values.EdQualification"
                        placeholder="Text"
                      />
                    </td>
                    <td>
                      <input
                        type="text"
                        :value="values.FamSoftware"
                        placeholder="Text"
                      />f
                    </td>
                    <td>
                      <input
                        type="text"
                        :value="values.SubjectKnow"
                        placeholder="Text"
                      />
                    </td>
                    <td>
                      <input
                        type="text"
                        :value="values.Certification"
                        placeholder="Text"
                      />
                    </td>
                    <td>
                      <input
                        type="text"
                        :value="values.unvRegNo"
                        placeholder="Text"
                      />
                    </td>
                    <td>
                      <input
                        type="text"
                        :value="values.password"
                        placeholder="Text"
                      />
                    </td>
                    <td>
                      <input
                        type="text"
                        :value="values.role"
                        placeholder="Text"
                      />
                    </td>
                    <td>
                      <input
                        type="text"
                        :value="values.created_at"
                        placeholder="Text"
                      />
                    </td>
                    <td>
                      <input
                        type="text"
                        :value="values.updated_at"
                        placeholder="Text"
                      />
                    </td>
                    <td><button class="btn btn-primary">Update</button></td>
                    <td><button class="btn btn-danger">Delete</button></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div class="card mb-5 m-4">
            <div class="table-content">
              <lable>Lectures</lable>
            </div>

            <div class="table-wrapper-scroll-y my-custom-scrollbar">
              <table class="table table-bordered table-striped mb-0">
                <thead>
                  <tr>
                    <th scope="col">Id</th>
                    <th scope="col">Fname</th>
                    <th scope="col">Lname</th>
                    <th scope="col">Age</th>
                    <th scope="col">Address</th>
                    <th scope="col">PostelCode</th>
                    <th scope="col">City</th>
                    <th scope="col">Province</th>
                    <th scope="col">District</th>
                    <th scope="col">Country</th>
                    <th scope="col">1st yearSub</th>
                    <th scope="col">2st yearSub</th>
                    <th scope="col">3st yearSub</th>
                    <th scope="col">4st yearSub</th>
                    <th scope="col">Edu Qualification</th>
                    <th scope="col">Mob Nubmer</th>
                    <th scope="col">Gender</th>
                    <th scope="col">Email</th>
                    <th scope="col">EmpNo</th>
                    <th scope="col">Password</th>
                    <th scope="col">Role</th>
                    <th scope="col">Created At</th>
                    <th scope="col">Updated At</th>
                    <th scope="col">Update</th>
                    <th scope="col">Delete</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="values in form.lectureTable" :key="values.id">
                    <th scope="row">{{ values.id }}</th>

                    <td>
                      <input
                        type="text"
                        :value="values.fname"
                        placeholder="Text"
                      />
                    </td>
                    <td>
                      <input
                        type="text"
                        :value="values.lname"
                        placeholder="Text"
                      />
                    </td>
                    <td>
                      <input
                        type="text"
                        :value="values.address"
                        placeholder="Text"
                      />
                    </td>
                    <td>
                      <input
                        type="text"
                        :value="values.age"
                        placeholder="Text"
                      />
                    </td>
                    <td>
                      <input
                        type="text"
                        :value="values.postelCode"
                        placeholder="Text"
                      />
                    </td>
                    <td>
                      <input
                        type="text"
                        :value="values.city"
                        placeholder="Text"
                      />
                    </td>
                    <td>
                      <input
                        type="text"
                        :value="values.province"
                        placeholder="Text"
                      />
                    </td>

                    <td>
                      <input
                        type="text"
                        :value="values.district"
                        placeholder="Text"
                      />
                    </td>
                    <td>
                      <input
                        type="text"
                        :value="values.country"
                        placeholder="Text"
                      />
                    </td>
                    <td>
                      <input
                        type="text"
                        :value="values.styrsub"
                        placeholder="Text"
                      />
                    </td>

                    <td>
                      <input
                        type="text"
                        :value="values.styrsub"
                        placeholder="Text"
                      />
                    </td>
                    <td>
                      <input
                        type="text"
                        :value="values.fname"
                        placeholder="Text"
                      />Test
                    </td>
                    <td>
                      <input
                        type="text"
                        :value="values.fname"
                        placeholder="Text"
                      />Test
                    </td>
                    <td>
                      <input
                        type="text"
                        :value="values.EduQualification"
                        placeholder="Text"
                      />
                    </td>
                    <td>
                      <input
                        type="text"
                        :value="values.mobNumber"
                        placeholder="Text"
                      />
                    </td>
                    <td>
                      <input
                        type="text"
                        :value="values.gender"
                        placeholder="Text"
                      />
                    </td>
                    <td>
                      <input
                        type="text"
                        :value="values.email"
                        placeholder="Text"
                      />
                    </td>
                    <td>
                      <input
                        type="text"
                        :value="values.empNo"
                        placeholder="Text"
                      />
                    </td>
                    <td>
                      <input
                        type="text"
                        :value="values.password"
                        placeholder="Text"
                      />
                    </td>
                    <td>
                      <input
                        type="text"
                        :value="values.role"
                        placeholder="Text"
                      />
                    </td>
                    <td>
                      <input
                        type="text"
                        :value="values.created_at"
                        placeholder="Text"
                      />
                    </td>
                    <td>
                      <input
                        type="text"
                        :value="values.updated_at"
                        placeholder="Text"
                      />
                    </td>

                    <td><button class="btn btn-primary">Update</button></td>
                    <td><button class="btn btn-danger">Delete</button></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div class="card mb-5 m-4">
            <div class="table-content">
              <lable>Admins</lable>
            </div>
            <div class="table-wrapper-scroll-y my-custom-scrollbar">
              <table class="table table-bordered table-striped mb-0">
                <thead>
                  <tr>
                    <th scope="col">Id</th>
                    <th scope="col">Priority</th>
                    <th scope="col">Name</th>
                    <th scope="col">Access</th>
                    <th scope="col">Update</th>
                    <th scope="col">Delete</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>ID</td>
                    <td><input type="text" placeholder="Text" /></td>
                    <td><input type="text" placeholder="Text" /></td>
                    <td><input type="text" placeholder="Text" /></td>
                    <td><button class="btn btn-primary">Update</button></td>
                    <td><button class="btn btn-danger">Delete</button></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div class="sales-boxes">
            <div class="recent-sales box">
              <div class="table-content">
                <lable>Posts</lable>
              </div>
              <div class="table-wrapper-scroll-y my-custom-scrollbar">
                <table class="table table-bordered table-striped mb-0">
                  <thead>
                    <tr>
                      <th scope="col">Id</th>
                      <th scope="col">Title</th>
                      <th scope="col">Url</th>
                      <th scope="col">Description</th>
                      <th scope="col">Registration id</th>
                      <th scope="col">Created id</th>
                      <th scope="col">Updated id</th>
                      <th scope="col">Update</th>
                      <th scope="col">Delete</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="values in form.postTable" :key="values.id">
                      <td>{{ values.id }}</td>
                      <td>
                        <input
                          type="text"
                          placeholder="Text"
                          :value="values.title"
                        />
                      </td>
                      <td>
                        <input
                          type="text"
                          placeholder="Text"
                          :value="values.url"
                        />
                      </td>
                      <td>
                        <input
                          type="text"
                          placeholder="Text"
                          :value="values.description"
                        />
                      </td>
                      <td>
                        <input
                          type="text"
                          placeholder="Text"
                          :value="values.registrations_id"
                        />
                      </td>
                      <td>
                        <input
                          type="text"
                          placeholder="Text"
                          :value="values.created_at"
                        />
                      </td>
                      <td>
                        <input
                          type="text"
                          placeholder="Text"
                          :value="values.updated_at"
                        />
                      </td>
                      <td>
                        <button
                          class="btn btn-primary"
                          @click="updatePostTable(values)"
                        >
                          Update
                        </button>
                      </td>
                      <td><button class="btn btn-danger">Delete</button></td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <!-- 
              <div class="button">
                <a href="#">See All</a>
              </div> -->
            </div>
            <div class="top-sales box text-center p-2">
              <div class="title p-2">Posts</div>

              <div
                class="table-wrapper-scroll-y my-custom-scrollbar text-center p-2 pb-2"
              >
                <div
                  class="card"
                  style="width: 18rem"
                  v-for="values in form.postTable"
                  :key="values.id"
                >
                  <img
                    class="card-img-top"
                    :src="values.url"
                    alt="Card image cap"
                  />
                  <div class="card-body">
                    <h5 class="card-title">{{ values.title }}</h5>
                    <p class="card-text">
                      {{ values.description }}
                    </p>
                    <a class="btn btn-danger">Delete Post</a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="cd" style="padding-top: 3vh">
            <div class="card mb-5 m-4" style="width: 80vh; float: left">
              <div class="table-content">
                <lable>Subject Update</lable>
              </div>

              <div class="table-wrapper-scroll-y my-custom-scrollbar">
                <table class="table table-bordered table-striped mb-0">
                  <thead>
                    <tr>
                      <th scope="col">Id</th>
                      <th scope="col">Registration Id</th>
                      <th scope="col">Lecture Regs Id</th>
                      <th scope="col">Selection one year</th>
                      <th scope="col">Selection one Semester</th>
                      <th scope="col">Selection one Subject</th>
                      <th scope="col">Selection one Rating</th>

                      <th scope="col">Selection two year</th>
                      <th scope="col">Selection two Semester</th>
                      <th scope="col">Selection two Subject</th>
                      <th scope="col">Selection two Rating</th>

                      <th scope="col">Selection three year</th>
                      <th scope="col">Selection three Semester</th>
                      <th scope="col">Selection three Subject</th>
                      <th scope="col">Selection three Rating</th>

                      <th scope="col">Selection four year</th>
                      <th scope="col">Selection four Semester</th>
                      <th scope="col">Selection four Subject</th>
                      <th scope="col">Selection four Rating</th>
                      <th scope="col">Created at</th>
                      <th scope="col">Updated at</th>
                      <th scope="col">Update</th>
                      <th scope="col">Delete</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="values in form.subjectTable" :key="values.id">
                      <th scope="row">{{ values.id }}</th>

                      <td>
                        <input
                          type="text"
                          placeholder="Text"
                          :value="values.registrations_id"
                        />
                      </td>
                      <td>
                        <input
                          type="text"
                          placeholder="Text"
                          :value="values.lecture_regs_ids"
                        />
                      </td>
                      <td>
                        <input
                          type="text"
                          placeholder="Text"
                          :value="values.year.year1"
                        />
                      </td>
                      <td>
                        <input
                          type="text"
                          placeholder="Text"
                          :value="values.semester.sse1"
                        />
                      </td>
                      <td>
                        <input
                          type="text"
                          placeholder="Text"
                          :value="values.subject.ssa1"
                        />
                      </td>

                      <td>
                        <input
                          type="text"
                          placeholder="Text"
                          :value="values.rating.sr1"
                        />
                      </td>

                      <td>
                        <input
                          type="text"
                          placeholder="Text"
                          :value="values.year.year2"
                        />
                      </td>
                      <td>
                        <input
                          type="text"
                          placeholder="Text"
                          :value="values.semester.sse2"
                        />
                      </td>
                      <td>
                        <input
                          type="text"
                          placeholder="Text"
                          :value="values.subject.ssa2"
                        />
                      </td>

                      <td>
                        <input
                          type="text"
                          placeholder="Text"
                          :value="values.rating.sr2"
                        />
                      </td>

                      <td>
                        <input
                          type="text"
                          placeholder="Text"
                          :value="values.year.year3"
                        />
                      </td>
                      <td>
                        <input
                          type="text"
                          placeholder="Text"
                          :value="values.semester.sse3"
                        />
                      </td>
                      <td>
                        <input
                          type="text"
                          placeholder="Text"
                          :value="values.subject.ssa3"
                        />
                      </td>

                      <td>
                        <input
                          type="text"
                          placeholder="Text"
                          :value="values.rating.sr3"
                        />
                      </td>

                      <td>
                        <input
                          type="text"
                          placeholder="Text"
                          :value="values.year.year4"
                        />
                      </td>
                      <td>
                        <input type="text" placeholder="Text" :value="1" />
                      </td>
                      <td>
                        <input
                          type="text"
                          placeholder="Text"
                          :value="values.subject.ssa4"
                        />
                      </td>

                      <td>
                        <input
                          type="text"
                          placeholder="Text"
                          :value="values.rating.sr4"
                        />
                      </td>

                      <td>
                        <input
                          type="text"
                          placeholder="Text"
                          :value="values.created_at"
                        />
                      </td>
                      <td>
                        <input
                          type="text"
                          placeholder="Text"
                          :value="values.updated_at"
                        />
                      </td>

                      <td><button class="btn btn-primary">Update</button></td>
                      <td><button class="btn btn-danger">Delete</button></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div class="card mb-5 m-4" style="width: 80vh; float: left">
              <div class="table-content">
                <lable>Work Experience</lable>
              </div>

              <div class="table-wrapper-scroll-y my-custom-scrollbar">
                <table class="table table-bordered table-striped mb-0">
                  <thead>
                    <tr>
                      <th scope="col">Id</th>
                      <th scope="col">If Student Registrtion id</th>
                      <th scope="col">If Lecture Lecture id</th>
                      <th scope="col">Name one</th>
                      <th scope="col">Date from one</th>
                      <th scope="col">Date to one</th>

                      <th scope="col">Name two</th>
                      <th scope="col">Date from two</th>
                      <th scope="col">Date to two</th>

                      <th scope="col">Name three</th>
                      <th scope="col">Date from three</th>
                      <th scope="col">Date to three</th>

                      <th scope="col">Date From</th>
                      <th scope="col">Date To</th>
                      <th scope="col">Description</th>
                      <th scope="col">Created at</th>
                      <th scope="col">Updated at</th>
                      <th scope="col">Update</th>
                      <th scope="col">Delete</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="values in form.work_expTable" :key="values.id">
                      <th scope="row">{{ values.id }}</th>

                      <td>
                        <input
                          type="text"
                          placeholder="Text"
                          :value="values.registrations_id"
                        />
                      </td>
                      <td>
                        <input
                          type="text"
                          placeholder="Text"
                          :value="values.lecture_regs_id"
                        />
                      </td>

                      <td>
                        <input
                          type="text"
                          placeholder="Text"
                          :value="values.name.n1"
                        />
                      </td>
                      <td>
                        <input
                          type="text"
                          placeholder="Text"
                          :value="values.datefrom.date_one_of_three"
                        />
                      </td>
                      <td>
                        <input
                          type="text"
                          placeholder="Text"
                          :value="values.dateto.date_one_of_three"
                        />
                      </td>
                      <td>
                        <input
                          type="text"
                          placeholder="Text"
                          :value="values.Description.d1"
                        />
                      </td>

                      <td>
                        <input
                          type="text"
                          placeholder="Text"
                          :value="values.name.n2"
                        />
                      </td>
                      <td>
                        <input
                          type="text"
                          placeholder="Text"
                          :value="values.datefrom.date_two_of_three"
                        />
                      </td>
                      <td>
                        <input
                          type="text"
                          placeholder="Text"
                          :value="values.dateto.date_two_of_three"
                        />
                      </td>
                      <td>
                        <input
                          type="text"
                          placeholder="Text"
                          :value="values.Description.d2"
                        />
                      </td>

                      <td>
                        <input
                          type="text"
                          placeholder="Text"
                          :value="values.name.n3"
                        />
                      </td>
                      <td>
                        <input
                          type="text"
                          placeholder="Text"
                          :value="values.datefrom.date_three_of_three"
                        />
                      </td>
                      <td>
                        <input
                          type="text"
                          placeholder="Text"
                          :value="values.dateto.date_three_of_three"
                        />
                      </td>
                      <td>
                        <input
                          type="text"
                          placeholder="Text"
                          :value="values.Description.d3"
                        />
                      </td>

                      <td>
                        <input
                          type="text"
                          placeholder="Text"
                          :value="values.created_at"
                        />
                      </td>
                      <td>
                        <input
                          type="text"
                          placeholder="Text"
                          :value="values.updated_at"
                        />
                      </td>
                      <td><button class="btn btn-primary">Update</button></td>
                      <td><button class="btn btn-danger">Delete</button></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          <div class="cd">
            <div class="card mb-5 m-4 pt" style="width: 80vh; float: left">
              <div class="table-content">
                <lable>Equcation Qualifications</lable>
              </div>

              <div class="table-wrapper-scroll-y my-custom-scrollbar">
                <table class="table table-bordered table-striped mb-0">
                  <thead>
                    <tr>
                      <th scope="col">Id</th>
                      <th scope="col">If Student Reg Id</th>
                      <th scope="col">If Lecture Reg Id</th>

                      <th scope="col">Name one</th>
                      <th scope="col">Date from one</th>
                      <th scope="col">Date to one</th>
                      <th scope="col">Description</th>

                      <th scope="col">Name two</th>
                      <th scope="col">Date from two</th>
                      <th scope="col">Date to two</th>
                      <th scope="col">Description two</th>

                      <th scope="col">Name three</th>
                      <th scope="col">Date from three</th>
                      <th scope="col">Date to three</th>
                      <th scope="col">Description three</th>

                      <th scope="col">Created at</th>
                      <th scope="col">Updated at</th>

                      <th scope="col">Update</th>
                      <th scope="col">Delete</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr
                      v-for="values in form.edu_qulificationTable"
                      :key="values.id"
                    >
                      <th scope="row">{{ values.id }}</th>

                      <td>
                        <input
                          type="text"
                          placeholder="Text"
                          :value="values.registrations_id"
                        />
                      </td>
                      <td>
                        <input
                          type="text"
                          placeholder="Text"
                          :value="values.lecture_regs_id"
                        />
                      </td>

                      <td>
                        <input
                          type="text"
                          placeholder="Text"
                          :value="values.name.n1"
                        />
                      </td>

                      <td>
                        <input
                          type="text"
                          placeholder="Text"
                          :value="values.datefrom.date_one_of_three"
                        />
                      </td>
                      <td>
                        <input
                          type="text"
                          placeholder="Text"
                          :value="values.dateto.date_one_of_three"
                        />
                      </td>
                      <td>
                        <input
                          type="text"
                          placeholder="Text"
                          :value="values.description.d3"
                        />
                      </td>

                      <td>
                        <input
                          type="text"
                          placeholder="Text"
                          :value="values.name.n2"
                        />
                      </td>

                      <td>
                        <input
                          type="text"
                          placeholder="Text"
                          :value="values.datefrom.date_two_of_three"
                        />
                      </td>
                      <td>
                        <input
                          type="text"
                          placeholder="Text"
                          :value="values.dateto.date_two_of_three"
                        />
                      </td>
                      <td>
                        <input
                          type="text"
                          placeholder="Text"
                          :value="values.description.d2"
                        />
                      </td>

                      <td>
                        <input
                          type="text"
                          placeholder="Text"
                          :value="values.name.n3"
                        />
                      </td>

                      <td>
                        <input
                          type="text"
                          placeholder="Text"
                          :value="values.datefrom.date_three_of_three"
                        />
                      </td>
                      <td>
                        <input
                          type="text"
                          placeholder="Text"
                          :value="values.dateto.date_three_of_three"
                        />
                      </td>
                      <td>
                        <input
                          type="text"
                          placeholder="Text"
                          :value="values.description.d3"
                        />
                      </td>

                      <td><button class="btn btn-primary">Update</button></td>
                      <td><button class="btn btn-danger">Delete</button></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div class="card mb-5 m-4" style="width: 80vh; float: left">
              <div class="table-content">
                <lable>Softwares Fillers</lable>
              </div>

              <div class="table-wrapper-scroll-y my-custom-scrollbar">
                <table class="table table-bordered table-striped mb-0">
                  <thead>
                    <tr>
                      <th scope="col">Id</th>
                      <th scope="col">Registration Id</th>
                      <th scope="col">Lecture Id</th>
                      <th scope="col">Software 1</th>
                      <th scope="col">Software 1 rating</th>
                      <th scope="col">Software 2</th>
                      <th scope="col">Software 2 rating</th>
                      <th scope="col">Software 3</th>
                      <th scope="col">Software 3 rating</th>
                      <th scope="col">Software 4</th>
                      <th scope="col">Software 4 rating</th>
                      <th scope="col">Created at</th>
                      <th scope="col">Update at</th>
                      <th scope="col">Update</th>
                      <th scope="col">Delete</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="values in form.softwareTable" :key="values.id">
                      <th scope="row">{{ values.id }}</th>

                      <td>
                        <input
                          type="text"
                          placeholder="Text"
                          :value="values.Lecture_regs_id"
                        />
                      </td>
                      <td>
                        <input
                          type="text"
                          placeholder="Text"
                          :value="values.registrations_id"
                        />
                      </td>
                      <td>
                        <input
                          type="text"
                          placeholder="Text"
                          :value="values.software1"
                        />
                      </td>
                      <td>
                        <input
                          type="text"
                          placeholder="Text"
                          :value="values.rating.s1"
                        />
                      </td>
                      <td>
                        <input
                          type="text"
                          placeholder="Text"
                          :value="values.software2"
                        />
                      </td>
                      <td>
                        <input
                          type="text"
                          placeholder="Text"
                          :value="values.rating.s2"
                        />
                      </td>
                      <td>
                        <input
                          type="text"
                          placeholder="Text"
                          :value="values.software3"
                        />
                      </td>
                      <td>
                        <input
                          type="text"
                          placeholder="Text"
                          :value="values.rating.s3"
                        />
                      </td>
                      <td>
                        <input
                          type="text"
                          placeholder="Text"
                          :value="values.software4"
                        />
                      </td>
                      <td>
                        <input
                          type="text"
                          placeholder="Text"
                          :value="values.rating.s4"
                        />
                      </td>
                      <td>
                        <input
                          type="text"
                          placeholder="Text"
                          :value="values.created_at"
                        />
                      </td>
                      <td>
                        <input
                          type="text"
                          placeholder="Text"
                          :value="values.updated_at"
                        />
                      </td>
                      <td><button class="btn btn-primary">Update</button></td>
                      <td><button class="btn btn-danger">Delete</button></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>
    </body>
  </html>
</template>

<style>
/* Googlefont Poppins CDN Link */
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;500;600;700&display=swap");
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Poppins", sans-serif;
}
.sidebar {
  position: fixed;
  height: 100%;
  width: 240px;
  background: #0a2558;
  transition: all 0.5s ease;
}
.sidebar.active {
  width: 60px;
}
.sidebar .logo-details {
  height: 80px;
  display: flex;
  align-items: center;
}
.sidebar .logo-details i {
  font-size: 28px;
  font-weight: 500;
  color: #fff;
  min-width: 60px;
  text-align: center;
}
.sidebar .logo-details .logo_name {
  color: #fff;
  font-size: 25px;
  font-weight: 500;
}
.sidebar .logo-details .logo_name2 {
  color: #fff;
  font-size: 16px;
  font-weight: 500;
}

.sidebar .nav-links {
  margin-top: 10px;
}
.sidebar .nav-links li {
  position: relative;
  list-style: none;
  height: 50px;
}
.sidebar .nav-links li a {
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  text-decoration: none;
  transition: all 0.4s ease;
}
.sidebar .nav-links li a.active {
  background: #081d45;
}
.sidebar .nav-links li a:hover {
  background: #081d45;
}
.sidebar .nav-links li i {
  min-width: 60px;
  text-align: center;
  font-size: 18px;
  color: #fff;
}
.sidebar .nav-links li a .links_name {
  color: #fff;
  font-size: 15px;
  font-weight: 400;
  white-space: nowrap;
}
.sidebar .nav-links .log_out {
  position: absolute;
  bottom: 0;
  width: 100%;
}
.home-section {
  position: relative;
  background: #f5f5f5;
  min-height: 100vh;
  width: calc(100% - 240px);
  left: 240px;
  transition: all 0.5s ease;
}
.sidebar.active ~ .home-section {
  width: calc(100% - 60px);
  left: 60px;
}
.home-section nav {
  display: flex;
  justify-content: space-between;
  height: 80px;
  background: #fff;
  display: flex;
  align-items: center;
  position: fixed;
  width: calc(100% - 240px);
  left: 240px;
  z-index: 100;
  padding: 0 20px;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.1);
  transition: all 0.5s ease;
}
.sidebar.active ~ .home-section nav {
  left: 60px;
  width: calc(100% - 60px);
}
.home-section nav .sidebar-button {
  display: flex;
  align-items: center;
  font-size: 24px;
  font-weight: 500;
}
nav .sidebar-button i {
  font-size: 35px;
  margin-right: 10px;
}
.home-section nav .search-box {
  position: relative;
  height: 50px;
  max-width: 550px;
  width: 100%;
  margin: 0 20px;
}
nav .search-box input {
  height: 100%;
  width: 100%;
  outline: none;
  background: #f5f6fa;
  border: 2px solid #efeef1;
  border-radius: 6px;
  font-size: 18px;
  padding: 0 15px;
}
nav .search-box .bx-search {
  position: absolute;
  height: 40px;
  width: 40px;
  background: #2697ff;
  right: 5px;
  top: 50%;
  transform: translateY(-50%);
  border-radius: 4px;
  line-height: 40px;
  text-align: center;
  color: #fff;
  font-size: 22px;
  transition: all 0.4 ease;
}
.home-section nav .profile-details {
  display: flex;
  align-items: center;
  background: #f5f6fa;
  border: 2px solid #efeef1;
  border-radius: 6px;
  height: 50px;
  min-width: 190px;
  padding: 0 15px 0 2px;
}
nav .profile-details img {
  height: 40px;
  width: 40px;
  border-radius: 6px;
  object-fit: cover;
}
nav .profile-details .admin_name {
  font-size: 15px;
  font-weight: 500;
  color: #333;
  margin: 0 10px;
  white-space: nowrap;
}
nav .profile-details i {
  font-size: 25px;
  color: #333;
}
.home-section .home-content {
  position: relative;
  padding-top: 104px;
}
.home-content .overview-boxes {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  padding: 0 20px;
  margin-bottom: 26px;
}
.overview-boxes .box {
  display: flex;
  align-items: center;
  justify-content: center;
  width: calc(100% / 4 - 15px);
  background: #fff;
  padding: 15px 14px;
  border-radius: 12px;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);
}
.overview-boxes .box-topic {
  font-size: 20px;
  font-weight: 500;
}
.home-content .box .number {
  font-size: 35px;
  margin-top: -6px;
  font-weight: 500;
  text-align: center;
}
.home-content .box .indicator {
  display: flex;
  align-items: center;
}
.home-content .box .indicator i {
  height: 20px;
  width: 20px;
  background: #8fdacb;
  line-height: 20px;
  text-align: center;
  border-radius: 50%;
  color: #fff;
  font-size: 20px;
  margin-right: 5px;
}
.box .indicator i.down {
  background: #e87d88;
}
.home-content .box .indicator .text {
  font-size: 12px;
}
.home-content .box .cart {
  display: inline-block;
  font-size: 32px;
  height: 50px;
  width: 50px;
  background: #cce5ff;
  line-height: 50px;
  text-align: center;
  color: #66b0ff;
  border-radius: 12px;
  margin: -15px 0 0 6px;
}
.home-content .box .cart.two {
  color: #2bd47d;
  background: #c0f2d8;
}
.home-content .box .cart.three {
  color: #ffc233;
  background: #ffe8b3;
}
.home-content .box .cart.four {
  color: #e05260;
  background: #f7d4d7;
}
.home-content .total-order {
  font-size: 20px;
  font-weight: 500;
}
.home-content .sales-boxes {
  display: flex;
  justify-content: space-between;
  /* padding: 0 20px; */
}

/* left box */
.home-content .sales-boxes .recent-sales {
  width: 65%;
  background: #fff;
  padding: 20px 30px;
  margin: 0 20px;
  border-radius: 12px;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);
}
.home-content .sales-boxes .sales-details {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.sales-boxes .box .title {
  font-size: 24px;
  font-weight: 500;
  /* margin-bottom: 10px; */
}
.sales-boxes .sales-details li.topic {
  font-size: 20px;
  font-weight: 500;
}
.sales-boxes .sales-details li {
  list-style: none;
  margin: 8px 0;
}
.sales-boxes .sales-details li a {
  font-size: 18px;
  color: #333;
  font-size: 400;
  text-decoration: none;
}
.sales-boxes .box .button {
  width: 100%;
  display: flex;
  justify-content: flex-end;
}
.sales-boxes .box .button a {
  color: #fff;
  background: #0a2558;
  padding: 4px 12px;
  font-size: 15px;
  font-weight: 400;
  border-radius: 4px;
  text-decoration: none;
  transition: all 0.3s ease;
}
.sales-boxes .box .button a:hover {
  background: #0d3073;
}

/* Right box */
.home-content .sales-boxes .top-sales {
  width: 35%;
  background: #fff;
  padding: 20px 30px;
  margin: 0 20px 0 0;
  border-radius: 12px;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);
}
.sales-boxes .top-sales li {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 10px 0;
}
.sales-boxes .top-sales li a img {
  height: 40px;
  width: 40px;
  object-fit: cover;
  border-radius: 12px;
  margin-right: 10px;
  background: #333;
}
.sales-boxes .top-sales li a {
  display: flex;
  align-items: center;
  text-decoration: none;
}
.sales-boxes .top-sales li .product,
.price {
  font-size: 17px;
  font-weight: 400;
  color: #333;
}
/* Responsive Media Query */
@media (max-width: 1240px) {
  .sidebar {
    width: 60px;
  }
  .sidebar.active {
    width: 220px;
  }
  .home-section {
    width: calc(100% - 60px);
    left: 60px;
  }
  .sidebar.active ~ .home-section {
    /* width: calc(100% - 220px); */
    overflow: hidden;
    left: 220px;
  }
  .home-section nav {
    width: calc(100% - 60px);
    left: 60px;
  }
  .sidebar.active ~ .home-section nav {
    width: calc(100% - 220px);
    left: 220px;
  }
}
@media (max-width: 1150px) {
  .home-content .sales-boxes {
    flex-direction: column;
  }
  .home-content .sales-boxes .box {
    width: 100%;
    overflow-x: scroll;
    margin-bottom: 30px;
  }
  .home-content .sales-boxes .top-sales {
    margin: 0;
  }
}
@media (max-width: 1000px) {
  .overview-boxes .box {
    width: calc(100% / 2 - 15px);
    margin-bottom: 15px;
  }
}
@media (max-width: 700px) {
  nav .sidebar-button .dashboard,
  nav .profile-details .admin_name,
  nav .profile-details i {
    display: none;
  }
  .home-section nav .profile-details {
    height: 50px;
    min-width: 40px;
  }
  .home-content .sales-boxes .sales-details {
    width: 560px;
  }
}
@media (max-width: 550px) {
  .overview-boxes .box {
    width: 100%;
    margin-bottom: 15px;
  }
  .sidebar.active ~ .home-section nav .profile-details {
    display: none;
  }
}
@media (max-width: 400px) {
  .sidebar {
    width: 0;
  }
  .sidebar.active {
    width: 60px;
  }
  .home-section {
    width: 100%;
    left: 0;
  }
  .sidebar.active ~ .home-section {
    left: 60px;
    width: calc(100% - 60px);
  }
  .home-section nav {
    width: 100%;
    left: 0;
  }
  .sidebar.active ~ .home-section nav {
    left: 60px;
    width: calc(100% - 60px);
  }
}

.my-custom-scrollbar {
  position: relative;
  height: 200px;
  overflow: auto;
}
.table-wrapper-scroll-y {
  display: block;
}

.table-content {
  text-align: center;
  justify-items: center;
  justify-content: center;
}
.top-sales {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.item-center {
  padding: 5vh;
  display: grid;
  grid-auto-flow: column;
  gap: 2px;
  align-items: center;
  justify-items: center;
}

* {
  box-sizing: border-box;
}

body {
  font-family: Arial, Helvetica, sans-serif;
}

.cd {
  justify-content: center;
  align-items: center;
  display: flex;
}
</style>
