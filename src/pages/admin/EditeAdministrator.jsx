import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useParams, Link } from "react-router-dom";
import { getAdministratorById, updateAdministrator } from "../../services/adminService";

function EditAdministrator() {
  const { id } = useParams();
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [loading, setLoading] = useState(true);

  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors, isSubmitting }
  } = useForm();

  // Charger les données existantes
  useEffect(() => {
    async function fetchAdmin() {
      try {
        const admin = await getAdministratorById(id);
        setValue("name", admin.name);
        setValue("email", admin.email);
        setValue("fonction", admin.fonction || '');

      } catch (error) {
        setErrorMessage("Impossible de récupérer les informations de l'administrateur.");
      } finally {
        setLoading(false);
      }
    }

    fetchAdmin();
  }, [id, setValue]);

  const onSubmit = async (data) => {
    try {
      setErrorMessage('');
      setSuccessMessage('');

      const formData = new FormData();

      formData.append("name", data.name);
      formData.append("email", data.email);
      if (data.password) formData.append("password", data.password); // mot de passe optionnel
      formData.append("fonction", data.fonction || '');
      if (data.photo && data.photo[0]) formData.append("photo", data.photo[0]);

      await updateAdministrator(id, formData);

      setSuccessMessage("Administrateur mis à jour avec succès !");
      reset({ password: '', photo: null }); // vider le mot de passe et le fichier
    } catch (error) {
      console.error(error);
      setErrorMessage(error.message || "Une erreur est survenue lors de la mise à jour.");
    }
  };

  if (loading) return <p>Chargement des données...</p>;

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
            form="editAdminForm"
            className="cursor-pointer px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors whitespace-nowrap">
            Annuler
          </button>
          <button
            type="submit"
            form="editAdminForm"
            disabled={isSubmitting}
            className="cursor-pointer px-4 py-2 text-sm font-medium text-white bg-primary border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors whitespace-nowrap">
            {isSubmitting ? "Mise à jour en cours..." : "Enregistrer"}
          </button>
        </div>
      </div>

      {/* Formulaire */}
      <form onSubmit={handleSubmit(onSubmit)} className="px-3 sm:px-6 pb-6" id="editAdminForm">
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
              {...register("name", { required: "Le nom complet est requis", minLength: { value: 3, message: "Nom trop court" } })}
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
              {...register("email", { required: "L'email est requis", pattern: { value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i, message: "Email invalide" } })}
            />
            {errors.email && <p className="text-xs text-red-500">{errors.email.message}</p>}
          </div>

          {/* Mot de passe */}
          <div className="space-y-2">
            <label className="block text-sm">Mot de passe (laisser vide pour ne pas changer)</label>
            <input
              type="password"
              placeholder="Nouveau mot de passe"
              className={`input w-full ${errors.password ? "border-red-500" : ""}`}
              {...register("password", { minLength: { value: 8, message: "8 caractères minimum" } })}
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
            <label className="block text-sm">Photo de profil</label>
            <input
              type="file"
              className={`file-input w-full ${errors.photo ? "border-red-500" : ""}`}
              {...register("photo")}
            />
            {errors.photo && <p className="text-xs text-red-500">{errors.photo.message}</p>}
          </div>

        </div>
      </form>
    </div>
  );
}

export default EditAdministrator;