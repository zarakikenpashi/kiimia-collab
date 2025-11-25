import { Link } from "react-router"
import { useForm } from 'react-hook-form';
import { login } from "../../services/authService";

function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting }
  } = useForm({
    mode: 'onBlur'
  });

  const onSubmit = async (data) => {
    try {
      console.log('Données de connexion:', data);
      await login(data);
    } catch (error) {
      console.error('Erreur lors de la connexion:', error);
    }
  };

  return (
    <form className="flex flex-col gap-6">
      <div className="flex flex-col items-center gap-1 text-center">
        <h1 className="text-xl font-bold">Connectez-vous à votre compte</h1>
        <p className="text-muted-foreground text-xs text-balance">
          Entrez votre adresse e-mail ci-dessous pour vous connecter à votre compte
        </p>
      </div>

      <div className="space-y-2">
        <label htmlFor="email" className="block text-sm">Email</label>
        <input
          id="email"
          type="email"
          placeholder="m@exemple.com"
          className={`input ${errors.email ? 'border-red-500' : ''}`}
          {...register('email', {
            required: 'L\'email est requis',
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: 'Adresse email invalide'
            }
          })}
        />
        {errors.email && (
          <p className="text-xs text-red-500">{errors.email.message}</p>
        )}
      </div>

      <div className="space-y-2">
        <div className="flex items-center">
          <label htmlFor="password" className="block text-sm">Mot de passe</label>
          <Link href="#" className="ml-auto text-sm underline-offset-4 hover:underline">
            Mot de passe oublié ?
          </Link>
        </div>
        <input
          id="password"
          type="password"
          className={`input ${errors.password ? 'border-red-500' : ''}`}
          {...register('password', {
            required: 'Le mot de passe est requis',
            minLength: {
              value: 6,
              message: 'Le mot de passe doit comporter au moins 6 caractères'
            }
          })}
        />
        {errors.password && (
          <p className="text-xs text-red-500">{errors.password.message}</p>
        )}
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        onClick={handleSubmit(onSubmit)}
        className="w-full btn bg-muted text-white border-[#e5e5e5] disabled:opacity-50"
      >
        {isSubmitting ? 'Connexion en cours...' : 'Se connecter'}
      </button>

      <hr className="my-2 border-dashed" />

      <p className="text-accent-foreground text-center text-sm">
        <span>Vous n'avez pas de compte ?</span>
        <Link
          className="cursor-pointer inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none underline-offset-4 hover:underline h-9 py-2 px-2"
          to="/auth/register"
        >
          Créer un compte
        </Link>
      </p>
    </form>
  );
}

export default Login