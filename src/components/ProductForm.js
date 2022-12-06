import React from 'react'
import ColorTypes from './ColorTypes'

const TEXTCOLOR = {"textColor": [ 
  {name: "red", color: "#FF0000"},
  {name: "sage", color: "#77815C"},
  {name: "navy", color: "#003166"}
]}

const ProductForm = (props) => {
  const handleInput = event => {
    props.handleProductChange(event)
  }

  const handleTextInput = event => {
    if (event.key === "Enter" || event.type === "blur") {
      props.handleProductChange(event)
    }
  }

  const createTextColor = TEXTCOLOR["textColor"].map((textColor) => {
   return <ColorTypes key={textColor.name} name={textColor.name} color={textColor.color} handleInput={handleInput} />
  })

  return(
    <aside className="border-solid border-2 border-dark-gray rounded-lg p-5 bg-white">
      <form>
        <div>
          <label>
            Text: 
            <input 
              name="setText"
              type="text"
              onKeyDown={handleTextInput}
              onBlur={handleTextInput}
              placeholder="Enter your text here"
              className="border-solid border-2 border-gray rounded-lg px-2 ml-2" />
          </label>
        </div>
        <div className="mt-4">
          <label>
            Select Text Color: 
            <div className="flex justify-start pt-2">{createTextColor}</div>
          </label>
        </div>
      </form>
    </aside>
  )

}

export default ProductForm