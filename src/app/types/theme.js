// @flow

export type Theme = {
  color: {
    black: string,
    blue: string,
    darkBlue: string,
    darkBlueBlack: string,
    darkGreen: string,
    darkRed: string,
    darkYellow: string,
    grey: string,
    green: string,
    red: string,
    white: string,
    yellow: string,
  },
  font: {
    size: {
      inputResponse: number,
      standard: number,
      large: number,
    },
  },
  hamburger: {
    height: number
  },
  gutter: {
    large: number,
    medium: number,
    small: number,
    tiny: number,
  },
  maxWidth: number,
  opacity: {
    ten: string,
    twenty: string,
    twentyFive: string,
    thirty: string,
    forty: string,
    fifty: string,
    sixty: string,
    seventy: string,
    seventyFive: string,
    eighty: string,
    ninety: string,
  },
  navBar: {
    height: number,
  },
};
