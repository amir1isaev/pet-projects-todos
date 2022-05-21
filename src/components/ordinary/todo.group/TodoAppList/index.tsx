import { useTodoApi } from 'core/hooks'
import { FC } from 'react'
import Todo from '../Todo'

const TodoAppList: FC<IProps> = () => {
	const todoApi = useTodoApi()
	return (
		<div className='flex flex-col gap-2'>
			{todoApi?.todos.map((item) => (
				<Todo key={item.id} item={item} />
			))}
			{todoApi?.todos.length === 0 && <span className=' text-center dark:text-white'>Not found</span>}
		</div>
	)
}

interface IProps {}
export default TodoAppList
