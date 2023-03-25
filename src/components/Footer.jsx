import React from 'react'

const Footer = () => {
    const date= new Date();
    let footerStyle = {
        position:"relative",
        top:'85vh',
        bottom:"0",
        textAlign:'center',
    }
  return (
    <footer style={footerStyle}>
        <p> copyright &copy; {date.getFullYear()} </p>
    </footer>
  )
}

export default Footer
