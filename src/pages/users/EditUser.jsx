import { useContext } from "react";
import { AppContext } from "../../store/context";
import { useLocation } from "react-router";
import { createPortal } from "react-dom";
import * as Yup from "yup"
import { useFormik } from "formik";


const validate=Yup.object({
    name:Yup.string("نام خانوادگی فقط شامل حروف می باشد").required("ویرایش نام الزامی است"),
    email:Yup.string().required("ویرایش ایمل ازامی است").email("فرمت ایمیل نادرست است"),
    phone:Yup.number("فقط مجاز به عدد هستید").required()
})

const EditUser = () => {
  const { updateUser } = useContext(AppContext);
  const location=useLocation()
  const user=location.state.user
  const formik=useFormik({
    initialValues:{
        name:user.name,
        email:user.email,
        phone:user.phone,
        id:""
    },
    onSubmit:(values)=>{
        const data={
            name:values.name,
            email:values.email,
            phone:values.phone,
            id:user.id
        }
        updateUser(data)

    },
    validationSchema:validate
  })


  return createPortal(<>

      <div className="flex h-auto z-30 backdrop-blur-lg flex-col justify-center px-6 py-12 lg:px-8 fixed inset-0">
  <div className="sm:mx-auto sm:w-full sm:max-w-sm">

    <h2 className="mt-10 text-center text-2xl/9 font-bold tracking-tight text-white">ویرایش اطلاعات کاربری</h2>
  </div>

  <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
    <form onSubmit={formik.handleSubmit} className="space-y-6">
    <div>
        <label  className="block text-sm/6 font-medium text-gray-100">نام و نام خانوادگی</label>
        <div className="mt-2">
          <input value={formik.values.name} onChange={formik.handleChange("name")} onBlur={formik.handleBlur("name")} type="text" name="name" defaultValue={user.name} className="block w-full rounded-md bg-white/5 px-3 py-1.5 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6" />
          <p className="help has-text-danger">
              {formik.touched.name && formik.errors.name}
            </p>
        </div>
      </div>
      <div>
        <label className="block text-sm/6 font-medium text-gray-100">پست الکترونیک</label>
        <div className="mt-2">
          <input o onChange={formik.handleChange("email")} onBlur={formik.handleBlur("email")} value={formik.values.email} defaultValue={user.email} type="email" name="email" className="block w-full rounded-md bg-white/5 px-3 py-1.5 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6" />
          <p className="help has-text-danger">
              {formik.touched.email && formik.errors.email}
            </p>
        </div>
      </div>

      <div>
        <div className="flex items-center justify-between">
          <label  className="block text-sm/6 font-medium text-gray-100">تلفن</label>

        </div>
        <div className="mt-2">
          <input  onChange={formik.handleChange("phone")} value={formik.values.phone} onBlur={formik.handleBlur("phone")} value={formik.values.phone} type="number"  className="block w-full rounded-md bg-white/5 px-3 py-1.5 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6" />
          <p className="help has-text-danger">
              {formik.touched.phone && formik.errors.phone}
            </p>
        </div>
      </div>

      <div>
        <button type="submit" className="flex w-full justify-center rounded-md bg-indigo-500 px-3 py-1.5 text-sm/6 font-semibold text-white hover:bg-indigo-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"> ثبت </button>
      </div>
    </form>


  </div>
</div>
    </>,document.getElementById("root2"))


};

export default EditUser;
