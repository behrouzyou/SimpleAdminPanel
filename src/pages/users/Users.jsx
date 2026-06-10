import { useContext } from "react";
import { AppContext } from "../../store/context";
import { Link, Outlet } from "react-router";
import { FaEdit, FaTrashAlt } from "react-icons/fa";


const Users = () => {
    const{users,handleDelete}=useContext(AppContext)

    return (
        <>

        <div className="flex justify-center items-center rounded-2xl relative">
        <Outlet />

            <table className="w-full table-auto border-separate border border-amber-700 border-spacing-2 text-center">
            <caption className="caption-top  font-extrabold caret-blue-300 justify-center">لیست کاربران موجود</caption>
                <thead>
                    <tr>
                        <th className="border border-cyan-500 p-2 items-center "> شماره </th>
                        <th className="border border-cyan-500 p-2 items-center">نام و نام خانوادگی</th>
                        <th className="border border-cyan-500 p-2 items-center">پست الکترونیک</th>
                        <th className="border border-cyan-500 p-2 items-center">تلفن</th>
                        <th className="border border-cyan-500 p-2 items-center">عملیات</th>
                    </tr>
                </thead>
                <tbody>
                   {users && users.map((user,index)=>(
                     <tr key={user.id}>
                        <td className="border border-cyan-500 p-2 items-center">{index+1}</td>
                        <td className="border border-cyan-500 p-2 items-center">{user.name}</td>
                        <td className="border border-cyan-500 p-2 items-center">{user.email} </td>
                        <td className="border border-cyan-500 p-2 items-center">{user.phone}</td>
                        <td className="px-4 py-2 flex gap-4 items-center border border-cyan-500 p-2">
                <Link to={`/users/edit/${user.id}`} className="text-blue-500" state={{ user }}>
                  <FaEdit />
                </Link>
                <button className="text-red-500" onClick={() => handleDelete(user.id)}>
                  <FaTrashAlt />
                </button>
              </td>
                    </tr>
                   ))}
                </tbody>
            </table>
        </div></>
    );

}

export default Users;
