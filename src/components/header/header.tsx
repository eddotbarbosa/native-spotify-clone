import {TouchableHighlight} from 'react-native';

import Cascadingss from '../cascadingss/cascadingss';

import BellIcon from '../../assets/bell-icon.svg';
import RecentlyIcon from '../../assets/recently-icon.svg';
import SteamIcon from '../../assets/steam-icon.svg';


const Header = function () {
  return (
    <Cascadingss flexDirection='row' justifyContent='end' mt='28px' mb='14px' pr='17px' w='12/12'>
      <Cascadingss mr='22px'>
        <TouchableHighlight>
          <BellIcon />
        </TouchableHighlight>
      </Cascadingss>
      <Cascadingss mr='22px'>
        <TouchableHighlight>
          <RecentlyIcon />
        </TouchableHighlight>
      </Cascadingss>
      <Cascadingss>
        <TouchableHighlight>
          <SteamIcon />
        </TouchableHighlight>
      </Cascadingss>
    </Cascadingss>
  );
};

export {Header};
