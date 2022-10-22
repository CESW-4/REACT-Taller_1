import { useEffect , useState } from "react";
import ProductListInCart from "./ProductListInCart";

const Cart = ({productsInCart,setproductsInCart}) => {
    const [Cupon, setCupon] = useState(0);
    const [SummaryInfo, setSummaryInfo] = useState({
        subtotal:productsInCart.reduce((previous,current)=>current.price+previous,0),
        total(){
            return this.subtotal-(Cupon/100)*this.subtotal;
        }
    });

    useEffect(() => {
        setSummaryInfo({
            ...SummaryInfo,
            total(){
                return this.subtotal-(Cupon/100)*this.subtotal;
            }
        })
    }, [Cupon])
    
    

    const handleCupon=({target})=>{
        const {value} = target;
        if(Number(value)<0 || Number(value)>100) return;
        setCupon(Number(value));
        setSummaryInfo({...SummaryInfo})
    }
    return (
        <div>
            <div className="products-info">
                <header>
                    <h2>Shopping Cart</h2>
                </header>
                <hr />
                <ProductListInCart productsIncart={productsInCart} setproductsInCart={setproductsInCart} />
            </div>
            <div className="invoice-info">
                <header>
                    <h2>Summary</h2>
                </header>
                <hr />

                <section>
                    <form>
                        <input 
                            type="number"
                            placeholder="Ingresa numero de cupon"
                            onChange={(e)=>handleCupon(e)}
                            value={Cupon}
                            />
                    </form>
                    <hr />
                    <div className="desc-invoice">
                        <p>SUBTOTAL <span>${SummaryInfo.subtotal}</span></p>
                        <p>SHIPPING <span>FREE</span></p>
                        <p>COUPON <span>${Cupon}</span></p>
                    </div>
                    <hr />
                    <h3>TOTAL <span>${SummaryInfo.total()}</span></h3>
                </section>
            </div>
        </div>
    );
}

export default Cart