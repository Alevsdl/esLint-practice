import { useForm } from 'react-hook-form';

interface FormValues {
  email: string;
  password: string;
}

export default function App() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();

  const onSubmit = (data: FormValues) => {
    if (errors.email || errors.password) {
      console.log('Por favor completa los campos requeridos');
      return;
    }

    console.log(`Bienvenido ${data.email} ${data.password}`);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <p>correo</p>
      <input
        {...register('email', {
          required: true,
          pattern: /^\S+@\S+\.\S+$/i,
        })}
      />
      {errors.email?.type === 'required' && <p>El correo es requerido.</p>}
      {errors.email?.type === 'pattern' && (
        <p>Ingresa un correo electrónico válido.</p>
      )}
      <p>contraseña</p>
      <input
        {...register('password', {
          required: true,
          minLength: 8,
        })}
      />
      {errors.password?.type === 'required' && (
        <p>La contraseña es requerida.</p>
      )}
      {errors.password?.type === 'minLength' && (
        <p>La contraseña debe tener al menos 8 caracteres.</p>
      )}
      <input type="submit" />
    </form>
  );
}
