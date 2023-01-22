import {TrackListHeader, TrackListWrapper, TrackScrollList} from './trackList.styles';

import {Track, TrackProps} from '../track/track';

interface TrackListProps {
  title: string;
  data: TrackProps[];
}

const TrackList = function ({title, data}: TrackListProps) {
  return (
    <TrackListWrapper>
      <TrackListHeader>{title}</TrackListHeader>
      <TrackScrollList horizontal={true} showsHorizontalScrollIndicator={false}>
        {data.map((item) => {
          return (
            <Track key={item.name} image={item.image} name={item.name} from={item.from} artists={item.artists} />
          );
        })}
      </TrackScrollList>
    </TrackListWrapper>
  );
};

export {TrackList}
