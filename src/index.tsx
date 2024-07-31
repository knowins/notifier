import React from 'react'
import { Theme, ThemeProvider } from '@mui/material/styles'
import MuiAlert, { AlertColor } from '@mui/material/Alert'
import Button from '@mui/material/Button'
import CancelIcon from '@mui/icons-material/BlockSharp'
import CheckIcon from '@mui/icons-material/CheckSharp'
import DoneIcon from '@mui/icons-material/DoneSharp'
import { SnackbarProvider } from 'notistack'
import defaultTheme from './theme'

// Support multi-language
import './i18n'
import { t } from 'i18next'

// To export types, run: tsc --emitDeclarationOnly --declaration
import {
  enqueueSnackbar,
  closeSnackbar,
  CustomContentProps,
  SnackbarContent,
  SnackbarKey,
  SnackbarMessage
} from 'notistack'

export const updateLocalStorage = (config?: { [key: string]: any }) => {
  if (!config?.login) {
    return localStorage.clear()
  }

  for (const key in config) {
    if (config.hasOwnProperty(key)) {
      if (key === 'menu') {
        if (config[key]) {
          const menu = JSON.stringify(config[key])
          // appStore.menu = menu;
          localStorage.setItem(key, menu)
        }
      } else if (key === 'license') {
        // appStore.license = config['license'];
        const license = JSON.stringify(config[key])
        localStorage.setItem('license', license)
      } else {
        localStorage.setItem(key, config[key])
      }
    }
  }
}

export const reloadApp = () => {
  updateLocalStorage({ login: false })
  setTimeout(() => {
    window.location.reload()
  }, 3000)
}

interface ExtendedCustomContentProps extends CustomContentProps {
  confirm?: () => void
  dismiss?: () => void
}

const alert = (
  variant: 'default' | 'error' | 'success' | 'warning' | 'info' | undefined,
  message: SnackbarMessage,
  options?: { [key: string]: any; fn?: Function }
) => {
  return enqueueSnackbar(message, {
    ...options,
    variant,
    onClose: (_, reason, key) => {
      if (options && typeof options.fn === 'function') {
        options.fn(key, reason)
      }
    }
  })
}

const getErrorMessge = (
  msg:
    | string
    | { message: string; [key: string]: string }
    | Array<{ message: string; [key: string]: string }>
) => {
  if (Array.isArray(msg)) {
    const arrError = []
    for (let i = 0; i < msg.length; i++) {
      const { message, ...others } = msg[i]
      arrError.push(t(message, others))
    }
    return arrError.join()
  } else if (typeof msg === 'object') {
    const { message, ...others } = msg
    return t(message, others)
  } else {
    return t(msg)
  }
}
export const info = (
  msg:
    | string
    | { message: string; [key: string]: string }
    | Array<{ message: string; [key: string]: string }>,
  dismiss?: { fn: Function }
) => {
  return alert('info', getErrorMessge(msg), dismiss)
}

export const error = (
  msg:
    | string
    | { message: string; [key: string]: string }
    | Array<{ message: string; [key: string]: string }>
) => {
  return alert('error', getErrorMessge(msg))
}

export const done = (msg: string) => {
  if (typeof msg === 'string' && msg.length > 0) {
    return alert('success', t(msg))
  }

  return
}

export const warn = (
  msg:
    | string
    | { message: string; [key: string]: string }
    | Array<{ message: string; [key: string]: string }>
) => {
  return alert('warning', getErrorMessge(msg))
}

export const confirm = (
  msg: string,
  onConfirm: () => void,
  onReject?: () => void,
  translate?: boolean
) => {
  if (typeof msg === 'string' && msg.length > 0) {
    const k = alert('default', translate === false ? msg : t(msg), {
      persist: true,
      confirm: () => {
        closeSnackbar(k)
        onConfirm()
      },
      dismiss: () => {
        closeSnackbar(k)
        if (typeof onReject === 'function') {
          onReject()
        }
      }
    })
  }
}

