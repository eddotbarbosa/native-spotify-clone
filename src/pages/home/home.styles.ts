import styled from 'styled-components/native';
import {Platform} from 'react-native';
import Constants from 'expo-constants';

const statusBarHeight = Platform.OS === 'android' ? `${Constants.statusBarHeight}px` : 0;

const HomeWrapper = styled.SafeAreaView`
  background-color: ${props => props.theme.colors.blackOne};
  margin-top: ${statusBarHeight};
  height: 100%;
  align-items: center;
`;

const HomeScroll = styled.ScrollView`
  margin-bottom: 34px;
`;

export {HomeWrapper, HomeScroll};
