import Product from "./Product";
const ProductList = ({products}) => {
    
    return(
        <div>
            {products.map(productItem => (
				<Product
					key={productItem.id}
					name={productItem.name}
					price={productItem.price}
					quantityAvailable={productItem.quantityAvailable}
					description={productItem.description}
                    imageUrl={productItem.imageUrl}
				/>
			))}
        </div>
    );
};
export default ProductList;