export const notice = (msg: string) => {
  if (typeof msg === 'string' && msg.length > 0) {
    const k = alert('default', t(msg), {
      persist: true,
      dismiss: () => closeSnackbar(k)
    })
  }
}

type NoticeMesageStatus = string | null | ((res?: any) => string | null)

const showLoading = (loading?: NoticeMesageStatus) => {
  if (
    typeof loading === 'function' ||
    typeof loading === 'string' ||
    loading === undefined
  ) {
    return info(
      (typeof loading === 'function' ? loading() : loading) || 'status.loading'
    )
  }

  return ''
}

const hideLoading = (key: SnackbarKey) => {
  if (key) {
    closeSnackbar(key)
  }
}

export const executePromise = (
  mutatePromise: Promise<any>,
  options?: {
    loading?: NoticeMesageStatus
    success?: NoticeMesageStatus
    error?: NoticeMesageStatus
    final?: () => void
  }
) => {
  const { loading, success: resolve, error: reject, final } = options || {}

  const snackBarKey = showLoading(loading)

  return mutatePromise
    .then((resp) => {
      let msg
      // Notes:
      //  1. ExtJS store load function return an array of records
      //  2. Special case for booking-service router.php relayed response
      //  3. Backend returns JSON String

      if (!resp) {
        return
      }

      let result = resp.result || resp.data
      if (
        result !== undefined &&
        typeof result === 'string' &&
        result.length > 0
      ) {
        try {
          const json = JSON.parse(resp)
          if (json) {
            resp = json
            result = resp.result || resp.data
          }
        } catch (e) {
          console.log('not a json string')
        }
      }

      if (result?.type === 'rpc' && result?.tid !== undefined) {
        result = result.result // Case: a relayed return from backend
      }

      if (
        resp === 'done' || // Case: calling to defferIf promise
        Array.isArray(resp) ||
        result?.success ||
        resp.success === true
      ) {
        if (typeof resolve === 'function') {
          if (Array.isArray(resp)) {
            msg = resolve(resp)
          } else {
            msg = resolve(
              result ||
                (typeof resp === 'string' || !resp.message
                  ? resp
                  : resp.message)
            )
          }
        }

        if (resolve !== null && msg !== null) {
          done(
            typeof resolve === 'string'
              ? resolve
              : typeof msg === 'string' && msg.length > 0
              ? msg
              : result?.message || resp?.message || 'status.success'
          )
        }
      } else if (
        result?.success === false ||
        result?.type === 'exception' ||
        resp.success === false ||
        resp.type === 'exception'
      ) {
        if (typeof reject === 'function') {
          msg = reject(result || resp)
        }

        if (reject !== null && msg !== null) {
          error(
            typeof reject === 'string'
              ? reject
              : typeof msg === 'string' && msg.length > 0
              ? msg
              : result?.message || resp?.message || 'status.something_wrong'
          )
        }

        if (resp?.message === 'status.session_expired') {
          reloadApp()
        }
      } else {
        console.log('Should never get here')
      }
      return result || resp
    })
    .catch((e) => {
      console.log(
        `Exception: ${
          typeof e === 'string' ? e : `${e.status} - ${e.statusText}`
        }`
      )
      if (e && e.statusText === 'Gateway Timeout') {
        error('status.gateway_timeout')
      } else {
        notice(
          typeof e === 'string'
            ? e
            : e?.message ||
                (typeof reject === 'string' ? reject : 'status.something_wrong')
        )

        if (typeof e === 'string' && e === 'status.session_expired') {
          reloadApp()
        }
      }
    })
    .finally(() => {
      hideLoading(snackBarKey)
      if (typeof final === 'function') {
        final()
      }
    })
}

