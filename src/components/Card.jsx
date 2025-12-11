import React from 'react'


function Card({ title, description, children }) {
  const Component = div

  return (
    <Component 
      className="card"
      
    >
      {title && <h3>{title}</h3>}
      {description && <p>{description}</p>}
      {children}
    </Component>
  )
}

export default Card