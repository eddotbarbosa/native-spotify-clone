import {ScrollView} from 'react-native';

import Cascadingss from '../../components/cascadingss/cascadingss';

import {HomeScroll, HomeWrapper} from './home.styles';

import {TrackList} from '../../components/trackList/trackList';

import {madeFor, recently, todaysBiggestHits, freshNewMusic} from '../../data/data';
import {Header} from '../../components/header/header';

const Home = function () {
  return (
    <HomeWrapper>
      <Cascadingss>
        <HomeScroll>
          <Header />
          <TrackList title='Recently Played' data={recently} />
          <TrackList title='Made For You' data={madeFor} />
          <TrackList title="Today's biggest hits" data={todaysBiggestHits} />
          <TrackList title="Fresh new music" data={freshNewMusic} />
        </HomeScroll>
      </Cascadingss>
    </HomeWrapper>
  );
};

export {Home};
