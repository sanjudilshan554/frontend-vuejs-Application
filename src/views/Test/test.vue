<template>

  <select v-model="form.subject.semester_id">
    <option @click="send()" v-for="value in semester" >{{ value.name }}</option>
  </select>

  <select >
    <option v-for="value in subject">{{ value.name }}</option>
  </select>

</template>

<script>

  export default{
    data(){
      return{
        semester:[
          {id:"1",name:"name1"},
          {id:"2",name:"name2"},
          
        ],

        subject:[

          semester_id,

          {id:"1",name:"subject1"},
          {id:"1",name:"subject2"},
          {id:"2",name:"subject3"},
          {id:"2",name:"subject4"},
        ],

        subjectResult:[],
        
      };

      
    },

    methods:{

      send(){
      this.subjectResult=this.subject.filter(value=>value.id==this.form.subject.semester_id);},
},
    
  };
</script>
<style></style>