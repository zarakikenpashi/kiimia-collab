export default function StepRecap({ formData, next, prev }) {
  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold">Récapitulatif</h2>

      <div className="border rounded-xl p-4 bg-gray-50 space-y-2">
        <h3 className="font-semibold text-lg">Trajet sélectionné</h3>
        <p className="text-sm text-gray-600">Paris Gare de Lyon → Marseille Saint-Charles</p>
        <p className="text-xs text-gray-500">20 Novembre • 09:09 → 12:14</p>
      </div>

      <div className="border rounded-xl p-4 bg-gray-50 space-y-2">
        <h3 className="font-semibold text-lg">Passager</h3>
        <p><span className="font-medium">Nom :</span> {formData.name}</p>
        <p><span className="font-medium">Email :</span> {formData.email}</p>
        <p><span className="font-medium">Billets :</span> {formData.tickets}</p>
      </div>

      <div className="border rounded-xl p-4 bg-gray-50 space-y-2">
        <h3 className="font-semibold text-lg">Paiement</h3>
        <p>
          <span className="font-medium">Méthode :</span> {" "}
          {formData.payment === "card" && "Carte Bancaire"}
          {formData.payment === "mobile" && "Mobile Money"}
          {formData.payment === "paypal" && "PayPal"}
        </p>
      </div>

      <div className="flex justify-between pt-4">
        <button onClick={prev} className="px-4 py-2 border rounded-xl">Retour</button>
        <button onClick={next} className="bg-yellow-500 text-white px-6 py-2 rounded-xl shadow">Payer maintenant</button>
      </div>
    </div>
  );
}