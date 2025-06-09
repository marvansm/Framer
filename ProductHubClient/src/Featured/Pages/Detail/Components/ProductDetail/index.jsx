import { ArrowDownToLine } from "lucide-react";
import React from "react";
import FramerCard from "../../../../Common/FramerCard";
import { useQuery } from "@tanstack/react-query";
import { GetStrapiData } from "../../../../../Services/Api";
import { useParams } from "react-router";

const ProductDetail = () => {
  const { id } = useParams();
  const { data } = useQuery({
    queryKey: ["product", id],
    queryFn: () => GetStrapiData(`products?populate=*&filters[id][$eq]=${id}`),
  });
  const { data: productData } = useQuery({
    queryKey: ["productSame"],
    queryFn: () => GetStrapiData(`products?populate=*`),
  });
  const item = data?.data?.[0];
  return (
    <div className="">
      <div className="px-[24px] py-[16px] container mx-auto ">
        <div className="grid grid-cols-12 gap-9">
          <div className="col-span-6">
            <div>
              <div className="border-10 border-gray-800 rounded-[16px] w-full h-[700px]">
                <img
                  src={`http://localhost:1337${item?.image.url}`}
                  alt=""
                  className="rounded-[6px] w-full h-full object-cover"
                />
              </div>
              <ul className="flex items-center gap-[16px] mt-5">
                <li className="border-10 border-gray-800 rounded-[16px] w-[134px] h-[134px]">
                  <img
                    src="https://framerusercontent.com/images/lTHltm78QxmlNMOKIlALAcl5w.png"
                    alt=""
                    className="rounded-[6px] w-full h-full object-cover"
                  />
                </li>
                <li className="border-10 border-gray-800 rounded-[16px] w-[134px] h-[134px]">
                  <img
                    src="https://framerusercontent.com/images/DE7BVksLIxrjvsIPiAJv30lDCg.png"
                    alt=""
                    className="rounded-[6px] w-full h-full object-cover"
                  />
                </li>
                <li className="border-10 border-gray-800 rounded-[16px] w-[134px] h-[134px]">
                  <img
                    src="https://framerusercontent.com/images/e9gghZY5xrwCsjSBVRLAsLvKQ.png"
                    alt=""
                    className="rounded-[6px] w-full h-full object-cover"
                  />
                </li>
                <li className="border-10 border-gray-800 rounded-[16px] w-[134px] h-[134px]">
                  <img
                    src="https://framerusercontent.com/images/e9gghZY5xrwCsjSBVRLAsLvKQ.png"
                    alt=""
                    className="rounded-[6px] w-full h-full object-cover"
                  />
                </li>
              </ul>
            </div>
          </div>
          <div className="col-span-6">
            <div className="border-b border-gray-800 border-opacity-30 pb-10">
              <div className="pb-[12px]">
                <h1 className="w-[96px] bg-[#2B2B2B] rounded-[8px] text-white h-[28px] flex items-center text-[12px] font-normal tracking-[2.4px] justify-center ">
                  FEATURED
                </h1>
              </div>
              <div className="flex items-start gap-[12px] flex-col w-full pb-[32px]">
                <ul className="flex items-center justify-between w-full">
                  <li>
                    <h2 className="text-[28px] font-medium text-white">
                      {item?.title}
                    </h2>
                  </li>
                  <li className="bg-[#2B2B2B] text-white p-[8px] py-[12px] rounded-[8px] text-[14px] font-medium">
                    {item?.FreeOrPro}
                  </li>
                </ul>

                <h3 className="16px font-normal text-white leading-[24px]">
                  Made by Product Hub
                </h3>
                <h4 className="text-[#A1A1A1] text-[18px] font-normal leading-[27px]">
                  ${item?.price} value
                </h4>
              </div>

              <button className=" flex gap-2  items-center justify-center w-full h-[48px] text-[16px] font-medium bg-[#FFFFFF] text-black rounded-[8px]">
                <ArrowDownToLine size={18} /> Download Asset
              </button>
            </div>
            <div className="pt-[32px]">
              <h2 className="text-[18px] leading-[27px] font-normal text-white pb-[18px]">
                File Compatibility
              </h2>
              <ul className="flex items-center gap-1.5 pb-[34px]">
                <li>
                  <img
                    src={`http://localhost:1337${item?.categoryImg[0].url}`}
                    alt=""
                    className="w-[24px] h-[24px] object-cover"
                  />
                </li>
                <li>
                  <h2 className="text-[14px] font-normal text-[#A1A1A1]">
                    {item?.category}
                  </h2>
                </li>
              </ul>
              <h2 className="text-[18px] leading-[27px] font-normal text-white pb-[16px]">
                Description
              </h2>
              <p className="text-[16px] font-normal text-[#9E9E9E] w-[590px] leading-[24px]">
                Behold the essence of digital artistry with this generic 3D
                character render crafted in Cinema 4D. The render presents a
                neutral character model posed in a standard T-pose, showcasing
                the basic form and anatomical structure. The model is finely
                detailed, exhibiting a balanced blend of realism and
                stylization, providing a blank canvas for further customization
                and animation.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="border-b border-gray-800 border-opacity-30 pb-10"></div>
      <div className="px-[24px] py-[24px] container mx-auto ">
        <h3 className="text-white text-[28px] leading-[39px] font-normal">
          People also like…
        </h3>
        <div className="grid grid-cols-3 gap-0 pt-7">
          {productData?.data?.slice(0, 3).map((item, idx) => (
            <FramerCard
              key={idx}
              image={`http://localhost:1337${item.image.url}`}
              category={item?.category}
              categoryImg={`http://localhost:1337${item.categoryImg[0].url}`}
              price={item?.price}
              title={item?.title}
              freeOrPro={item?.FreeOrPro}
              featured={item?.Featured}
              isShow={true}
              pro={item?.pro}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
