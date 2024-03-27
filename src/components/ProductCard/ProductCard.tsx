import Product from "../../types/Product"

interface ProductViewProps {
    product: Product
}

function ProductView({ product } : ProductViewProps) {
    return (
        <>
            <p>{product.product_id}</p>
            <p>{product.title}</p>
            <img src={product.image}/>
        </>
    )
}

export default ProductView;
