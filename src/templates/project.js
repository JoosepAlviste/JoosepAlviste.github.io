/* eslint-disable react/no-danger */
import React from 'react'
import PropTypes from 'prop-types'

const Project = ({ data }) => {
  const project = data.markdownRemark

  return (
    <div>
      <h1>{project.frontmatter.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: project.html }} />
    </div>
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
