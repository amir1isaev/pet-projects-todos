import { EModal } from 'core/enums'
import { useTodoApi } from 'core/hooks'
import { FC } from 'react'

const TodoAppHeader: FC<IProps> = () => {
	const todoApi = useTodoApi()

	const openCreateModal = () => todoApi?.setModal(EModal.CREATE)

	return (
		<div className='flex justify-between gap-5 items-center mb-3'>
			<h2 className='dark:text-white font-bold text-2xl'>Todo</h2>
			<div onClick={openCreateModal} className='flex items-center gap-2 text-blue-600 cursor-pointer hover:text-blue-800'>
				<span className='duration-200'>Create todo</span>
				<span className='duration-200 text-2xl mb-0.5'>+</span>
			</div>
		</div>
	)
}

interface IProps {}
export default TodoAppHeader
