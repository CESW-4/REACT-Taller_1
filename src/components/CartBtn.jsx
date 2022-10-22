
import { FaCartPlus,FaChevronCircleLeft } from 'react-icons/fa';
const CartBtn = ({quantityProducts,showCart,setshowCart}) => {
    return (
        <>
            { !showCart 
                ?
                    <button onClick={()=>setshowCart(!showCart)}>
                        <FaCartPlus/>
                        <p>{quantityProducts} Products</p>
                    </button>
                :
                    <button onClick={()=>setshowCart(!showCart)}>
                        <FaChevronCircleLeft/>
                        Volver
                    </button>
            }
        </>
    )
}
export default CartBtn;