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

	editTask: function (id, updatedTask) {
		const editTaskCallback = (index) => (this.tasks[index] = { ...this.tasks[index], ...updatedTask });
		return this.result(id, editTaskCallback);
	},

	delTask: function (id) {
		const delTaskCallback = (index) => this.tasks.splice(index, 1);
		return this.result(id, delTaskCallback);
	},
	//
	//
	//        Какой вариант лучше ?
	//
	//_____________________________________________________1
	//
	sortTasks: function (property, sortBy) {
		return this.tasks.sort((a, b) => {
			sortBy === "increasing" && ([a, b] = [b, a]); //___________  проверка условия на каждой итерации и замена переменных если true
			return b[property] - a[property];
		});
	},
	//
	//______________________________________________________2
	//
	//     одна проверка но практически дублированный код,
	//
	sortTasks__2: function (property, sortBy) {
		switch (sortBy) {
			case "increasing":
				return this.tasks.sort((a, b) => b[property] - a[property]);
			default:
				return this.tasks.sort((a, b) => a[property] - b[property]);
		}
	},
	//
	//______________________________________________________3
	//
	//    или так
	//
	sortTasks__3: function (property, sortBy) {
		return sortBy === "increasing"
			? this.tasks.sort((a, b) => b[property] - a[property])
			: this.tasks.sort((a, b) => a[property] - b[property]);
	},
};
