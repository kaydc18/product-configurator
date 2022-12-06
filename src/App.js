import './stylesheets/App.css';
import ProductForm from './components/ProductForm';
import ProductInfo from './components/ProductInfo';

function App() {
  return (
    <div>
      <header className="flex justify-center w-full p-3">
        <h1 className="text-3xl font-bold">Product Configurator</h1>
      </header>
      <main className="flex justify-center w-3/4 mx-auto">
        <ProductForm />
        <ProductInfo />
      </main>
    </div>
  );
}

export default App;
