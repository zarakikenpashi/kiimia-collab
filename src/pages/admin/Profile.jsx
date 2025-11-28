import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useParams, Link } from "react-router-dom";
import { Pencil, Eye, EyeOff, LogOut, ArrowLeft, Save, Loader2, AlertCircle, CheckCircle2 } from 'lucide-react';
import { updateAdministrator } from "../../services/adminService";
import { getCurrentUser, updateProfile } from "../../services/authService";


const FormInput = ({ label, type = "text", placeholder, register, name, rules, error, disabled }) => (
  <div className="space-y-2">
    <label className="text-sm font-semibold text-stone-700">{label}</label>
    <input
      type={type}
      placeholder={placeholder}
      disabled={disabled}
      className={`w-full px-4 py-3 rounded-xl border bg-stone-50/50 text-stone-900 text-sm 
      focus:outline-none focus:ring-2 focus:ring-[rgb(255,78,0)]/20 focus:border-[rgb(255,78,0)] focus:bg-white 
      transition-all placeholder:text-stone-400
      ${error ? "border-red-500 focus:ring-red-200 focus:border-red-500" : "border-stone-200"}`}
      {...register(name, rules)}
    />
    {error && <p className="text-xs text-red-500 mt-1">{error.message}</p>}
  </div>
);

const FormPasswordInput = ({ label, placeholder, register, name, rules, error }) => {
  const [show, setShow] = useState(false);
  return (
    <div className="space-y-2 relative">
      <label className="text-sm font-semibold text-stone-700">{label}</label>
      <div className="relative">
        <input
          type={show ? "text" : "password"}
          placeholder={placeholder}
          className={`w-full px-4 py-3 rounded-xl border bg-stone-50/50 text-stone-900 text-sm 
          focus:outline-none focus:ring-2 focus:ring-[rgb(255,78,0)]/20 focus:border-[rgb(255,78,0)] focus:bg-white 
          transition-all placeholder:text-stone-400 pr-10
          ${error ? "border-red-500 focus:ring-red-200 focus:border-red-500" : "border-stone-200"}`}
          {...register(name, rules)}
        />
        <button
          type="button"
          onClick={() => setShow(!show)}
          className="absolute right-3 top-1/2 -translate-y-1/2 text-stone-400 hover:text-[rgb(255,78,0)] transition-colors"
        >
          {show ? <Eye size={18} /> : <EyeOff size={18} />}
        </button>
      </div>
      {error && <p className="text-xs text-red-500 mt-1">{error.message}</p>}
    </div>
  );
};


