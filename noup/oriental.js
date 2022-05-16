import { MainScreen } from "../src/components/MainScreen";
import { filterMenu } from "../src/helpers/filterMenu";

const Oriental = ({ menu }) => {
  const dataScreen = {
    menu: filterMenu(menu),
    icon: 'fab fa-alipay',
    background: 'oriental'
  }

  return <MainScreen dataScreen={ dataScreen } />
}

export default Oriental;
