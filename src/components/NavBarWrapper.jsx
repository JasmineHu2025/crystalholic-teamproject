import { UIProvider } from '../context/UIContext';
import NavBarLight2 from './NavBarLight2';
import NavBarDark2 from './NavBarDark2';
import MenuOverlay from './MenuOverlay';

export default function NavBarWrapper({ variant = 'light' }) {
  return (
    <UIProvider>
      {variant === 'dark' ? <NavBarDark2 /> : <NavBarLight2 />}
      <MenuOverlay />
    </UIProvider>
  );
}


// import NavBarWrapper from '../../components/NavBarWrapper';
// 看是哪個版本的navbar 用它取代原本的
// <NavBarWrapper variant="light" />
// <NavBarWrapper variant="dark" />