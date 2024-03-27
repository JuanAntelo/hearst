import './ProductCard.css'
import Product from "../../types/Product"
import { useState } from 'react'
import ReactModal from 'react-modal';

interface ProductViewProps {
    product: Product
}

interface modalType {
    showModal: boolean,
    imageUrl: string | null
}


function ProductView({ product } : ProductViewProps) {

    const [showModal, setShowModal] = useState<modalType>({
        showModal: false,
        imageUrl: null
    })

    function onProductCardClick(product: Product) {
        setShowModal({
            showModal: true,
            imageUrl: product.image
        })
    }

    function closeModal() {
        setShowModal({
            showModal: false,
            imageUrl: null
        })
    }

    const customModalStyles = { 
        content : { 
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
            width: 500
        }
    }

    return (
        <>
            <ReactModal isOpen={showModal.showModal} style={customModalStyles}>
                <div className="product-modal-content">
                    <button onClick={closeModal}>Close Modal</button>
                    <div>
                        <img src={showModal.imageUrl!}/>
                    </div>
                </div>
            </ReactModal>
            <div className="product-card" onClick={() => onProductCardClick(product)}>
                <p>{product.title}</p>
                <img src={product.image}/>
            </div>
        </>
    )
}

export default ProductView;
