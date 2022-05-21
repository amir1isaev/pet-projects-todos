import React, { FC, ReactNode } from 'react'
import Main from 'components/simple/Main'
import Footer from 'components/simple/Footer'
import Header from 'components/simple/Header'
import Providers from '../Providers'
import Modal from 'components/ordinary/modal.group/Modal'

const Layout: FC<IProps> = (p) => {
	const { children } = p

	return (
		<Providers>
			<Header />
			<Main>{children}</Main>
			<Footer />
			<Modal />
		</Providers>
	)
}

interface IProps {
	children: ReactNode
}
export default Layout
