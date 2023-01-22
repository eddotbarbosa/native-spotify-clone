import {CategoryWrapper, CategoryText} from './category.styles';

interface SearchCategoryProps {
  name: string;
  bg: string;

}

const Category = function ({name, bg}: SearchCategoryProps) {
  return (
    <CategoryWrapper bg={bg}>
      <CategoryText numberOfLines={2}>{name}</CategoryText>
    </CategoryWrapper>
  );
};

export {Category};
