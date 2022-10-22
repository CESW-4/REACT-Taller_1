
import ImageProduct from './ImageProduct';
import BtnQuantity from './BtnQuantity';

const ProductInCart = ({product,setproductsInCart,productsIncart}) => {
  return (
    <div>
        <ImageProduct url={product.imageUrl}/>
        <div className='desc-product'>
                <h2>{product.name}</h2>
                <p>{product.description}</p>
                <BtnQuantity 
                  setproductsInCart={setproductsInCart} 
                  productsInCart={productsIncart} 
                  product={product}/>
        </div>
    </div>
  )
}
export default ProductInCart;