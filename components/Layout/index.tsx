import React, { Fragment } from 'react'
import Header from './Header'
interface Props {
    children: React.ReactNode
}

const Layout: React.FC<Props> = ({children}) => {
        return (
            <Fragment>
                <Header />
                <main>
                    {children}
                </main>
            </Fragment>
        );
}
export default Layout