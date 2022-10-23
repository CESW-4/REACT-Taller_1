const AddToCart = ({product,productsInCart,setproductsInCart}) => {

	const handleAddCart=()=>{
		// Bandera que permitira agregar o no unidades de un producto, mientras este este disponible
		let flag=true;

		// Valida si el producto ya esta en el carrito, esto con el fin de evitar repetirlos
		if(productsInCart.some(item=>item.id===product.id)){
			// Busca el indice del producto actual en los productos que estan en el carro
			const indexProduct=productsInCart.findIndex(item=>item.id===product.id);
			const productInCart=productsInCart[indexProduct];
			// Valida si aun hay unidades del producto actual
			if(productInCart.quantityAvailable>productInCart.quantityAdded){
				productsInCart[indexProduct]={
					...productInCart,
					quantityAdded:productInCart.quantityAdded+1
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

		// Si todo es correcto, agrega los cambios al hook
		if(flag){
			setproductsInCart([...productsInCart]);
		}else{
			// De lo contrario muestra un mensaje de alerta
			alert("No hay unidades disponibles");
		}
	}

    return (
		<button 
			className="btn btn-primary"
			onClick={()=>handleAddCart()}>
			Add to Cart
		</button>
	);
};

export default AddToCart;