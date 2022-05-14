import { HomeItem } from "../../components/HomeItem"
import React from "react"
import { Context } from "../../components/Context"


const Explore = () =>{

    const {modeToggle,mode, setMode} = React.useContext(Context);
    return(
        <>
            <HomeItem title='Explore' mode={mode} modeToggle={modeToggle} />
        </>
    )
}

export default Explore;