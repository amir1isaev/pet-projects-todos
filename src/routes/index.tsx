import { FC } from 'react'

import { Route, Routes } from 'react-router-dom'
import Home from 'pages/Home'
import { browserRoutes } from 'core/routes'

const AppRoutes: FC<IProps> = () => {
	return (
		<Routes>
			<Route path={browserRoutes.homeBrowserRoutes.index()} element={<Home />} />
		</Routes>
	)
}

export default AppRoutes
interface IProps {}
