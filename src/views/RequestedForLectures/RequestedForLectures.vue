<template>
  <h1 class="h1">Requested for you</h1>
  <div class="card cs">
    <div class="card-body">
      <table class="table align-middle mb-0 pt-0 bg-white">
        <thead class="bg-light">
          <tr>
            <th>Requester Name</th>
            <th>Revision Name</th>
            <th>subject</th>
            <th>Requested time</th>
            <th>Requested place</th>
            <th>Requester Contact no</th>
            <th>Requester Current year</th>
            <th>Members</th>
            <th>respond</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="values in requesterdetail" :key="values.id">
            <td>
              <div class="d-flex align-items-center">
                <img
                  src="https://mdbootstrap.com/img/new/avatars/8.jpg"
                  alt=""
                  style="width: 45px; height: 45px"
                  class="rounded-circle"
                />
                <div class="ms-3">
                  <p class="fw-bold mb-1">{{ values.fname }}</p>
                  <p class="text-muted mb-0">{{ values.email }}</p>
                </div>
              </div>
            </td>
            <td>
              <p class="fw-normal mb-1">{{ values.revName }}</p>
            </td>
            <td>{{ values.subject }}</td>
            <td>{{ values.freetime }}</td>
            <td>{{ values.lecHallName }}</td>
            <td>{{ values.mobNo }}</td>
            <td>{{ values.currentYear }}</td>
            <td>{{ values.members }}</td>
            <td>
              <button
                type="button"
                class="btn btn-link btn-sm btn-rounded"
                @click="confirm(values)"
              >
                Confirm
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      form: {
        RevisionId: "",
        LectureLocalhost: "",
        StudentLocalhost: "",
        Revision_name: "",
        Subject: "",
        request_time: "",
        request_place: "",
        Student_name: "",
        requester_contact: "",
        requester_currentYear: "",
        members: "",
      },

      requesterdetail: [],
      //cant access that
      // detail: "",
      // detail1: "",
      // detail2: "",
    };
  },

  mounted() {
    let user = localStorage.getItem("userDetails");
    user = JSON.parse(user);
    this.form.LectureLocalhost = user.id;

    axios
      .post("http://127.0.0.1:8000/api/gettingRevisionRequest", this.form)
      .then((response) => {
        if (response.status == "200") {
          this.requesterdetail = response.data.data2;
        }
      })
      .catch((error) => {
        console.log(error);
      });
  },

  methods: {
    confirm(values) {
      // axios
      //   .post(
      //     "http://127.0.0.1:8000/api/gettingDetailstoRevisionRequest",
      //     this.form
      //   )
      //   .then((response) => {
      //     if ((response.status = "200")) {
      //       // this.requester_currentYear = response.data.data3;
      //       this.detail = response.data.data3;
      //       // this.detail1 = response.data.data1;
      //       // this.detail2 = response.data.data2;
      //     }
      //   })
      //   .catch((error) => {
      //     console.log(error);
      //   });

      this.form.RevisionId = values.id;
      this.form.StudentLocalhost = values.Requester_id;
      this.form.Revision_name = values.revName;
      this.form.Subject = values.subject;
      this.form.request_time = values.freetime;
      this.form.request_place = values.lecHallName;
      this.form.members = values.members;

      axios
        .post("http://127.0.0.1:8000/api/RevisionrequestAccepted", this.form)
        .then((response) => {
          if ((response.status = "200")) {
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
<style>
.card {
  box-shadow: 0px 0px 15px rgb(15, 105, 188);
}

.h1 {
  text-align: center;
  padding-bottom: 4vh;
  padding-top: 2vh;
}
</style>
