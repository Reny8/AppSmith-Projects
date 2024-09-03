export default {
	addTodo(title) {
		let todo = {
			id: data.todos.length + 1,
			title: title,
			completed: false
		}
		data.todos.push(todo)
	},

	updateTodo(id, todo) {
		data.todos[id] = {
			...data.todos[id], ...todo
		}
	}
}