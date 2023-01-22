import {useNavigation} from '@react-navigation/native';
import {BottomTabNavigationProp} from '@react-navigation/bottom-tabs';

import {TabParamsList} from '../../routes/tab.routes';

import Cascadingss from '../../components/cascadingss/cascadingss';

import {ContinueWithButton, ContinueWithtext, Header, LoginButton, LoginText, LoginWrapper, SignupButton, SignupText} from './login.styles';

import SpotifyLogo from '../../assets/spotify-logo.svg';
import PhoneIcon from '../../assets/phone-icon.svg';
import GoogleIcon from '../../assets/google-icon.svg';
import FacebookIcon from '../../assets/facebook-icon.svg';

import {theme} from '../../styles/theme';


const Login = function () {
  const navigation = useNavigation<BottomTabNavigationProp<TabParamsList>>();

  const handleGoHome = function () {
    return navigation.navigate('Home');
  };

  return (
    <LoginWrapper h='12/12' justifyContent='center' alignItems='center'>
      <Cascadingss mb='30px'>
        <SpotifyLogo />
      </Cascadingss>
      <Cascadingss mb='55px'>
        <Header>{`Millions of songs \nFree on spotify.`}</Header>
      </Cascadingss>
      <Cascadingss alignItems='center' w='12/12'>
        <SignupButton underlayColor={theme.colors.greenTwo} onPress={handleGoHome}>
          <SignupText>Sign up free</SignupText>
        </SignupButton>
        <ContinueWithButton onPress={handleGoHome}>
          <Cascadingss flexDirection='row' alignItems='center' pl='21px' pr='21px'>
            <Cascadingss mr='7px'>
              <PhoneIcon />
            </Cascadingss>
            <ContinueWithtext>Continue with phone number</ContinueWithtext>
          </Cascadingss>
        </ContinueWithButton>
        <ContinueWithButton onPress={handleGoHome}>
          <Cascadingss flexDirection='row' alignItems='center' pl='21px' pr='21px'>
            <Cascadingss mr='7px'>
              <GoogleIcon />
            </Cascadingss>
            <ContinueWithtext>Continue with google</ContinueWithtext>
          </Cascadingss>
        </ContinueWithButton>
        <ContinueWithButton onPress={handleGoHome}>
          <Cascadingss flexDirection='row' alignItems='center' pl='21px' pr='21px'>
            <Cascadingss mr='7px'>
              <FacebookIcon />
            </Cascadingss>
            <ContinueWithtext>Continue with facebook</ContinueWithtext>
          </Cascadingss>
        </ContinueWithButton>
        <LoginButton onPress={handleGoHome}>
          <LoginText>Log in</LoginText>
        </LoginButton>
      </Cascadingss>
    </LoginWrapper>
  );
};

export {Login};
