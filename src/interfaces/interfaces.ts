import {LazyExoticComponent} from "react";

export interface CounterProps {}

export interface CounterState {
    counter: number;
    previous: number;
    changes: number;
}

export interface CounterByState {
    counter: number;
    clicks: number;
}

export interface Props {
    initialValue?: number;
}

export type JsxComponent = () => JSX.Element;

export interface RouteLazyLoad {
    to: string,
    path: string,
    Component: LazyExoticComponent<JsxComponent> | JsxComponent;
    name: string
}
