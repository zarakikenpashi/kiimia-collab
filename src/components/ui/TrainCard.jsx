import { Link } from "react-router";

export const TrainCard = ({
  date = "20 novembre",
  departureTime = "06:29",
  arrivalTime = "09:56",
  duration = "3h27m",
  from = "Gare de Lyon",
  to = "Saint-Charles",
  trainType = "Car climatisé",
  trainNumber = "Départ #006",
  price = 175,
  buttonLabel = "Choisir",
}) => {
  return (
    <div className="flex flex-col md:flex-row justify-between items-center bg-white p-6 rounded-xl shadow-sm w-full gap-6">

      {/* Left section */}
      <div className="flex flex-col gap-2 w-full md:w-auto text-left">
        <span className="text-sm text-gray-500">{date}</span>

        <div className="flex items-center justify-center md:justify-start gap-3">
          <span className="text-3xl font-semibold">{departureTime}</span>

          {/* timeline */}
          <div className="flex items-center text-gray-400">
            <div className="w-2 h-2 rounded-full bg-gray-300 mr-1"></div>
            <span className="text-sm">{duration}</span>
            <div className="w-2 h-2 rounded-full bg-[rgb(255,78,0)] ml-1"></div>
          </div>

          <span className="text-3xl font-semibold">{arrivalTime}</span>
        </div>

        <div className="flex justify-between md:justify-start text-gray-500 text-sm">
          <span>{from}</span>
          <span className="md:ml-4">{to}</span>
        </div>
      </div>

      {/* Center section */}
      <div className="flex flex-col items-center md:items-start justify-center">
        <span className="bg-[rgba(255,175,1,0.1)] text-[rgb(89,89,89)] text-xs text-center uppercase font-semibold px-2 py-1 rounded">
          {trainType}
        </span>

        <div className="flex items-center gap-2 mt-2">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJuidq9FizEF_6JDmb-gZ8_xNQ6KxxxAcwcw&s"
            alt="SNCF"
            className="size-16 md:size-20 object-cover"
          />
          <span className="text-sm text-gray-600">{trainNumber}</span>
        </div>
      </div>

      {/* Right section */}
      <div className="flex flex-col items-center md:items-end gap-2 w-full md:w-auto">
        <span className="text-xl font-semibold">{price} F CFA</span>

        <Link 
            className="
                cursor-pointer bg-[rgb(255,78,0)] text-white 
                px-5 py-2 rounded-lg hover:bg-blue-700 transition 
                w-full md:w-auto
            "
            to="/reservation"
        >
          {buttonLabel}
        </Link>
      </div>
    </div>
  );
};
