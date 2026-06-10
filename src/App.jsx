import { useContext } from "react";
import Index from "./layout/content";
import Header from "./layout/header/Header";

import Sidebar from "./layout/sidebar/Sidebar";
import { AppContext } from "./store/context";
import { useEffect } from "react";

const App = () => {
    const{setTheme,getUser}=useContext(AppContext)
    useEffect(() => {
        getUser()
        setTheme()
    }, []);


    return (
         <div>

      <Index/>

        <Header/>
         <Sidebar/>

    </div>
    );
}

export default App;
