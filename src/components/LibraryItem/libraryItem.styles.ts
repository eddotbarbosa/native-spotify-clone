import styled from 'styled-components/native'

const LibraryItemWrapper = styled.View`
  flex-direction: row;
  align-items: center;
  margin-bottom: 17px;
`;

const ItemDescription = styled.View`
`;

const Avatar = styled.Image`
  width: 66px;
  height: 66px;
  border-radius: 33px;
  margin-right: 16px;
`;

const Name = styled.Text`
  color: ${(props) => props.theme.colors.whiteOne};
  font-size: 15px;
  font-weight: 700;
`;

const Type = styled.Text`
  color: ${(props) => props.theme.colors.grayOne};
  font-size: 13px;
  font-weight: 500;
`;

export {LibraryItemWrapper, ItemDescription, Avatar, Name, Type};
