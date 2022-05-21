import { FC, ReactNode } from 'react'

const ModalFooter: FC<IProps> = (p) => {
	const { children } = p
	return <div className='px-4 py-3 flex items-center justify-between'>{children}</div>
}

interface IProps {
	children: ReactNode
}
export default ModalFooter
