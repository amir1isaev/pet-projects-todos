import { FC, ReactNode } from 'react'

const Button: FC<IProps> = (p) => {
	const { children, className, disabled } = p
	const defaultClassNames = 'duration-200 rounded-full px-6 py-2 disabled:cursor-not-allowed disabled:bg-white disabled:dark:bg-zinc-800 disabled:text-zinc-500 '
	return (
		<button disabled={disabled} className={[defaultClassNames, className, 'bg-blue-600 text-white hover:bg-blue-800'].join(' ')}>
			{children}
		</button>
	)
}

interface IProps {
	children: ReactNode
	className?: string
	disabled?: boolean
}
export default Button
