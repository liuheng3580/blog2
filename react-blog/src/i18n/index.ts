import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import zh from '@/assets/i18n/zh_resources.json'
import en from '@/assets/i18n/en_resources.json'

i18n
    .use(LanguageDetector) // 检测用户语言
    .use(initReactI18next) // 将i18n实例传递给react-i18next
    .init({ // 初始化 i18next
        debug: true,
        fallbackLng: "en",
        interpolation: {
            escapeValue: false, // React已经转义了 阻止xss攻击
        },
        resources: {
            zh,
            en,
        }
    });

export default i18n;
