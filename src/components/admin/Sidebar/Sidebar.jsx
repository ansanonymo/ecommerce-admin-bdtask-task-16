import { TbSearch } from "react-icons/tb";
import { FaUserCircle } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import { MdLogout } from "react-icons/md";
import { MdDashboard } from "react-icons/md";
import { Link, useLocation } from "react-router-dom";
import { FaList } from "react-icons/fa6";
import { MdStorefront } from "react-icons/md";
import { RiMenu2Line } from "react-icons/ri";
import SidebarDropDown from "./SidebarDropDown";
import { IoSettingsOutline } from "react-icons/io5";

const links = [
  {
    name: "Admin",
    Icon: MdDashboard,
    link: "/admin",
  },
  {
    name: "Products",
    Icon: FaList,
    link: "producs/",
  },
];

const storeDropDownList = {
  Icon: MdStorefront,
  name: "Store",
  lists: [
    {
      name: "Product List",
      link: "productlist/",
    },
    {
      name: "Add Product",
      link: "addProducts/",
    },
  ],
};

const settingsDropDownList = {
  Icon: IoSettingsOutline,
  name: "Settings",
  lists: [
    {
      name: "Account",
      link: "account/",
    },
    {
      name: "Theme",
      link: "theme/",
    },
  ],
};

// peer-checked/sidebar:hidden
const Sidebar = () => {
  const { pathname } = useLocation();

  console.log(pathname);
  return (
    <>
      <input
        type="checkbox"
        className="peer/sidebar hidden"
        id="peer-sidebar"
        defaultChecked
      />
      <div className="lg:left-0 overflow-y-auto text-center bg-gray-900 min-h-screen h-full duration-150 peer-checked/sidebar:w-full max-w-[300px] peer-checked/sidebar:p-2 p-0 w-[0px] z-50 ">
        {/** title */}
        <div className="text-gray-100 text-xl">
          <div className="p-2.5 mt-1 flex items-center justify-between">
            <Link to="/" className="p-2.5 mt-1 flex items-center">
              <FaUserCircle className="text-3xl text-sky-600" />
              <h1 className="font-bold text-gray-200 text-[15px] ml-2">
                Admin Panel
              </h1>
            </Link>
            <label className="text-3xl" htmlFor="peer-sidebar">
              <IoMdClose />
            </label>
          </div>
          <div className="my-2 bg-gray-600 h-[1px]" />
        </div>

        {/** search */}
        <div className="p-2.5 flex items-center rounded-md px-3 duration-300 cursor-pointer bg-gray-700 text-white mx-2">
          <TbSearch className="text-2xl" />
          <input
            type="text"
            placeholder="Search"
            className="text-[15px] ml-3 w-full bg-transparent focus:outline-none"
          />
        </div>

        {/** links */}
        {links?.map(({ link, Icon, name }) => {
          return (
            <Link
              to={link}
              className={`p-2.5 mt-2 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-emerald-600 text-white mx-2 ${
                pathname === "/admin/" + link ? "bg-emerald-700" : ""
              }`}
              key={link}
            >
              <Icon className="text-xl" />
              <span className="ml-2 text-gray-200 font-bold flex items-center">
                {name}
              </span>
            </Link>
          );
        })}

        <div className="my-4 bg-gray-600 h-[1px]" />

        {/** links with list */}
        <div className="flex flex-col gap-0.5">
          <SidebarDropDown dropDownList={storeDropDownList} />
          <SidebarDropDown dropDownList={settingsDropDownList} />
        </div>

        <div className="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-emerald-600 text-white">
          <MdLogout className="text-xl" />
          <span className="ml-2 text-gray-200 font-bold flex items-center">
            Log Out
          </span>
        </div>
      </div>

      <label
        className="fixed top-0 left-0 text-4xl text-[#333333] cursor-pointer opacity-55"
        htmlFor="peer-sidebar"
      >
        <RiMenu2Line className="text-3xl peer-checked/sidebar:hidden" />
      </label>
    </>
  );
};

export default Sidebar;
