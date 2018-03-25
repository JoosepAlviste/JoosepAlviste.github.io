import React from 'react'
import PropTypes from 'prop-types'

import styles from './ProjectSection.module.scss'

const ProjectSection = ({ project }) => (
  <section className={styles.ProjectSection}>
    <h2 className={styles.Title}>
      <a href="/">{project.title}</a>
    </h2>

    <div className={styles.ContentContainer}>
      <ul className={styles.Tags}>
        {project.tags.map(tag => <li key={tag}>{tag}</li>)}
      </ul>

      <div className={styles.DescriptionContainer}>
        <div dangerouslySetInnerHTML={{ __html: project.description }} />

        <a href="/">More...</a>
      </div>
    </div>
  </section>
)

ProjectSection.propTypes = {
  project: PropTypes.shape({
    title: PropTypes.string.isRequired,
    tags: PropTypes.arrayOf(PropTypes.string).isRequired,
    description: PropTypes.string.isRequired,
  }).isRequired,
}

export default ProjectSection
