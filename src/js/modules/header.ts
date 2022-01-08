import { ToggleController } from '../lib/ToggleController';
import { currentNavi } from './currentNavi';

export const header = () => {
  currentNavi();
  drawer();
};
/**
 * SP用のdrawerボタン
 */
const drawer = () => {
  const toggleDrawer = new ToggleController({
    nameSpace: 'drawer',
  });
  toggleDrawer.params.onShow = (targetToggleID) => {
    document.body.classList.add(`is-${targetToggleID}-shown`);
  };
  toggleDrawer.params.onHide = (targetToggleID) => {
    document.body.classList.remove(`is-${targetToggleID}-shown`);
  };

  return toggleDrawer;
};
