import React from 'react'

const ColorTypes = (props) => {

  const backgroundColor = {
    backgroundColor: props.color,
  }


  const handleClick = (event) => {
    event.preventDefault()
    props.handleInput(event)
  }

  return(
    <button className="rounded-full w-12 h-12 mx-2" style={backgroundColor} name="setTextColor" value={props.color} onClick={handleClick}>
    </button>
  )
}

export default ColorTypes