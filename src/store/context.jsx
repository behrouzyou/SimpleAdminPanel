import { createContext, useState } from "react";
import axios from "axios";
import swal from "sweetalert2";
import Swal from "sweetalert2";

export const AppContext = createContext({});
const AppContextProvider = ({ children }) => {
  const [dark, setDark] = useState(false);
  const [users, setUsers] = useState([])
  const setTheme = () => {
    const theme = window.matchMedia("(prefers-color-scheme: dark)");
    if (theme.matches) setDark(true);
    else setDark(false);
  };
  const getUser = async () => {
    try {
      const res = await axios.get("https://jsonplaceholder.typicode.com/users");
      setUsers(res.data)

    } catch (error) {
      Swal.fire({
        icon:"error",
        title:error,
        text:"مشکلی به وجودآمده است"

      })
    }
  };
  const handleDelete = async (id) => {
    const willDelete = await new Swal({
      title: "حذف کردن",
      text: "آیا از حذف خبر اطمینان دارید",
      icon: "warning",
      showCancelButton: true,
     confirmButtonColor: "#3085d6",
     cancelButtonColor: "#d33",
     confirmButtonText: "بله",
     cancelButtonText:"خیر"

    });

    if (willDelete) {
      try {
        const res = axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`);
        new Swal(res.data, "success");
        getUser();
      } catch (error) {
        console.log(error);
      }
    }
  };
const updateUser =async(data) => {
    const form=new FormData()
    form.append("name",data.name)
    form.append("email",data.email)
    form.append("phone",data.phone)
    console.log(form);
    try {

         const res=axios({
        url: `https://jsonplaceholder.typicode.com/users/${data.id}`,
        method: "PUT",
        form,
        headers: {
            "Content-Type":  'application/json; charset=UTF-8',
        },

    });
    Swal.fire({
        icon:"success",
        title:res,
        text:" اطلاعات کاربر با موفقیت به روز رسانی شد  "


    })
    } catch (error) {
console.log(error);
    }


};




  return (
    <AppContext.Provider value={{ dark, setDark, setTheme,getUser,users,handleDelete,updateUser }}>
      {children}
    </AppContext.Provider>
  );
};
export default AppContextProvider;
