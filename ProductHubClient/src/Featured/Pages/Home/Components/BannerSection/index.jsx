import { Search } from "lucide-react";
import React, { useState } from "react";
import FramerCard from "../../../../Common/FramerCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { useQuery } from "@tanstack/react-query";
import { GetStrapiData } from "../../../../../Services/Api";

const BannerSection = () => {
  const [search, setSearch] = useState("");
  const { data } = useQuery({
    queryKey: ["bannerproduct", search],
    queryFn: () =>
      GetStrapiData(
        `products?populate=*&filters[title][$contains]=${search}`
      ),
  });
  return (
    <div className="border-b border-gray-800 border-opacity-30">
      <div className="px-[24px] py-[16px] container mx-auto ">
        <div className="grid grid-cols-2">
          <div>
            <button className="rounded-[48px] px-[12px] py-[8px] border border-gray-700 text-[12px] font-normal text-[#A1A1A1] tracking-[2.4px] leading-[1em] mb-5">
              Membership Template
            </button>
            <h2 className="text-[60px] font-semibold text-white leading-[1em] mb-5">
              Meet the new home <br /> for your digital goods
            </h2>
            <p className="text-[28px] font-medium leading-[1.4em] text-[#A1A1A1] mb-5">
              Sell exclusive access to your digital goods <br /> all in your
              Framer CMS site
            </p>
            <div className="p-[16px] flex items-center gap-[10px] rounded-[8px] border border-gray-600 bg-[#000] hover:border-gray-400 mb-5 w-[700px]">
              <Search color="#A1A1A1" />
              <input
                value={search}
                onChange={(e) => {
                  setSearch(e.target.value);
                }}
                className="text-[#A1A1A1] outline-none "
                type="search"
                placeholder="Search 3D assets..."
              />
            </div>
            <ul className="flex items-center gap-7 text-[#A1A1A1]">
              <li className="rounded-[32px] px-[16px] py-[8px] bg-[#2B2B2B] hover:text-white duration-300">
                All
              </li>
              <li className="hover:text-white duration-300">Free</li>
              <li className="hover:text-white duration-300">Aliens</li>
              <li className="hover:text-white duration-300">Animals</li>
              <li className="hover:text-white duration-300">Monsters</li>
            </ul>
          </div>
          <div>
            <Swiper
              effect={"coverflow"}
              grabCursor={true}
              centeredSlides={true}
              slidesPerView={2}
              loop={true}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              coverflowEffect={{
                rotate: 20,
                stretch: 0,
                depth: 100,
                modifier: 1,
                slideShadows: true,
              }}
              pagination={true}
              modules={[EffectCoverflow, Autoplay]}
              className="mySwiper overflow-hidden"
            >
              {data?.data?.map((item, idx) => (
                <SwiperSlide key={idx}>
                  <FramerCard
                    image={`http://localhost:1337${item.image.url}`}
                    category={item?.title}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BannerSection;
