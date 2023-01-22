import {Platform, FlatList, FlatListProps} from 'react-native';
import Constants from 'expo-constants';
import styled from 'styled-components/native';

import {LibraryProps} from '../../data/data';

const statusBarHeight = Platform.OS === 'android' ? `${Constants.statusBarHeight}px` : 0;

const LibraryWrapper = styled.SafeAreaView`
  background-color: ${(props) => props.theme.colors.blackOne};
  padding-top: ${statusBarHeight};
  height: 100%;
`;

const LibraryHeader = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0 17px;
  margin-top: 26px;
  margin-bottom: 30px;
`;

const Avatar = styled.Image`
  width: 35px;
  height: 35px;
  border-radius: 35px;
`;

const HeaderTitle = styled.Text`
  color: ${(props) => props.theme.colors.whiteOne};
  font-weight: 700;
  font-size: 24px;
  margin-left: 12px;
`;

const HeaderButton = styled.TouchableOpacity`
  margin-left: 32px;
`;

const LibraryListOptions = styled.View`
  padding: 0 17px;
  flex-direction: row;
  margin-bottom: 28px;
`;

const OptionButton = styled.TouchableOpacity`
  margin-right: 17px;
  border: 1px solid ${(props) => props.theme.colors.whiteOne};
  border-radius: 30px;
  padding: 9px 17px;
`;

const OptionText = styled.Text`
  color: ${(props) => props.theme.colors.whiteOne};
`;

const LibraryList = styled(FlatList as new (props: FlatListProps<LibraryProps>) => FlatList)`
  padding: 0 17px;
`;


export {LibraryWrapper, LibraryHeader, Avatar, HeaderTitle, HeaderButton, LibraryListOptions, OptionButton, OptionText, LibraryList};
