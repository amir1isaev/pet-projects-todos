import { useTodoApi } from 'core/hooks'
import { FC } from 'react'

const ModalHeader: FC<IProps> = (p) => {
	const { title } = p
	const todoApi = useTodoApi()

	const closeModalHandler = () => todoApi?.setModal(null)
	return (
		<div className='px-4 py-3 flex items-center justify-between'>
			<h2 className='dark:text-white font-medium text-lg'>{title}</h2>
			<div onClick={closeModalHandler} className='cursor-pointer duration-200 fill-blue-600 bg-blue-600/10 hover:fill-white hover:bg-blue-600 w-8 h-8 rounded-full flex items-center justify-center'>
				<svg width='24px' height='24px' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
					<g>
						<g>
							<rect width='24' height='24' transform='rotate(180 12 12)' opacity='0' />
							<path d='M13.41 12l4.3-4.29a1 1 0 1 0-1.42-1.42L12 10.59l-4.29-4.3a1 1 0 0 0-1.42 1.42l4.3 4.29-4.3 4.29a1 1 0 0 0 0 1.42 1 1 0 0 0 1.42 0l4.29-4.3 4.29 4.3a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42z' />
						</g>
					</g>
				</svg>
			</div>
		</div>
	)
}

interface IProps {
	title: string
}
export default ModalHeader
