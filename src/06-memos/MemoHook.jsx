import React, { useMemo, useState } from 'react'
import { useCounter } from '../hooks'

const heavyStuff = (iterationValue = 100) => {
    let i = 0;
    for(i ; i< iterationValue; i++){
        console.log('Ahi vamos...')
    }
    return `${ iterationValue } iteraciones realizadas`;
}

export const MemoHook = () => {

    const {counter, increment} =  useCounter(4000)
    const [show, setShow] = useState(true)
    const messageMemorizedValue = useMemo(() => heavyStuff(counter), [counter])

    return (
        <>
            <h1>Counter: <small>{ counter }</small></h1>
            <hr />

            <h4>{ messageMemorizedValue }</h4>

            <button className='btn btn-primary' onClick={ () => increment() }> +1</button>

            <button
                className='btn btn-outline-primary'
                onClick={() => setShow(!show)}
            >
                Show/hide {JSON.stringify(show)}
            </button>
        </>
    )
}
