import React from "react"

import Header from "./Header"
import layoutStyles from "./Layout.module.scss"
import Footer from "./Footer"

const Layout = ({ contentStyle, children }) => {
  return (
    <div className={layoutStyles.container}>
      <Header />
      <div
        className={
          contentStyle === "gold"
            ? layoutStyles.content
            : layoutStyles.greyContent
        }
      >
        {children}
      </div>
      <Footer />
    </div>
  )
}

export default Layout
