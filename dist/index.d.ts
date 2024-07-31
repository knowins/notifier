import React from 'react';
import { Theme } from '@mui/material/styles';
import './i18n';
import { CustomContentProps, SnackbarKey } from 'notistack';
export declare const updateLocalStorage: (config?: {
    [key: string]: any;
} | undefined) => void;
export declare const reloadApp: () => void;
interface ExtendedCustomContentProps extends CustomContentProps {
    confirm?: () => void;
    dismiss?: () => void;
}
export declare const info: (msg: string | {
    [key: string]: string;
    message: string;
} | {
    [key: string]: string;
    message: string;
}[], dismiss?: {
    fn: Function;
}) => SnackbarKey;
export declare const error: (msg: string | {
    [key: string]: string;
    message: string;
} | {
    [key: string]: string;
    message: string;
}[]) => SnackbarKey;
export declare const done: (msg: string) => SnackbarKey | undefined;
export declare const warn: (msg: string | {
    [key: string]: string;
    message: string;
} | {
    [key: string]: string;
    message: string;
}[]) => SnackbarKey;
export declare const confirm: (msg: string, onConfirm: () => void, onReject?: () => void, translate?: boolean) => void;
export declare const notice: (msg: string) => void;
declare type NoticeMesageStatus = string | null | ((res?: any) => string | null);
export declare const executePromise: (mutatePromise: Promise<any>, options?: {
    loading?: NoticeMesageStatus | undefined;
    success?: NoticeMesageStatus | undefined;
    error?: NoticeMesageStatus | undefined;
    final?: (() => void) | undefined;
} | undefined) => Promise<any>;
export declare const executeSubmitPromise: (basicForm: any, options?: {
    loading?: NoticeMesageStatus | undefined;
    success?: NoticeMesageStatus | undefined;
    failure?: NoticeMesageStatus | undefined;
} | undefined) => Promise<unknown>;
export declare const Alert: React.ForwardRefExoticComponent<ExtendedCustomContentProps & React.RefAttributes<HTMLDivElement>>;
declare const Notifier: (props: {
    withThemeProvider?: boolean | undefined;
    theme?: Theme | undefined;
}) => import("react/jsx-runtime").JSX.Element;
export default Notifier;
