import { MainScreen } from '../src/components/MainScreen';
import { filterMenu } from '../src/helpers/filterMenu';

const Home = () => {
  const dataScreen = {
    menu: filterMenu(),
    icon: 'fas fa-concierge-bell',
    background: 'restaurante'
  }

  return <MainScreen dataScreen={ dataScreen } />
}

export default Home;
