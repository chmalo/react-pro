import {lazy, LazyExoticComponent} from "react";
import {NoLazy} from "../lazyload/pages/NoLazy";

type JsxComponent = () => JSX.Element;

export interface Route {
    to: string,
    path: string,
    Component: LazyExoticComponent<JsxComponent> | JsxComponent;
    name: string
}

const LazyLayout = lazy(() => import('../lazyload/layout/LazyLayout'));

export const routes: Route[] = [
    {
    to: '/lazyload/',
    path: '/lazyload/*',
    Component: LazyLayout,
    name: 'LazyLayout - Dash'
    },
    {
    to: '/no-lazy',
    path: 'no-lazy',
    Component: NoLazy,
    name: 'No lazyload'
    }
]