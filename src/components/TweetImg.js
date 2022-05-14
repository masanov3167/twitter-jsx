const TweetImg = ({tweetimgurl,likeFunc,imgId}) =>{
    return(
        <img data-img-id={imgId} className="tweet-img" src={tweetimgurl} alt="tweet img" onDoubleClick={likeFunc} />
    )
}

export default TweetImg;