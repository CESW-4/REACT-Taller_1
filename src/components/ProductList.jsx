import Product from "./Product";

const ProductList = ({products,setproductsInCart,productsInCart}) => {
    
    return(
        <div>
            {products.map(productItem => (
				<Product
					key={productItem.id}
					product={productItem}
					productsInCart={productsInCart}
					setproductsInCart={setproductsInCart}
				/>
			))}
        </div>
    );
};
export default ProductList;
