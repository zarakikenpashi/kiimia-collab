import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

export default function StepSuccess() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.85 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="flex flex-col items-center justify-center py-16"
    >
      <CheckCircle className="w-20 h-20 text-green-500 mb-6" />

      <h1 className="text-3xl font-semibold text-gray-800 mb-3">
        Réservation confirmée !
      </h1>

      <p className="text-gray-600 text-center max-w-md">
        Merci d’avoir réservé avec nous. Votre paiement a été validé
        et vos billets ont été envoyés par e-mail.
      </p>

      <button
        onClick={() => window.location.href = "/"}
        className="mt-10 bg-blue-600 text-white px-8 py-3 rounded-xl hover:bg-blue-700 transition"
      >
        Retour à l’accueil
      </button>
    </motion.div>
  );
}
