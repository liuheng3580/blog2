import React, { Suspense } from 'react';
import Router from './router'
import { ConfigProvider } from 'antd'
import zhCN from 'antd/locale/zh_CN';

const App = () => {
    return (
        <ConfigProvider locale={zhCN} >
            <Suspense fallback={<div>loading</div>}>
                <div className='bg-white dark:bg-slate-800'>
                    <Router />
                </div>
            </Suspense>
        </ConfigProvider>
    )
}

export default App;