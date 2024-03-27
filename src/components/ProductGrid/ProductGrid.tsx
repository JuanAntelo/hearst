import './ProductGrid.css'
import Product from '../../types/Product'
import Content from '../../types/Content'
import ProductView from '../ProductCard/ProductCard'
import ContentRow from '../ContentRow/ContentRow'

/*
    Requirements:
    Support the following potentional contentData structures
    const contentData: Content[] = [
        { "type": "html", "contents": "<p>This is row 1 of content.</p>", "position": "row-1" },
        { "type": "html", "contents": "<p>This is row 3 of content.</p>", "position": "row-3" }
    ]

    const contentDataB: Content[] = [
        { "type": "html", "contents": "<p>This is row 1 of content.</p>", "position": "row-1" },
    ]

    const contentDataC: Content[] = [
        { "type": "html", "contents": "<p>This is row 3 of content.</p>", "position": "row-3" }
    ]

    const contentDataD: Content[] = []

    -
    Also Support ProductData:
    [
        { "product_id": 1, "title": "Product A", "image": "https://picsum.photos/id/6/200" },
        { "product_id": 2, "title": "Gizmo B", "image": "https://picsum.photos/id/11/200" },
        { "product_id": 3, "title": "Widget C", "image": "https://picsum.photos/id/40/200" },
    ]
*/

interface ProductGridProps {
    content: Content[]
    products: Product[]

}

function ProductGrid({content, products}: ProductGridProps) {
    const headerText = "Products"

    // This variable will render the final jsx
    let productGridRender = []

    // This conditional is to support contentData being empty (i.e same render as Part 1)
    if ( content.length === 0 ) {
        productGridRender.push(
            products.map((product) => {
                return (
                    <div className="col-md-4 col-sm-12" key={product.product_id}>
                        <ProductView product={product}/>
                    </div>
                )
            })
        )
    }

    // Now to support content positions 1 and/or 3 
    let contentDataPositions = []

    for ( let i = 0; i < content.length; i++ ) {
        const contentDataPosition = extractRowPosition(content[i])
        contentDataPositions.push(contentDataPosition)
    }

    // Handle row-1 
    let firstGrid = products.slice(0, 3)

    if ( contentDataPositions.indexOf(1) !== -1 ) {
        productGridRender.push(<ContentRow key={1} content={getContentDataItemFromRowPosition(1)!}/>)
    } 

    productGridRender.push(
        firstGrid.map((product) => {
            return (
                <div className="col-md-4 col-sm-12" key={product.product_id}>
                    <ProductView product={product}/>
                </div>
            )
        })
    )

    // Handle row-3 / the rest of the products
    if ( contentDataPositions.indexOf(3) !== -1 ) {
        productGridRender.push(<ContentRow key={3} content={getContentDataItemFromRowPosition(3)!}/>)
    }

    let secondGrid = products.slice(3)

    productGridRender.push(
        secondGrid.map((product) => {
            return (
                <div className="col-md-4 col-sm-12" key={product.product_id}>
                    <ProductView product={product}/>
                </div>
            )
        })
    )

    // helper functions
    function extractRowPosition(contentItem: Content) {
        const position: string = contentItem.position
        let result: number = parseInt(position.slice(position.indexOf("-") + 1))
        return result
    }

    function getContentDataItemFromRowPosition(rowPosition: number) {
        for ( let i = 0; i < content.length; i++ ) {
            const contentDataItem = content[i]
            if (contentDataItem.position === ("row-" + rowPosition.toString())  ) {
                return contentDataItem
            }
        }
    }

    return (
        <div className="container text-center">
            <p>{headerText}</p>
            <div className="row">
                {productGridRender}
            </div>
        </div>
    )
}

export default ProductGrid
