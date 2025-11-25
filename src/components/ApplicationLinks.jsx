export const ApplicationLinks = () => {
    return(
        <section className="mx-auto mt-2 px-6 max-w-7xl rounded-2xl lg:px-5">
            <div className="relative flex items-center justify-between w-full p-12   bg-black rounded-lg overflow-hidden mb-2">
                <img
                    alt="background"
                    loading="lazy"
                    src="https://rail.ninja/_next/image?url=https%3A%2F%2Fback.rail.ninja%2Fsites%2Fdefault%2Ffiles%2F2024-10%2Funtitled_0.webp&w=640&q=1"
                    className="absolute inset-0 z-0 block w-full h-full object-cover blur-md"
                />
                <div className="z-1 flex flex-col gap-y-8 lg:flex-row lg:gap-y-0 items-center justify-between gap-x-11 w-full">
                    <h6 className="text-[16px] leading-6 md:text-2xl font-medium lg:leading-8 tracking-normal normal-case no-underline self-start text-white">Notre app gratuite pour faciliter chaque étape de votre voyage !</h6>
                    <div className="flex gap-6 items-center ">
                        <img
                            alt="apps qr code"
                            loading="lazy"
                            width={64}
                            height={64}
                            className="hidden md:flex"
                            src="https://rail.ninja/_next/image?url=https%3A%2F%2Fback.rail.ninja%2Fsites%2Fdefault%2Ffiles%2F2025-02%2Fonelinkto_f2qe6d_0.webp&w=128&q=100"
                        />
                        <a
                            href=""
                            target="_blank"
                            className="bg-black w-[130px] lg:w-[180px] h-16 flex items-center justify-center rounded-lg"
                        >
                            <img
                                src="https://back.rail.ninja/sites/default/files/2024-10/apple_0-1_1.svg"
                                data-src="https://back.rail.ninja/sites/default/files/2024-10/apple_0-1_1.svg"
                                alt="app store icon"
                                height={86}
                                width={86}
                            />
                        </a>

                        <a
                            href=""
                            target="_blank"
                            className="bg-black w-[130px] lg:w-[180px] h-16 flex items-center justify-center rounded-lg"
                        >
                            <img
                                src="https://back.rail.ninja/sites/default/files/2024-10/google_0_1.svg"
                                data-src="https://back.rail.ninja/sites/default/files/2024-10/google_0_1.svg"
                                alt="google store icon"
                                height={86}
                                width={86}
                            />
                        </a>
                    </div>
                </div>

            </div>

        </section>
    )
}