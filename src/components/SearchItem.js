

const TrendItem = ()=>{
    return(
        <>
            <div className="trends-item" >
                <h4>Trending in Germany</h4>
                <h2>Revolution</h2>
                <time>50.4K Tweets</time>
            </div>
        </>
    )
}

const LikeItem = ({userimg,name,username}) =>{
    return(
        <>
            <div className="might-like-item">
                    <img src={userimg} alt="profil img" />
                    <div>
                        <h2>{name}</h2>
                        <span>{username}</span>
                    </div>
                    <span>Follow</span>
            </div>
        </>
    )
}

export{ TrendItem, LikeItem};