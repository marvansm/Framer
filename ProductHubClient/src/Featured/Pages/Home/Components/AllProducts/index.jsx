import { useQuery } from "@tanstack/react-query";
import { GetStrapiData } from "../../../../../Services/Api";
import FramerCard from "../../../../Common/FramerCard";
import { useEffect, useState } from "react";
import { ArrowLeft, ChevronLeft, ChevronRight, Search } from "lucide-react";
import { GetUserData } from "../../../../../Services/Users";

const AllProducts = () => {
  const [Page, SetPage] = useState(1);
  const [search, setSearch] = useState("");
  const [PageSize, SetPageSize] = useState(10);
  const [User, SetUser] = useState("");
  const { data } = useQuery({
    queryKey: ["framerProduct", Page, search],
    queryFn: () =>
      GetStrapiData(
        `products?pagination[page]=${Page}&pagination[pageSize]=${PageSize}&filters[title][$contains]=${search}&populate=*`
      ),
    
  });

  const TotalPage = data?.meta?.pagination?.pageCount || 1;
  return (
    <div className="px-[24px] py-[26px] container mx-auto ">
      <div className="flex items-center justify-end">
        <div className="p-[16px] flex items-center  gap-[10px] rounded-[8px] border border-gray-600 bg-[#000] hover:border-gray-400 mb-5 w-[500px]">
          <Search color="#A1A1A1" />
          <input
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
            }}
            className="text-[#A1A1A1] outline-none  "
            type="search"
            placeholder="Search Products..."
          />
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 ">
        {data?.data?.map((item, idx) => (
          <FramerCard
            id={item?.id}
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
      <div className="flex items-center justify-center mt-10 gap-5">
        <button
          disabled={Page <= 1}
          onClick={() => {
            SetPage(Page - 1);
          }}
          className="text-white cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <ChevronLeft color="white" size={42} />
        </button>

        <button
          disabled={Page >= TotalPage}
          className="text-white cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
          onClick={() => {
            SetPage(Page + 1);
          }}
        >
          <ChevronRight color="white" size={42} />
        </button>
      </div>
    </div>
  );
};

export default AllProducts;
