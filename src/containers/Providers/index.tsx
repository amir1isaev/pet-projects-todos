import React, { FC, ReactNode } from 'react'
import TodoAppProvider from './TodoAppProvider'
import RouterProvider from './RouterProvider'

const Providers: FC<IProps> = (p) => {
	const { children } = p
	return (
		<RouterProvider>
			<TodoAppProvider>{children} </TodoAppProvider>
		</RouterProvider>
	)
}

interface IProps {
	children: ReactNode
}
export default Providers
