import React from 'react'
import logo from './Images/logo.svg'

function Logo({width = '100px'}) {
  return (
    <div>
      <img src={logo} height='50' width='90' alt="logo" />
    </div>
  )
}

export default Logo