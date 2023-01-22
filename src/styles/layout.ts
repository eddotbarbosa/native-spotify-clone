// variables
const widths = {
  'width-1': '8.333333%',
  'width-2': '16.666667%',
  'width-3': '25%',
  'width-4': '33.333333%',
  'width-5': '41.666667%',
  'width-6': '50%',
  'width-7': '58.333333%',
  'width-8': '66.666667%',
  'width-9': '75%',
  'width-10': '83.333333%',
  'width-11': '91.666667%',
  'width-12': '100%'
};

export type WidthOptions = '1/12' | '2/12' | '3/12' | '4/12' | '5/12' | '6/12' | '7/12' | '8/12' | '9/12' | '10/12' | '11/12' | '12/12';

const w = {
  '1/12': widths["width-1"],
  '2/12': widths["width-2"],
  '3/12': widths["width-3"],
  '4/12': widths["width-4"],
  '5/12': widths["width-5"],
  '6/12': widths["width-6"],
  '7/12': widths["width-7"],
  '8/12': widths["width-8"],
  '9/12': widths["width-9"],
  '10/12': widths["width-10"],
  '11/12': widths["width-11"],
  '12/12': widths["width-12"]
};

const heights = {
  'height-1': '8.333333%',
  'height-2': '16.666667%',
  'height-3': '25%',
  'height-4': '33.333333%',
  'height-5': '41.666667%',
  'height-6': '50%',
  'height-7': '58.333333%',
  'height-8': '66.666667%',
  'height-9': '75%',
  'height-10': '83.333333%',
  'height-11': '91.666667%',
  'height-12': '100%'
};

export type HeightOptions = '1/12' | '2/12' | '3/12' | '4/12' | '5/12' | '6/12' | '7/12' | '8/12' | '9/12' | '10/12' | '11/12' | '12/12';

const h = {
  '1/12': heights["height-1"],
  '2/12': heights["height-2"],
  '3/12': heights["height-3"],
  '4/12': heights["height-4"],
  '5/12': heights["height-5"],
  '6/12': heights["height-6"],
  '7/12': heights["height-7"],
  '8/12': heights["height-8"],
  '9/12': heights["height-9"],
  '10/12': heights["height-10"],
  '11/12': heights["height-11"],
  '12/12': heights["height-12"]
};

export type DisplayOptions =
  'block' |
  'inline-block' |
  'inline' |
  'flex' |
  'inline-flex' |
  'table' |
  'inline-table' |
  'table-caption' |
  'table-cell' |
  'table-column' |
  'table-column-group' |
  'table-footer-group' |
  'table-header-group' |
  'table-row-group' |
  'table-row' |
  'flow-root' |
  'grid ' |
  'inline-grid' |
  'contents' |
  'list-item' |
  'hidden'
;

const display = {
  'block': 'block',
  'inline-block': 'inline-block',
  'inline': 'inline',
  'flex': 'flex',
  'inline-flex': 'inline-flex',
  'table': 'table',
  'inline-table': 'inline-table',
  'table-caption': 'table-caption',
  'table-cell': 'table-cell',
  'table-column': 'table-column',
  'table-column-group': 'table-column-group',
  'table-footer-group': 'table-footer-group',
  'table-header-group': 'table-header-group',
  'table-row-group': 'table-row-group',
  'table-row': 'table-row',
  'flow-root': 'flow-root',
  'grid ': 'grid ',
  'inline-grid': 'inline-grid',
  'contents': 'contents',
  'list-item': 'list-item',
  'hidden': 'none'
};

export type VisibilityOptions = 'visible' | 'invisible';

const visibility = {
  'visible': 'visible',
  'invisible': 'invisible'
};

export type FlexDirectionOptions = 'row' | 'row-reverse' | 'col' | 'col-reverse';

const flexDirection = {
  'row': 'row',
  'row-reverse': 'row-reverse',
  'col': 'column',
  'col-reverse': 'column-reverse',
};

export type FlexWrapOptions = 'wrap' | 'wrap-reverse' | 'nowrap';

const flexWrap = {
  'wrap': 'wrap',
  'wrap-reverse': 'wrap-reverse',
  'nowrap': 'nowrap'
};

export type FlexGrowOptions = 'grow'| 'grow-0' ;

const flexGrow = {
  'grow': '1',
  'grow-0': '0',
};

export type FlexShrinkOptions = 'shrink' | 'shrink-0';

const flexShrink = {
  'shrink': '1',
  'shrink-0': '0'
};

export type FlexBasisOptions = 'basis-0' | 'basis-auto';

const flexBasis = {
  'basis-0': '0',
  'basis-auto': 'auto'
};

export type OrderOptions =
  '1' |
  '2' |
  '3' |
  '4' |
  '5' |
  '6' |
  '7' |
  '8' |
  '9' |
  '10' |
  '11' |
  '12' |
  'first' |
  'last' |
  'none'
;

const order = {
  '1': 1,
  '2': 2,
  '3': 3,
  '4': 4,
  '5': 5,
  '6': 6,
  '7': 7,
  '8': 8,
  '9': 9,
  '10': 10,
  '11': 11,
  '12': 12,
  'first': -9999,
  'last': 9999,
  'none': 0
};

export type JustifyContentOptions = 'start' | 'end' | 'center' | 'between' | 'around' | 'evenly';

const justifyContent = {
  'start': 'flex-start',
  'end': 'flex-end',
  'center': 'center',
  'between': 'space-between',
  'around': 'space-around',
  'evenly': 'space-evenly'
};

export type AlignContentOptions =
  'start' |
  'end' |
  'center' |
  'between' |
  'around' |
  'evenly'
;

const alignContent = {
  'start': 'flex-start',
  'end': 'flex-end',
  'center': 'center',
  'between': 'content-between',
  'around': 'space-around',
  'evenly': 'space-evenly'
}

export type AlignItemsOptions =
  'start' |
  'end' |
  'center' |
  'baseline' |
  'stretch'
;

const alignItems = {
  'start': 'flex-start',
  'end': 'flex-end',
  'center':  'center',
  'baseline': 'baseline',
  'stretch': 'stretch'
};

export type AlignSelfOptions =
  'auto' |
  'start' |
  'end' |
  'center' |
  'stretch' |
  'baseline'
;

const alignSelf = {
  'auto': 'auto',
  'start': 'flex-start',
  'end': 'flex-end',
  'center': 'center',
  'stretch': 'stretch',
  'baseline': 'baseline'
};

export {
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
  alignSelf
};
