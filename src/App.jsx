import ProductList from './components/ProductList';
import { useState } from 'react';
import CartBtn from './components/CartBtn';
import Cart from './components/Cart';

function App() {
  const products=[
    {id: '1u',name: 'Nike Dunk High Retro',price: 120,quantityAvailable: 5, description:'Really good Nike shoes', imageUrl:'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/608d6f2b-f6eb-4a5f-8535-6f24b081e011/dunk-high-retro-zapatillas-tjf3hZ.png'},
    {id: '2u',name: 'Nike Zoom Fly 5',price: 150,quantityAvailable: 3,description: 'good Nike shoes',imageUrl: 'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/cdb4e7b0-7772-41aa-82c0-4306f53050b6/zoom-fly-5-zapatillas-de-running-carretera-6PMLS5.png'},
    {id: '3u',name: 'Nike Streetgato',price: 180,quantityAvailable: 2,description: 'Really Nike shoes',imageUrl: 'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/c526742e-8259-44bd-a37e-d27cf4e29194/streetgato-botas-de-futbol-zhWVgz.png'},
    {id: '4u',name: 'Zoom Freak 4',price: 150,quantityAvailable: 3,description: 'Really good Nike shoes',imageUrl: 'https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/dd30bba7-ae65-4fc3-975c-454f9b8d7ddd/zoom-freak-4-zapatillas-de-baloncesto-8Hdw9M.png'}
  ];

  const [productsInCart, setproductsInCart] = useState([]);
  // hook para mostrar o esconder el carrito
  const [showCart, setshowCart] = useState(false);

  return (
    <div className='container'>
      <header className='site-header'> 
        <img src="./nike.png"/>
        <CartBtn quantityProducts={productsInCart.length} showCart={showCart} setshowCart={setshowCart}/>
      </header>
      { !showCart 
        ?
          <ProductList 
            products={products} 
            setproductsInCart={setproductsInCart} 
            productsInCart={productsInCart}/>
        :
          <Cart productsInCart={productsInCart} setproductsInCart={setproductsInCart}/>
      }
    </div>
  )
}

export default App;
