import ProductIncart from "./ProductInCart";

const ProductListInCart = ({productsIncart,setproductsInCart}) => {
  return (
    <div>
        {productsIncart?.map((product)=>(
            <ProductIncart
                key={product.id}
                product={product}
                productsIncart={productsIncart}
                setproductsInCart={setproductsInCart}
            />
        ))}
    </div>
  )
}
export default ProductListInCart;
