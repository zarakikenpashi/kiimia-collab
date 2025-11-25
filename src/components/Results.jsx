import { TrainCard } from "./ui/TrainCard"

export const Results = () => {
    return(
        <div className="flex flex-col gap-6">
            <TrainCard
                date="20 novembre"
                departureTime="06:29"
                arrivalTime="09:56"
                duration="3h27m"
                from="Abidjan"
                to="Bouaké"
                trainNumber="#06ième départ"
                price={5000}
            />

            <TrainCard
                date="20 novembre"
                departureTime="06:29"
                arrivalTime="09:56"
                duration="3h27m"
                from="Abidjan"
                to="Bouaké"
                trainNumber="#06ième départ"
                price={5000}
            />


            <TrainCard
                date="20 novembre"
                departureTime="06:29"
                arrivalTime="09:56"
                duration="3h27m"
                from="Abidjan"
                to="Bouaké"
                trainNumber="#06ième départ"
                price={5000}
            />
        </div>
    )
}