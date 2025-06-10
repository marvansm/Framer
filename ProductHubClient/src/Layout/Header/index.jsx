import { Gamepad2, Gem, Heart, LogOut } from "lucide-react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";

const Header = () => {
  const Navigate = useNavigate();
  const [UserData, SetUserData] = useState("");
  useEffect(() => {
    const userData = sessionStorage.getItem("user");
    if (userData) {
      SetUserData(JSON.parse(userData));
    }
  }, []);
  return (
    <div className="bg-[#0D0D0D] border-b border-gray-800 border-opacity-30">
      <div className="px-10 py-[12px]">
        <div className="flex items-center justify-between text-white">
          <div
            onClick={() => {
              Navigate("/");
            }}
            className="flex items-center gap-2 cursor-pointer"
          >
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
            {UserData ? (
              <div className="flex items-center gap-5">
                <button className="p-[11px] border border-gray-500 text-[#AD1FFF] rounded-[8px] font-medium hover:bg-white hover:text-[#000] duration-300 cursor-pointer flex items-center gap-5">
                  <img
                    src="https://png.pngtree.com/png-vector/20190710/ourmid/pngtree-user-vector-avatar-png-image_1541962.jpg"
                    alt=""
                    className="w-[30px] h-[30px] object-contain rounded-full"
                  />
                  {UserData.username}
                </button>
                <button
                  onClick={() => {
                    sessionStorage.clear();
                    SetUserData(null);
                  }}
                  className="p-[11px] border border-gray-500 text-[#AD1FFF] rounded-[8px] font-medium  hover:text-[#000] duration-300 cursor-pointer flex items-center gap-5"
                >
                  <LogOut color="white" />
                </button>
                <button className="p-[11px] border border-gray-500 rounded-[8px] font-medium flex items-center gap-1.5">
                  <Heart size={18} /> Saved
                </button>
              </div>
            ) : (
              <div className="flex items-center gap-5">
                <button
                  onClick={() => {
                    Navigate("/login");
                  }}
                  className="p-[11px] border border-gray-500 text-[#AD1FFF] rounded-[8px] font-medium hover:bg-white hover:text-[#000] duration-300 cursor-pointer"
                >
                  Sign In
                </button>
                <button
                  onClick={() => {
                    Navigate("/register");
                  }}
                  className="p-[11px] border border-gray-500 bg-black text-[#AD1FFF] hover:bg-white hover:text-black rounded-[8px] font-medium duration-300 cursor-pointer"
                >
                  Register
                </button>
                <button className="p-[11px] border border-gray-500 rounded-[8px] font-medium flex items-center gap-1.5">
                  <Heart size={18} /> Saved
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
