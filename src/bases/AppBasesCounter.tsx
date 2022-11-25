import {Counter} from "./counter";
import {CounterBy} from "./counterBy";
import {CounterEffect} from "./counterEffect";
import {CounterHook} from "./counterHook";
import {CounterReducerComponent} from "./CounterReducerComponent";


function AppBasesCounter() {

  return (
    <>
       <Counter initialValue={15}/>
       <CounterBy />
       <CounterEffect />
       <CounterHook />
       <CounterReducerComponent/>
    </>
  )
}

export default AppBasesCounter
