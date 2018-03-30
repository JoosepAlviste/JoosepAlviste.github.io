import React from 'react'
import PropTypes from 'prop-types'
import { Element as ScrollElement } from 'react-scroll'

import ProjectSection from '../components/ProjectSection'
import Container from '../components/Container'
import IndexHeader from '../components/IndexHeader'

const Index = ({ data }) => {
  const projects = data.allMarkdownRemark.edges.map(edge => edge.node)

  return (
    <div>
      <IndexHeader scrollDownTo="projects" />

      <ScrollElement name="projects">
        <Container>
          {projects.map(project => (
            <ProjectSection key={project.frontmatter.title} project={project} />
          ))}
        </Container>
      </ScrollElement>
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
    allMarkdownRemark(sort: { fields: [frontmatter___order], order: ASC }) {
      edges {
        node {
          frontmatter {
            title
            order
            excerpt
            tags
          }
          fields {
            slug
          }
        }
      }
    }
  }
`

export default Index
