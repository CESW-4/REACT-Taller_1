import Product from "./Product";
const ProductList = ({products,setproducts}) => {
    
    return(
        <div>
            {products.map(productItem => (
				<Product
					key={productItem.id}
					setproducts={setproducts}
					product={productItem}
					products={products}
					// name={productItem.name}
					// price={productItem.price}
					// quantityAvailable={productItem.quantityAvailable}
					// description={productItem.description}
                    // imageUrl={productItem.imageUrl}
				/>
			))}
        </div>
    );
};
export default ProductList;
