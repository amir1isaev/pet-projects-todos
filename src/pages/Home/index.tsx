import TodoApp from 'components/ordinary/todo.group/TodoApp'
import React, { FC } from 'react'

const Home: FC<IProps> = () => {
	return (
		<div className=''>
			<div className='max-w-2xl mx-auto px-6'>
				<TodoApp />
			</div>
		</div>
	)
}

interface IProps {}
export default Home
