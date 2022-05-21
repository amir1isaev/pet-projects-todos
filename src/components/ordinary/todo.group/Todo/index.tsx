import { useTodoApi } from 'core/hooks'
import { Todo } from 'core/models'
import { FC } from 'react'
import Checkbox from '../Checkbox'

const TodoItem: FC<IProps> = (p) => {
	const { item } = p

	const todoApi = useTodoApi()

	return (
		<div className='py-2.5 px-3 bg-zinc-100  dark:bg-zinc-900 rounded-lg inline-flex gap-3.5 items-center'>
			<Checkbox onChange={() => todoApi?.toggleCompletedTodo(item.id)} checked={item.completed} />
			<p className='dark:text-white w-full'>{item.title}</p>
			<span onClick={() => todoApi?.deleteTodo(item.id)} className='cursor-pointer duration-200 text-red-900 hover:text-red-600 '>
				delete
			</span>
		</div>
	)
}

interface IProps {
	item: Todo
}
export default TodoItem
