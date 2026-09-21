import { useState, useEffect } from 'react'

import './App.css'

const ProductCard = ({ image, title, price }) => {
  return (
    <div className="product-card">
      <img src={image} alt={title} className="product-image" />
      <h3>{title}</h3>
      <p>${price.toFixed(2)}</p>
    </div>
  )
}

const PAGE_SIZE = 10;

function App() {

  const [products, setProducts] = useState([])
  const [currentPage, setCurrentPage] = useState(0);
  const fetchData = async () =>{
    const data = await fetch('https://dummyjson.com/products')
    const jsonData = await data.json()
    setProducts(jsonData.products)
  };
  useEffect(() => {
    fetchData();
  }, []);

  const totalProducts = products.length;
  const noOfPages = Math.ceil(totalProducts / PAGE_SIZE);
  const start= currentPage * PAGE_SIZE;
  const end = start + PAGE_SIZE;
  
  return !products.length ? ( 
    <h2>Loading...</h2>
  ) : (
    <div className="App">
      <h1>Pagination</h1>
      <div className="pagination">
      {[...Array(noOfPages).keys()].map((page) => (
        <span
          key={page}
          className="page-number"
          onClick={() => setCurrentPage(page)}
        >
          {page + 1}
        </span>
      ))}</div>
      
      <div className="products-container">
      {products.slice(start, end).map((product) => (
        <ProductCard
          key={product.id}
          image={product.thumbnail}
          title={product.title}
          price={product.price}
        />
      ))}
    </div>
    </div>
    
  )
}

export default App
