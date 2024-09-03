export default {
	addTodo(title) {
		let todo = {
			title: title,
			completed: false
		}
		data.todos.push(todo)
	},

	async updateTodo(id, todo) {
		data.todos[id] = {
			...data.todos[id], ...todo, 
		}
		await closeModal(Modal1.name)
		this.setActiveTodo(undefined, undefined)
	},

	setActiveTodo(index, todo) {
		data.activeIndex = index
		data.activeTodo = todo
	},

	deleteTodo(id) {
		data.todos.splice(id, 1)
	}
}