import { useState } from "react";

const Cart = () => {
    const [product, setproduct] = useState([]);
    const [invoiceInfo, setinvoiceInfo] = useState([]);

    return (
        <div>
            <div className="products-info">
                <header>
                    <h2>Shopping Cart</h2>
                </header>
                <hr />

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
                            />
                    </form>
                    <hr />
                    <div className="desc-invoice">
                        <p>SUBTOTAL <span>$600</span></p>
                        <p>SHIPPING <span>FREE</span></p>
                        <p>COUPON <span>$10</span></p>
                    </div>
                    <hr />
                    <h3>TOTAL <span>$590</span></h3>
                </section>
            </div>
        </div>
    );
}

export default Cart