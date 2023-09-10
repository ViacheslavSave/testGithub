const ToDoList = {
	tasks: [],
	findId: function (id) {
		return this.tasks.findIndex((obj) => obj.id === id);
	},
	result: function (id, callback) {
		const index = this.findId(id);
		if (index !== -1) {
			callback(index);
			return true;
		}
		return false;
	},
	addTask: function (id, title, priority) {
		const index = this.findId(id);
		if (index === -1) {
			this.tasks.push({ id, title, priority });
			return true;
		}
		return false;
	},
	delTask: function (id) {
		const delTaskCallback = (index) => this.tasks.splice(index, 1);
		return this.result(id, delTaskCallback);
	},
	editTitle: function (id, title) {
		const editTitleCallback = (index) => (this.tasks[index].title = title);
		return this.result(id, editTitleCallback);
	},
	editPriority: function (id, priority) {
		const editPriorityCallback = (index) => (this.tasks[index].priority = priority);
		return this.result(id, editPriorityCallback);
	},
	sortTasksByPriorityImpFirst: function () {
		return this.tasks.sort((a, b) => b.priority - a.priority);
	},
};
