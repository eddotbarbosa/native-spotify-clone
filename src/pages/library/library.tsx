import Cascadingss from '../../components/cascadingss/cascadingss';
import {LibraryWrapper, LibraryHeader, Avatar, HeaderTitle, HeaderButton, LibraryListOptions, OptionButton, OptionText, LibraryList} from './library.styles';

import PlusIcon from '../../assets/plus-icon.svg';
import SearchIcon from '../../assets/library-search-icon.svg';

import DefaultAvatar from '../../assets/images/default-avatar.jpg';

import {library} from '../../data/data';
import { LibraryItem } from '../../components/LibraryItem/libraryItem';

const Library = function () {
  return (
    <LibraryWrapper>
      <LibraryHeader>
        <Cascadingss flexDirection='row'>
          <Avatar source={DefaultAvatar} />
          <HeaderTitle>Your Library</HeaderTitle>
        </Cascadingss>
        <Cascadingss flexDirection='row'>
          <HeaderButton>
            <SearchIcon />
          </HeaderButton>
          <HeaderButton>
            <PlusIcon />
          </HeaderButton>
        </Cascadingss>
      </LibraryHeader>

      <LibraryListOptions>
        <OptionButton>
          <OptionText>Playlists</OptionText>
        </OptionButton>
        <OptionButton>
          <OptionText>Artists</OptionText>
        </OptionButton>
      </LibraryListOptions>

      <LibraryList
      data={library}
      keyExtractor={({name}) => name}
      renderItem={({item}) => <LibraryItem avatar={item.avatar} name={item.name} type={item.type} />}
      />
    </LibraryWrapper>
  );
};

export {Library};
