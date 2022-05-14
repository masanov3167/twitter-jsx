import { HomeItem } from "../../components/HomeItem"
import React from "react"
import { Context } from "../../components/Context"


const Lists = () =>{

    const {modeToggle,mode, setMode} = React.useContext(Context);
    return(
        <>
            <HomeItem title='Lists' mode={mode} modeToggle={modeToggle} />
        </>
    )
}

export default Lists;