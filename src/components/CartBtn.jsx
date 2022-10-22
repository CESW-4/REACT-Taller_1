import { useState } from 'react';
import { FaCartPlus } from 'react-icons/fa';
const CartBtn = () => {
    const [numProducts, setnumProducts] = useState(0);
    return (
        <button>
            <FaCartPlus/>
            <p>{numProducts} Products</p>
        </button>
    )
}
export default CartBtn;