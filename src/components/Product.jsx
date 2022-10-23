import { useEffect, useState } from 'react';
import AddToCart from './AddToCart'
import ImageProduct from './ImageProduct';
const Product = ({ product,setproductsInCart,productsInCart }) => {
    const productInCart=productsInCart.filter(item=>item.id===product.id)[0];
    const [Quantity, setQuantity] = useState(product.quantityAvailable-(productInCart?.quantityAdded || 0) );

    useEffect(() => {
        setQuantity(product.quantityAvailable-(productInCart?.quantityAdded || 0));
    }, [productsInCart]);

    return (
        <div className='card_product'>
            <ImageProduct url={product.imageUrl}/>
            <div className='desc_product'>
                <h2>{product.name}</h2>
                <p className='bold text-red'>$ {product.price}</p>
                <p className='light'>{product.description}</p>
                <p className='light'>
                    <span className='bold'>Unidades disponibles:</span> 
                    <span className='text-red bold ml-1'>{(Quantity)}</span>
                </p>
                <div className='container-btn'>
                    <AddToCart 
                        setproductsInCart={setproductsInCart} 
                        productsInCart={productsInCart} 
                        product={product}/>
                </div>
            </div>
        </div>
    );
};

export default Product;