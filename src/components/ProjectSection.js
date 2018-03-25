/* eslint-disable react/no-danger */
import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'

import styles from './ProjectSection.module.scss'

const ProjectSection = ({ project }) => {
  const { title, tags, excerpt } = project.frontmatter
  const projectSlug = title.toLowerCase().replace(/ /, '-')

  return (
    <section className={styles.ProjectSection} data-project={projectSlug}>
      <h2 className={styles.Title}>
        <Link to={project.fields.slug}>{title}</Link>
      </h2>

      <div className={styles.ContentContainer}>
        <ul className={styles.Tags}>
          {tags.map(tag => <li key={tag}>{tag}</li>)}
        </ul>

        <div className={styles.DescriptionContainer}>
          <div dangerouslySetInnerHTML={{ __html: excerpt }} />

          <Link to={project.fields.slug}>More...</Link>
        </div>
      </div>
    </section>
  )
}

ProjectSection.propTypes = {
  project: PropTypes.shape({
    frontmatter: PropTypes.shape({
      title: PropTypes.string.isRequired,
      tags: PropTypes.arrayOf(PropTypes.string).isRequired,
      excerpt: PropTypes.string.isRequired,
    }).isRequired,
    fields: PropTypes.shape({
      slug: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
}

export default ProjectSection
