import React from 'react'
import PropTypes from 'prop-types'
import { Link as ScrollLink, Element as ScrollElement } from 'react-scroll'

import ProjectSection from '../components/ProjectSection'
import Container from '../components/Container'
import styles from './index.module.scss'
import Icon from '../components/Icon'

const Index = ({ data }) => {
  const projects = data.allMarkdownRemark.edges.map(edge => edge.node)

  return (
    <div>
      <header className={styles.Header}>
        <div className={styles.HeaderContainer}>
          <h1 className={styles.Title}>Joosep Alviste</h1>
          <h2 className={styles.Subtitle}>Full-stack web developer</h2>
        </div>

        <div className={styles.HeaderBottom}>
          <ScrollLink to="projects" duration={500} smooth>
            <Icon
              viewBox="0 0 70 37"
              title="Scroll down"
              width="70px"
              height="37px"
              className={styles.ScrollDownIcon}
            >
              <path d="M4.80817793,0.807342302 C3.70772401,-0.268845842 1.92518401,-0.268845842 0.824730092,0.807342302 C-0.274095935,1.88192179 -0.275723825,3.62730914 0.824730092,4.70349729 L33.0081235,36.1928589 C34.1085774,37.269047 35.8911174,37.269047 36.9915713,36.1928589 L69.1749648,4.70349729 C70.2746047,3.62730914 70.2754187,1.88353045 69.1749648,0.807342302 C68.0745108,-0.268845842 66.2919708,-0.268845842 65.1915169,0.80573365 L34.9998474,29.5241923 L4.80817793,0.807342302 Z" />
            </Icon>
          </ScrollLink>
        </div>
      </header>

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
