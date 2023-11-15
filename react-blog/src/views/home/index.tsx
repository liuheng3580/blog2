import { useTheme } from '@/hooks/useTheme';
import { Divider, Flex, Input, Tooltip, Avatar } from 'antd';
import React, { useCallback, useRef } from 'react';
import { Theme } from './enum';
import { GithubOutlined, DingdingOutlined, WechatOutlined, WhatsAppOutlined, ProfileOutlined } from '@ant-design/icons'
import { t } from 'i18next'
import { useLanguage } from '@/hooks/useLanguage';
import { languageEnum } from '@/i18n/type';
import NavDrawer, { NavDrawerRef } from './components/NavDrawer'


const Home = () => {
    const { theme, setTheme } = useTheme()
    const navDrawerRef = useRef<NavDrawerRef>(null)
    const { language, onLanguageChange } = useLanguage()
    const isDarkTheme = theme === Theme.Dark
    const handleUpdateTheme = useCallback(() => {
        setTheme(theme === Theme.Dark ? Theme.Light : Theme.Dark)
    }, [theme, setTheme])

    const handleUpdateLanguage = () => {
        onLanguageChange(language === languageEnum.En ? languageEnum.Zh : languageEnum.En)
    }
    return (
        <>
            <Flex vertical={true} className='dark:text-white h-screen'>
                <header className='p-4'>
                    <Flex justify="space-between" align='center' >
                        <Flex align='center'>
                            <span className='text-base'>{t("Home")}</span>
                            <i onClick={handleUpdateTheme} className={`iconfont ${isDarkTheme ? 'blog-heiyemoshi' : 'blog-qingtian'} text-xl  mx-2`}></i>
                            <Divider className='dark:bg-white' type="vertical" />
                            <Tooltip title="中文/English">
                                <span onClick={handleUpdateLanguage}>{t(language === languageEnum.En ? 'English' : 'Chinese')}</span>
                            </Tooltip>
                        </Flex>
                        <Flex align='center' className='hidden sm:flex' gap={20}>
                            <a >{t('About')}</a>
                            <a >{t('Project')}</a>
                            <a >{t('Mine')}</a>
                            <Input style={{ flex: 1 }} placeholder="Search" />
                        </Flex>
                        <ProfileOutlined onClick={navDrawerRef.current?.open} className='text-2xl sm:hidden' />
                    </Flex>
                </header>
                <main className='flex-1'>
                    <Flex vertical={true} justify='center' align='center' style={{ height: '100%' }} gap={20}>
                        <Avatar className=' transition duration-300 hover:rotate-180' size={150} src="https://img1.baidu.com/it/u=4187555164,1677493537&fm=253&app=138&size=w931&n=0&f=JPEG&fmt=auto?sec=1699981200&t=8680b2dd16640e0979402778918fe82c"></Avatar>
                        <p>{t('LH')}</p>
                        <p>{t("Welcome to my blog")}</p>
                        <Flex gap={20} className=' text-2xl' >
                            <GithubOutlined />
                            <DingdingOutlined />
                            <WechatOutlined />
                            <WhatsAppOutlined />
                        </Flex>
                        <Flex gap={20} >
                            <a className='px-7 py-1 rounded dark:bg-slate-700  bg-gray-100'>{t('About')}</a>
                            <a className='px-7 py-1 rounded dark:bg-slate-700 bg-gray-100'>{t('Project')}</a>
                            <a className='px-7 py-1 rounded dark:bg-slate-700 bg-gray-100'>{t('Mine')}</a>
                        </Flex>
                    </Flex>
                </main>
                <footer className='dark:text-white text-center p-3'>
                    © 2023 Kunyang's Blog Visitors: 4798 Views: 16625
                </footer>
            </Flex >
            <NavDrawer ref={navDrawerRef} />
        </>

    )
}

export default Home;