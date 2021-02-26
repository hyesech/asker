const calcRem = (size) => `${size / 16}rem`;

/*
    Font Size
 */
const fontSizes = {
  small: calcRem(12),
  medium: calcRem(14),
  base: calcRem(16),
  lg: calcRem(18),
  xl: calcRem(20),
  xxl: calcRem(22),
  xxxl: calcRem(24),
  titleSize: calcRem(50),
};

/*
    Card Size
*/
const width = {
  mobile: calcRem(300),
  pc: calcRem(450),

  mb_sm: calcRem(300),
  mb_md: calcRem(400),
  mb_lg: calcRem(500),
  mb_xl: calcRem(600),

  pc_sm: calcRem(300),
  pc_md: calcRem(400),
  pc_lg: calcRem(500),
};

const height = {
  mobile: calcRem(600),
  pc: calcRem(600),

  mb_xxs: calcRem(100),
  mb_xs: calcRem(200),
  mb_sm: calcRem(300),
  mb_md: calcRem(400),
  mb_lg: calcRem(450),
  mb_xl: calcRem(500),

  pc_sm: calcRem(300),
  pc_md: calcRem(400),
};

const radius = {
  mobile: calcRem(5),
  pc: calcRem(5),
  max: calcRem(16),
};

/*
    Form Size
*/
const form = {
  width_mb_xs: calcRem(100),
  width_mb_sm: calcRem(150),
  width_mb_md: calcRem(200),
  width_mb_lg: calcRem(250),
  width_mb_xl: calcRem(300),

  radius_mb_xs: calcRem(4),
  radius_mb_sm: calcRem(8),
  radius_mb_md: calcRem(16),
  radius_mb_lg: calcRem(25),
  radius_mb_xl: calcRem(36),

  width_pc_xs: calcRem(100),
  width_pc_sm: calcRem(150),
  width_pc_md: calcRem(200),
  width_pc_lg: calcRem(250),
  width_pc_xl: calcRem(300),

  height_mb_xs: calcRem(25),
  height_mb_sm: calcRem(50),
  height_mb_md: calcRem(100),
  height_mb_lg: calcRem(150),
  height_mb_xl: calcRem(200),
  height_mb_xl: calcRem(300),
};

/*
    Button Size
*/
const inputButton = {
  radius: calcRem(10),
  height: calcRem(50),
  width_md: calcRem(150),
  width_lg: calcRem(200),
  width_xl: calcRem(300),
};

const submitButton = {
  radius_mb_md: calcRem(5),
  height_mb_sm: calcRem(25),
  height_mb_md: calcRem(35),
  height_mb_lg: calcRem(50),
  width_xs: calcRem(50),
  width_sm: calcRem(100),
  width_md: calcRem(150),
  width_lg: calcRem(200),
  width_xl: calcRem(300),
};

const linkButton = {
  radius: calcRem(5),
  height: calcRem(50),
  width_md: calcRem(150),
  width_lg: calcRem(200),
  width_xl: calcRem(300),
};

/*
    Layout Structure
*/
const paddings = {
  mobile: calcRem(16),
  pc: `${calcRem(24)} ${calcRem(12)}`,
  lg: calcRem(12),
  xl: calcRem(18),
  xxl: calcRem(24),
  xxxl: calcRem(36),
};

const margins = {
  mobile: calcRem(16),
  pc: calcRem(24),
  xs: calcRem(4),
  sm: calcRem(8),
  base: calcRem(10),
  lg: calcRem(12),
  xl: calcRem(18),
  xxl: calcRem(24),
  xxxl: calcRem(36),
};

const interval = {
  base: calcRem(50),
  lg: calcRem(100),
  xl: calcRem(150),
  xxl: calcRem(200),
};

const gap = {
  small: calcRem(4),
  base: calcRem(8),
  large: calcRem(12),
  mobile: calcRem(16),
  pc: calcRem(24),
  nav: calcRem(42),
};

const colors = {
  black: '#000000',
  dark: '#474C5E',
  white: '#FFFFFF',
  gray: '#8E94A7',
  lightgray: '#E7E9F0',
  stroke: '#EBEBF9',
  blue: '#0346F2',
  lightblue: '#F2F5FE',
  bgColor: '#F6F7FB',
  shadow: '8px 8px 16px 4px rgba(133, 139, 146, 0.06)',
  special: 'rgba(133, 139, 146, 0.2)',
};

const theme = {
  fontSizes,
  colors,
  paddings,
  margins,
  interval,
  radius,
  width,
  height,
  linkButton,
  inputButton,
  submitButton,
  form,
  gap,
};

export default theme;
