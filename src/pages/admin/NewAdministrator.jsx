import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { createAdministrator } from "../../services/adminService";

function NewAdministrator() {
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting }
  } = useForm();

  const onSubmit = async (data) => {
    try {
      setErrorMessage('');
      setSuccessMessage('');
      
      const formData = new FormData();
      
      formData.append("name", data.name);
      formData.append("email", data.email);
      formData.append("password", data.password);
      formData.append("fonction", data.fonction);
      formData.append("photo", data.photo[0]);

      await createAdministrator(formData);

      setSuccessMessage("Administrateur créé avec succès !");

      reset();

    } catch (error) {
      console.error("Erreur création administrateur:", error);
      setErrorMessage(error.message || "Une erreur est survenue");
    }
  };

  return (
    <div className="w-full mx-auto bg-white min-h-screen relative">

      {/* Header */}
      <div className="sticky z-30 bg-white p-3 sm:px-6 sm:py-3 top-0 mb-4 sm:mb-6 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4">
          <Link
            to="/admin/listeutilisateur"
            className="cursor-pointer px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors whitespace-nowrap">
            Liste
          </Link>
        <div className="ml-auto flex gap-x-2">
          <button
            type="reset"
            form="adminForm"
            className="cursor-pointer px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors whitespace-nowrap">
            Annuler
          </button>
          <button
            type="submit"
            form="adminForm"
            disabled={isSubmitting}
            className="cursor-pointer px-4 py-2 text-sm font-medium text-white bg-primary border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors whitespace-nowrap">
            {isSubmitting ? "Création en cours..." : "Enregistrer"}
          </button>
        </div>
      </div>

      {/* FORM */}
      <form onSubmit={handleSubmit(onSubmit)} encType="multipart/form-data" className="px-3 sm:px-6 pb-6" id="adminForm">
        {successMessage && (
          <div className="p-3 bg-green-50 border border-green-200 text-green-800 rounded-md text-sm mb-4">
            {successMessage}
          </div>
        )}

        {errorMessage && (
          <div className="p-3 bg-red-50 border border-red-200 text-red-800 rounded-md text-sm mb-4">
            {errorMessage}
          </div>
        )}

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">

          {/* Nom */}
          <div className="space-y-2">
            <label className="block text-sm">Nom & Prénoms*</label>
            <input
              type="text"
              placeholder="Kennetch Onebo"
              className={`input w-full ${errors.name ? "border-red-500" : ""}`}
              {...register("name", {
                required: "Le nom complet est requis",
                minLength: { value: 3, message: "Nom trop court" }
              })}
            />
            {errors.name && <p className="text-xs text-red-500">{errors.name.message}</p>}
          </div>

          {/* Email */}
          <div className="space-y-2">
            <label className="block text-sm">Email*</label>
            <input
              type="email"
              placeholder="kenny@exemple.com"
              className={`input w-full ${errors.email ? "border-red-500" : ""}`}
              {...register("email", {
                required: "L'email est requis",
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "Email invalide"
                }
              })}
            />
            {errors.email && <p className="text-xs text-red-500">{errors.email.message}</p>}
          </div>

          {/* Mot de passe */}
          <div className="space-y-2">
            <label className="block text-sm">Mot de passe*</label>
            <input
              type="text"
              placeholder="Entrez un mot de passe par défaut"
              className={`input w-full ${errors.password ? "border-red-500" : ""}`}
              {...register("password", {
                required: "Le mot de passe est requis",
                minLength: {
                  value: 6,
                  message: "6 caractères minimum"
                }
              })}
            />
            {errors.password && <p className="text-xs text-red-500">{errors.password.message}</p>}
          </div>

          {/* Fonction */}
          <div className="space-y-2">
            <label className="block text-sm">Fonction</label>
            <input
              type="text"
              placeholder="Directeur Technique"
              className={`input w-full ${errors.fonction ? "border-red-500" : ""}`}
              {...register("fonction")}
            />
            {errors.fonction && <p className="text-xs text-red-500">{errors.fonction.message}</p>}
          </div>

          {/* Photo */}
          <div className="space-y-2">
            <label className="block text-sm" htmlFor="photo">Photo de profile</label>
            <input
              type="file"
              className={`file-input w-full ${errors.photo ? "border-red-500" : ""}`}
              {...register("photo")}
            />
            {errors.photo && <p className="text-xs text-red-500">{errors.photo.message}</p>}
          </div>
        </div>

        {/* <button
          type="submit"
          disabled={isSubmitting}
          className="mt-6 w-full btn bg-primary text-white disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isSubmitting ? "Création en cours..." : "Créer l'administrateur"}
        </button> */}

      </form>
    </div>
  );
}

export default NewAdministrator;