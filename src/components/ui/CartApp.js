import { useState } from 'react'
import { closeCartMenu, openCartMenu } from '../../context/actions/cartActions';
import { useCart } from '../../context/CartContext';
import { CartItem } from './CartItem';
import { ModalApp } from './ModalApp';

export const CartApp = () => {
  const { cartState: { isActive, data, total }, cartDispatch } = useCart()
  const [ isModalOpen, setIsModalOpen ] = useState(false);

  const handleToggleMenu = () => {
    if (isActive) {
      cartDispatch(closeCartMenu())
    } else {
      cartDispatch(openCartMenu())
    }
  }

  const handleToggleModal = () => {
    setIsModalOpen(!isModalOpen);
  }

  return (
    <>
      { isModalOpen && <ModalApp toggleModal={ handleToggleModal } /> }
      <button className="cart_button" onClick={ handleToggleMenu }>
        <i className="fas fa-shopping-cart"></i>
      </button>
      <aside className={`cart ${ isActive && 'cart_active' }`} >
        <button onClick={ handleToggleMenu }>✖</button>
        <h1>Carrito</h1>
        <div>
          <ul>
            {
              data[0]
              ? data.map((item, i) => (<CartItem key={i} item={item} dispatch={cartDispatch} index={i} />))
              : (<li>Carrito Vacío</li>)
            }
          </ul>
          <div>
            <h3>Total:</h3>
            <h1> { total } usd</h1>
          </div>
        </div>
        <footer>
          { data[0] && (<button onClick={ handleToggleModal } >Comprar</button>) }
        </footer>
      </aside>
    </>
  )
}
