import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const destinations = [
  {
    title: "Abidjan",
    tag: "Short haul",
    img: "https://ak-d.tripcdn.com/images/0HJ6j12000hbwx80h1CA6_D_600_400_R5.jpg?proc=source/trip&proc=namelogo/d_5",
  },
  {
    title: "Bouaké",
    tag: "Medium haul",
    img: "https://ak-d.tripcdn.com/images/01050120008axf3n63276_D_600_400_R5.jpg?proc=source/trip&proc=namelogo/d_5",
  },
  {
    title: "San Pedro",
    tag: "Long haul",
    img: "https://ak-d.tripcdn.com/images/100r1c000001d5cue3196_D_600_400_R5.jpg?proc=source/trip&proc=namelogo/d_5",
  },
  {
    title: "Korhogo",
    tag: "Short haul",
    img: "https://youimg1.tripcdn.com/target/0103o12000agse4tu95C3_D_600_400_R5.jpg?proc=source/trip&proc=namelogo/d_5",
  },
  {
    title: "Yamoussoukro",
    tag: "Medium haul",
    img: "https://ak-d.tripcdn.com/images/10051f000001gsqk04FC4_D_600_400_R5.jpg?proc=source/trip&proc=namelogo/d_5",
  },
  {
    title: "Hong Kong",
    tag: "Long haul",
    img: "https://ak-d.tripcdn.com/images/0101k12000admkld4652D_D_600_400_R5.jpg?proc=source/trip&proc=namelogo/d_5",
  },
  {
    title: "Bondoukou",
    tag: "Short haul",
    img: "https://ak-d.tripcdn.com/images/0ww701200090jc0ad7776_D_600_400_R5.jpg?proc=source/trip&proc=namelogo/d_5",
  },
  {
    title: "Divo",
    tag: "Medium haul",
    img: "https://ak-d.tripcdn.com/images/0105t12000aq7c06oD470_D_600_400_R5.jpg?proc=source/trip&proc=namelogo/d_5",
  },
  {
    title: "Man",
    tag: "Long haul",
    img: "https://ak-d.tripcdn.com/images/0104c120005ww2m2yF324_D_600_400_R5.jpg?proc=source/trip&proc=namelogo/d_5",
  },
];
export const DestinationTab = () => {

  return (
    <section className="mx-auto mt-2 px-6 max-w-7xl rounded-2xl lg:px-5 py-12">
        <div className="max-w-[400px] mb-8">
            <h2 className="text-[16px] leading-6 md:text-2xl font-medium lg:leading-8">Trouvez l'inspiration pour votre prochain voyage</h2>
        </div>
        <div className="relative max-w-7xl mx-auto">

        <div className="swiper-button-prev absolute -left-5 top-1/2 -translate-y-1/2  bg-white rounded-[20px] shadow-md text-[#0f294d] cursor-pointer text-[20px] h-10 w-10 z-10 hover:bg-[#2c61fe] hover:text-white transition-all duration-300 flex items-center justify-center">‹</div>
        <div className="swiper-button-next absolute -right-5 top-1/2 -translate-y-1/2 bg-white rounded-[20px] shadow-md text-[#0f294d] cursor-pointer text-[20px] h-10 w-10 z-10 hover:bg-[#2c61fe] hover:text-white transition-all duration-300 flex items-center justify-center">›</div>

        <Swiper
            modules={[Navigation]}
            navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
            }}
            spaceBetween={16}
            slidesPerView={4}
            loop={true}
            breakpoints={{
            320: { slidesPerView: 1.2 },
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
            1280: { slidesPerView: 4 },
            }}
            className="py-9"
        >
            {destinations.map((d, i) => (
            <SwiperSlide key={i}>
                <div className="w-full h-[417px] rounded-lg overflow-hidden relative group cursor-pointer">
                {/* Image de fond */}
                <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                    style={{ backgroundImage: `url(${d.img})` }}
                ></div>

                {/* Masque foncé */}
                <div className="absolute inset-0 bg-black/30"></div>

                {/* Contenu texte */}
                <div className="absolute bottom-0 left-0 w-full bg-white border border-gray-200 rounded-b-lg p-3 flex flex-col gap-2">
                    {d.tag && (
                    <span className="text-xs font-medium text-gray-600 bg-gray-100 rounded px-2 py-0.5 w-fit">
                        {d.tag}
                    </span>
                    )}
                    <h3 className="text-base font-semibold text-gray-900">
                    {d.title}
                    </h3>
                </div>
                </div>
            </SwiperSlide>
            ))}
        </Swiper>
        </div>
    </section>
  )
}