export const executeSubmitPromise = (
  basicForm: any,
  options?: {
    loading?: NoticeMesageStatus
    success?: NoticeMesageStatus
    failure?: NoticeMesageStatus
  }
) => {
  const { loading, success, failure } = options || {}

  return new Promise((resolve, reject) => {
    const snackBarKey = showLoading(loading)

    let msg: string | null
    basicForm.submit({
      // clientValidation: true,
      success: (_: any, action: { result: any }) => {
        if (typeof success === 'function') {
          msg = success(action.result)
        }

        if (msg !== null && success !== null) {
          done(
            msg ||
              action.result?.msg ||
              (typeof success === 'string' ? success : 'status.success')
          )
        }

        hideLoading(snackBarKey)

        resolve(action.result)
      },
      failure: (
        _: any,
        action: { result: any; failureType?: string; response?: any }
      ) => {
        if (typeof failure === 'function') {
          msg = failure(action.result)
        }

        hideLoading(snackBarKey)
        switch (action.failureType) {
          case 'client':
            error('status.client_error')
            break
          case 'connect':
            error('status.connect_error')
            break
          case 'server':
            error(
              msg ||
                action.result?.message ||
                (typeof reject === 'string' ? reject : 'status.error')
            )
            break
          case 'exception':
            error(action.response?.message)
            break
          default:
            error('status.something_wrong')
        }

        reject(action.result || action.response?.message)
      }
    })
  })
}

// @ts-ignore
export const Alert = React.forwardRef<
  HTMLDivElement,
  ExtendedCustomContentProps
>((props: any, forwardedRef: any) => {
  const { variant, message, confirm, dismiss } = props
  let severity: AlertColor
  switch (variant) {
    case 'info':
      severity = 'info'
      break
    case 'error':
      severity = 'error'
      break
    case 'success':
      severity = 'success'
      break
    case 'warning':
      severity = 'warning'
      break
    default:
      severity = 'info'
      return (
        <SnackbarContent ref={forwardedRef}>
          <MuiAlert
            sx={{ p: 0, backgroundColor: 'white' }}
            elevation={6}
            variant='filled'
          >
            <i style={{ color: 'red' }}>{message} </i>
            <Button
              sx={{ m: 1 }}
              color={typeof confirm === 'function' ? 'secondary' : 'primary'}
              size='small'
              onClick={dismiss}
              startIcon={
                typeof confirm === 'function' ? <CancelIcon /> : <CheckIcon />
              }
              variant='contained'
            >
              {typeof confirm === 'function' ? t('action.no') : t('action.ok')}
            </Button>
            {typeof confirm === 'function' && (
              <Button
                sx={{ m: 1 }}
                color='primary'
                size='small'
                onClick={confirm}
                startIcon={<DoneIcon />}
                variant='contained'
              >
                {t('action.yes')}
              </Button>
            )}
          </MuiAlert>
        </SnackbarContent>
      )
  }

  return (
    <SnackbarContent ref={forwardedRef}>
      <MuiAlert severity={severity} elevation={6} variant='filled'>
        {message}
      </MuiAlert>
    </SnackbarContent>
  )
})

const Notifier = (props: { withThemeProvider?: boolean; theme?: Theme }) => {
  const { theme = defaultTheme, withThemeProvider = true } = props
  return withThemeProvider ? (
    <ThemeProvider theme={theme}>
      <SnackbarProvider
        maxSnack={3}
        anchorOrigin={{ horizontal: 'left', vertical: 'top' }}
        preventDuplicate
        Components={{
          info: Alert,
          error: Alert,
          success: Alert,
          warning: Alert,
          default: Alert
        }}
      />
    </ThemeProvider>
  ) : (
    <SnackbarProvider
      maxSnack={3}
      anchorOrigin={{ horizontal: 'left', vertical: 'top' }}
      preventDuplicate
      Components={{
        info: Alert,
        error: Alert,
        success: Alert,
        warning: Alert,
        default: Alert
      }}
    />
  )
}

export default Notifier
