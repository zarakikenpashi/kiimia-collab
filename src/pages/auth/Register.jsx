import { Link, useNavigate } from "react-router-dom";
import { useForm } from 'react-hook-form';
import { register as registerUser } from "../../services/authService";
import { useState } from 'react';

function Register() {
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting }
  } = useForm({
    mode: 'onBlur'
  });

  const password = watch('password');

  const onSubmit = async (data) => {
    try {
      setErrorMessage('');
      setSuccessMessage('');
      
      await registerUser({
        name: data.name,
        email: data.email,
        password: data.password,
        password_confirmation: data.confirmPassword,
      });

      setSuccessMessage('Compte créé avec succès ! Redirection...');
      
      // Rediriger vers le dashboard après 1.5 secondes
      setTimeout(() => {
        navigate('/dashboard');
      }, 1500);
      
    } catch (error) {
      console.error('Erreur lors de la création du compte:', error);
      setErrorMessage(error.message || 'Une erreur est survenue lors de la création du compte');
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-6">
      <div className="flex flex-col items-center gap-1 text-center">
        <h1 className="text-2xl font-bold">Créez votre compte</h1>
        <p className="text-muted-foreground text-sm text-balance">
          Remplissez le formulaire ci-dessous pour créer votre compte
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
        <label htmlFor="name" className="block text-sm">Nom complet</label>
        <input
          id="name"
          type="text"
          placeholder="John Doe"
          className={`input ${errors.name ? 'border-red-500' : ''}`}
          {...register('name', {
            required: 'Le nom complet est requis',
            minLength: {
              value: 2,
              message: 'Le nom doit comporter au moins 2 caractères'
            }
          })}
        />
        {errors.name && (
          <p className="text-xs text-red-500">{errors.name.message}</p>
        )}
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
        {errors.email ? (
          <p className="text-xs text-red-500">{errors.email.message}</p>
        ) : (
          <p className="text-xs">
            Nous l'utiliserons pour vous contacter.
          </p>
        )}
      </div>

      <div className="space-y-2">
        <label htmlFor="password" className="block text-sm">Mot de passe</label>
        <input
          id="password"
          type="password"
          className={`input ${errors.password ? 'border-red-500' : ''}`}
          {...register('password', {
            required: 'Le mot de passe est requis',
            minLength: {
              value: 8,
              message: 'Le mot de passe doit comporter au moins 8 caractères'
            },
            pattern: {
              value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/,
              message: 'Le mot de passe doit contenir au moins une majuscule, une minuscule et un chiffre'
            }
          })}
        />
        {errors.password ? (
          <p className="text-xs text-red-500">{errors.password.message}</p>
        ) : (
          <p className="text-xs">
            Minimum 8 caractères avec majuscule, minuscule et chiffre.
          </p>
        )}
      </div>

      <div className="space-y-2">
        <label htmlFor="confirm-password" className="block text-sm">Confirmer le mot de passe</label>
        <input
          id="confirm-password"
          type="password"
          className={`input ${errors.confirmPassword ? 'border-red-500' : ''}`}
          {...register('confirmPassword', {
            required: 'La confirmation du mot de passe est requise',
            validate: value =>
              value === password || 'Les mots de passe ne correspondent pas'
          })}
        />
        {errors.confirmPassword && (
          <p className="text-xs text-red-500">{errors.confirmPassword.message}</p>
        )}
      </div>

      <button 
        type="submit" 
        disabled={isSubmitting}
        className="w-full btn bg-muted text-white border-[#e5e5e5] disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isSubmitting ? 'Création en cours...' : 'Créer un compte'}
      </button>

      <hr className="my-2 border-dashed" />

      <p className="text-accent-foreground text-center text-sm">
        Vous avez déjà un compte ?
        <Link
          className="cursor-pointer inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors underline-offset-4 hover:underline h-9 py-2 px-2"
          to="/auth"
        >
          Se connecter
        </Link>
      </p>
    </form>
  );
}

export default Register;