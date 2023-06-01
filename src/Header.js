import React from 'react'

const Header = ({ title }) => {
  return (

    <p>{title}</p>


  )
}


Header.defaultProps = 
{
  title: "Header from Header.js"
}
export default Header