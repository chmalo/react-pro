import {LaziPage1, LaziPage2, LaziPage3} from "../lazyload/pages";

export interface Route {
    to: string,
    path: string,
    Component: () => JSX.Element
    name: string
}


export const routes: Route[] = [
    {
    to: '/lazi1',
    path: 'lazi1',
    Component: LaziPage1,
    name: 'Lazi 1'
    },
    {
    to: '/lazi2',
    path: 'lazi2',
    Component: LaziPage2,
    name: 'Lazi 2'
    },
    {
    to: '/lazi3',
    path: 'lazi3',
    Component: LaziPage3,
    name: 'Lazi 3'
    },
]