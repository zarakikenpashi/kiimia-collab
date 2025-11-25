import { useState } from "react";

export default function CheckoutPay() {
  const [paymentMethod, setPaymentMethod] = useState("applepay");

  return (
    <div className="w-full min-h-screen bg-gray-50 p-4 flex justify-center">
      <div className="max-w-5xl w-full grid grid-cols-1 lg:grid-cols-3 gap-6">
        
        {/* LEFT SIDE */}
        <div className="lg:col-span-2 space-y-6">
          
          {/* Travel Summary */}
          <div className="bg-white shadow rounded-lg p-5">
            <h3 className="text-lg font-semibold mb-4">Vos trajets</h3>

            <div className="border rounded-lg p-4 space-y-3">
              <div className="flex justify-between">
                <div>
                  <p className="text-sm text-gray-500">nov. 20</p>
                  <p className="text-base font-semibold">Paris, Gare de Lyon</p>
                  <p className="text-gray-500">jeu., 15:21</p>
                </div>
                <div className="text-right">
                  <p className="text-base font-semibold">Marseille, Saint-Charles</p>
                  <p className="text-gray-500">jeu., 18:40</p>
                </div>
              </div>

              <p className="text-sm text-gray-600">
                Nous enverrons les billets à l'adresse e-mail fournie :{" "}
                <span className="font-medium">udsmog.xh@gmail.com</span>
              </p>
            </div>
          </div>

          {/* Passenger */}
          <div className="bg-white shadow rounded-lg p-5">
            <h3 className="text-lg font-semibold mb-4">Passagers:</h3>

            <div className="border rounded-lg p-4 flex justify-between items-center">
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
                <span className="font-medium">PIYUSH K JAIN</span>
              </div>
              <button className="text-blue-600 hover:underline text-sm">Modifier</button>
            </div>
          </div>

          {/* Payment */}
          <div className="bg-white shadow rounded-lg p-5">
            <h3 className="text-lg font-semibold mb-4">
              Veuillez sélectionner le type de paiement préféré
            </h3>

            {/* Payment Methods */}
            <div className="flex gap-4 mb-5">
              <button
                onClick={() => setPaymentMethod("card")}
                className={`border rounded-lg px-4 py-2 flex items-center gap-2 ${
                  paymentMethod === "card"
                    ? "border-black shadow-sm"
                    : "border-gray-300"
                }`}
              >
                <img src="/visa.svg" className="w-8" />
                <img src="/mastercard.svg" className="w-8" />
              </button>

              <button
                onClick={() => setPaymentMethod("paypal")}
                className={`border rounded-lg px-4 py-2 ${
                  paymentMethod === "paypal"
                    ? "border-black shadow-sm"
                    : "border-gray-300"
                }`}
              >
                <img src="/paypal.svg" className="w-10" />
              </button>

              <button
                onClick={() => setPaymentMethod("applepay")}
                className={`border rounded-lg px-4 py-2 ${
                  paymentMethod === "applepay"
                    ? "border-black shadow-sm"
                    : "border-gray-300"
                }`}
              >
                <img src="/apple-pay.svg" className="w-12" />
              </button>
            </div>

            {/* Telephone Field */}
            <div className="space-y-5">
              <div>
                <label className="text-sm">Téléphone de contact</label>
                <div className="flex gap-2 mt-1">
                  <select className="border rounded-lg px-3">
                    <option>🇫🇷 +33</option>
                    <option>🇧🇪 +32</option>
                    <option>🇮🇸 +354</option>
                  </select>
                  <input
                    type="text"
                    className="flex-1 p-2 border rounded-lg"
                    placeholder="06 12 34 56 78"
                  />
                </div>
              </div>

              <p className="text-xs text-gray-500 leading-snug">
                Frais de conversion possibles si vous utilisez une devise étrangère.<br />
                Paiement sécurisé. Votre carte ne sera débitée qu’une fois votre billet émis.
              </p>

              <div className="flex items-start gap-2">
                <input type="checkbox" className="mt-1" />
                <label className="text-xs text-gray-600">
                  J’accepte les Conditions tarifaires, les Conditions générales et la Politique de confidentialité.
                </label>
              </div>
            </div>

            {/* Apple Pay Button */}
            <button className="w-full bg-black text-white flex justify-center items-center gap-3 py-3 rounded-lg mt-6">
              <img src="/apple-pay-white.svg" className="w-8" />
            </button>

            <p className="text-center text-xs text-gray-500 mt-3">
              Vous utiliserez Apple Pay à la fin de votre achat.
            </p>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="bg-white shadow rounded-lg p-5 h-fit">
          <h3 className="text-lg font-semibold mb-4">Récapitulatif de la commande</h3>

          <div className="border rounded-lg p-4 space-y-4">
            <div className="flex justify-between">
              <span>Prix total</span>
              <span className="font-bold text-lg">$313</span>
            </div>

            <div className="text-sm text-gray-600">
              Comprend les taxes et frais. <br />
              Voir les détails de la commande.
            </div>
          </div>

          <button className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-3 rounded-lg mt-5">
            Payer avec Apple Pay
          </button>
        </div>
      </div>
    </div>
  );
}
