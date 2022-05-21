import { EModal } from 'core/enums'
import { useTodoApi } from 'core/hooks'
import { FC, MouseEventHandler, useRef } from 'react'
import CreteTodoModal from '../CreateTodoModal'

const Modal: FC<IProps> = () => {
	const todoApi = useTodoApi()
	const modalRef = useRef<HTMLDivElement>(null)

	if (!todoApi?.modal) {
		return <></>
	}

	const modalClickHandler: MouseEventHandler = (e) => {
		const target = e.target

		if (target !== modalRef.current) return
		todoApi.setModal(null)
	}

	return (
		<div ref={modalRef} onClick={modalClickHandler} className='modal h-screen w-full fixed t-0 l-0 flex items-centet  bg-white/60 dark:bg-black/60 justify-center z-40'>
			<div className='self-center w-full  bg-zinc-100 dark:bg-zinc-900 rounded-lg max-w-xs'>{todoApi?.modal === EModal.CREATE && <CreteTodoModal />}</div>
		</div>
	)
}

interface IProps {}
export default Modal
