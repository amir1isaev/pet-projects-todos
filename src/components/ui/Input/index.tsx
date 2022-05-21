import { ChangeEvent, FC, ReactNode, useState } from 'react'

const Input: FC<IProps> = (p) => {
	const { type, name, children, value, setValue } = p
	const [active, setActive] = useState<boolean>(false)
	const [focus, setFocus] = useState<boolean>(false)

	const changeActive = (active: boolean, focus: boolean) => {
		if (focus) return
		setActive(active)
		if (!active) {
			setValue('')
		}
	}

	const handlerBlur = (e: ChangeEvent<HTMLInputElement>) => {
		const value = e.target.value.trim()
		changeActive(!!value, false)
		setFocus(false)
	}
	const handlerFocus = (e: ChangeEvent<HTMLInputElement>) => {
		setActive(true)
		setFocus(true)
	}
	const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
		const value = e.target.value
		setValue(value)
		changeActive(!!value, focus)
	}

	return (
		<div className={['relative rounded-lg border-2', focus ? 'border-blue-600' : 'dark:border-zinc-700'].join(' ')}>
			<input
				className={['w-full dark:text-white rounded bg-transparent px-3 pb-2 pt-6 text-lg outline-none  transition-all  duration-200 ease-in-out ', active ? '' : ''].join(' ')}
				id={name}
				name={name}
				value={value}
				type={type}
				onChange={handleChange}
				onFocus={handlerFocus}
				onBlur={handlerBlur}
			/>
			<label
				className={[
					'absolute  left-3 flex items-center  font-medium  text-opacity-50 transition-all duration-200 ease-in-out',
					active ? 'top-1.5 text-sm text-zinc-700 dark:text-blue-600' : 'dark:text-white top-3.5 text-lg',
				].join(' ')}
				htmlFor={name}
			>
				{children}
			</label>
		</div>
	)
}

interface IProps {
	type: string
	name: string
	value: string

	setValue: (value: string) => void
	children: ReactNode
}
export default Input
