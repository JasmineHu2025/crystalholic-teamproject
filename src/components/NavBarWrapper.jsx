import { UIProvider } from '../context/UIContext';
import NavBarLight from './NavBarLight';
import NavBarDark from './NavBarDark';
import MenuOverlay from './MenuOverlay';

export default function NavBarWrapper({ variant = 'light' }) {
  return (
    <UIProvider>
      {variant === 'dark' ? <NavBarDark /> : <NavBarLight />}
      <MenuOverlay />
    </UIProvider>
  );
}


// import NavBarWrapper from '../../components/NavBarWrapper';
// 看是哪個版本的navbar 用它取代原本的
// <NavBarWrapper variant="light" />
// <NavBarWrapper variant="dark" />