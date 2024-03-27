import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import ProductGrid from './components/ProductGrid/ProductGrid'
import Product from './types/Product'
import Content from './types/Content'
import { useEffect, useState } from 'react'

function App() {
  const [productData, setProductData] = useState<Product[] | null>();
  const [contentData, setContentData] = useState<Content[] | null>();
  const [error, setError] = useState(null);

  const fetchData = async () => {
    // Only 2 endpoints so just do them one after the other, if one endpoint fails then 
    // auto fail both requests and return error to user
    try {
      // Fetch products
      const productResponse = await fetch("https://cx-interview-api.dev.ecmapps.com/products?page=hello-world");
      if (!productResponse.ok) {
        throw new Error(`HTTP error: Status ${productResponse.status}`);
      }
      let productDataJSON = await productResponse.json();
      setProductData(productDataJSON.products);
      
      // Fetch content
      const contentResponse = await fetch("https://cx-interview-api.dev.ecmapps.com/content?page=hello-world");
      if (!contentResponse.ok) {
        throw new Error(`HTTP error: Status ${contentResponse.status}`);
      }
      let contentDataJSON = await contentResponse.json();
      setContentData(contentDataJSON.data);
      
      // Success so set error state to null
      setError(null);
    } catch (err: any) {
      setError(err.message);
      setProductData(null);
      setContentData(null)
    }
  };

  useEffect(() => {
    fetchData();
  }, []);


  return (
    <>
      {error && <div className="text-danger">{error}</div>}
      {productData && contentData && <ProductGrid products={productData} content={contentData}/>}
    </>
  )
}

export default App
