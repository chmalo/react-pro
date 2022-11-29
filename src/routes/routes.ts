import {lazy, LazyExoticComponent} from "react";

type JsxComponent = () => JSX.Element;

export interface Route {
    to: string,
    path: string,
    Component: LazyExoticComponent<JsxComponent> | JsxComponent;
    name: string
}

const Lazi1 = lazy(() => import('../lazyload/pages/laziPage1'));
const Lazi2 = lazy(() => import('../lazyload/pages/laziPage2'));
const Lazi3 = lazy(() => import('../lazyload/pages/laziPage3'));

export const routes: Route[] = [
    {
    to: '/lazi1',
    path: 'lazi1',
    Component: Lazi1,
    name: 'Lazi 1'
    },
    {
    to: '/lazi2',
    path: 'lazi2',
    Component: Lazi2,
    name: 'Lazi 2'
    },
    {
    to: '/lazi3',
    path: 'lazi3',
    Component: Lazi3,
    name: 'Lazi 3'
    },
]