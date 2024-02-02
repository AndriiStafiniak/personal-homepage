const common = {
   breakpoints: {
      mobile: "767px",
      tablet: "991px",
      narrow: "1520px",
   },

}

const colors = {
   colors: {
      alto: '#FBFBFE',
      mineShaft: '#252525',
      white: '#FFFFFF',
      littleGrey: 'rgba(209, 213, 218, 0.30)',
      scienceBlue: '#0366D6',
      black: '#000000',
      slateGray: '#6E7E91',
      iron: '#D1D5DA',
      semiDark: 'rgba(54, 54, 54, 0.72)',
      mercury: '#E5E5E5',
      azureRadiance: '#0676F4',
      semiGrey: 'rgba(209, 213, 218, 0.30)',
      anakiwa: '#A3CEFF',
   }
}

export const themeLight = {
   ...common,
   ...colors,
   background: colors.colors.alto,
   paragraph: colors.colors.slateGray,
   backgroundItem: colors.colors.white,
   sectionHeading: colors.colors.mineShaft,
   portfolioHeading: colors.colors.scienceBlue,
   icon: colors.colors.black,
   loader: colors.colors.iron,
   mode: {
      color: colors.colors.white,
      background: colors.colors.slateGray,
      button: colors.colors.mercury,
   }
}

// export const themeDark = {
//    ...common,
//    ...colors,
//    background: colors.colors.mineShaft,
//    paragraph: colors.colors.white,
//    backgroundItem: colors.colors.semiDark,
//    sectionHeading: colors.colors.white,
//    portfolioHeading: colors.colors.white,
//    icon: colors.colors.white,
//    loader: colors.colors.littleGrey,
//    mode: {
//       color: colors.colors.black,
//       background: colors.colors.white,
//       button: colors.colors.semiDark,
//    }
// }