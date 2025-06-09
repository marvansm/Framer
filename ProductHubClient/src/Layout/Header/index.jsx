import { Gamepad2, Gem, Heart } from "lucide-react";

const Header = () => {
  return (
    <div className="bg-[#0D0D0D] border-b border-gray-800 border-opacity-30">
      <div className="px-10 py-[12px]">
        <div className="flex items-center justify-between text-white">
          <div className="flex items-center gap-2">
            <Gem color="#AD1FFF" size={28} />
            <p className="text-[16px] text-white font-medium">Product Hub</p>
          </div>
          <div className="flex items-center gap-7">
            <ul className="flex items-center gap-5.5 text-[16px] font-normal">
              <li className="text-white">Explore</li>
              <li className="text-[#999999] hover:text-white cursor-pointer">
                Activate License
              </li>
              <li className="text-[#999999] hover:text-white cursor-pointer">
                Free Remix
              </li>
            </ul>
            <div className="flex items-center gap-5">
              <button className="p-[11px] border border-gray-500 rounded-[8px] font-medium">
                Sign In
              </button>
              <button className="p-[11px] bg-white text-black hover:bg-[#b5b4b4] rounded-[8px] font-medium duration-300 cursor-pointer">
                Become a Member
              </button>
              <button className="p-[11px] border border-gray-500 rounded-[8px] font-medium flex items-center gap-1.5">
                <Heart size={18} /> Saved
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
