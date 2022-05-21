import React, { FC } from 'react'
import Layout from 'containers/Layout'
import AppRoutes from 'routes'

document.body.classList.add('dark:bg-black')
document.body.classList.add('bg-white')
const App: FC<IProps> = () => {
	return (
		<Layout>
			<AppRoutes />
		</Layout>
	)
}

interface IProps {}
export default App
