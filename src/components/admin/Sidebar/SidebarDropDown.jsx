import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { MdStorefront } from "react-icons/md";
import { Link, useLocation } from "react-router-dom";

const defaultDropDownList = {
  Icon: MdStorefront,
  name: "Store",
  lists: [
    {
      name: "Product List",
      link: "product-list/",
    },
    {
      name: "Add Product",
      link: "addProducts/",
    },
  ],
};

function SidebarDropDown({ dropDownList = defaultDropDownList }) {
  const { pathname } = useLocation();
  const [open, setOpen] = useState(false);

  const isActive = dropDownList?.lists?.find(({ link }) => {
    return pathname === "/admin/" + link;
  });
  return (
    <>
      <button
        className={`py-2.5 flex items-center rounded-md px-2 duration-300 cursor-pointer hover:bg-emerald-600 text-white w-auto mx-2 ${
          isActive ? "bg-emerald-500" : ""
        } mx-1`}
        onClick={() => setOpen((s) => !s)}
      >
        <div className="flex w-full items-center justify-between">
          <div className="flex items-center">
            <dropDownList.Icon className="text-2xl" />
            <span className="text-base ml-2 text-gray-200 font-bold">
              {dropDownList?.name}
            </span>
          </div>

          <span
            className={`text-sm ${open ? "" : "rotate-180"} duration-150`}
            id="arrow"
          >
            <IoIosArrowDown />
          </span>
        </div>
      </button>

      <div
        className={`text-left text-sm mt-1 w-4/5 mx-auto text-gray-200 font-bold flex flex-col overflow-hidden origin-top ${
          open ? "h-auto" : "h-0"
        } duration-150`}
      >
        {dropDownList?.lists?.map(({ name, link, index }) => {
          return (
            <Link
              to={link}
              className={`cursor-pointer p-2 hover:bg-emerald-600 rounded-md mt-1 text-[#ffffff] ${
                pathname === "/admin/" + link ? "bg-emerald-500" : ""
              }`}
              key={link + index}
            >
              {name}
            </Link>
          );
        })}
      </div>
    </>
  );
}

export default SidebarDropDown;
