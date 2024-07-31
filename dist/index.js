var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.tsx
var src_exports = {};
__export(src_exports, {
  Alert: () => Alert,
  confirm: () => confirm,
  default: () => src_default,
  done: () => done,
  error: () => error,
  executePromise: () => executePromise,
  executeSubmitPromise: () => executeSubmitPromise,
  info: () => info,
  notice: () => notice,
  reloadApp: () => reloadApp,
  updateLocalStorage: () => updateLocalStorage,
  warn: () => warn
});
module.exports = __toCommonJS(src_exports);
var import_react = __toESM(require("react"));
var import_styles2 = require("@mui/material/styles");
var import_Alert = __toESM(require("@mui/material/Alert"));
var import_Button = __toESM(require("@mui/material/Button"));
var import_BlockSharp = __toESM(require("@mui/icons-material/BlockSharp"));
var import_CheckSharp = __toESM(require("@mui/icons-material/CheckSharp"));
var import_DoneSharp = __toESM(require("@mui/icons-material/DoneSharp"));
var import_notistack = require("notistack");

// src/theme.ts
var import_styles = require("@mui/material/styles");
var spacing = (factor) => `${0.25 * factor}rem`;
var theme = (0, import_styles.createTheme)({
  spacing,
  palette: {
    primary: {
      main: "#e9327c",
      light: "#ef679e",
      dark: "#bd1459"
      // contrastText
    },
    secondary: {
      main: "#e6e6fa"
      // '#edf2ff',
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
    tonalOffset: 0.2
  }
});
theme = (0, import_styles.createTheme)(theme, {
  spacing,
  palette: {
    // primary: {
    //   main: '#e9327c',
    // },
    neutral: {
      main: "#64748B",
      contrastText: "#fff"
    },
    custom: {
      light: "#ffa726",
      main: "#f57c00",
      dark: "#ef6c00",
      contrastText: "rgba(0, 0, 0, 0.87)"
    }
  },
  body1: {
    // fontSize: spacing(5),
    fontSize: "1rem",
    padding: `${spacing(3)}, 0, ${spacing(3)}, 0`
  },
  body2: {
    fontSize: "0.875rem"
  },
  typography: {
    // fontFamily: `'Inter', sans-serif`,
    fontFamily: [
      '"Open Sans"',
      '"Helvetica Neue"',
      "helvetica",
      "arial",
      "Arial",
      "verdana",
      "sans-serif",
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"'
    ].join(","),
    fontSize: 13,
    htmlFontSize: 14,
    h1: {
      fontSize: theme.spacing(6),
      fontWeight: "bold"
    },
    h2: {
      fontSize: theme.spacing(5.5),
      fontWeight: "bold"
    },
    h3: {
      marginTop: 1,
      fontSize: theme.spacing(5),
      fontWeight: "bold"
    },
    h4: {
      marginTop: 2,
      fontSize: theme.spacing(4.5),
      fontWeight: "bold"
    },
    h5: {
      marginTop: 3,
      fontSize: theme.spacing(4),
      fontWeight: "bold"
    },
    h6: {
      marginTop: 4,
      fontSize: theme.spacing(3),
      fontWeight: "bold",
      lineHeight: 1
    },
    button: {},
    caption: {},
    overline: {}
  },
  components: {
    MuiAppBar: {
      defaultProps: {
        elevation: 0
      }
    },
    MuiDrawer: {
      styleOverrides: {
        root: {
          width: theme.spacing(64),
          drawerPaper: {
            width: theme.spacing(64)
          }
        }
      }
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
          textTransform: "none"
        }
      }
    },
    MuiButton: {
      defaultProps: {
        disableElevation: true
      },
      styleOverrides: {
        root: {
          textTransform: "none",
          padding: "6px 18px"
        }
      }
    },
    MuiList: {
      styleOverrides: {
        root: {
          background: theme.palette.background.paper
        }
      }
    },
    MuiListItem: {
      styleOverrides: {
        root: {
          fontSize: "0.875rem"
        }
      }
    },
    MuiListSubheader: {
      styleOverrides: {
        colorPrimary: {
          color: "#e9327c",
          fontWeight: "bold"
        }
      }
    },
    MuiListItemText: {
      styleOverrides: {
        primary: {
          color: "#e9327c",
          fontWeight: "bold"
        }
      }
    },
    MuiInput: {
      styleOverrides: {
        root: {}
      }
    },
    MuiInputBase: {
      styleOverrides: {
        root: {
          fontWeight: 300,
          fontSize: "13px",
          lineHeight: "21px"
        }
      }
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          height: "32px"
        }
      }
    },
    MuiAutocomplete: {
      styleOverrides: {
        root: {
          borderRadius: 0,
          padding: "0.5px 0px 0.5px 0px",
          marginBottom: "3px"
        },
        option: {
          fontWeight: 500,
          fontSize: "13px",
          lineHeight: "22px"
        }
      }
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
          color: "#303030",
          fontSize: "13px",
          lineHeight: "17px !important",
          fontWeight: 500,
          letterSpacing: "0.15008px",
          fontFamily: '"Open Sans", "Helvetica Neue", helvetica, arial, verdana, sans-serif'
        }
      }
    },
    MuiToolbar: {
      styleOverrides: {
        root: {
          minHeight: "36px"
        }
      }
    },
    MuiMenuItem: {
      styleOverrides: {
        root: {
          fontSize: "13px",
          lineHeight: "17px !important",
          fontWeight: 300,
          fontFamily: '"Open Sans", "Helvetica Neue", helvetica, arial, verdana, sans-serif'
        }
      }
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
    }
  }
});
var theme_default = theme;

