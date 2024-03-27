import './ProductGrid.css'
import Product from '../../types/Product'
import ProductView from '../ProductCard/ProductCard'

function ProductGrid() {

    const hardCodedProducts: Product[] = [
        { "product_id": 1, "title": "Product A", "image": "https://picsum.photos/id/6/200" },
        { "product_id": 2, "title": "Gizmo B", "image": "https://picsum.photos/id/11/200" },
        { "product_id": 3, "title": "Widget C", "image": "https://picsum.photos/id/40/200" },
        { "product_id": 4, "title": "Product A", "image": "https://picsum.photos/id/6/200" },
        { "product_id": 5, "title": "Gizmo B", "image": "https://picsum.photos/id/11/200" },
        { "product_id": 6, "title": "Widget C", "image": "https://picsum.photos/id/40/200" },
        { "product_id": 7, "title": "Product A", "image": "https://picsum.photos/id/6/200" },
    ]

    const headerText = "Products"

    return (
        <div className="container text-center">
            <p>{headerText}</p>
            <div className="row ">
                {
                    hardCodedProducts.map((product) => {
                        return (
                            <div className="col-md-4 col-sm-12">
                                <ProductView product={product}/>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default ProductGrid
