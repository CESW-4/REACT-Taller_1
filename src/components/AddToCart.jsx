const AddToCart = ({products,product,productsInCart,setproductsInCart}) => {

	const handleAddCart=()=>{
		let flag=true;
		if(productsInCart.some(item=>item.id===product.id)){
			const indexProduct=productsInCart.findIndex(item=>item.id===product.id);
			const productInCar=productsInCart[indexProduct];
			// Valida si aun hay unidades del producto seleccionado
			if(productInCar.quantityAvailable>productInCar.quantityAdded){
				productsInCart[indexProduct]={
					...productInCar,
					quantityAdded:productInCar.quantityAdded+1
				};
			}else{
				flag=false;
			}
			
		}else{
			// Valida que inicialmente hayan unidades mayores a 0
			if(product.quantityAvailable>0){
				productsInCart.unshift({
					...product,
					quantityAdded:1,
				});
			}else{
				flag=false;
			}
		}

		if(flag){
			setproductsInCart([...productsInCart]);
		}else{
			alert("No hay unidades disponibles");
		}
	}

    return (
		<button 
			onClick={()=>handleAddCart()}>
			Add to Cart
		</button>
	);
};

export default AddToCart;