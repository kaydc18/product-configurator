import React from 'react'

const ProductInfo = (props) => {
  let holdText = "Please add text or select a color"
  let showText = ""
  let showTextColor = ""

  if (props.productInfo.setTextColor != "") {
    holdText = ""
    showTextColor = `set=setTextColor[${props.productInfo.setTextColor}]`
  }
  
  if (props.productInfo.setText != "") {
    holdText = ""
    showText=`set=setText[${props.productInfo.setText}]`
  }

  return(
    <section className="rounded-lg bg-slate-500 text-white font-mono p-5 ">
      <p>{holdText}</p>
      <p>{showTextColor}</p>
      <p>{showText}</p>
    </section>
  )

}

export default ProductInfo