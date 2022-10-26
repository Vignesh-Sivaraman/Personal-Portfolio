export const LightTheme = {
  body: "#f7f5e6",
  text: "#333a56",
  fontFamily: "'Source Sans Pro', sans-serif",
  bodyRgba: "252, 246, 244",
  textRgba: "0,0,0",
};

// function for to use css Break points for media queries

export const breakpoints = {
  sm: 20, //em
  md: 30,
  lg: 45,
  xl: 60,
  xxl: 75,
};

export const mediaQueries = (key) => {
  return (style) => `@media (max-width: ${key}em) { ${style} }`;
};
