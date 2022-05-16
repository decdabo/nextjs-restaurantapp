import { MainScreen } from '../src/components/MainScreen';
import { filterMenu } from '../src/helpers/filterMenu';

const Burguer = ({ menu }) => {
  const dataScreen = {
    menu: filterMenu(menu),
    icon: 'fas fa-hamburger',
    background: 'hamburguesa_1'
  }

  return <MainScreen dataScreen={ dataScreen } />
}

export default Burguer;
