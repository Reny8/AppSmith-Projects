export default {
	init() {
		data.todos = appsmith.store.todos || data.dummyTodos
	},
	addTodo(title) {
		let todo = {
			title: title,
			completed: false
		}
		data.todos.push(todo)
		storeValue('todos', data.todos)
	},

	async updateTodo(id, todo) {
		data.todos[id] = {
			...data.todos[id], ...todo, 
		}
		storeValue('todos', data.todos)
		await closeModal(Modal1.name)
		this.setActiveTodo(undefined, undefined)
	},

	setActiveTodo(index, todo) {
		data.activeIndex = index
		data.activeTodo = todo
	},

	deleteTodo(id) {
		data.todos.splice(id, 1)
		storeValue('todos', data.todos)
	}
}