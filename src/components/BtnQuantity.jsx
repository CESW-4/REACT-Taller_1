import { useEffect, useState } from "react";

const btnQuantity = ({setproductsInCart,productsInCart,product}) => {
  const indexProduct=productsInCart.findIndex(item=>item.id===product.id);
  const productInCart=productsInCart[indexProduct];

  const [Quantity, setQuantity] = useState(productInCart.quantityAdded);

  useEffect(() => {
    setQuantity(productInCart.quantityAdded);
  }, [productsInCart])
  

  const ManageProductCart=(value)=>{
    let flag=true;

    if(value===1 && productInCart.quantityAvailable<=productInCart.quantityAdded){
      value=0;
      flag=false;
    }

    productsInCart[indexProduct]={
      ...productInCart,
      quantityAdded:Number(productInCart.quantityAdded)+value
    };

    productsInCart=removeProductsInCar();


		if(flag){
			setproductsInCart([...productsInCart]);
		}else{
			alert("No hay unidades disponibles");
		}
	}

  const removeProductsInCar=()=>{
    return productsInCart.filter(product=>product.quantityAdded>0);
	}

  return (
    <div className="btnQuantity">
      <p>{Quantity}</p> 
      <div>
        <button onClick={()=>ManageProductCart(-1)}>-1</button>
        <button onClick={()=>ManageProductCart(1)}>+1</button>
      </div>
    </div>
  )
}
export default btnQuantity;