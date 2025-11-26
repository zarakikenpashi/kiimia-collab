

const companies = [
  {
    name: "Nvidia",
    color: "https://html.tailus.io/blocks/customers/nvidia.svg",
    gray: "https://upload.wikimedia.org/wikipedia/commons/2/21/Nvidia_logo.svg",
  },
  {
    name: "GitHub",
    color: "https://html.tailus.io/blocks/customers/github.svg",
    gray: "https://upload.wikimedia.org/wikipedia/commons/9/91/Octicons-mark-github.svg",
  },
  {
    name: "Nike",
    color: "https://html.tailus.io/blocks/customers/nike.svg",
    gray: "https://upload.wikimedia.org/wikipedia/commons/a/a6/Logo_NIKE.svg",
  },
  {
    name: "OpenAI",
    color: "https://html.tailus.io/blocks/customers/openai.svg",
    gray: "https://upload.wikimedia.org/wikipedia/commons/4/4d/OpenAI_Logo.svg",
  },
  {
    name: "Laravel",
    color: "https://html.tailus.io/blocks/customers/laravel.svg",
    gray: "https://laravel.com/img/logomark.min.svg",
  },
  {
    name: "Lemon Squeezy",
    color: "https://html.tailus.io/blocks/customers/lemonsqueezy.svg",
    gray: "https://upload.wikimedia.org/wikipedia/commons/8/8b/Lemon-icon.svg",
  },
];
export const Parteners = () => {
  return (
    <section className="py-12 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col items-center md:flex-row md:items-center md:justify-between gap-6">
          {/* Conteneur du défilement */}
          <div className="relative w-full  overflow-hidden">
            {/* Bande animée */}
            <div className="flex animate-scroll gap-16 md:gap-24 w-max">
              {/* Logos doublés pour une boucle infinie */}
              {[...companies, ...companies].map((company, index) => (
                <div
                  key={index}
                  className="group relative w-28 h-10 flex items-center justify-center"
                >
                  {/* Logo gris */}
                  <img
                    src={company.gray}
                    alt={`${company.name} logo grayscale`}
                    className="absolute inset-0 w-full h-full object-contain opacity-100 transition-opacity duration-500 group-hover:opacity-0"
                  />
                  {/* Logo couleur */}
                  <img
                    src={company.color}
                    alt={`${company.name} logo color`}
                    className="absolute inset-0 w-full h-full object-contain opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                  />
                </div>
              ))}
            </div>

            {/* Dégradés sur les bords */}
            <div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-linear-to-r from-background to-transparent"></div>
            <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-linear-to-l from-background to-transparent"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
