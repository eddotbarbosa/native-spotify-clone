import styled, {DefaultTheme} from 'styled-components/native';

import {
  w,
  h,
  display,
  visibility,
  flexDirection,
  flexWrap,
  flexGrow,
  flexShrink,
  flexBasis,
  order,
  justifyContent,
  alignContent,
  alignItems,
  alignSelf,
  WidthOptions,
  HeightOptions,
  JustifyContentOptions,
  DisplayOptions,
  VisibilityOptions,
  FlexDirectionOptions,
  FlexWrapOptions,
  FlexGrowOptions,
  FlexShrinkOptions,
  FlexBasisOptions,
  OrderOptions,
  AlignContentOptions,
  AlignItemsOptions,
  AlignSelfOptions
} from '../../styles/layout';

interface CascadingssProps {
  theme?: DefaultTheme;
  children?: React.ReactNode;
  w?: WidthOptions;
  h?: HeightOptions;
  display?: DisplayOptions;
  visibility?: VisibilityOptions;
  flexDirection?: FlexDirectionOptions;
  flexWrap?: FlexWrapOptions;
  flexGrow?: FlexGrowOptions;
  flexShrink?: FlexShrinkOptions;
  flexBasis?: FlexBasisOptions;
  order?: OrderOptions;
  justifyContent?: JustifyContentOptions;
  alignContent?: AlignContentOptions;
  alignItems?: AlignItemsOptions;
  alignSelf?: AlignSelfOptions;
  mt?: string;
  mr?: string;
  mb?: string;
  ml?: string;
  pt?: string;
  pr?: string;
  pb?: string;
  pl?: string;
}

const Cascadingss = styled.View<CascadingssProps>`
  width: ${props => props.w ? w[props.w] : 'auto'};
  height: ${props => props.h ? h[props.h] : 'auto'};
  display: ${props => props.display ? display[props.display] : 'flex'};
  visibility: ${props => props.visibility ? visibility[props.visibility] : 'visible'};
  flex-direction: ${props => props.flexDirection ? flexDirection[props.flexDirection] : 'column'};
  flex-wrap: ${props => props.flexWrap ? flexWrap[props.flexWrap] : 'nowrap'};
  flex-grow: ${props => props.flexGrow ? flexGrow[props.flexGrow] : '0'};
  flex-shrink: ${props => props.flexShrink ? flexShrink[props.flexShrink] : '1'};
  flex-basis: ${props => props.flexBasis ? flexBasis[props.flexBasis] : 'auto'};
  order: ${props => props.order ? order[props.order] : '0'};
  justify-content: ${props => props.justifyContent ? justifyContent[props.justifyContent] : 'flex-start'};
  align-content: ${props => props.alignContent ? alignContent[props.alignContent] : 'stretch'};
  align-items: ${props => props.alignItems ? alignItems[props.alignItems] : 'stretch'};
  align-self: ${props => props.alignSelf ? alignSelf[props.alignSelf] : 'auto'};
  margin-top: ${props => props.mt ? props.mt : '0'};
  margin-right: ${props => props.mr ? props.mr : '0'};
  margin-bottom: ${props => props.mb ? props.mb : '0'};
  margin-left: ${props => props.ml ? props.ml : '0'};
  padding-top: ${props => props.pt ? props.pt : '0'};
  padding-right: ${props => props.pr ? props.pr : '0'};
  padding-bottom: ${props => props.pb ? props.pb : '0'};
  padding-left: ${props => props.pl ? props.pl : '0'};
`;


export default Cascadingss;
