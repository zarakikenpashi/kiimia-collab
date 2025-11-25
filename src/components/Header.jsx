import { Link } from "react-router"

export const Header = () => {
    return(
        <div 
            className="
                min-h-[560px] lg:min-h-[360px] pb-6 w-full relative
                before:content-['']
                before:absolute
                before:inset-0
                before:z-0
                before:bg-linear-to-b before:from-black before:to-transparent
                after:content-['']
                after:absolute
                after:bottom-0
                after:left-0
                after:right-0
                after:h-1/2
                after:z-0
                after:bg-linear-to-t
                after:from-black
                after:to-transparent
                mb-14
            "
        >

            <div className="absolute inset-0 -z-20">
                <img
                    src="https://back.rail.ninja/sites/default/files/2025-08/rn_main_page_bg.webp"
                    alt="Home banner"
                    className="size-full object-cover"
                    loading="lazy"
                />
            </div>
            <div className="absolute inset-0 z-10 text-white mx-auto max-w-7xl px-6 top-1/2">
                <div className="flex justify-center flex-col h-full lg:gap-y-14 gap-y-6 ">
                    <h1 className="lg:ml-20 lg:text-[32px] leading-8 text-[20px] font-medium lg:leading-10">Voyagez en tout confort  <br /> à partir de 5000 F CFA</h1>
                    <SearchBar />
                </div>
            </div>


        </div>
    )
}


export const SearchBar = () => {
    return (
        <div className="">
            {/* Trip Type Toggle */}
            <div className="tabs tabs-lift px-4 py-6">
            <input type="radio" name="my_tabs_6" className="tab" aria-label="Aller simple" defaultChecked />
            <div className="tab-content">
                <form action="">
                    <div className="flex gap-2 pt-4 items-center flex-wrap">
                        <div className="flex flex-1 flex-col lg:flex-row">
                            <div className="input-group flex flex-col text-[rgb(89,89,89)] w-full lg:w-1/2">
                                <label htmlFor="">De</label>
                                <input type="text" className="bg-[rgba(255,175,1,0.1)] outline-none text-[rgb(89,89,89)] h-10 px-2" />
                            </div>
                            <div className="input-group flex flex-col text-[rgb(89,89,89)] w-full lg:w-1/2">
                                <label htmlFor="" className="uppercase">à</label>
                                <input type="text" className="bg-[rgba(255,175,1,0.1)] outline-none text-[rgb(89,89,89)] h-10 px-2" />
                            </div>
                        </div>
                        <div className="input-group flex flex-col text-[rgb(89,89,89)] w-full lg:w-auto">
                            <label htmlFor="">Date</label>
                            <input type="date" className="bg-[rgba(255,175,1,0.1)] outline-none text-[rgb(89,89,89)] h-10 px-2 rounded-md" />
                        </div>
                        <div className="input-group flex flex-col text-[rgb(89,89,89)] w-full lg:w-auto">
                            <label htmlFor="">Place</label>
                            <input type="text" className="bg-[rgba(255,175,1,0.1)] outline-none text-[rgb(89,89,89)] h-10 px-2 rounded-md" />
                        </div>
                        <div className="input-group flex flex-col text-[rgb(89,89,89)] w-full lg:w-auto">
                            <label htmlFor="">Compagnie</label>
                            <input type="text" className="bg-[rgba(255,175,1,0.1)] outline-none text-[rgb(89,89,89)] h-10 px-2 rounded-md" />
                        </div>
                        <div className="input-group flex flex-col mt-6 w-full lg:w-auto">
                            <Link to="/order">
                                <button className="h-10 px-6 cursor-pointer rounded-md text-white bg-[rgb(255,78,0)] flex gap-4 items-center">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24"
                                        className="text-white size-4"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                    >
                                        <path d="M21.71 20.29 18 16.61A9 9 0 1 0 16.61 18l3.68 3.68a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.39M11 18a7 7 0 1 1 7-7 7 7 0 0 1-7 7"></path>
                                    </svg>
                                    <span className="lg:hidden">Rechercher</span>
                                </button>
                            </Link>

                        </div>
                    </div>

                </form>
            </div>

            <input type="radio" name="my_tabs_6" className="tab" aria-label="Aller-retour" />
            <div className="tab-content">
                <form action="">
                    <div className="flex gap-2 pt-4 items-center flex-wrap">
                        <div className="flex flex-1 flex-col lg:flex-row">
                            <div className="input-group flex flex-col text-[rgb(89,89,89)] w-full lg:w-1/2">
                                <label htmlFor="">De</label>
                                <input type="text" className="bg-[rgba(255,175,1,0.1)] outline-none text-[rgb(89,89,89)] h-10 px-2" />
                            </div>
                            <div className="input-group flex flex-col text-[rgb(89,89,89)] w-full lg:w-1/2">
                                <label htmlFor="" className="uppercase">à</label>
                                <input type="text" className="bg-[rgba(255,175,1,0.1)] outline-none text-[rgb(89,89,89)] h-10 px-2" />
                            </div>
                        </div>
                        <div className="input-group flex text-[rgb(89,89,89)] flex-col lg:flex-row w-full lg:w-auto">
                            <div className="flex flex-col w-full lg:w-1/2">
                                <label htmlFor="">Date depart</label>
                                <input type="date" className="bg-[rgba(255,175,1,0.1)] outline-none text-[rgb(89,89,89)] h-10 px-2 rounded-md" />
                            </div>
                            <div className="flex flex-col w-full lg:w-1/2">
                                <label htmlFor="">Date de retour</label>
                                <input type="date" className="bg-[rgba(255,175,1,0.1)] outline-none text-[rgb(89,89,89)] h-10 px-2 rounded-md" />
                            </div>
                        </div>
                        <div className="input-group flex flex-col text-[rgb(89,89,89)] w-full lg:w-auto">
                            <label htmlFor="">Place</label>
                            <input type="text" className="bg-[rgba(255,175,1,0.1)] outline-none text-[rgb(89,89,89)] h-10 px-2 rounded-md" />
                        </div>
                        <div className="input-group flex flex-col text-[rgb(89,89,89)] w-full lg:w-auto">
                            <label htmlFor="">Compagnie</label>
                            <input type="text" className="bg-[rgba(255,175,1,0.1)] outline-none text-[rgb(89,89,89)] h-10 px-2 rounded-md" />
                        </div>
                        <div className="input-group flex flex-col mt-6 w-full lg:w-auto">
                            <Link to="/order">
                                <button className="h-10 px-6 cursor-pointer rounded-md text-white bg-[rgb(255,78,0)] flex gap-4 items-center">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24"
                                        className="text-white size-4"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                    >
                                        <path d="M21.71 20.29 18 16.61A9 9 0 1 0 16.61 18l3.68 3.68a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.39M11 18a7 7 0 1 1 7-7 7 7 0 0 1-7 7"></path>
                                    </svg>
                                    <span className="lg:hidden">Rechercher</span>
                                </button>
                            </Link>
                        </div>
                    </div>

                </form>
            </div>
            </div>
        </div>
        
    )
}
