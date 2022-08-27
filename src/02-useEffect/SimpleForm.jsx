import { useEffect, useState } from "react";
import { Message } from "./Message";


export const SimpleForm = () => {

    const [formState, setFormState] = useState({
        username: 'dache',
        email: 'daniel@google.com'
    });

    const { username, email } = formState;

    const onInputChange = ({ target }) => {
        const { name, value } = target;

        setFormState({
            ...formState,
            [ name ]: value
        })
    }

    // useEffect( () => {
        
    // }, [formState]);

  return (
    <>
        <h1>Formulario</h1>
        <hr />

        <input 
        type="text"
        className="form-control"
        placeholder="Username"
        name="username"
        value={ username }
        onChange={ onInputChange } 
        />

        <input 
        type="email"
        className="form-control mt-2"
        placeholder="ejemplo@gmail.com"
        name="email" 
        value={ email }
        onChange={ onInputChange }
        />


        {
            (username === 'dache2') && <Message/>
        }
    </>
  )
}
