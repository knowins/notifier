import i18n from 'i18next';
declare module 'i18next' {
    interface CustomTypeOptions {
        returnNull: false;
    }
}
export default i18n;
