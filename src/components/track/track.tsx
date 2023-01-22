import {ImageSourcePropType} from 'react-native';

import {TrackTouchable, TrackWrapper, TrackCover, TrackName, TrackProperties} from './track.styles';

interface TrackProps {
  image: ImageSourcePropType;
  name: string;
  from?: 'Album' | 'Single' | 'EP';
  artists: string[];
}

const Track = function ({image, name, from, artists}: TrackProps) {
  return (
    <TrackTouchable>
      <TrackWrapper>
        <TrackCover source={image} />
        <TrackName numberOfLines={1}>{name}</TrackName>
        <TrackProperties numberOfLines={2}>{from ? `${from} . ` : ''}{artists?.join(', ')}</TrackProperties>
      </TrackWrapper>
    </TrackTouchable>
  );
};

export {TrackProps, Track};
