import { MainScreen } from "../src/components/MainScreen";
import { filterMenu } from "../src/helpers/filterMenu";

const Pizza = ({ menu }) => {
  const dataScreen = {
    menu: filterMenu(menu),
    icon: 'fas fa-pizza-slice',
    background: 'pizza'
  }

  return <MainScreen dataScreen={ dataScreen } />
}

export default Pizza;
