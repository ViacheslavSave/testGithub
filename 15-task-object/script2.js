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

	addTask: function (obj) {
		const index = this.findIndexById(obj.id);
		if (index === -1) {
			this.tasks.push(obj);
			return true;
		}
		return false;
	},

	editTask: function (obj) {
		const editTaskCallback = (index) => (this.tasks[index] = { ...this.tasks[index], ...obj });
		return this.result(obj.id, editTaskCallback);
	},

	delTask: function (id) {
		const delTaskCallback = (index) => this.tasks.splice(index, 1);
		return this.result(id, delTaskCallback);
	},

	sortTasks: function (obj) {
		return this.tasks.sort((a, b) => {
			obj.sortBy === "increasing" && ([a, b] = [b, a]);
			return b[obj.property] - a[obj.property];
		});
	},
};
