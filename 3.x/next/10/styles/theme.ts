export const globalTheme = {
  color: {
    primary: {
      100: '#e5ebff',
      300: '#bfceff',
      500: '#708ded',
    },

    sub: {
      100: '#f8f8fa',
      200: '#eeeeee',
      300: '#dddddd',
      400: '#d1d1d1',
      900: '#6d7582',
    },

    white: '#ffffff',

    text: {
      white: '#fff',
      grey: '#6d7582',
      semiDark: '#333333',
      dark: '#000000',
    },
  },

  fontSize: {
    md: '16px',
    sm: '14px',
    ms: '12px',
  },

  fontFamily: {
    notoSansKR: 'Noto Sans KR',
  },

  fontWeight: {
    normal: 'normal',
    bold: 'bold',
  },

  layouts: {
    header: {
      height: '50px',
    },
  },
} as const;
