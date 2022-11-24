import React from 'react'
import './Logo.css'
import logo from './logo-ucn.png'
const Logo: React.FC = () => {
  return (
    <>
      <div className="logo-container">
        <div className="logo">
          <img src={logo} alt="logo" />
        </div>
        <br />
        <div className="university-name">
          <h1 className="title-app">Universidad Católica del Norte</h1>
        </div>
      </div>
    </>
  )
}

export default Logo
