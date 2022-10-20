import AddToCart from './AddToCart'
const Product = ({ id, name, price, quantityAvailable, description, imageUrl }) => {
    return (
        <div>
            <p>{id}</p>
            <p>{name}</p>
            <p>{price}</p>
            <p>{quantityAvailable}</p>
            <p>{description}</p>
            <p>{imageUrl}</p>
            <AddToCart/>
        </div>
    );
};

export default Product;