import React, { ReactNode, FC, useState } from 'react'
import { TodoAppContext } from 'core/context'
import { EModal } from 'core/enums'
import { Todo } from 'core/models'
import { useEffect } from 'react'

const localTodos = JSON.parse(localStorage.getItem('todos') ?? '[]')
const TodoAppProvider: FC<IProps> = ({ children }) => {
	const [modal, setModal] = useState<EModal | null>(null)
	const [todos, setTodos] = useState<Todo[]>(localTodos)

	useEffect(() => {
		localStorage.setItem('todos', JSON.stringify(todos))
	}, [todos])

	const toggleCompletedTodo = (id: number | string) => {
		const newTodos = todos.map((item) => {
			if (item.id === id) {
				item.completed = !item.completed
			}
			return item
		})
		setTodos(newTodos)
	}

	const deleteTodo = (id: number | string) => {
		const newTodos = todos.filter((item) => item.id !== id)
		setTodos(newTodos)
	}

	return <TodoAppContext.Provider value={{ setModal, modal, todos, setTodos, deleteTodo, toggleCompletedTodo }}>{children}</TodoAppContext.Provider>
}

interface IProps {
	children: ReactNode
}

export default TodoAppProvider
