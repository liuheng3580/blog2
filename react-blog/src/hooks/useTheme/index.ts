import { useCallback, useLayoutEffect, useMemo, useState } from "react"
import useLocalStorage from "../useLocalStorage"
import { Theme } from "@/views/home/enum"

export const useTheme = () => {
    const themeStorage = new useLocalStorage('theme', 'dark')
    const [currentTheme, setCurrentTheme] = useState(themeStorage.val)
    const isDarkTheme = window.matchMedia("(prefers-color-scheme: dark)").matches;

    const updateHtmlClass = useCallback((theme: Theme) => {
        if (theme === Theme.Dark) {
            document.documentElement.classList.add('dark')
            document.documentElement.classList.remove('light')
            setCurrentTheme(Theme.Dark)
        } else {
            setCurrentTheme(Theme.Light)
            document.documentElement.classList.add('light')
            document.documentElement.classList.remove('dark')
        }
    }, [currentTheme])

    const setTheme = (theme: Theme) => {
        setCurrentTheme(theme)
        useLocalStorage.setItem('theme', theme)
        updateHtmlClass(theme)
    }

    const onThemeChange = (event: Event) => {
        console.log('event', event)
        updateHtmlClass(isDarkTheme ? Theme.Dark : Theme.Light)
    }

    useLayoutEffect(() => {
        updateHtmlClass(currentTheme)
        // setTheme(isDarkTheme ? Theme.Dark : Theme.Light)
        // 监听系统颜色切换
        // window
        //     .matchMedia("(prefers-color-scheme: dark)")
        //     .addEventListener("change", onThemeChange)
        // return () => {
        //     window.matchMedia("(prefers-color-scheme: dark)").removeEventListener('change', onThemeChange)
        // }
    }, [])
    return {
        theme: currentTheme,
        setTheme,
        isDarkTheme
    }
}