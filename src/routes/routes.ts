import {lazy} from "react";
import {NoLazy} from "../lazyload/pages/NoLazy";
import {RouteLazyLoad} from "../interfaces";

const LazyLayout = lazy(() => import('../lazyload/layout/LazyLayout'));
const ShoppingPage = lazy(() => import('../component-patterns/pages/ShoppingPage'));
const ShoppingPage2 = lazy(() => import('../component-state-initializer/pages/ShoppingPage'));

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
    },
    {
        to: '/shopping',
        path: 'shopping',
        Component: ShoppingPage,
        name: 'Shopping'
    },
    {
        to: '/shopping-2',
        path: 'shopping-2',
        Component: ShoppingPage2,
        name: 'Shopping 2'
    }
]