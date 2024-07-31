import { createTheme } from '@mui/material/styles';

const spacing = (factor: number) => `${0.25 * factor}rem`;
let theme = createTheme({
  spacing,
  palette: {
    primary: {
      main: '#e9327c',
      light: '#ef679e',
      dark: '#bd1459',
      // contrastText
    },
    secondary: {
      main: '#e6e6fa', // '#edf2ff',
      // move-over: #fdf2ff <<<
    },
    // error: { main: '#e9327c' },
    // warning: { main: '#e9327c' },
    // info: { main: '#e9327c' },
    // success: { main: '#e9327c' },
    // Used by `getContrastText()` to maximize the contrast between
    // the background and the text.
    contrastThreshold: 3,
    // Used by the functions below to shift a color's luminance by approximately
    // two indexes within its tonal palette.
    // E.g., shift from Red 500 to Red 300 or Red 700.
    tonalOffset: 0.2,
  },
});

theme = createTheme(theme, {
  spacing,
  palette: {
    // primary: {
    //   main: '#e9327c',
    // },
    neutral: {
      main: '#64748B',
      contrastText: '#fff',
    },
    custom: {
      light: '#ffa726',
      main: '#f57c00',
      dark: '#ef6c00',
      contrastText: 'rgba(0, 0, 0, 0.87)',
    },
  },
  body1: {
    // fontSize: spacing(5),
    fontSize: '1rem',
    padding: `${spacing(3)}, 0, ${spacing(3)}, 0`,
  },
  body2: {
    fontSize: '0.875rem',
  },

  typography: {
    // fontFamily: `'Inter', sans-serif`,
    fontFamily: [
      '"Open Sans"',
      '"Helvetica Neue"',
      'helvetica',
      'arial',
      'Arial',
      'verdana',
      'sans-serif',
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    fontSize: 13,
    htmlFontSize: 14,

    h1: {
      fontSize: theme.spacing(6),
      fontWeight: 'bold',
    },
    h2: {
      fontSize: theme.spacing(5.5),
      fontWeight: 'bold',
    },
    h3: {
      marginTop: 1,
      fontSize: theme.spacing(5),
      fontWeight: 'bold',
    },
    h4: {
      marginTop: 2,
      fontSize: theme.spacing(4.5),
      fontWeight: 'bold',
    },
    h5: {
      marginTop: 3,
      fontSize: theme.spacing(4),
      fontWeight: 'bold',
    },
    h6: {
      marginTop: 4,
      fontSize: theme.spacing(3),
      fontWeight: 'bold',
      lineHeight: 1,
    },
    button: {},
    caption: {},
    overline: {},
  },
  components: {
    MuiAppBar: {
      defaultProps: {
        elevation: 0,
      },
    },
    MuiDrawer: {
      styleOverrides: {
        root: {
          width: theme.spacing(64),
          drawerPaper: {
            width: theme.spacing(64),
          },
        },
      },
    },
    // MuiAppBar: {
    //   styleOverrides: {
    //     root: {
    //       // height: 26,
    //       // paddingTop: 3,
    //       // paddingBottom: 2,
    //       background: '#f7f7f7',
    //       borderTop: 'solid 1px rgba(0,0,0,.05)',
    //     },
    //   },
    // },
    // MuiToolbar: {
    //   styleOverrides: {
    //     root: {
    //       maxHeight: 28,
    //     },
    //   },
    // },
    MuiTab: {
      styleOverrides: {
        root: {
          textTransform: 'none',
        },
      },
    },
    MuiButton: {
      defaultProps: {
        disableElevation: true,
      },
      styleOverrides: {
        root: {
          textTransform: 'none',
          padding: '6px 18px',
        },
      },
    },
    MuiList: {
      styleOverrides: {
        root: {
          background: theme.palette.background.paper,
        },
      },
    },
    MuiListItem: {
      styleOverrides: {
        root: {
          fontSize: '0.875rem',
        },
      },
    },
    MuiListSubheader: {
      styleOverrides: {
        colorPrimary: {
          color: '#e9327c',
          fontWeight: 'bold',
        },
      },
    },
    MuiListItemText: {
      styleOverrides: {
        primary: {
          color: '#e9327c',
          fontWeight: 'bold',
        },
      },
    },
    MuiInput: {
      styleOverrides: {
        root: {},
      },
    },
    MuiInputBase: {
      styleOverrides: {
        root: {
          fontWeight: 300,
          fontSize: '13px',
          lineHeight: '21px',
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          height: '32px',
        },
      },
    },
    MuiAutocomplete: {
      styleOverrides: {
        root: {
          borderRadius: 0,
          padding: '0.5px 0px 0.5px 0px',
          marginBottom: '3px',
        },
        option: {
          fontWeight: 500,
          fontSize: '13px',
          lineHeight: '22px',
        },
      },
    },
    // MuiInputLabel: {
    //   styleOverrides: {
    //     root: {
    //       fontSize: '13px !important',
    //       lineHeight: '17px !important',
    //       fontWeight: 300,
    //       fontFamily:
    //         '"Open Sans", "Helvetica Neue", helvetica, arial, verdana, sans-serif',
    //     },
    //     html: {
    //       fontSize: '10px',
    //     },
    //   },
    // },
    MuiFormLabel: {
      styleOverrides: {
        root: {
          color: '#303030',
          fontSize: '13px',
          lineHeight: '17px !important',
          fontWeight: 500,
          letterSpacing: '0.15008px',
          fontFamily:
            '"Open Sans", "Helvetica Neue", helvetica, arial, verdana, sans-serif',
        },
      },
    },
    MuiToolbar: {
      styleOverrides: {
        root: {
          minHeight: '36px',
        },
      },
    },
    MuiMenuItem: {
      styleOverrides: {
        root: {
          fontSize: '13px',
          lineHeight: '17px !important',
          fontWeight: 300,
          fontFamily:
            '"Open Sans", "Helvetica Neue", helvetica, arial, verdana, sans-serif',
        },
      },
    },
    MuiCssBaseline: {
      // styleOverrides: {
      //   html: {
      //     fontSize: '15px',
      //   },
      //   '.MuiDataGrid-root, .MuiDataGrid-cell, .MuiDataGrid-columnsContainer': {
      //     borderColor: 'rgba(0, 0, 0, .2)!important',
      //   },
      //   '.MuiDataGrid-iconSeparator': {
      //     color: 'rgba(0,0,0,.2)!important',
      //   },
      // },
    },
  },
});

export default theme;
