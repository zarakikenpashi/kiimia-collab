import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Link } from "react-router";

export const HeroCarousel = () => {
  const slides = [
    {
      image:
        "https://rail.ninja/_next/image?url=https%3A%2F%2Fback.rail.ninja%2Fsites%2Fdefault%2Ffiles%2F2025-08%2Frn_main_page_bg.webp&w=640&q=1",
      title: "Réservez vos voyages en un instant",
      description:
        "Cherchez, sélectionnez et payez vos billets de voyage facilement et rapidement avec Kiimia.",
    },
    {
      image:
        "https://rail.ninja/_next/image?url=https%3A%2F%2Fback.rail.ninja%2Fsites%2Fdefault%2Ffiles%2F2025-04%2Ftrain-travel-min.webp&w=1080&q=70",
      title: "Voyagez l'esprit tranquille",
      description:
        "Kiimia vous offre des réservations sécurisées et fiables, bientôt disponible pour tous vos trajets panafricains.",
    },
  ];
  return (
    <section className="h-dvh relative overflow-hidden">
      <Swiper
        modules={[Autoplay, Pagination, Navigation]}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        navigation={{
          nextEl: ".swiper-button-next-custom",
          prevEl: ".swiper-button-prev-custom",
        }}
        loop
        className="h-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="relative h-dvh">
              {/* Background image */}
              <div className="absolute inset-0 -z-20">
                <img
                  src={slide.image}
                  alt={`Slide ${index + 1}`}
                  className="size-full object-cover"
                  loading="lazy"
                />
              </div>

              {/* Gradients overlay */}
              <div
                className="absolute inset-0 -z-10 size-full"
                style={{
                  backgroundImage: `
                    linear-gradient(252deg, #0000008c 5%, #0000 25%),
                    linear-gradient(to right, #000000d9 0%, #00000080 30%, #0000 55%),
                    linear-gradient(to bottom, #0000 50.04%, #000 100%)
                  `,
                }}
              ></div>

              {/* Content */}
              <div className="relative z-10 flex h-full items-center justify-center">
                <div className="mx-auto max-w-7xl px-6 text-center text-zinc-50">
                  <h1 className="mx-auto max-w-4xl text-5xl font-semibold md:text-7xl xl:text-[5.25rem]">
                    {slide.title}
                  </h1>

                  <p className="mx-auto my-8 max-w-2xl text-lg text-[#ccc]">
                    {slide.description}
                  </p>

                  <div className="flex flex-col items-center justify-center gap-3 md:flex-row">
                    <Link 
                      to="voyager"
                      className="cursor-pointer inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-5 py-2 text-base font-medium text-primary-foreground shadow-md transition hover:bg-primary/90">
                      Commencez votre voyage
                    </Link>

                    <a className="cursor-pointer inline-flex items-center justify-center gap-2 rounded-xl border border-primary px-5 py-2 text-sm font-medium text-white hover:bg-accent hover:text-accent-foreground">
                      Découvrir nos trajets
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}

        {/* Flèche droite */}
        <div className="swiper-button-next-custom absolute top-1/2 right-5 z-20 -translate-y-1/2 cursor-pointer">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-white transition hover:bg-orange-600">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="h-6 w-6"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </div>
        </div>

        {/* Flèche gauche */}
        <div className="swiper-button-prev-custom absolute top-1/2 left-5 z-20 -translate-y-1/2 cursor-pointer">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-white transition hover:bg-orange-600">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="h-6 w-6"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </div>
        </div>

        {/* Pagination personnalisée via style */}
        <style jsx>{`
          .swiper-pagination-bullet {
            background-color: white; 
            opacity: 1;
          }
          .swiper-pagination-bullet-active {
            background-color: rgb(255,78,0); 
          }
        `}</style>
      </Swiper>
    </section>
  );
}