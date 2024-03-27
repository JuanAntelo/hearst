import Product from "../../types/Product"

interface ProductViewProps {
    product: Product
}

function ProductView({ product } : ProductViewProps) {
    return (
        <>
            <p>{product.title}</p>
            <img src={product.image}/>
        </>
    )
}

export default ProductView;
