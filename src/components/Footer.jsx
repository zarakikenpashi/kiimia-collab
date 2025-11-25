import { Logo } from "./ui/Logo"

export const Footer = () => {
  return (
    <footer className="text-white">
      <div className="bg-black">
        <div className="mx-auto mt-2 px-6 max-w-7xl rounded-2xl lg:px-5 py-12">
          <div className="flex flex-col gap-y-8 lg:flex-row lg:gap-y-0 items-center justify-between gap-x-11 w-full">
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
                    className="bg-[rgba(255,255,255,0.1)] w-[130px] lg:w-[180px] h-16 flex items-center justify-center rounded-lg"
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
                    className="bg-[rgba(255,255,255,0.1)] w-[130px] lg:w-[180px] h-16 flex items-center justify-center rounded-lg"
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
      </div>
      <div className="bg-[rgb(26,26,26)]">
        <div className="mx-auto px-6 max-w-7xl rounded-2xl lg:px-5 py-12">
          <div class="grid gap-12 md:grid-cols-4">
              <div class="md:col-span-2">
                  <a aria-label="go home" class="block size-fit" href="/">
                     <Logo className="w-48 h-auto" />   
                        

                  </a>

                  <div class="flex flex-wrap  gap-6 text-sm py-6">
                      <a
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label="LinkedIn"
                          class="text-muted-foreground hover:text-primary block"
                          href="#"
                          ><svg class="size-6" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
                              <path
                                  fill="currentColor"
                                  d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2zm-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93zM6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37z"
                              ></path></svg></a>
                              <a
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label="Facebook"
                          class="text-muted-foreground hover:text-primary block"
                          href="#"
                          ><svg class="size-6" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
                              <path
                                  fill="currentColor"
                                  d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95"
                              ></path></svg></a>
                      <a
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label="Instagram"
                          class="text-muted-foreground hover:text-primary block"
                          href="#"
                          ><svg class="size-6" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
                              <path
                                  fill="currentColor"
                                  d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4zm9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8A1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5a5 5 0 0 1-5 5a5 5 0 0 1-5-5a5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3a3 3 0 0 0 3 3a3 3 0 0 0 3-3a3 3 0 0 0-3-3"
                              ></path></svg></a><a
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label="TikTok"
                          class="text-muted-foreground hover:text-primary block"
                          href="#"
                          ><svg class="size-6" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
                              <path
                                  fill="currentColor"
                                  d="M16.6 5.82s.51.5 0 0A4.28 4.28 0 0 1 15.54 3h-3.09v12.4a2.59 2.59 0 0 1-2.59 2.5c-1.42 0-2.6-1.16-2.6-2.6c0-1.72 1.66-3.01 3.37-2.48V9.66c-3.45-.46-6.47 2.22-6.47 5.64c0 3.33 2.76 5.7 5.69 5.7c3.14 0 5.69-2.55 5.69-5.7V9.01a7.35 7.35 0 0 0 4.3 1.38V7.3s-1.88.09-3.24-1.48"
                              ></path></svg></a>
                  </div>
              </div>
              <div class="md:col-span-2 md:grid-cols-2 grid  gap-6">
                  <div class="space-y-4 text-sm">
                      <span class="block font-medium text-muted-foreground">Liens utiles</span>
                      <div className="grid gap-y-3 gap-x-4 grid-cols-4  md:flex md:flex-wrap md:w-full">
                      <a class="text-white hover:text-primary block duration-150"><span>Partenaires</span></a>
                      <a class="text-white hover:text-primary block duration-150"><span>Vos billets</span></a>
                      <a class="text-white hover:text-primary block duration-150"><span>Vos trajets</span></a>
                      <a class="text-white hover:text-primary block duration-150"><span>Service client</span></a>
                      <a class="text-white hover:text-primary block duration-150"><span>Aide</span></a>
                      <a class="text-white hover:text-primary block duration-150"><span>Tout sur kiimia</span></a>
                      </div>

                  </div>
                  <div class="space-y-4 text-sm">
                      <span class="block font-medium text-muted-foreground">Moyens de payments</span>
                      <div className="payment-body grid gap-y-3 gap-x-4 grid-cols-5 md:flex md:flex-wrap md:w-full">
                        <img
                          class="bg-white rounded-sx inline-block h-7 w-10"
                          src="https://static.tripcdn.com/packages/h5paymentsdk/payment_ares/*/ibuBankIcon/UNIONPAY-76x52.png"
                          alt=""
                        />
                        <img
                          class="bg-white rounded-sx inline-block h-7 w-10"
                          src="https://static.tripcdn.com/packages/h5paymentsdk/payment_ares/*/ibuBankIcon/MC-76x52.png"
                          alt=""
                        />
                        <img
                          class="bg-white rounded-sx inline-block h-7 w-10"
                          src="https://static.tripcdn.com/packages/h5paymentsdk/payment_ares/*/ibuBankIcon/VISA-76x52.png"
                          alt=""
                        />
                        <img
                          class="bg-white rounded-sx inline-block h-7 w-10"
                          src="https://static.tripcdn.com/packages/h5paymentsdk/payment_ares/*/ibuBankIcon/AMEX-76x52.png"
                          alt=""
                        />
                        <img
                          class="bg-white rounded-sx inline-block h-7 w-10"
                          src="https://static.tripcdn.com/packages/h5paymentsdk/payment_ares/*/ibuBankIcon/JCB-76x52.png"
                          alt=""
                        />
                        <img
                          class="bg-white rounded-sx inline-block h-7 w-10"
                          src="https://static.tripcdn.com/packages/h5paymentsdk/payment_ares/*/ibuBankIcon/DINERS-76x52.png"
                          alt=""
                        />


                        <img
                          class="bg-white rounded-sx inline-block h-7 w-10"
                          src="https://static.tripcdn.com/packages/h5paymentsdk/payment_ares/*/ibuBankIcon/DISCOVER-76x52.png"
                          alt=""
                        />
                        <img
                          class="bg-white rounded-sx inline-block h-7 w-10"
                          src="https://static.tripcdn.com/packages/h5paymentsdk/payment_ares/*/ibuThirdpay/APPLE-76x52.png"
                          alt=""
                        />
                        <img
                          class="bg-white rounded-sx inline-block h-7 w-10"
                          src="https://static.tripcdn.com/packages/h5paymentsdk/payment_ares/*/ibuThirdpay/PAYPAL-76x52.png"
                          alt=""
                        />

                        <img
                          class="bg-white rounded-sx inline-block h-7 w-10"
                          src="https://static.tripcdn.com/packages/h5paymentsdk/payment_ares/*/thirdpay/COINS-76x52.png"
                          alt=""
                        />
                      </div>
                  </div>
              </div>
          </div>
          <div class="mt-12 flex flex-wrap items-end justify-between gap-6 border-t py-6">
    <small class="text-white order-last block text-center text-sm md:order-first">
        ©2025 kiimia, Tous droits réservés
    </small>
    <form action="">
        <div class="relative">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="0.75rem"
                height="0.75rem"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-chevrons-up-down pointer-events-none absolute inset-y-0 right-2 my-auto opacity-75"
            >
                <path d="m7 15 5 5 5-5"></path>
                <path d="m7 9 5-5 5 5"></path></svg>
                <select
                class="border-input file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground shadow-xs flex h-9 w-full min-w-32 appearance-none rounded-md border bg-transparent px-3 py-1 text-base outline-none transition-[color,box-shadow] file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive"
                name="language"
            >
                <option value="1">Français</option>
                <option value="2">English</option>
                <option value="3">Swahili</option>
                <option value="4">Lingala</option>
                <option value="3">Espanol</option>

            </select>
        </div>
    </form>
</div>

        </div>
      </div>
    </footer>
  )
}
