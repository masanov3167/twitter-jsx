import IconTwitter from "../assets/img/icontwit.png";
import { BookmarksImg, ExloreImg, HomeImg, ListsImg, MessagesImg, MoreImg, NotifImg, ProfilImg } from "./NavItem";
import userImg from "../assets/img/userdefaultimg.png";

const Sitebar = () =>{
    return (
        <>
            <div className="sitebar">
                <img src={IconTwitter} alt="twit icon" />
                <div className="nav">
                    <HomeImg />
                    <ExloreImg />
                    <NotifImg />
                    <MessagesImg />
                    <BookmarksImg />
                    <ListsImg />
                    <ProfilImg />
                    <MoreImg />
                </div>

                <button className="sitebar-btn">tweet</button>

                <div className="sitebar-profil">
                    <img src={userImg} alt="profil img" />
                    <div>
                        <h2>Bobur</h2>
                        <span>@bobur_mavlonov</span>
                    </div>
                </div>
            </div>
        </>

    )
}

export default Sitebar;