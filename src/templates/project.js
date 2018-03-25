/* eslint-disable react/no-danger */
import React from 'react'
import PropTypes from 'prop-types'

import Container from '../components/Container'
import styles from './project.module.scss'

const Project = ({ data }) => {
  const project = data.markdownRemark
  const projectSlug = project.frontmatter.title.toLowerCase().replace(/ /, '-')

  return (
    <article className={styles.Project} data-project={projectSlug}>
      <header>
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
  }
`

export default Project
