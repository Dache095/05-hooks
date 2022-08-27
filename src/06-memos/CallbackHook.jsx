import { useCallback, useState } from "react"
import { ShowIncremetn } from "./ShowIncremetn"

export const CallbackHook = () => {

    const [counter, setCounter] = useState(10);
     const increment = useCallback(
      (value) => {
        setCounter( (c) => c + value )
      },
      [],
    )
    


  return (
    <>
        <h1>UseCallback Hook: { counter }</h1>
        <hr />

        <ShowIncremetn increment={ increment }/>
    </>
  )
}
