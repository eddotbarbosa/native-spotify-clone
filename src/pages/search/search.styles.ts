import styled from 'styled-components/native';
import {Platform, FlatList, FlatListProps} from 'react-native';
import Constants from 'expo-constants';

import {SearchProps} from '../../data/data';

const statusBarHeight = Platform.OS === 'android' ? `${Constants.statusBarHeight}px` : 0;

const SearchWrapper = styled.SafeAreaView`
  background-color: ${props => props.theme.colors.blackOne};
  padding-top: ${statusBarHeight};
  height: 100%;
`;

const SearchHeader = styled.Text`
  color: ${(props) => props.theme.colors.whiteOne};
  font-size: 25px;
  font-weight: bold;
  margin-bottom: 22px;
`;

const SearchInputWrapper = styled.View`
  background-color: ${(props) => props.theme.colors.whiteOne};
  flex-direction: row;
  align-items: center;
  padding: 13px 15px 13px 15px;
  border-radius: 7px;
  overflow: hidden;
`;

const SerachTextInput = styled.TextInput`
  color: ${(props) => props.theme.colors.blackOne};
  background-color: transparent;
  font-size: 16px;
  font-weight: bold;
  width: 100%;
  overflow: hidden;
  margin-left: 11px;
`;

const SearchCategoryListHeader = styled.Text`
  color: ${(props) => props.theme.colors.whiteOne};
  font-size: 18px;
  font-weight: bold;
  text-align: center;
`

const SearchCategoryList = styled(FlatList as new (props: FlatListProps<SearchProps>) => FlatList)`
  margin-bottom: 34px;
  padding-left: 17px;
`

export {SearchWrapper, SearchInputWrapper, SearchHeader, SerachTextInput, SearchCategoryListHeader, SearchCategoryList};
