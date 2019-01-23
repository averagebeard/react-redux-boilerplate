// @flow

import { css } from 'styled-components';

import theme from './theme';

const {
  color: {
    darkBlueBlack,
  },
} = theme;

export const checkmark = '✓';
export const cross = '✗';
export const infinity = '∞';

type Value = string | number | boolean;

export const trueFalse = (value: Value) => {
  if (value === true) {
    return checkmark;
  }
  if (value === false) {
    return cross;
  }
  return value;
};

const typography = (
  size: number,
  fontColor: string,
  fontLineHeight: number,
) => css`
  color: ${({ color }) => color || fontColor};
  font-size: ${size}px;
  line-height: ${({ lineHeight }) => lineHeight || fontLineHeight}px;
`;

export const headerText = typography(24, darkBlueBlack, 32);
