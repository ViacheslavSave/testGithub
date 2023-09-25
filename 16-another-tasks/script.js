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

const newTask = {
	tasks: [],
};

const newToDoList = { ...ToDoList, ...newTask };
newToDoList.addTask({ id: 2, name: "name_2", description: "description_2", order: 2 });
newToDoList.addTask({ id: 3, name: "name_3", description: "description_3", order: 4 });
newToDoList.addTask({ id: 4, name: "name_4", description: "description_4", order: 1 });
newToDoList.addTask({ id: 5, name: "name_5", description: "description_5", order: 3 });
newToDoList.editTask(5, { name: "тест_5", description: "описание_5", order: 7 });
newToDoList.delTask(3);
newToDoList.sortTasks("order");

