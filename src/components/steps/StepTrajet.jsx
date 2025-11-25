export default function StepTrajet({ next }) {
  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold">Détails du trajet</h2>
      <div className="grid md:grid-cols-2 gap-4">
        <div className="border rounded-xl p-4 bg-gray-50">
          <h3 className="font-bold">20 Novembre • 09:09 → 12:14</h3>
          <p className="text-sm text-gray-600">Paris Gare de Lyon → Marseille Saint-Charles</p>
          <p className="text-xs text-gray-500 mt-2">Train à grande vitesse • 3h05</p>
        </div>

        <div className="border rounded-xl p-4 bg-gray-50 space-y-2">
          <h3 className="font-bold">Choix de classe</h3>
          <div className="flex justify-between p-3 border rounded-lg">
            <span>Classe Économie</span>
            <span className="font-bold">$133</span>
          </div>
          <div className="flex justify-between p-3 border rounded-lg bg-yellow-500 text-white">
            <span>1ère Classe</span>
            <span className="font-bold">$287</span>
          </div>
        </div>
      </div>

      <div className="flex justify-end">
        <button onClick={next} className="bg-yellow-500 text-white px-6 py-2 rounded-xl shadow">
          Continuer
        </button>
      </div>
    </div>
  );
}