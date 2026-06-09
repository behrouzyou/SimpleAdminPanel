import { NavLink } from "react-router";
import { MdDarkMode } from "react-icons/md";
import { useContext } from "react";
import { AppContext } from "../../store/context";
import { FaSun } from "react-icons/fa";
const Sidebar = () => {
    const {dark,setDark}=useContext(AppContext)


  return (

    <div className={`fixed right-0 h-screen w-64  ${dark ? "bg-gray-400": "bg-blue-200 "} shadow-lg flex flex-col justify-between`}>
      {/* topp content */}
      <div className="flex justify-between items-center h-16 p-2 border-b-2">
        <div>
          <h1 className="">پنل مدیریت</h1>
        </div>
        <div>
          <button className="cursor-pointer transform dark:rotate-90 transition-all duration-300 flex border items-center" onClick={()=>setDark(!dark)}>{dark ? <MdDarkMode color="yellow" size={35}/> : <FaSun color="yellow" size={35}/>} </button>
        </div>
      </div>
      {/* bottom content */}
      <div className="flex flex-col gap-4 flex-1 p-4  rounded-b-lg">

          <NavLink
            to={"/users"}
            className={`${(isActive) => (isActive ? "active" : "")}} active:bg-amber-500 hover:bg-blue-100 p-2 rounded`}
          >
            کاربران
          </NavLink>
          <NavLink
            to={"/posts"}
            className={`${(isActive) => (isActive ? "active" : "")}} active:bg-amber-500 hover:bg-blue-100 p-2 rounded`}
          >
            پست ها{" "}
          </NavLink>
          <NavLink
            to={"/comments"}
            className={`${(isActive) => (isActive ? "active" : "")}} active:bg-amber-500 hover:bg-blue-100 p-2 rounded`}
          >
            کامنت ها
          </NavLink>
          <NavLink
            to={"/tasks"}
            className={`${(isActive) => (isActive ? "active" : "")}} active:bg-amber-500 hover:bg-blue-100 p-2 rounded`}
          >
            تسک ها{" "}
          </NavLink>
          <NavLink
            to={"/gallery"}
            className={`${(isActive) => (isActive ? "active" : "")}} active:bg-amber-500 hover:bg-blue-100 p-2 rounded`}
          >
            گالری
          </NavLink>

      </div>
    </div>
  );
};

export default Sidebar;
