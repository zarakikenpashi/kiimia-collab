export function StepPassenger({ formData, setFormData, next }) {
  return (
    <>
      {/* <div className="space-y-4">
        <h2 className="text-xl font-semibold">Informations passager</h2>
        <div className="grid md:grid-cols-2 gap-4">
          <input
            type="text"
            placeholder="Nom complet"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="border p-3 rounded-lg w-full"
          />
          <input
            type="email"
            placeholder="Email"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className="border p-3 rounded-lg w-full"
          />
          <select
            value={formData.tickets}
            onChange={(e) => setFormData({ ...formData, tickets: e.target.value })}
            className="border p-3 rounded-lg w-full"
          >
            {[1,2,3,4,5].map(n => <option key={n}>{n}</option>)}
          </select>
        </div>
        <div className="flex justify-between">
          <button onClick={prev} className="px-4 py-2 border rounded-xl">Retour</button>
          <button onClick={next} className="bg-yellow-500 text-white px-6 py-2 rounded-xl shadow">
            Continuer
          </button>
        </div>
      </div> */}
      <div className="w-full bg-gray-50 p-4 md:p-8">
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* LEFT SIDE */}
          <div className="col-span-2 flex flex-col gap-6">
            {/* Trajet */}
            <div className="bg-white rounded-xl p-5 shadow-sm">
              <div className="flex items-start">
                <div className="mr-4 text-gray-600 font-semibold">
                  nov. 20
                </div>

                <div className="flex-1">
                  {/* Departure */}
                  <div className="flex items-start gap-2">
                    <div className="w-3 h-3 bg-black rounded-full mt-2"></div>
                    <div>
                      <h3 className="font-semibold text-gray-800">Abidjan, Gare de youpougon</h3>
                      <p className="text-xs text-gray-500">
                        France Paris, 4 Place Louis Armand 75012 Paris
                      </p>
                      <p className="text-xs text-gray-500 mt-1">
                        SNCF · Train #6803 | 1 changement · Temps de trajet 3 h 50 m
                      </p>
                    </div>
                  </div>

                  {/* Divider Line */}
                  <div className="border-l-2 border-gray-300 h-8 mx-1 ml-4"></div>

                  {/* Arrival */}
                  <div className="flex items-start gap-2">
                    <div className="w-3 h-3 bg-orange-500 rounded-full mt-2"></div>
                    <div>
                      <h3 className="font-semibold text-gray-800">
                        Gagnoa, Gabriel gare
                      </h3>
                      <p className="text-xs text-gray-500">
                        France Marseille, Square Narvik
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Passagers */}
            <div className="bg-white rounded-xl p-6 shadow flex flex-col gap-4">
              <h3 className="font-semibold">Vos informations</h3>
              <div className="grid md:grid-cols-2 gap-4 mt-4">
                <div className="flex flex-col gap-1">
                  <label className="text-sm text-gray-600">Nom et prénoms</label>
                  <input className="border rounded-lg p-2 border-[rgb(217,217,217)] outline-none" />
                </div>

                <div className="flex flex-col gap-1">
                  <label className="text-sm text-gray-600">Nombre de place</label>
                  <input type="text" className="border rounded-lg p-2 border-[rgb(217,217,217)] outline-none" />
                </div>
              </div>

              <p className="text-xs text-gray-400 text-center">
                Vos informations personnelles sont cryptées
              </p>
            </div>

            <button 
              onClick={next} 
              className="cursor-pointer bg-[rgb(255,78,0)] text-white w-full py-3 rounded-lg font-semibold mt-2">
              Continuer
            </button>
          </div>

          {/* RIGHT SIDE – SUMMARY */}
          <div className="flex flex-col gap-6">

            <div className="bg-white p-6 rounded-xl shadow">
              <h3 className="font-semibold mb-3">Récapitulatif de la commande</h3>

              <p className="text-sm text-gray-600">Compagnie : SBTA</p>
              <p className="text-sm text-gray-600">Billet: 2</p>

              <div className="my-4 border-t"></div>

              <div className="flex justify-between">
                <span className="text-lg font-semibold">Prix total</span>
                <span className="text-xl font-bold">10.000 F CFA</span>
              </div>

              <p className="text-xs text-gray-500 mt-1">
                Comprend toutes les taxes et frais.
              </p>

              <button 
                onClick={next}
                className="cursor-pointer bg-[rgb(255,78,0)] text-white w-full py-2 rounded-lg my-4">
                Continuer
              </button>
            </div>

            {/* Infos */}
            <div className="bg-white p-6 rounded-xl shadow flex flex-col gap-4">
              <div>
                <p className="font-semibold">Excellent choix !</p>
                <p className="text-sm text-gray-500">
                  Vous avez sélectionné l’un des meilleurs trains pour cet itinéraire.
                </p>
              </div>

              <div>
                <p className="font-semibold">Réservation de siège garantie</p>
                <p className="text-sm text-gray-500">
                  Nous émettons vos billets avec réservation de siège garantie.
                </p>
              </div>

              <div>
                <p className="font-semibold">Service client vérifié</p>
                <p className="text-sm text-gray-500">
                  Notre service client est disponible 24/7 pour vous aider.
                </p>
              </div>
            </div>

          </div>

        </div>
      </div>
    </>
  );
}