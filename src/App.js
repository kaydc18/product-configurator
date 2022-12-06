import React, { useState } from 'react'
import './stylesheets/App.css';
import ProductForm from './components/ProductForm';
import ProductInfo from './components/ProductInfo';
import ProductDisplay from './components/ProductDisplay';

function App() {

  const [newProductSelection, setProductSelection] = useState({
    setText: "",
    setTextColor: ""
  })

  const handleInputChange = event => {
    setProductSelection({
      ...newProductSelection,
      [event.currentTarget.name]: event.currentTarget.value
    })
  }

  return (
    <div>
      <header className="flex justify-center w-full p-3 text-white">
        <h1 className="text-3xl font-bold">Product Configurator</h1>
      </header>
      <main className="grid gap-4 grid-cols-2 w-3/4 mx-auto">
        <ProductForm handleProductChange={handleInputChange} />
        <section className="flex flex-col justify-between items-stretch">
          <ProductDisplay textAttributes={newProductSelection} />
          <ProductInfo productInfo={newProductSelection} />
        </section>
      </main>
    </div>
  );
}

export default App;
