import React from 'react'

export const Button = ({btnClass, title}: Button) => {
  return (
    <button className={`btn ${btnClass}`}>{title}</button>
  )
}
