import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {theme} from '../styles/theme';

export type TabParamsList = {
  Startup: undefined;
  Login: undefined;
  Home: undefined;
  Search: undefined;
  Library: undefined;
  Premium: undefined;
};

const {Navigator, Screen} = createBottomTabNavigator<TabParamsList>();

import {Startup} from '../pages/startup/startup';
import {Login} from '../pages/login/login';
import {Home} from '../pages/home/home';
import {Search} from '../pages/search/search';
import {Library} from '../pages/library/library';
import {Premium} from '../pages/premium/premium';

import HomeIcon from '../assets/home-icon.svg';
import HomeIconFocused from '../assets/home-icon-focused.svg';
import SearchIcon from '../assets/search-icon.svg';
import SearchIconFocused from '../assets/search-icon-focused.svg';
import LibraryIcon from '../assets/library-icon.svg';
import LibraryIconFocused from '../assets/library-icon-focused.svg';
import SpotifyIcon from '../assets/spotify-tab-icon.svg';
import SpotifyIconFocused from '../assets/spotify-tab-icon-focused.svg';


const TabNavigator = function () {
  return (
    <Navigator initialRouteName='Startup' screenOptions={() => ({
      headerShown: false,
      tabBarStyle: {
        backgroundColor: theme.colors.blackOne,
        borderTopWidth: 0
      },
      tabBarActiveTintColor: theme.colors.whiteOne,
      tabBarInactiveTintColor: theme.colors.grayOne
    })}>
      <Screen name='Startup' component={Startup} options={() => ({
        tabBarStyle: {
          display: 'none'
        },
        tabBarItemStyle: {
          display: 'none'
        }
      })} />
      <Screen name='Login' component={Login} options={() => ({
        tabBarStyle: {
          display: 'none'
        },
        tabBarItemStyle: {
          display: 'none'
        }
      })} />
      <Screen name='Home' component={Home} options={({route}) => ({
        tabBarIcon: ({ focused, color, size }) => {
          return (
            focused ? <HomeIconFocused /> : <HomeIcon />
          );
        }
      })} />
      <Screen name='Search' component={Search} options={({route}) => ({
        tabBarIcon: ({ focused, color, size }) => {
          return (
            focused ? <SearchIconFocused /> : <SearchIcon />
          );
        }
      })} />
      <Screen name='Library' component={Library} options={({route}) => ({
        tabBarIcon: ({ focused, color, size }) => {
          return (
            focused ? <LibraryIconFocused /> : <LibraryIcon />
          );
        }
      })} />
      <Screen name='Premium' component={Premium} options={({route}) => ({
        tabBarIcon: ({ focused, color, size }) => {
          return (
            focused ? <SpotifyIconFocused /> : <SpotifyIcon />
          );
        }
      })} />
    </Navigator>
  );
};

export {TabNavigator};
