import React from "react";



const HomeItem = ({title,modeToggle}) =>{
    return(
        <>
            <div className="home-top-wrapper">
                <h2>{title}</h2>
                <span onClick={modeToggle} className="mode-toggle"></span>
            </div>
        </>

    )
}

const TweetItem = ({delTweet,delId,editTweet}) =>{

    const [controlDisplay, setControlDisplay] = React.useState(false);    
    const display = () =>{
        setControlDisplay(!controlDisplay)
    }

    return(
        
                   <>
                    <span onClick={display} className="tweet-item-more"></span>

                        <div className={controlDisplay ? "tweet-control" : "d-none"}>
                            <span className="tweet-edit" data-del-id={delId} onClick={editTweet} >edit</span>
                            <span onClick={delTweet} data-del-id={delId} className="tweet-delete">delete</span>
                        </div> 
                   </>
    )
}

export  {HomeItem,TweetItem};