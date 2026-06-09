import { Route, Routes } from "react-router";
import Gallery from "../../pages/gallery/Gallery"
import Posts from "../../pages/posts/Posts"
import Comments from "../../pages/comments/Comments"
import Tasks from "../../pages/tasks/Tasks"
import Users  from "../../pages/users/Users"
import { useContext } from "react";
import { AppContext } from "../../store/context";
const Index = () => {
    const {dark,setDark}=useContext(AppContext)
    return (
        <div className={`fixed top-0 left-0 h-screen w-full bg-gray-100 pr-64 pt-16 ${dark ?  "dark:bg-gray-500" :"" } `}>
            <div className="p-4 h-full w-full">
               <Routes>
               <Route path="/users" element={<Users/>}/>
               <Route path="/posts" element={<Posts/>}/>
               <Route path="comments" element={<Comments/>}/>
               <Route path="tasks" element={<Tasks/>}/>
               <Route path="gallery" element={<Gallery/>}/>

               </Routes>
            </div>
        </div>
    );
}

export default Index;
