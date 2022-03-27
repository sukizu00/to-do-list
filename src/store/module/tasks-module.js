import axios from 'axios'

const state = { 
    tasks: [],
};

const getters = { 
    tasksList: state => state.tasks,
    
};

const actions = { 
    async fetchTasks({commit}){
      const response = await axios.get("http://localhost:3000/tasks");
      commit("setTasks", response.data)
    },
    async addTasks({commit}, task){
      const response = await axios.post("http://localhost:3000/tasks", task);
      commit("addNewTask", response.data)
    },
    async updateTask({commit}, task){
        const response = await axios.put(`http://localhost:3000/tasks/${task.id}`, task);
        commit("updateTask", response.data)
      },
    async deleteTask({commit}, id){
      await axios.delete(`http://localhost:3000/tasks/${id}`);
      commit("removeTask", id)
    },
    async deleteMultipleTask({commit}, id){
        await axios.delete(`http://localhost:3000/tasks/${id}`);
        commit("removeMultipleTask", id)
      },

};

const mutations = { 
    setTasks: (state, tasks) => (
        state.tasks = tasks
    ),
    addNewTask: (state, task) => state.tasks.unshift(task),
    updateTask: (state, task) => {
        let v = state.tasks.find(v => v.id == task.id)
        v = task;
        console.log(v)
    },
    removeTask: (state, id) => (
        state.tasks.map(item => item.id).indexOf(id),
        state.tasks.splice(task => task.id, 1)
    ),
    removeMultipleTask: (state, id) => (
        state.tasks.map(item => item.id).indexOf(id),
        console.log(state.tasks.map(item => item.id).indexOf(id)),
        state.tasks.splice(task => task.id, 1)
    ),
};

export default {
    state,
    getters,
    actions,
    mutations
}