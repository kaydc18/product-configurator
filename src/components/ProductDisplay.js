import React from 'react'

const ProductDisplay = (props) => {
  let displayText = "Enter text to display"
  let fontColor = {
    color: "#000000",
  } 


  if (props.textAttributes.setText !== "") {
    displayText = props.textAttributes.setText
  }

  if (props.textAttributes.setTextColor !== "") {
    fontColor = {
      color: props.textAttributes.setTextColor,
    }
  }

  return(
    <div className="rounded-lg bg-white font-mono px-5 py-6 text-black w-full">
      <p style={fontColor} >{displayText}</p>
    </div>
  )

}

export default ProductDisplay