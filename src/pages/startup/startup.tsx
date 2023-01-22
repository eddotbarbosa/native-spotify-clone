import {useEffect} from 'react';
import {useNavigation} from '@react-navigation/native';
import {BottomTabNavigationProp} from '@react-navigation/bottom-tabs';

import {StartupWrapper} from './startup.styles';

import SpotifyLogo from '../../assets/spotify-startup-logo.svg';

import {TabParamsList} from '../../routes/tab.routes';

const Startup = function () {
  const navigation = useNavigation<BottomTabNavigationProp<TabParamsList>>();

  useEffect(() => {
    async function loadgin () {
      setTimeout(() => {
        navigation.navigate('Login');
      }, 2000)
    };

    loadgin();
  }, []);

  return (
    <StartupWrapper h='12/12' justifyContent='center' alignItems='center'>
      <SpotifyLogo />
    </StartupWrapper>
  );
};

export {Startup};
