import { Drawer } from 'antd';
import { t } from 'i18next';
import React, { FC, forwardRef, useCallback, useImperativeHandle, useState } from 'react';

export interface NavDrawerRef {
    open: () => void
}
interface IProps {

}


const NavDrawer: FC = forwardRef<NavDrawerRef, IProps>((props, ref) => {
    const [open, setOpen] = useState(false);
    const menu = [
        {
            label: t('About'),
            path: '/about'
        },
        {
            label: t('Project'),
            path: '/about'
        },
        {
            label: t('Mine'),
            path: '/about'
        }
    ]

    const onClose = useCallback(() => {
        setOpen(false)
    }, [])

    useImperativeHandle(ref, () => ({
        open: () => setOpen(true)
    }))


    return (
        <Drawer
            placement={'right'}
            width="80%"
            onClose={onClose}
            open={open}
        >
            <ul>
                {
                    menu.map(item => (
                        <li key={item.label} className='px-3 py-2 rounded hover:bg-slate-200'>
                            <a href={item.path}>{item.label}</a>
                        </li>
                    ))
                }
            </ul>
        </Drawer>
    )
})

NavDrawer.displayName = 'NavDrawer'

export default NavDrawer;