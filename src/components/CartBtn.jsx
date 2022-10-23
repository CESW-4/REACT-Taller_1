
import { FaCartPlus,FaChevronCircleLeft } from 'react-icons/fa';

const CartBtn = ({quantityProducts,showCart,setshowCart}) => {
    return (
        <>
            { !showCart 
                ?
                    <button onClick={()=>setshowCart(!showCart)} className="btn btn-secondary">
                        <FaCartPlus/>
                        <span className='bubble'>{quantityProducts}</span>
                    </button>
                :
                    <button onClick={()=>setshowCart(!showCart)} className="btn btn-secondary">
                        <FaChevronCircleLeft/>
                    </button>
            }
        </>
    )
}
export default CartBtn;