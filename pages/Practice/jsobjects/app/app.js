export default {
	addTodo(title) {
		let todo = {
			title: title,
			completed: false
		}
		data.todos.push(todo)
	},

	updateTodo(id, todo) {
		data.todos[id] = {
			...data.todos[id], ...todo
		}
	},

	deleteTodo(id) {
		data.todos.splice(id, 1)
	}
}