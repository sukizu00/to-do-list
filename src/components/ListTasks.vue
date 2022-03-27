<template>
  <div>
    <h3>TodoList</h3>
    <input
      class="form-control container mb-3"
      placeholder="Search"
      v-model="search"
    />

    <div v-for="task in filteredTask" :key="task.id">
      <input type="checkbox" v-model="task.id"/>{{ task.title }}

      <button @click="editTask(task.id)" >Detail</button>

      <button @click="deleteTask(task.id)">Remove</button>

      <div v-if="idTask == task.id && seen" id="hide">
        <form @submit.prevent="updateTask(task)">
          <div class="form-group">
            <input type="text" v-model="task.title" />
          </div>
          <div class="form-group">
            <textarea rows="10" cols="70" v-model="task.description"></textarea>
          </div>
          <div class="form-group">
            <input type="date" v-model="task.duedate" />
          </div>
          <div class="form-group">
            <select v-model="task.piority">
              <option>
                {{ task.piority }}
              </option>
            </select>
          </div>
          <button type="submit" class="btn btn-block btn-primary">
            Update
          </button>
        </form>
      </div>
      <br />
    </div>
    <form v-if="displayAction">
    <button>Done</button>
    <button @click="removeTask(task.id)">Remove</button>
    </form>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  name: "ListTasks",
  data() {
    return {
      search: "",
      seen: false,
      idTask: "",
      displayAction: false
    };
  },

  methods: {
    ...mapActions([
      "fetchTasks",
      "deleteTask",
      "updateTask",
    ]),
    editTask(item) {
        this.idTask = item
        this.seen = !this.seen
    },
    removeTask(item) {
        this.displayAction = true
        console.log(item)
        this.deleteMultipleTask(item)
    }
  },
  computed: {
    ...mapGetters(["tasksList"]),
    filteredTask() {
      return this.tasksList.filter((taskSearch) => {
        return (
          taskSearch.title.toLowerCase().indexOf(this.search.toLowerCase()) !=
          -1
        );
      });
    },
  },
  created() {
    this.fetchTasks();
  },
};
</script>