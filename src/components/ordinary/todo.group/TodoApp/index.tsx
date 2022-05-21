import { FC } from 'react'

import TodoAppHeader from '../TodoAppHeader'
import TodoAppList from '../TodoAppList'

const TodoApp: FC<IProps> = () => {
	return (
		<div className='py-5'>
			<TodoAppHeader />
			<TodoAppList />
		</div>
	)
}

interface IProps {}
export default TodoApp
