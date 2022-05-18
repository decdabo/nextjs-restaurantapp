import Link from "next/link";
import { handleToggleMenu } from "../../helpers/handleToggleMenu";

export const Navbar = ({ isActive, setNavState }) => {
  const allLinks = [
    {
      link: 'burguer',
      name: 'Hamburguesas'
    },
    {
      link: 'pizza',
      name: 'Pizzas'
    },
    {
      link: 'coffee',
      name: 'Cafetería'
    },
    {
      link: 'oriental',
      name: 'Comida Oriental'
    },
    {
      link: 'deserts',
      name: 'Postres'
    } 
  ]

  return (
    <>
      <button className="burguer" onClick={() => handleToggleMenu(isActive, setNavState) } >
        <i className="fas fa-align-justify" />
      </button>
      <nav className={`nav ${isActive && 'nav_active'}`}>
        <ul>
          <li onClick={() => handleToggleMenu(isActive, setNavState)}>
            <Link href="/" as={process.env.BASE_URL + '/'}>
              home
            </Link>
          </li>
          {
            allLinks.map( item => {
              return (
                <li onClick={() => handleToggleMenu(isActive, setNavState)}>
                  <Link href={{ pathname: '[food]', query: { food: item.link } }} as={`${process.env.BASE_URL}/${item.link}`}>
                    { item.name }
                  </Link>
                </li>
              )
            })
          }
        </ul>
      </nav>
    </>
  );
};
