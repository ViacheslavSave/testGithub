"use strict";
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

const newToDoListErr = {
	tasks: [{ id: 1, tasc: "задача_1", order: 9 }],
};

// так не работает в объекте newToDoListErr нет   методов которые используются в методе addTask
// ToDoList.addTask.call(newToDoListErr, { id: 2, tasc: "задача_1", order: 4 });
// this.findIndexById is not a function

// если перенести эти методы в новый объект то работает
// есть ли другой способ ?

const newToDoList = {
	tasks: [{ id: 1, tasc: "задача_1", order: 9 }],
	findIndexById: ToDoList.findIndexById,
	result: ToDoList.result,
};
// добавление записи с  call
ToDoList.addTask.call(newToDoList, { id: 2, tasc: "задача_2", order: 4 });
ToDoList.addTask.call(newToDoList, { id: 3, tasc: "задача_3", order: 5 });
ToDoList.addTask.call(newToDoList, { id: 4, tasc: "задача_4", order: 7 });

// добавление записи с  bind
const newTaskInNewToDoList = ToDoList.addTask.bind(newToDoList);
newTaskInNewToDoList({ id: 5, tasc: "задача_5", order: 5 });
newTaskInNewToDoList({ id: 6, tasc: "задача_6", order: 4 });

// добавление записи с  apply
ToDoList.addTask.apply(newToDoList, [{ id: 7, tasc: "задача_7", order: 4 }]);

//редактирование записи с  call
ToDoList.editTask.call(newToDoList, 6, { tasc: "задача_66", order: 3 });

//редактирование записи с  bind
const editTaskInNewToDoList = ToDoList.editTask.bind(newToDoList);
editTaskInNewToDoList(2, { tasc: "задача_2", order: 20 });

//удаление  записи с  bind
const deleteTaskInNewToDoList = ToDoList.delTask.bind(newToDoList);
deleteTaskInNewToDoList(1);

// сортировка записи с  apply
ToDoList.sortTasks.apply(newToDoList, ["order"]);

