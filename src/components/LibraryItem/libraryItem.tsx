import {TouchableOpacity} from 'react-native';

import Cascadingss from '../cascadingss/cascadingss';

import {LibraryItemWrapper, ItemDescription, Avatar, Name, Type} from './libraryItem.styles';

import {LibraryProps} from '../../data/data';

interface LibraryItemProps extends LibraryProps {
}

const LibraryItem = function ({avatar, name, type}: LibraryItemProps) {
  return (
    <TouchableOpacity>
      <LibraryItemWrapper>
        <Avatar source={avatar} />
        <ItemDescription>
          <Cascadingss>
            <Name>{name}</Name>
          </Cascadingss>
          <Cascadingss>
            <Type>{type}</Type>
          </Cascadingss>
        </ItemDescription>
      </LibraryItemWrapper>
    </TouchableOpacity>
  );
};

export {LibraryItem};
