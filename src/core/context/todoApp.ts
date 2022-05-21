import { EModal } from 'core/enums'
import { Todo } from 'core/models'
import { createContext } from 'react'

interface IContext {
	modal: EModal | null
	todos: Todo[]
	setTodos: (todos: Todo[]) => void
	setModal: (type: EModal | null) => void
	deleteTodo: (id: string | number) => void
	toggleCompletedTodo: (id: string | number) => void
}

const TodoAppContext = createContext<IContext | null>(null)
export default TodoAppContext
