import {lazy} from "react";
import {NoLazy} from "../lazyload/pages/NoLazy";
import {RouteLazyLoad} from "../interfaces";

const LazyLayout = lazy(() => import('../lazyload/layout/LazyLayout'));

export const routes: RouteLazyLoad[] = [
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