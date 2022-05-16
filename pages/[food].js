import { MainScreen } from '../src/components/MainScreen';
import { filterMenu } from '../src/helpers/filterMenu';
import NotFound from './404';

const Food = ({ menu }) => {
  const data = filterMenu(menu);

  return (
    data[0] 
    ? <MainScreen dataScreen={{ menu: data, icon: data[0].icon, background: data[0].background }} /> 
    : <NotFound />
  )
}

export default Food;
