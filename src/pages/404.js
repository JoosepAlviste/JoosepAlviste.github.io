import React from 'react'
import { Helmet } from 'react-helmet'

const Page404 = () => (
  <main style={{ textAlign: 'center', paddingTop: '50px' }}>
    <Helmet>
      <title>404</title>
    </Helmet>

    <h1>404</h1>
    <p>
      <b>Page not found :(</b>
    </p>
    <p>The requested page could not be found.</p>
  </main>
)

export default Page404
