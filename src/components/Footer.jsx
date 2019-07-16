import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Link, graphql, useStaticQuery } from "gatsby"
import footerStyles from "./Footer.module.scss"

const Footer = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          author
        }
      }
    }
  `)

  return (
    <footer className={footerStyles.footer}>
      <div>
        <a href="https://github.com/Chun-Lin">
          <FontAwesomeIcon
            icon={["fab", "github"]}
            className={footerStyles.footerIcon}
          />
        </a>
        <a href="https://twitter.com/wulin40063">
          <FontAwesomeIcon
            icon={["fab", "twitter"]}
            className={footerStyles.footerIcon}
          />
        </a>
        <a href="https://www.linkedin.com/in/chunlin-wu-4114809b/">
          <FontAwesomeIcon
            icon={["fab", "linkedin"]}
            className={footerStyles.footerIcon}
          />
        </a>
        <a href="https://www.facebook.com/profile.php?id=1624933215">
          <FontAwesomeIcon
            icon={["fab", "facebook"]}
            className={footerStyles.footerIcon}
          />
        </a>
      </div>
      <p className={footerStyles.footerCopyright}>
        Created by {data.site.siteMetadata.author} © 2019
      </p>
    </footer>
  )
}

export default Footer