// src/i18n.ts
var import_i18next = __toESM(require("i18next"));
var import_react_i18next = require("react-i18next");
var import_i18next_http_backend = __toESM(require("i18next-http-backend"));
var import_i18next_browser_languagedetector = __toESM(require("i18next-browser-languagedetector"));
var language = localStorage.getItem("language") || void 0;
var fallbackLng = ["en"];
import_i18next.default.use(import_i18next_http_backend.default).use(import_i18next_browser_languagedetector.default).use(import_react_i18next.initReactI18next).init({
  //resources,
  fallbackLng,
  lng: language,
  debug: true,
  // whitelist: availableLanguages,
  interpolation: {
    escapeValue: false
  },
  returnNull: false
});

// src/index.tsx
var import_i18next2 = require("i18next");
var import_notistack2 = require("notistack");
var import_jsx_runtime = require("react/jsx-runtime");
var updateLocalStorage = (config) => {
  if (!(config == null ? void 0 : config.login)) {
    return localStorage.clear();
  }
  for (const key in config) {
    if (config.hasOwnProperty(key)) {
      if (key === "menu") {
        if (config[key]) {
          const menu = JSON.stringify(config[key]);
          localStorage.setItem(key, menu);
        }
      } else if (key === "license") {
        const license = JSON.stringify(config[key]);
        localStorage.setItem("license", license);
      } else {
        localStorage.setItem(key, config[key]);
      }
    }
  }
};
var reloadApp = () => {
  updateLocalStorage({ login: false });
  setTimeout(() => {
    window.location.reload();
  }, 3e3);
};
var alert = (variant, message, options) => {
  return (0, import_notistack2.enqueueSnackbar)(message, {
    ...options,
    variant,
    onClose: (_, reason, key) => {
      if (options && typeof options.fn === "function") {
        options.fn(key, reason);
      }
    }
  });
};
var getErrorMessge = (msg) => {
  if (Array.isArray(msg)) {
    const arrError = [];
    for (let i = 0; i < msg.length; i++) {
      const { message, ...others } = msg[i];
      arrError.push((0, import_i18next2.t)(message, others));
    }
    return arrError.join();
  } else if (typeof msg === "object") {
    const { message, ...others } = msg;
    return (0, import_i18next2.t)(message, others);
  } else {
    return (0, import_i18next2.t)(msg);
  }
};
var info = (msg, dismiss) => {
  return alert("info", getErrorMessge(msg), dismiss);
};
var error = (msg) => {
  return alert("error", getErrorMessge(msg));
};
var done = (msg) => {
  if (typeof msg === "string" && msg.length > 0) {
    return alert("success", (0, import_i18next2.t)(msg));
  }
  return;
};
var warn = (msg) => {
  return alert("warning", getErrorMessge(msg));
};
var confirm = (msg, onConfirm, onReject, translate) => {
  if (typeof msg === "string" && msg.length > 0) {
    const k = alert("default", translate === false ? msg : (0, import_i18next2.t)(msg), {
      persist: true,
      confirm: () => {
        (0, import_notistack2.closeSnackbar)(k);
        onConfirm();
      },
      dismiss: () => {
        (0, import_notistack2.closeSnackbar)(k);
        if (typeof onReject === "function") {
          onReject();
        }
      }
    });
  }
};
var notice = (msg) => {
  if (typeof msg === "string" && msg.length > 0) {
    const k = alert("default", (0, import_i18next2.t)(msg), {
      persist: true,
      dismiss: () => (0, import_notistack2.closeSnackbar)(k)
    });
  }
};
var showLoading = (loading) => {
  if (typeof loading === "function" || typeof loading === "string" || loading === void 0) {
    return info(
      (typeof loading === "function" ? loading() : loading) || "status.loading"
    );
  }
  return "";
};
var hideLoading = (key) => {
  if (key) {
    (0, import_notistack2.closeSnackbar)(key);
  }
};
var executePromise = (mutatePromise, options) => {
  const { loading, success: resolve, error: reject, final } = options || {};
  const snackBarKey = showLoading(loading);
  return mutatePromise.then((resp) => {
    let msg;
    if (!resp) {
      return;
    }
    let result = resp.result || resp.data;
    if (result !== void 0 && typeof result === "string" && result.length > 0) {
      try {
        const json = JSON.parse(resp);
        if (json) {
          resp = json;
          result = resp.result || resp.data;
        }
      } catch (e) {
        console.log("not a json string");
      }
    }
    if ((result == null ? void 0 : result.type) === "rpc" && (result == null ? void 0 : result.tid) !== void 0) {
      result = result.result;
    }
    if (resp === "done" || // Case: calling to defferIf promise
    Array.isArray(resp) || (result == null ? void 0 : result.success) || resp.success === true) {
      if (typeof resolve === "function") {
        if (Array.isArray(resp)) {
          msg = resolve(resp);
        } else {
          msg = resolve(
            result || (typeof resp === "string" || !resp.message ? resp : resp.message)
          );
        }
      }
      if (resolve !== null && msg !== null) {
        done(
          typeof resolve === "string" ? resolve : typeof msg === "string" && msg.length > 0 ? msg : (result == null ? void 0 : result.message) || (resp == null ? void 0 : resp.message) || "status.success"
        );
      }
    } else if ((result == null ? void 0 : result.success) === false || (result == null ? void 0 : result.type) === "exception" || resp.success === false || resp.type === "exception") {
      if (typeof reject === "function") {
        msg = reject(result || resp);
      }
      if (reject !== null && msg !== null) {
        error(
          typeof reject === "string" ? reject : typeof msg === "string" && msg.length > 0 ? msg : (result == null ? void 0 : result.message) || (resp == null ? void 0 : resp.message) || "status.something_wrong"
        );
      }
      if ((resp == null ? void 0 : resp.message) === "status.session_expired") {
        reloadApp();
      }
    } else {
      console.log("Should never get here");
    }
    return result || resp;
  }).catch((e) => {
    console.log(
      `Exception: ${typeof e === "string" ? e : `${e.status} - ${e.statusText}`}`
    );
    if (e && e.statusText === "Gateway Timeout") {
      error("status.gateway_timeout");
    } else {
      notice(
        typeof e === "string" ? e : (e == null ? void 0 : e.message) || (typeof reject === "string" ? reject : "status.something_wrong")
      );
      if (typeof e === "string" && e === "status.session_expired") {
        reloadApp();
      }
    }
  }).finally(() => {
    hideLoading(snackBarKey);
    if (typeof final === "function") {
      final();
    }
  });
};
var executeSubmitPromise = (basicForm, options) => {
  const { loading, success, failure } = options || {};
  return new Promise((resolve, reject) => {
    const snackBarKey = showLoading(loading);
    let msg;
    basicForm.submit({
      // clientValidation: true,
      success: (_, action) => {
        var _a;
        if (typeof success === "function") {
          msg = success(action.result);
        }
        if (msg !== null && success !== null) {
          done(
            msg || ((_a = action.result) == null ? void 0 : _a.msg) || (typeof success === "string" ? success : "status.success")
          );
        }
        hideLoading(snackBarKey);
        resolve(action.result);
      },
      failure: (_, action) => {
        var _a, _b, _c;
        if (typeof failure === "function") {
          msg = failure(action.result);
        }
        hideLoading(snackBarKey);
        switch (action.failureType) {
          case "client":
            error("status.client_error");
            break;
          case "connect":
            error("status.connect_error");
            break;
          case "server":
            error(
              msg || ((_a = action.result) == null ? void 0 : _a.message) || (typeof reject === "string" ? reject : "status.error")
            );
            break;
          case "exception":
            error((_b = action.response) == null ? void 0 : _b.message);
            break;
          default:
            error("status.something_wrong");
        }
        reject(action.result || ((_c = action.response) == null ? void 0 : _c.message));
      }
    });
  });
};
var Alert = import_react.default.forwardRef((props, forwardedRef) => {
  const { variant, message, confirm: confirm2, dismiss } = props;
  let severity;
  switch (variant) {
    case "info":
      severity = "info";
      break;
    case "error":
      severity = "error";
      break;
    case "success":
      severity = "success";
      break;
    case "warning":
      severity = "warning";
      break;
    default:
      severity = "info";
      return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_notistack2.SnackbarContent, { ref: forwardedRef, children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
        import_Alert.default,
        {
          sx: { p: 0, backgroundColor: "white" },
          elevation: 6,
          variant: "filled",
          children: [
            /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("i", { style: { color: "red" }, children: [
              message,
              " "
            ] }),
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
              import_Button.default,
              {
                sx: { m: 1 },
                color: typeof confirm2 === "function" ? "secondary" : "primary",
                size: "small",
                onClick: dismiss,
                startIcon: typeof confirm2 === "function" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_BlockSharp.default, {}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_CheckSharp.default, {}),
                variant: "contained",
                children: typeof confirm2 === "function" ? (0, import_i18next2.t)("action.no") : (0, import_i18next2.t)("action.ok")
              }
            ),
            typeof confirm2 === "function" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
              import_Button.default,
              {
                sx: { m: 1 },
                color: "primary",
                size: "small",
                onClick: confirm2,
                startIcon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_DoneSharp.default, {}),
                variant: "contained",
                children: (0, import_i18next2.t)("action.yes")
              }
            )
          ]
        }
      ) });
  }
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_notistack2.SnackbarContent, { ref: forwardedRef, children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_Alert.default, { severity, elevation: 6, variant: "filled", children: message }) });
});
var Notifier = (props) => {
  const { theme: theme2 = theme_default, withThemeProvider = true } = props;
  return withThemeProvider ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_styles2.ThemeProvider, { theme: theme2, children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
    import_notistack.SnackbarProvider,
    {
      maxSnack: 3,
      anchorOrigin: { horizontal: "left", vertical: "top" },
      preventDuplicate: true,
      Components: {
        info: Alert,
        error: Alert,
        success: Alert,
        warning: Alert,
        default: Alert
      }
    }
  ) }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
    import_notistack.SnackbarProvider,
    {
      maxSnack: 3,
      anchorOrigin: { horizontal: "left", vertical: "top" },
      preventDuplicate: true,
      Components: {
        info: Alert,
        error: Alert,
        success: Alert,
        warning: Alert,
        default: Alert
      }
    }
  );
};
var src_default = Notifier;
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Alert,
  confirm,
  done,
  error,
  executePromise,
  executeSubmitPromise,
  info,
  notice,
  reloadApp,
  updateLocalStorage,
  warn
});
//# sourceMappingURL=index.js.map