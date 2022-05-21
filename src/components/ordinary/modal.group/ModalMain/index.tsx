import { FC, ReactNode } from 'react'

const ModalMain: FC<IProps> = (p) => {
	const { children } = p
	return <div className='px-4 py-1.5'>{children}</div>
}

interface IProps {
	children: ReactNode
}
export default ModalMain
