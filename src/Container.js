import Head from "next/head";
import { Navbar } from "./components/ui/Navbar";
import { FooterApp } from "./components/ui/FooterApp";
import { useNav } from "./context/NavContext";
import { CartApp } from "./components/ui/CartApp";

export const Container = ({ children }) => {
  const { isActive, setNavState } = useNav();

  return (
    <body>
      <Head>
        <title>Hamburguesas Mar de Fondo</title>
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css"
          integrity="sha512-1ycn6IcaQQ40/MKBW2W4Rhis/DbILU74C1vSrLJxCq57o941Ym01SwNsOMqvEBFlcgUa6xLiPY/NS5R+E6ztJQ=="
          crossorigin="anonymous"
          referrerpolicy="no-referrer"
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Navbar isActive={ isActive } setNavState={ setNavState } />
      <CartApp />
      {children}
      <FooterApp />
    </body>
  );
};
