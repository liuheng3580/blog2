import { useCallback, useEffect, useState } from "react"
import useLocalStorage from "../useLocalStorage"
import { useTranslation } from "react-i18next";
import { LanguageType } from "@/i18n/type";


export const useLanguage = () => {
    const langStorage = new useLocalStorage('lang', 'en')
    const [language, setLanguage] = useState<LanguageType>(langStorage.val)
    const { i18n } = useTranslation();


    const onLanguageChange = useCallback((newVl: LanguageType) => {
        setLanguage(newVl);
        useLocalStorage.setItem('lang', newVl)
        i18n.changeLanguage(newVl);
    }, [i18n, setLanguage])

    useEffect(() => {
        i18n.changeLanguage(language);
    }, [])

    return {
        language,
        onLanguageChange
    }
}