const AddToCart = ({setproducts,products,product}) => {

	const handleAddCart=()=>{
		
		if(product.quantityAvailable){
			const newQuantityAvailable=product.quantityAvailable-1;
			const productUpdate={...product,quantityAvailable:newQuantityAvailable};

			const indexProduct=products.findIndex(item=>item.id===product.id);
			products[indexProduct]=productUpdate;
			setproducts([...products]);
		}else{
			alert("No hay mas productos")
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