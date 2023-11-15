import { FC, Suspense, lazy } from 'react'
import { Navigate, RouteObject, useRoutes } from 'react-router-dom'


// 路由懒加载的封装
const LazyLoad = (path: string) => {
    const Comp = lazy(() => import(`../views/${path}/index.tsx`));
    return (
        <Suspense fallback={<>加载中...</>}>
            <Comp />
        </Suspense>
    );
};


const AuthComponent = ({ children }: { children: FC }) => {
    const isLogin = localStorage.getItem("token");
    return isLogin ? children : <Navigate to="/login" />;
}


const routes: RouteObject[] = [
    {
        path: '/',
        element: <Navigate to="/login" replace />
    },
    {
        path: 'login',
        element: LazyLoad('login')
    },
    {
        path: 'home',
        element: LazyLoad('home')
    },
    {
        path: "*",
        element: LazyLoad("not-found"),
    },
]

const Router = () => useRoutes(routes)

export default Router