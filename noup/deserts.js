import { MainScreen } from "../src/components/MainScreen"
import { filterMenu } from "../src/helpers/filterMenu";

const Deserts = ({ menu }) => {
  const dataScreen = {
    menu: filterMenu(menu),
    icon: 'fas fa-cheese',
    background: 'postres'
  }
  return <MainScreen dataScreen={ dataScreen } />
}

export default Deserts;
