import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import ProductGrid from './components/ProductGrid/ProductGrid'
import Product from './types/Product'
import Content from './types/Content'

function App() {

  const hardCodedProducts: Product[] = [
    { "product_id": 1, "title": "Product A", "image": "https://picsum.photos/id/6/200" },
    { "product_id": 2, "title": "Gizmo B", "image": "https://picsum.photos/id/11/200" },
    { "product_id": 3, "title": "Widget C", "image": "https://picsum.photos/id/40/200" },
    { "product_id": 4, "title": "Product A", "image": "https://picsum.photos/id/6/200" },
    { "product_id": 5, "title": "Gizmo B", "image": "https://picsum.photos/id/11/200" },
    { "product_id": 6, "title": "Widget C", "image": "https://picsum.photos/id/40/200" },
    { "product_id": 7, "title": "Product A", "image": "https://picsum.photos/id/6/200" },
  ]

  const contentData: Content[] = [
      { "type": "html", "contents": "<p>This is row 1 of content.</p>", "position": "row-1" },
      { "type": "html", "contents": "<p>This is row 3 of content.</p>", "position": "row-3" }
  ]


  return (
    <>
      <ProductGrid products={hardCodedProducts} content={contentData}/>
    </>
  )
}

export default App
