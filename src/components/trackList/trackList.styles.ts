import styled from 'styled-components/native';

const TrackListWrapper = styled.View`
  width: 100%;
  margin-bottom: 17px;
  padding-left: 17px;
`;

const TrackListHeader = styled.Text`
  color: ${(props) => props.theme.colors.whiteOne};
  font-size: 22px;
  font-weight: 700;
  margin-bottom: 9px;
`

const TrackScrollList = styled.ScrollView`
  width: 100%;
`;



export {TrackListWrapper, TrackScrollList, TrackListHeader};
