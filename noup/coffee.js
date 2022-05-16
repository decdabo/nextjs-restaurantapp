import { MainScreen } from '../src/components/MainScreen'
import { coffee } from '../src/data/menu'
import { filterMenu } from '../src/helpers/filterMenu'

const Coffee = ({ menu }) => {
  const dataScreen = {
    menu: filterMenu(menu),
    icon: 'fas fa-coffee',
    background: 'cafe'
  }
  return <MainScreen dataScreen={ dataScreen } />
}

export default Coffee;
