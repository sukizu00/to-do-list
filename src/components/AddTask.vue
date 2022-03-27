<template>
  <h3>NewTask</h3>
  <form @submit.prevent="onTaskSubmit">
    <div class="form-group">
      <input type="text" v-model="title" />
    </div>
    <br/>
    <div class="form-group">
      <textarea rows="10" cols="70" v-model="description"></textarea>
    </div>
    <br/>
    <div class="form-group">
      <input type="date" v-model="duedate" />
    </div>
    <br/>
    <div class="form-group">
      <select v-model="piority">
        <option >Low</option>
        <option >Normal</option>
        <option >High</option>
      </select>
    </div>
    <br/>
    <button type="submit" class="btn btn-block btn-primary">Add</button>
  </form>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "AddTask",
  data() {
    return {
      title: "",
      description: "",
      duedate: "",
      piority: "",
    };
  },
  methods: {
    ...mapActions(["addTasks"]),
    onTaskSubmit() {
      this.addTasks({
        title: this.title,
        description: this.description,
        duedate: Date.now(),
        piority: this.piority,
      });
    },
  },
};
</script>