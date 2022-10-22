import AddToCart from './AddToCart'
import ImageProduct from './ImageProduct';
const Product = ({ product,products,setproducts }) => {
    return (
        <div>
            {/* <p>{id}</p> */}
            <ImageProduct url={product.imageUrl}/>
            <div className='desc-product'>
                <h2>{product.name}</h2>
                <p>{product.price}</p>
                <p>{product.quantityAvailable}</p>
                <p>{product.description}</p>
                <AddToCart setproducts={setproducts} products={products} product={product}/>
            </div>
        </div>
    );
};

export default Product;