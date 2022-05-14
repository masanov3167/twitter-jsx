import { HomeItem } from "../../components/HomeItem"
import React from "react"
import { Context } from "../../components/Context"


const Bookmarks = () =>{

    const {modeToggle,mode, setMode} = React.useContext(Context);
    return(
        <>
            <HomeItem title='Bookmarks' mode={mode} modeToggle={modeToggle} />
        </>
    )
}

export default Bookmarks;