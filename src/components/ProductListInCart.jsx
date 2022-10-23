import ProductIncart from "./ProductInCart";

const ProductListInCart = ({productsIncart,setproductsInCart,setSummaryInfo,SummaryInfo,Cupon}) => {
  return (
    <div className="product_list">
        { productsIncart.length>0?
            productsIncart?.map((product)=>(
              <ProductIncart
                  key={product.id}
                  product={product}
                  productsIncart={productsIncart}
                  setproductsInCart={setproductsInCart}
                  setSummaryInfo={setSummaryInfo}
                  SummaryInfo={SummaryInfo}
                  Cupon={Cupon}

              />
          ))
        : <h2 className="light">No hay productos en el carrito.</h2>
        }
    </div>
  )
}
export default ProductListInCart;
