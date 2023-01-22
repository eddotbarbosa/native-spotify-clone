import {useMemo} from 'react';

import {SearchCategoryList, SearchCategoryListHeader, SearchHeader, SearchInputWrapper, SearchWrapper, SerachTextInput} from './search.styles';

import Cascadingss from '../../components/cascadingss/cascadingss';

import {Category} from '../../components/category/category';

import SearchIcon from '../../assets/search-input-icon.svg';

import {theme} from '../../styles/theme';

import {search} from '../../data/data';

const Search = function () {
  const memoSearch = useMemo(() => search, [search]);

  return (
    <SearchWrapper>
      <Cascadingss mt='26px' pl='17px' pr='17px' mb='51px'>
        <SearchHeader>Search</SearchHeader>
        <SearchInputWrapper>
          <SearchIcon />
          <SerachTextInput placeholder='What do you want to listen to?' placeholderTextColor={theme.colors.blackOne}/>
        </SearchInputWrapper>
      </Cascadingss>
      <SearchCategoryList
      data={memoSearch}
      keyExtractor={(item) => item.id}
      renderItem={({item}) => <Category name={item.name}  bg={item.bg}/>}
      numColumns={2}
      ListHeaderComponent={() => {
        return (
          <Cascadingss mb='30px'>
            <SearchCategoryListHeader>Browse all sections</SearchCategoryListHeader>
          </Cascadingss>
        )
      }}
      />
    </SearchWrapper>
  );
};

export {Search};
