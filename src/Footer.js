import React from 'react'

const Footer = () => {
const year = new Date();



    return (
        <p>Copyright &copy; {year.getFullYear()}</p>
    )
}

export default Footer