import { FC } from 'react'

import Footer from '@/components/molecules/footer'
import NavBar from '@/components/molecules/navbar'
import { ILayoutProps } from '@/types/components/layout'

const Layout: FC<ILayoutProps> = ({ children }) => {
  return (
    <div className="w-full">
      <div className="flex flex-col px-5 lg:px-11">
        <header className="mb-auto flex flex-wrap sm:justify-start sm:flex-nowrap z-50 text-sm py-4">
          <NavBar />
        </header>
        <main id="content">{children}</main>
        <div className="flex justify-center">
          <Footer />
        </div>
      </div>
    </div>
  )
}

export default Layout
