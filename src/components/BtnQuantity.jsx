import { useEffect, useState } from "react";

const btnQuantity = ({setproductsInCart,productsInCart,product,setSummaryInfo,SummaryInfo,Cupon}) => {
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
      ...product,
      quantityAdded:Number(productInCart.quantityAdded)+value
    };

    productsInCart=removeProductsInCar();

    setSummaryInfo({
      ...SummaryInfo,
      subtotal:productsInCart.reduce((previous,current)=>(current.price*current.quantityAdded)+previous,0),
      total(){
          return this.subtotal-(Number(Cupon)/100)*this.subtotal;
      }
  })
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
    <div className="container_btnquantity">
        <button onClick={()=>ManageProductCart(-1)} className="btn btn-secondary">-1</button>
        <p>{Quantity}</p> 
        <button onClick={()=>ManageProductCart(1)} className="btn btn-secondary">+1</button>
    </div>
  )
}
export default btnQuantity;