export const Benefits = () => {
    return(
        <section className="mx-auto mt-2 px-6 max-w-7xl rounded-2xl lg:px-5 py-12">
            <div className="grid lg:grid-cols-2 items-center gap-y-6 gap-x-8 grid-cols-1 lg:gap-y-4">
                <div className="text-[rgb(89,89,89)]">
                    <p>
                        kiimia est une entreprise commerciale qui facilite la réservation de billets pour vos voyages.
                    </p>
                </div>
                <div>
                    <ul className="flex flex-col md:flex-row w-full list-none gap-2">
                        <li className="border border-gray-200 flex-1 rounded-lg">
                            <a href="" className="inline-flex flex-col gap-2 px-6 py-3.5 w-full">
                                <span className="flex justify-between">
                                    <span className="text-xs font-medium leading-5 tracking-normal normal-case no-underline text-foreground">Utilisez notre application gratuite</span>
                                    <svg 
                                        xmlns="http://www.w3.org/2000/svg" 
                                        viewBox="0 0 24 24" 
                                        className="h-6 w-6 fill-[#FFAF01] self-start relative -top-1.5 -right-3.5"
                                    >
                                        <path d="M17.92 6.62a1 1 0 0 0-.54-.54A1 1 0 0 0 17 6H7a1 1 0 0 0 0 2h7.59l-8.3 8.29a1 1 0 0 0 0 1.42 1 1 0 0 0 1.42 0L16 9.41V17a1 1 0 0 0 2 0V7a1 1 0 0 0-.08-.38"></path>
                                    </svg>
                                </span>
                                <span className="text-sm  leading-[22px] tracking-normal normal-case no-underline">Réservez et gérez vos voyages partout</span>
                            </a>
                        </li>
                        <li className="border border-gray-200 flex-1 rounded-lg bg-[rgba(255,175,1,0.1)]">
                            <a href="" className="inline-flex flex-col gap-2 px-6 py-3.5 w-full">
                                <span className="flex justify-between">
                                    <span className="text-xs font-medium leading-5 tracking-normal normal-case no-underline text-foreground">Avis sur kiimia</span>
                                    <svg 
                                        xmlns="http://www.w3.org/2000/svg" 
                                        viewBox="0 0 24 24" 
                                        className="h-6 w-6 fill-[#FFAF01] self-start relative -top-1.5 -right-3.5"
                                    >
                                        <path d="M17.92 6.62a1 1 0 0 0-.54-.54A1 1 0 0 0 17 6H7a1 1 0 0 0 0 2h7.59l-8.3 8.29a1 1 0 0 0 0 1.42 1 1 0 0 0 1.42 0L16 9.41V17a1 1 0 0 0 2 0V7a1 1 0 0 0-.08-.38"></path>
                                    </svg>
                                </span>
                                <span className="text-sm  leading-[22px] tracking-normal normal-case no-underline">Fiable par plus de 2M+ de voyageurs à travers le monde</span>
                            </a>
                        </li>
                        <li className="border border-gray-200 flex-1 rounded-lg bg-[rgb(238,238,238)]">
                            <a href="" className="inline-flex flex-col gap-2 px-6 py-3.5 w-full">
                                <span className="flex justify-between">
                                    <span className="text-xs font-medium leading-5 tracking-normal normal-case no-underline text-foreground">Disponible 24/7</span>
                                    <svg 
                                        xmlns="http://www.w3.org/2000/svg" 
                                        viewBox="0 0 24 24" 
                                        className="h-6 w-6 fill-[#FFAF01] self-start relative -top-1.5 -right-3.5"
                                    >
                                        <path d="M17.92 6.62a1 1 0 0 0-.54-.54A1 1 0 0 0 17 6H7a1 1 0 0 0 0 2h7.59l-8.3 8.29a1 1 0 0 0 0 1.42 1 1 0 0 0 1.42 0L16 9.41V17a1 1 0 0 0 2 0V7a1 1 0 0 0-.08-.38"></path>
                                    </svg>
                                </span>
                                <span className="text-sm  leading-[22px] tracking-normal normal-case no-underline">Une assistance humaine réelle à tout moment</span>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    )
}