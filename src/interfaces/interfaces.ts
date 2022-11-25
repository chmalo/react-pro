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
