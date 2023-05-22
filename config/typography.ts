export const customFontsToLoad = {
  montserratBold: require('../assets/fonts/Montserrat-Bold.ttf'),
  montserratRegular: require('../assets/fonts/Montserrat-Regular.ttf'),
  montserratMedium: require('../assets/fonts/Montserrat-Medium.ttf'),
  montserratSemiBold: require('../assets/fonts/Montserrat-SemiBold.ttf'),
  montserratLight: require('../assets/fonts/Montserrat-Light.ttf'),
  robotoMedium: require('../assets/fonts/Roboto-Medium.ttf'),
  rubikLight: require('../assets/fonts/Rubik-Light.ttf'),
};

export const fonts = {
  montserrat: {
    bold: 'montserratBold',
    regular: 'montserratRegular',
    medium: 'montserratMedium',
    semiBold: 'montserratSemiBold',
    light: 'montserratLight',
  },
  roboto: {
    medium: 'robotoMedium',
  },
  rubik: {
    light: 'rubikLight',
  },
};

export const typography = {
  /**
   * The primary font.  Used in most places.
   */
  primary: fonts.montserrat,

  /**
   * An alternate font used for perhaps titles and stuff.
   * If not provided, use primary.
   */
  secondary: fonts.roboto,
};
