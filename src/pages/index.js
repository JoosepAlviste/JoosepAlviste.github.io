import React from 'react'

import ProjectSection from '../components/ProjectSection'

const charon = {
  title: 'Charon',
  tags: [
    'back-end',
    'front-end',
    'php',
    'laravel',
    'javascript',
    'vuejs',
    'continuous-integration',
  ],
  description: `<p>
      Integrating Moodle LMS with an automated tester for testing students'
      solutions to programming tasks. User interface for grading students.
      Automated build process.
    </p>
    <p>Actively used in Tallinn University of Technology since January 2017.</p>`,
}
const virtualObservatory = {
  title: 'Virtual observatory',
  tags: [
    'back-end',
    'front-end',
    'php',
    'laravel',
    'javascript',
    'vuejs',
    'continuous-integration',
  ],
  description: `<p>
    Integrating Moodle LMS with an automated tester for testing students'
    solutions to programming tasks. User interface for grading students.
    Automated build process.
  </p>
  <p>Actively used in Tallinn University of Technology since January 2017.</p>`,
}
const serieslist = {
  title: 'Serieslist',
  tags: [
    'back-end',
    'front-end',
    'php',
    'laravel',
    'javascript',
    'vuejs',
    'continuous-integration',
  ],
  description: `<p>
    Integrating Moodle LMS with an automated tester for testing students'
    solutions to programming tasks. User interface for grading students.
    Automated build process.
  </p>
  <p>Actively used in Tallinn University of Technology since January 2017.</p>`,
}

const Index = () => (
  <div>
    <h1>Charon</h1>
    <h2>Another test title!</h2>

    <p>Hello world!</p>

    <ProjectSection project={charon} />
    <ProjectSection project={virtualObservatory} />
    <ProjectSection project={serieslist} />
  </div>
)

export default Index
