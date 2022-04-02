import React from 'react'
import {useSelector, shallowEqual} from 'react-redux'
import Loader from '../../components/loader'
import Navbar1 from '../../components/navbar-1'
import LeftSidebar1 from '../../components/left-sidebar-1'

import '../../css/layouts/layout-1.css'

const Layout1 = ({children}) => {
  const {config, palettes} = useSelector(
    (state) => ({
      config: state.config,
      palettes: state.palettes
    }),
    shallowEqual
  )
  const {layout, collapsed} = {...config}
  let {background, navbar, logo, leftSidebar} = {
    ...palettes
  }

  return (
      <div
      data-layout={layout}
      data-collapsed={collapsed}
      data-background={background}
      data-navbar={navbar}
      data-logo={logo}
      data-left-sidebar={leftSidebar}
      className={`${background === 'dark' ? 'dark-mode' : 'default-mode'}`}>
      <Loader />
  
      <div className="wrapper">
        <LeftSidebar1 />
        <div className="main w-full bg-gray-50 text-gray-900 dark:bg-gray-900 dark:text-white">
          <Navbar1 />
          <div className="min-h-screen w-full p-4">{children}</div>
        </div>
      </div>
    </div>
  )
}
export default Layout1
