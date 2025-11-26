import { Link, useNavigate } from "react-router-dom";
import { useForm } from 'react-hook-form';
import { login } from "../../services/authService";
import { useState } from 'react';

function Login() {
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting }
  } = useForm();

  const onSubmit = async (data) => {
    try {
      setErrorMessage('');
      setSuccessMessage('');
      
      await login({
        email: data.email,
        password: data.password,
      });

      setSuccessMessage('Connexion réussie ! Redirection...');
      
      setTimeout(() => {
        navigate('/dashboard');
      }, 1000);
      
    } catch (error) {
      console.error('Erreur lors de la connexion:', error);
      setErrorMessage(error.message || 'Email ou mot de passe incorrect');
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-6">
      <div className="flex flex-col items-center gap-1 text-center">
        <h1 className="text-2xl font-bold">Connexion</h1>
        <p className="text-muted-foreground text-sm text-balance">
          Connectez-vous à votre compte
        </p>
      </div>

      {successMessage && (
        <div className="p-3 bg-green-50 border border-green-200 text-green-800 rounded-md text-sm">
          {successMessage}
        </div>
      )}
      
      {errorMessage && (
        <div className="p-3 bg-red-50 border border-red-200 text-red-800 rounded-md text-sm">
          {errorMessage}
        </div>
      )}

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
        <div className="flex items-center justify-between">
          <label htmlFor="password" className="block text-sm">Mot de passe</label>
          <Link to="/forgot-password" className="text-xs text-primary hover:underline">
            Mot de passe oublié ?
          </Link>
        </div>
        <input
          id="password"
          type="password"
          className={`input ${errors.password ? 'border-red-500' : ''}`}
          {...register('password', {
            required: 'Le mot de passe est requis'
          })}
        />
        {errors.password && (
          <p className="text-xs text-red-500">{errors.password.message}</p>
        )}
      </div>

      <button 
        type="submit" 
        disabled={isSubmitting}
        className="w-full btn bg-muted text-white border-[#e5e5e5] disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isSubmitting ? 'Connexion...' : 'Se connecter'}
      </button>

      <hr className="my-2 border-dashed" />

      <p className="text-accent-foreground text-center text-sm">
        Pas encore de compte ?
        <Link
          className="cursor-pointer inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors underline-offset-4 hover:underline h-9 py-2 px-2"
          to="/register"
        >
          Créer un compte
        </Link>
      </p>
    </form>
  );
}

export default Login;