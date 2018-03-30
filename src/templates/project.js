/* eslint-disable react/no-danger */
import React from 'react'
import PropTypes from 'prop-types'
import { Helmet } from 'react-helmet'

import Container from '../components/Container'
import FloatingBackButton from '../components/FloatingBackButton'
import styles from './project.module.scss'

const Project = ({ data }) => {
  const project = data.markdownRemark
  const projectSlug = project.frontmatter.title.toLowerCase().replace(/ /, '-')

  return (
    <article className={styles.Project} data-project={projectSlug}>
      <Helmet>
        <title>
          {project.frontmatter.title} | {data.site.siteMetadata.title}
        </title>
      </Helmet>

      <FloatingBackButton />

      <header className={styles.Header}>
        <h1 className={styles.Title}>{project.frontmatter.title}</h1>
      </header>

      <Container>
        <div dangerouslySetInnerHTML={{ __html: project.html }} />
      </Container>
    </article>
  )
}

Project.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.shape({
        title: PropTypes.string.isRequired,
      }),
      html: PropTypes.string.isRequired,
    }),
    site: PropTypes.shape({
      siteMetadata: PropTypes.shape({
        title: PropTypes.string.isRequired,
      }).isRequired,
    }).isRequired,
  }).isRequired,
}

export const query = graphql`
  query ProjectQuery($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
      }
    }
    site {
      siteMetadata {
        email
        gitHubLink
        linkedInLink
        description
        title
      }
    }
  }
`

export default Project
