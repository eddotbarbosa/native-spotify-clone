import {NavigationContainer} from '@react-navigation/native';

import {TabNavigator} from './tab.routes';

const Routes = function () {
  return (
    <NavigationContainer>
      <TabNavigator />
    </NavigationContainer>
  );
};

export {Routes};
