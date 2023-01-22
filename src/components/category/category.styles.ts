import styled from 'styled-components/native';

interface SearchCategoryWrapperProps {
  bg: string;
}

const CategoryWrapper = styled.TouchableOpacity<SearchCategoryWrapperProps>`
  background-color: ${(props) => props.bg};
  margin-right: 17px;
  margin-bottom: 17px;
  flex: 1;
  height: 109px;
  border-radius: 7px;
`;

const CategoryText = styled.Text`
  color: ${(props) => props.theme.colors.whiteOne};
  margin-top: 16px;
  margin-left: 16px;
  font-weight: bold;
  font-size: 16px;
  max-width: 120px;
`;

export {CategoryWrapper, CategoryText}
