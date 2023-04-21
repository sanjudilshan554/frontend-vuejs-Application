<template>
  <h1 class="h1">Acception</h1>
  <div class="card cs">
    <div class="card-body">
      <table class="table align-middle mb-0 pt-0 bg-white">
        <thead class="bg-light">
          <tr>
            <th>Accepter Name</th>
            <th>kuppiname</th>
            <th>subject</th>
            <th>Requested time</th>
            <th>Accepted time</th>
            <th>Accepted place</th>
            <th>Accepter Contact no</th>
            <th>Accepter Current year</th>
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
                  <p class="fw-bold mb-1">{{ values.seniorName }}</p>
                  <p class="text-muted mb-0">{{ values.senioremail }}</p>
                </div>
              </div>
            </td>
            <td>
              <p class="fw-normal mb-1">{{ values.kuppiname }}</p>
            </td>
            <td>{{ values.subject }}</td>
            <td>{{ values.request_made_at }}</td>
            <td>{{ values.created_at }}</td>
            <td>{{ values.place }}</td>
            <td>{{ values.mobNo }}</td>
            <td>{{ values.currentYear }}</td>
            <td>{{ values.members }}</td>
            <td>
              <button
                type="button"
                class="btn btn-link btn-sm btn-rounded"
                @click="confirm(values)"
              >
                Meetup
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
        userids: "",
        kuppiID: "",
        Accepter_id: "",
        Requester_id: "",
        requester_name: "",
        kuppiname: "",
        subject: "",
        request_time: "",
        place: "",
        gender: "",
        requester_name: "",
        requester_mail: "",
        requester_contact: "",
        requester_currentYear: "",
        // type: "",
        request_made_at: "",
        members: "",
      },

      requesterdetail: [],
    };
  },

  mounted() {
    let user = localStorage.getItem("userDetails");
    user = JSON.parse(user);
    this.form.userids = user.id;

    this.form.Accepter_id = user.id;

    axios
      .post("http://127.0.0.1:8000/api/requestAcceptedsender", this.form)
      .then((response) => {
        if (response.status == "200") {
          this.requesterdetail = response.data.data;
        }
      })
      .catch((error) => {
        console.log(error);
      });
  },

  methods: {
    confirm(values) {
      this.form.kuppiID = values.id; ///////
      this.form.requester_name = values.fname;
      this.form.kuppiname = values.kuppiname;
      this.form.subject = values.subject;
      this.form.request_time = values.freetime;
      this.form.place = values.place;
      this.form.gender = values.gender;
      this.form.requester_mail = values.email;
      this.form.requester_contact = values.mobNo;
      this.form.requester_currentYear = values.currentYear;
      // this.type = values.on / off;
      this.form.request_made_at = values.created_at;
      this.form.members = values.members;
      this.form.Requester_id = values.registrations_id;

      axios
        .post("http://127.0.0.1:8000/api/requestAccepted", this.form)
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
