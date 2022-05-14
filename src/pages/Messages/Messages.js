import { HomeItem } from "../../components/HomeItem"
import React from "react"
import { Context } from "../../components/Context"


const Messages = () =>{

    const {modeToggle,mode, setMode} = React.useContext(Context);
    return(
        <>
            <HomeItem title='Messages' mode={mode} modeToggle={modeToggle} />
        </>
    )
}

export default Messages;