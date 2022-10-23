import ProductIncart from "./ProductInCart";

const ProductListInCart = ({productsIncart,setproductsInCart,setSummaryInfo,SummaryInfo,Cupon}) => {
  return (
    <div className="product_list">
        {productsIncart?.map((product)=>(
            <ProductIncart
                key={product.id}
                product={product}
                productsIncart={productsIncart}
                setproductsInCart={setproductsInCart}
                setSummaryInfo={setSummaryInfo}
                SummaryInfo={SummaryInfo}
                Cupon={Cupon}

            />
        ))}
    </div>
  )
}
export default ProductListInCart;
