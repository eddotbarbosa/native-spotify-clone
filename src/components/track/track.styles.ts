import styled from 'styled-components/native';

const TrackTouchable = styled.TouchableOpacity`
`;

const TrackWrapper = styled.View`
  margin-right: 17px;
`;

const TrackCover = styled.Image`
  width: 154px;
  height: 154px;
  margin-bottom: 6px;
`;

const TrackName = styled.Text`
  max-width: 154px;
  font-size: 13px;
  font-weight: bold;
  color: ${(props) => props.theme.colors.whiteOne};
`;

const TrackProperties = styled.Text`
  max-width: 154px;
  color: ${(props) => props.theme.colors.grayOne};
`;

export {TrackTouchable, TrackWrapper, TrackCover, TrackName, TrackProperties};
