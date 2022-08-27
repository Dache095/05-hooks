import { useForm } from "../hooks/useForm"

export const TodoAdd = ({ onNewTodo }) => {

    const { description, onInputChange, onResetForm } = useForm({
        description: '',
    });

    const onFormSubmit = (e) => {
        e.preventDefault();
        if(description.length === 0) return;

        const newTodo = {
            id: new Date().getTime(),
            description: description,
            done: false,
        };
        onNewTodo(newTodo);
        onResetForm();
    }  

  return (
    <form onSubmit={ onFormSubmit }>
        <input value={ description } onChange={ onInputChange } name='description' type="text" id="" placeholder="¿Qué hay que hacer?" className="form-control"/>
        <button type="submit" className="btn btn-outline-primary mt-1">Agregar</button>
    </form>
  )
}
