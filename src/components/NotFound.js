import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = (props) => {
  return (
    <div className="not-found">
      <h1>Sorry, we couldn't find what you're looking for.</h1>
      <Link to="/albums">Check out our albums!</Link>
    </div>
  )
}

export default NotFound
