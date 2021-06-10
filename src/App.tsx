import React from 'react';
import { useForm, SubmitHandler } from "react-hook-form";

type InputsProps = {
  name: string,
  age: number,
}

const App: React.FC = () => {

  const {register, handleSubmit, formState: {errors} } = useForm<InputsProps>();

  const onSubmit: SubmitHandler<InputsProps> = data => console.log(data);

  return (
    <div className="container">
      <h2>Formulários</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input 
          type="text"
          placeholder="Name..."
          className="form-control mb-2"
         {...register('name', {required: {
           value: true,
           message: 'Todos os campos precisam ser preenchidos!'
          },
          minLength: {
            value: 5,
            message: 'O campo precisa ter no mínimo 5 dígitos!'
          }
         })}
        />

        <input 
          type="number"
          placeholder="Age..."
          className="form-control mb-2"
          {...register('age', { required: {
            value: true,
            message: 'Preencha todos os campos por favor!'
          }, 
        })}
        />


        {errors.name && <span className="text-danger mx-auto">{errors.name.message}</span>}<br />
        {errors.age && <span className="text-danger mx-auto">{errors.age.message}</span>}<br />

        <button className="btn btn-primary btn-block" type="submit">Submit</button>
      </form>
    </div>    
  );
}

export default App; 