import { useEffect , useState } from "react";
import ProductListInCart from "./ProductListInCart";

const Cart = ({productsInCart,setproductsInCart}) => {
    // Hook que contendra la info del cupon
    const [Cupon, setCupon] = useState(0);
    // Hook que contendra la info de la factura
    const [SummaryInfo, setSummaryInfo] = useState({
        subtotal:productsInCart.reduce((previous,current)=>(current.price*current.quantityAdded)+previous,0),
        total(){
            return this.subtotal-(Number(Cupon)/100)*this.subtotal;
        }
    });

    useEffect(() => {
        setSummaryInfo({
            ...SummaryInfo,
            total(){
                return this.subtotal-(Number(Cupon)/100)*this.subtotal;
            }
        })
    }, [Cupon,productsInCart])
    
    
    /**
     * Funcion intermediaria que modifica el valor del Cupon con el valor digitado
     * @param {*} param0 
     * @returns 
     */
    const handleCupon=({target})=>{
        const {value} = target;
        if(Number(value)<0 || Number(value)>100) {
            alert("Solo se permiten numeros entre 0 y 100");
            return;
        }
        setCupon(Number(value));
        setSummaryInfo({...SummaryInfo});
    }
    return (
        <div className="cart_info">
            <div>
                <header className="site-header">
                    <h2>Shopping Cart</h2>
                </header>
                <ProductListInCart 
                    productsIncart={productsInCart} 
                    setproductsInCart={setproductsInCart}
                    setSummaryInfo={setSummaryInfo}
                    SummaryInfo={SummaryInfo}
                    Cupon={Cupon}
                    />
            </div>
            <div className="invoice-info">
                <header>
                    <h2>Summary</h2>
                </header>

                <section>
                    <form>
                        <input 
                            type="text"
                            className="inpt"
                            placeholder="Ingresa numero de cupon"
                            onChange={(e)=>handleCupon(e)}
                            value={Cupon}
                            />
                    </form>
                    <div className="desc-invoice">
                        <p>SUBTOTAL: <span className="text-red">${SummaryInfo.subtotal}</span></p>
                        <p>SHIPPING: <span className="text-red">FREE</span></p>
                        <p>COUPON: <span className="text-red">${Cupon}</span></p>
                    </div>
                    <hr />
                    <h3>TOTAL: <span className="text-red">${SummaryInfo.total()}</span></h3>
                </section>
            </div>
        </div>
    );
}

export default Cart;