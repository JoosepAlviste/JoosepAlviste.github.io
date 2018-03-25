import React from 'react'
import PropTypes from 'prop-types'

import ProjectSection from '../components/ProjectSection'
import Container from '../components/Container'

const Index = ({ data }) => {
  const projects = data.allMarkdownRemark.edges
    .map(edge => edge.node.frontmatter)
    .sort((a, b) => a.order > b.order)

  return (
    <div>
      <h1>Charon</h1>
      <h2>Another test title!</h2>

      <p>Hello world!</p>

      <Container>
        {projects.map(project => (
          <ProjectSection key={project.title} project={project} />
        ))}
      </Container>
    </div>
  )
}

Index.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.arrayOf(
        PropTypes.shape({
          node: PropTypes.shape({
            frontMatter: PropTypes.shape({
              title: PropTypes.string.isRequired,
              order: PropTypes.number.isRequired,
              excerpt: PropTypes.string.isRequired,
              tags: PropTypes.arrayOf(PropTypes.string).isRequired,
            }),
          }).isRequired,
        }).isRequired
      ).isRequired,
    }).isRequired,
  }).isRequired,
}

export const query = graphql`
  query IndexQuery {
    allMarkdownRemark {
      edges {
        node {
          frontmatter {
            title
            order
            excerpt
            tags
          }
        }
      }
    }
  }
`

export default Index
