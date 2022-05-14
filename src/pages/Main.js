import React from "react";
import Sitebar from "../components/Sitebar";
import Search  from "../components/Search";
import Home from "./Home/Home";
import Explore from './Explore/Explore';
import Notifications from './Notifications/Notifications';
import Messages from './Messages/Messages';
import Bookmarks from './Bookmarks/Bookmarks';
import Lists from './Lists/Lists';
import More from './More/More';
import Profil from "./Profil/Profil"
import { Context } from "../components/Context";
import { Route, Routes } from "react-router-dom";


const Main = () =>{
    const {mode} = React.useContext(Context);
    return(
        <div className={mode ? "App dark-mode" : "App light-mode"}>
            <Sitebar />
            <main className="main">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/explore" element={<Explore />} />
                    <Route path="/notifications" element={<Notifications />} />
                    <Route path="/messages" element={<Messages />} />
                    <Route path="/bookmarks" element={<Bookmarks />} />
                    <Route path="/lists" element={<Lists />} />
                    <Route path="/profil" element={<Profil />} />
                    <Route path="/more" element={<More />} />
                    <Route path="*" element={<Home />} />
                </Routes>
            </main>
            <Search />
        </div>
     );
}

export default Main;