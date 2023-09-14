const ToDoList = {
	tasks: [],
	findIndexById: function (id) {
		return this.tasks.findIndex((obj) => obj.id === id);
	},

	result: function (id, callback) {
		const index = this.findIndexById(id);
		if (index !== -1) {
			callback(index);
			return true;
		}
		return false;
	},

	addTask: function (newTaskObj) {
		const index = this.findIndexById(newTaskObj.id);
		if (index === -1) {
			this.tasks.push(newTaskObj);
			return true;
		}
		return false;
	},

	editTask: function (id, updatedTask) {
		const editTaskCallback = (index) => (this.tasks[index] = { ...this.tasks[index], ...updatedTask });
		return this.result(id, editTaskCallback);
	},

	delTask: function (id) {
		const delTaskCallback = (index) => this.tasks.splice(index, 1);
		return this.result(id, delTaskCallback);
	},
	sortTasks(prop, param = "asc") {
		const index = param === "asc" ? 1 : -1; 
		return this.tasks.sort((a, b) => (a[prop] - b[prop]) * index);
	},
};