import { addItemToCart } from "../../context/actions/cartActions";
import { useCart } from "../../context/CartContext";

export const CarouselItem = ({ item }) => {
  const { icon, title, description, price } = item;
  const { cartDispatch } = useCart();

  const handleAddToCart = () => {
    cartDispatch(addItemToCart(item))
  }
  return (
    <div>
      <div className="carousel_item-menu">
        <div className="item_logo">
          <i className={`${icon}`}></i>
        </div>
        <div className="item_text">
            <h1>{title}</h1>
            <p>{description}</p>
            <p>precio:  <p> {price} usd</p></p>
            <button onClick={ handleAddToCart } >
              <i className="fas fa-cart-plus"></i>
            </button>
        </div>
      </div>
    </div>
  )
}
