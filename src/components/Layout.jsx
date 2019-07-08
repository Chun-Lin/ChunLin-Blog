import React from "react"
import Header from "./Header"
import layoutStyles from "./Layout.module.scss"

const Layout = props => {
  return (
    <div className={layoutStyles.bgImage}>
      <div className={layoutStyles.container}>
        <Header />
        <div className={layoutStyles.content}>{props.children}</div>
      </div>
    </div>
  )
}

export default Layout