function Profile() {
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [loading, setLoading] = useState(true);
  const [photoPreview, setPhotoPreview] = useState(null);
  const [profil, setProfil] = useState(null);


  const primaryBgClass = "bg-[rgb(255,78,0)]";

  const {
    register,
    handleSubmit,
    reset,
    setValue,
    watch,
    formState: { errors, isSubmitting }
  } = useForm();

  // Observer le champ photo pour la prévisualisation
  const photoFile = watch("photo");

  // Charger les données existantes
  useEffect(() => {
    async function fetchAdmin() {
      try {
        const admin = await getCurrentUser();
        setValue("name", admin.name);
        setValue("email", admin.email);
        setValue("fonction", admin.fonction || '');
        setProfil(admin)
        
        // Si l'API renvoie une URL de photo, on l'initialise
        if (admin.photoUrl || admin.photo) {
           setPhotoPreview(admin.photoUrl || admin.photo); 
        }
      } catch (error) {
        setErrorMessage("Impossible de récupérer les informations de l'administrateur.");
      } finally {
        setLoading(false);
      }
    }
    fetchAdmin();
  }, [setValue]);

  // Gérer la prévisualisation locale quand l'utilisateur choisit un fichier
  useEffect(() => {
    if (photoFile && photoFile.length > 0) {
      const file = photoFile[0];
      const objectUrl = URL.createObjectURL(file);
      setPhotoPreview(objectUrl);
      // Nettoyage mémoire
      return () => URL.revokeObjectURL(objectUrl);
    }
  }, [photoFile]);

  const onSubmit = async (data) => {
    try {
      setErrorMessage('');
      setSuccessMessage('');

      const formData = new FormData();
      formData.append("name", data.name);
      formData.append("email", data.email);
      if (data.password) formData.append("password", data.password);
      formData.append("fonction", data.fonction || '');
      if (data.photo && data.photo[0]) formData.append("photo", data.photo[0]);



      await updateProfile(formData);

      setSuccessMessage("Administrateur mis à jour avec succès !");

      setValue('password', '');
      setValue('name', ''); 
      setValue('email', '');
      setValue('fonction', '');
      setValue('photo', '');
    } catch (error) {
      console.error(error);
      setErrorMessage(error.message || "Une erreur est survenue lors de la mise à jour.");
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-stone-50">
        <div className="flex flex-col items-center gap-2 text-stone-500">
          <Loader2 className="animate-spin text-[rgb(255,78,0)]" size={32} />
          <p>Chargement du profil...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-stone-50 flex font-sans text-stone-800 selection:bg-[rgb(255,78,0)] selection:text-white">
      <div className="w-full mx-auto p-3 sm:p-6 max-w-7xl">
        
        <div className="mb-8 flex items-center justify-between">
          <Link 
            to="/admin/listeutilisateur" 
            className="flex items-center gap-2 text-stone-500 hover:text-stone-900 transition-colors font-medium"
          >
            <div className="p-2 bg-white rounded-lg border border-stone-200 shadow-sm">
              <ArrowLeft size={18} />
            </div>
            <span>Retour à la liste</span>
          </Link>
        </div>


        {successMessage && (
          <div className="mb-6 p-4 bg-green-50 border border-green-200 text-green-800 rounded-xl flex items-center gap-3 animate-in fade-in slide-in-from-top-2">
            <CheckCircle2 size={20} className="shrink-0" />
            {successMessage}
          </div>
        )}
        {errorMessage && (
          <div className="mb-6 p-4 bg-red-50 border border-red-200 text-red-800 rounded-xl flex items-center gap-3 animate-in fade-in slide-in-from-top-2">
            <AlertCircle size={20} className="shrink-0" />
            {errorMessage}
          </div>
        )}

        <form onSubmit={handleSubmit(onSubmit)} className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-4 space-y-6">
            <div className="bg-white rounded-2xl shadow-sm border border-stone-100 p-6 flex flex-col items-center text-center relative overflow-hidden">
              

              <div className={`absolute top-0 left-0 w-full h-24 bg-linear-to-b from-[rgb(255,78,0)]/10 to-transparent`}></div>
              
              <div className="relative mb-4 mt-4 group">
                <div className="p-1.5 bg-white rounded-3xl shadow-sm relative">
                  <img 
                    src={photoPreview || "https://ui-avatars.com/api/?name=User&background=random"} 
                    alt="Profile" 
                    className="w-32 h-32 rounded-2xl object-cover bg-stone-100"
                  />

                  <input 
                    type="file" 
                    id="photo-upload" 
                    className="hidden" 
                    accept="image/*"
                    {...register("photo")}
                  />
                  <label 
                    htmlFor="photo-upload"
                    className={`cursor-pointer absolute -bottom-2 -right-2 ${primaryBgClass} text-white p-2.5 rounded-xl hover:bg-orange-700 transition-all shadow-lg shadow-orange-500/20 border-[3px] border-white hover:scale-105 active:scale-95`}
                  >
                    <Pencil size={16} strokeWidth={2.5} />
                  </label>
                </div>
              </div>

              <h2 className="text-xl font-bold text-stone-900 mt-2">{watch('name')}</h2>


              <div className="w-full mt-6 pt-6 border-t border-stone-100">
                <button type="button" className="flex items-center justify-center gap-2 text-stone-400 hover:text-red-500 text-sm font-medium group transition-colors w-full">
                  <LogOut size={16} className="group-hover:-translate-x-1 transition-transform" />
                  Supprimer le compte
                </button>
              </div>
            </div>
            

            <div className="lg:hidden">
              <button 
                type="submit" 
                disabled={isSubmitting}
                className={`w-full ${primaryBgClass} hover:opacity-90 disabled:opacity-70 text-white px-6 py-3.5 rounded-xl text-sm font-bold transition-all shadow-lg shadow-orange-500/20 active:scale-95 flex items-center justify-center gap-2`}
              >
                {isSubmitting ? <Loader2 className="animate-spin" size={18} /> : <Save size={18} />}
                {isSubmitting ? "Enregistrement..." : "Enregistrer les modifications"}
              </button>
            </div>
          </div>

          {/* Right Block: Forms */}
          <div className="lg:col-span-8 space-y-6">
            
            {/* General Info Section */}
            <div className="bg-white rounded-2xl shadow-sm border border-stone-100 p-8">
              <div className="mb-6 pb-4 border-b border-stone-100">
                <h2 className="text-lg font-bold text-stone-900">Informations Personnelles</h2>
                <p className="text-sm text-stone-500 mt-1">Gérez les informations publiques du profil</p>
              </div>

              <div className="grid grid-cols-1 gap-6">
                <FormInput 
                  label="Nom & Prénoms" 
                  placeholder="Ex: Kennetch Onebo" 
                  name="name"
                  register={register}
                  error={errors.name}
                  rules={{ required: "Le nom complet est requis", minLength: { value: 3, message: "Nom trop court" } }}
                />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <FormInput 
                    label="Email" 
                    type="email"
                    placeholder="exemple@email.com" 
                    name="email"
                    register={register}
                    error={errors.email}
                    rules={{ required: "L'email est requis", pattern: { value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i, message: "Email invalide" } }}
                  />
                  <FormInput 
                    label="Fonction" 
                    placeholder="Ex: Directeur Technique" 
                    name="fonction"
                    register={register}
                    error={errors.fonction}
                  />
                </div>
              </div>
            </div>

            {/* Security Section */}
            <div className="bg-white rounded-2xl shadow-sm border border-stone-100 p-8">
              <div className="mb-6 pb-4 border-b border-stone-100">
                 <h2 className="text-lg font-bold text-stone-900">Sécurité</h2>
                 <p className="text-sm text-stone-500 mt-1">Laissez vide si vous ne souhaitez pas modifier le mot de passe.</p>
              </div>

              <div className="grid grid-cols-1 gap-6">
                <FormPasswordInput 
                  label="Nouveau mot de passe" 
                  placeholder="Minimum 8 caractères"
                  name="password"
                  register={register}
                  error={errors.password}
                  rules={{ minLength: { value: 8, message: "8 caractères minimum" } }}
                />
              </div>
            </div>

            {/* Desktop Save Action */}
            <div className="hidden lg:flex justify-end pt-2">
                <Link
                  to="/admin/listeutilisateur"
                  className="mr-4 px-6 py-3 text-sm font-medium text-stone-600 bg-white border border-stone-200 rounded-xl hover:bg-stone-50 transition-colors"
                >
                  Annuler
                </Link>
                <button 
                  type="submit" 
                  disabled={isSubmitting}
                  className={`${primaryBgClass} hover:opacity-90 disabled:opacity-70 text-white px-8 py-3 rounded-xl text-sm font-bold transition-all shadow-lg shadow-orange-500/20 active:scale-95 flex items-center gap-2`}
                >
                  {isSubmitting ? <Loader2 className="animate-spin" size={18} /> : <Save size={18} />}
                  {isSubmitting ? "Enregistrement..." : "Enregistrer les modifications"}
                </button>
            </div>

          </div>
        </form>
      </div>
    </div>
  );
}

export default Profile;