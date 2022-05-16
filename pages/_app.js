import { useRouter } from 'next/router';
import { Container } from '../src/Container';
import { NavProvider } from '../src/context/NavContext';

import "../src/styles/styles.scss";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { CartProvider } from '../src/context/CartContext';

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  return (
    <NavProvider>
      <CartProvider>
        <Container>
          <Component {...pageProps} menu={router.query.food} />
        </Container>
      </CartProvider>
    </NavProvider>
  )
}

export default MyApp;