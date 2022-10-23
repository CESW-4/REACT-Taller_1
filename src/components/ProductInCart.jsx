
import ImageProduct from './ImageProduct';
import BtnQuantity from './BtnQuantity';
import { useState , useEffect } from 'react';

const ProductInCart = ({product,setproductsInCart,productsIncart,setSummaryInfo,SummaryInfo,Cupon}) => {
     // Variables y hooks que contribuiran a mostrar las unidades disponibles del producto actual
    const productInCart=productsIncart.filter(item=>item.id===product.id)[0];
    const [Quantity, setQuantity] = useState(product.quantityAvailable-(productInCart?.quantityAdded || 0) );

    useEffect(() => {
        setQuantity(product.quantityAvailable-(productInCart?.quantityAdded || 0));
    }, [productsIncart]);
    return (
      <div className='card_product inCart'>
          <ImageProduct url={product.imageUrl}/>
          <div className='desc_product'>
                  <h2>{product.name}</h2>
                  <p className='light'>{product.description}</p>
                  <p className='light'>
                      <span className='bold'>Unidades disponibles:</span> 
                      <span className='text-red bold ml-1'>{(Quantity)}</span>
                  </p>
                  <BtnQuantity 
                    setproductsInCart={setproductsInCart} 
                    productsInCart={productsIncart} 
                    product={product}
                    setSummaryInfo={setSummaryInfo}
                    SummaryInfo={SummaryInfo}
                    Cupon={Cupon}
                    />
          </div>
      </div>
    )
}
export default ProductInCart;