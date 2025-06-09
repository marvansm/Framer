import { ArrowDownToLine, Heart } from "lucide-react";

import { useNavigate,  } from "react-router";
const FramerCard = ({
  id,
  image,
  featured,
  category,
  categoryImg,
  title,
  price,
  freeOrPro,
  isShow,
}) => {
  const navigate = useNavigate();

  return (
    <div className="box w-full max-w-[373px]  overflow-hidden">
      <div
        onClick={() => {
          navigate(`/detail/${id}`);
        }}
        className="w-full  max-w-[373px]  h-[373.312px] rounded-2xl overflow-hidden relative"
      >
        <img src={image} alt={title} className="w-full h-full object-cover" />
        {featured && (
          <div className="absolute top-2.5 left-2.5 ">
            <button className="uppercase bg-[#2B2B2B] text-white p-[8px] rounded-[8px] text-[12px] font-normal tracking-[.2em]">
              {featured}
            </button>
          </div>
        )}
        <div className="absolute bottom-2.5 left-2.5 ">
          <div className="flex items-center gap-1 rounded-[8px] shadow-md px-[4px] py-[8px] bg-[#ffffffde]">
            {categoryImg && (
              <img
                src={categoryImg}
                alt=""
                className="w-[24px] h-[24px] object-cover"
              />
            )}
            <h2 className="text-[14px] font-normal text-[#A1A1A1]">
              {category}
            </h2>
          </div>
        </div>
        {isShow && (
          <div className="absolute bottom-2.5 right-2.5">
            <button className="p-[8px] bg-black text-white rounded-[8px]">
              <ArrowDownToLine strokeWidth={3} size={18} />
            </button>
          </div>
        )}
      </div>
      {isShow && (
        <div className="body mt-3">
          <div className="flex items-center justify-between leading-[2.4px]">
            <h2 className="text-white">{title}</h2>
            <ul className="flex items-center gap-2.5">
              <li>
                <Heart color="#0000EE" />
              </li>
              {freeOrPro && (
                <li className="bg-[#2B2B2B] text-white p-[8px] py-[12px] rounded-[8px] text-[14px] font-medium">
                  {freeOrPro}
                </li>
              )}
            </ul>
          </div>
          <h3 className="text-[#A1A1A1]">${price} value </h3>
        </div>
      )}
    </div>
  );
};

export default FramerCard;
