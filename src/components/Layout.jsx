import React from "react"
import Header from "./Header"
import layoutStyles from "./Layout.module.scss"

const Layout = ({ pageStyle, children }) => {
  return (
    <div className={layoutStyles.bgImage}>
      <div className={layoutStyles.container}>
        <Header />
        <div
          className={
            pageStyle === 'center' ? layoutStyles.centerContent : layoutStyles.content
          }
        >
          {children}
        </div>
      </div>
    </div>
  )
}

export default Layout
