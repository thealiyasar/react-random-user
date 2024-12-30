import { useState } from "react";
import { FaCopy } from "react-icons/fa";

const UserCard = user => {
  const [tooltipVisible, setTooltipVisible] = useState("");

  const copyToClipboard = (text, field) => {
    navigator.clipboard.writeText(text);
    setTooltipVisible(field);
    setTimeout(() => {
      setTooltipVisible("");
    }, 2000);
  };

  return (
    <div className="relative col-span-12 md:col-span-6 xl:col-span-4">
      <div className="relative flex flex-col items-center rounded-[10px] shadow-lg bg-white overflow-hidden">
        <div className="w-full flex flex-col gap-2 items-center bg-[#2c2e31] p-5 text-white">
          <div className="w-[128px] h-[128px] rounded-full overflow-hidden border-[5px]">
            <img
              className="block w-full h-full object-cover"
              src={user.user.avatar}
              alt={user.user.fullName}
            />
          </div>
          <div className="flex gap-1 items-center text-lg text-white font-semibold">
            {user.user.fullName}
          </div>
          <div className="flex gap-1 items-center text-xs text-white font-semibold">
            {user.user.country}
          </div>
        </div>
        <div className="w-full flex flex-col gap-4 px-5 py-4">
          {/*  ITEM */}
          <div className="flex flex-col">
            <span className="text-[#2c2e31] text-opacity-50 text-sm font-bold">
              Address:
            </span>
            <div className="flex items-center justify-between">
              <span className="text-[#2c2e31] text-sm font-semibold text-ellipsis whitespace-nowrap overflow-hidden pe-10">
                {user.user.address}
              </span>
              <button
                type="button"
                onClick={() => copyToClipboard(user.user.address, "address")}
                className="text-[#2c2e31] text-sm font-semibold relative"
              >
                <FaCopy />
                {tooltipVisible === "address" && (
                  <span className="absolute top-[-25px] right-0 bg-black text-white text-xs rounded px-2 py-1">
                    Copied!
                  </span>
                )}
              </button>
            </div>
          </div>
          {/*  ITEM */}
          <div className="flex flex-col">
            <span className="text-[#2c2e31] text-opacity-50 text-sm font-bold">
              Email:
            </span>
            <div className="flex items-center justify-between">
              <span className="text-[#2c2e31] text-sm font-semibold text-ellipsis whitespace-nowrap overflow-hidden pe-4">
                {user.user.email}
              </span>
              <button
                type="button"
                onClick={() => copyToClipboard(user.user.email, "email")}
                className="text-[#2c2e31] text-sm font-semibold relative"
              >
                <FaCopy />
                {tooltipVisible === "email" && (
                  <span className="absolute top-[-25px] right-0 bg-black text-white text-xs rounded px-2 py-1">
                    Copied!
                  </span>
                )}
              </button>
            </div>
          </div>
          {/*  ITEM */}
          <div className="flex flex-col">
            <span className="text-[#2c2e31] text-opacity-50 text-sm font-bold">
              Phone:
            </span>
            <div className="flex items-center justify-between">
              <span className="text-[#2c2e31] text-sm font-semibold">
                {user.user.phone}
              </span>
              <button
                type="button"
                onClick={() => copyToClipboard(user.user.phone, "phone")}
                className="text-[#2c2e31] text-sm font-semibold relative"
              >
                <FaCopy />
                {tooltipVisible === "phone" && (
                  <span className="absolute top-[-25px] right-0 bg-black text-white text-xs rounded px-2 py-1">
                    Copied!
                  </span>
                )}
              </button>
            </div>
          </div>
          {/*  ITEM */}
          <div className="flex flex-col">
            <span className="text-[#2c2e31] text-opacity-50 text-sm font-bold">
              Username:
            </span>
            <div className="flex items-center justify-between">
              <span className="text-[#2c2e31] text-sm font-semibold">
                {user.user.username}
              </span>
              <button
                type="button"
                onClick={() => copyToClipboard(user.user.username, "username")}
                className="text-[#2c2e31] text-sm font-semibold relative"
              >
                <FaCopy />
                {tooltipVisible === "username" && (
                  <span className="absolute top-[-25px] right-0 bg-black text-white text-xs rounded px-2 py-1">
                    Copied!
                  </span>
                )}
              </button>
            </div>
          </div>
          {/*  ITEM */}
          <div className="flex flex-col">
            <span className="text-[#2c2e31] text-opacity-50 text-sm font-bold">
              Password:
            </span>
            <div className="flex items-center justify-between">
              <span className="text-[#2c2e31] text-sm font-semibold">
                {user.user.password}
              </span>
              <button
                type="button"
                onClick={() => copyToClipboard(user.user.password, "password")}
                className="text-[#2c2e31] text-sm font-semibold relative"
              >
                <FaCopy />
                {tooltipVisible === "password" && (
                  <span className="absolute top-[-25px] right-0 bg-black text-white text-xs rounded px-2 py-1">
                    Copied!
                  </span>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
