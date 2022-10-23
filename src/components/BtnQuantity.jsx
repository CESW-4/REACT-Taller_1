import { useEffect, useState } from "react";

const btnQuantity = ({setproductsInCart,productsInCart,product,setSummaryInfo,SummaryInfo,Cupon}) => {
  // Variables que nos contribuiran para mostrar los datos de la cantidad de productos
  const indexProduct=productsInCart.findIndex(item=>item.id===product.id);
  const productInCart=productsInCart[indexProduct];
  // Variable para deshabilitar los botones en caso de que no hayan mas unidades de un producto
  const disabledBtn=productInCart?.quantityAvailable<=productInCart?.quantityAdded;
  const [Quantity, setQuantity] = useState(productInCart.quantityAdded);

  useEffect(() => {
    setQuantity(productInCart.quantityAdded);
    
  }, [productsInCart])
  

  /**
   * Funcion que servira para aumentar o disminuir las unidades de un producto del carrito
   * @param {*} value 
   */
  const ManageProductCart=(value)=>{
    let flag=true;

    // Valida si se va a aumentar las unidades de un producto, y si aun hay unidades disponbles de este
    if(value===1 && productInCart.quantityAvailable<=productInCart.quantityAdded){
      value=0;
      flag=false;
    }

    productsInCart[indexProduct]={
      ...product,
      quantityAdded:Number(productInCart.quantityAdded)+value
    };

    // Si la cantidad de unidades de algun producto en el carrito es 0 se saca del carrito
    productsInCart=removeProductsInCar();

    // Se modifican los valores de la factura dependiendo de las unidades del producto actual
    setSummaryInfo({
        ...SummaryInfo,
        subtotal:productsInCart.reduce((previous,current)=>(current.price*current.quantityAdded)+previous,0),
        total(){
            return this.subtotal-Cupon;
        }
    })

		if(flag){
			setproductsInCart([...productsInCart]);
		}else{
			alert("No hay unidades disponibles");
		}
	}

  /**
   * Funcion encargada de eliminar los productos del carrito si sus unidades son iguales a 0
   * @returns 
   */
  const removeProductsInCar=()=>{
    return productsInCart.filter(product=>product.quantityAdded>0);
	}

  return (
    <div className="container_btnquantity">
        <button onClick={()=>ManageProductCart(-1)} className="btn btn-secondary">-1</button>
        <p>{Quantity}</p> 
        <button 
          onClick={()=>ManageProductCart(1)} 
          className={`btn btn-secondary ${disabledBtn?"disabled":""}`}
          disabled={disabledBtn}>+1</button>
    </div>
  )
}
export default btnQuantity;