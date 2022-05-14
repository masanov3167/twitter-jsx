import { HomeItem } from "../../components/HomeItem"
import React from "react"
import { Context } from "../../components/Context"


const Notifications = () =>{

    const {modeToggle,mode, setMode} = React.useContext(Context);
    return(
        <>
            <HomeItem title='Notifications' mode={mode} modeToggle={modeToggle} />
        </>
    )
}

export default Notifications;