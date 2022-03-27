<template>
  <AddTask />
  <ListTasks />
</template>

<script>
import AddTask from "./components/AddTask.vue";
import ListTasks from "./components/ListTasks.vue";
export default {
  name: "App",
  components: {
    AddTask,
    ListTasks,
  },
};
</script>

