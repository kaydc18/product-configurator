import React from 'react'

const ProductInfo = (props) => {
  let holdText = "Please add text or select a color"
  let showText = ""
  let showTextColor = ""

  if (props.productInfo.setTextColor !== "") {
    holdText = ""
    showTextColor = `set=setTextColor[${props.productInfo.setTextColor}]`
  }
  
  if (props.productInfo.setText !== "") {
    holdText = ""
    showText=`set=setText[${props.productInfo.setText}]`
  }

  return (
    <div className="rounded-lg bg-slate-500 text-white font-mono px-5 py-7">
      <p>{holdText}</p>
      <p>{showTextColor}</p>
      <p>{showText}</p>
    </div>
  )
}

export default ProductInfo