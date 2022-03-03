import React, { Component } from 'react'

export const Button = ({children,btnVarian,...rest}) => {
    return (
      <button className={`btn ${btnVarian}`} {...rest}>{children}</button>
    )
}

export default Button
