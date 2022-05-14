import { HomeItem } from "../../components/HomeItem"
import React, { useRef } from "react"
import { Context } from "../../components/Context"
import userPic from '../../assets/img/userdefaultimg.png';
import ProfilPicture from '../../assets/img/profilpicture.png';
import { CommentImg, LikeSvg, RepostImg, StatImg, UpImg } from "../../components/Images";
import TweetImg from "../../components/TweetImg";
// import { Route, Routes } from "react-router-dom";
// import { ElTweets, TweetsReplies, ElMedia, ElLikes } from "../../components/ProfilItem";

import Dislike from '../../assets/img/dislike.png';
import Like from '../../assets/img/like.png';
import userImg from '../../assets/img/userdefaultimg.png';


const Profil = () =>{

    const ownName = useRef();
    const ownSurname = useRef();
    const ownUsername = useRef();
    const ownBio = useRef();
    const ownPic = useRef();

    const {setSearchDisplay, token, setToken} = React.useContext(Context);

    const likeFunc = (evt) =>{
		const checkId = evt.target.dataset.imgId - 0;

		const find = ownTweet.find((a) => a.id === checkId);
		find.like.isLike = !find.like.isLike;
		
		if (find.like.isLike) {
			find.like.likeNumber =	find.like.likeNumber + 1;
			setOwnTweet([...ownTweet])
		}
		if (!find.like.isLike) {
			find.like.likeNumber =	find.like.likeNumber - 1;
			setOwnTweet([...ownTweet])
		}
	}

    const repostFunc = (evt) =>{
		const checkId = evt.target.dataset.imgId - 0;

		const find = ownTweet.find((a) => a.id === checkId);
		find.isRepost = !find.isRepost;
		
		if (find.isRepost) {
			find.repostNumber =	find.repostNumber + 1;
			setOwnTweet([...ownTweet])
		}
		if (!find.isRepost) {
			find.repostNumber =	find.repostNumber - 1;
			setOwnTweet([...ownTweet])
		}
	}

    const editToken = (evt) =>{
        evt.preventDefault();

        setToken({
            name: ownName.current.value.trim(),
            surname: ownSurname.current.value.trim(),
            userName: ownUsername.current.value.trim(),
            bio: ownBio.current.value.trim(),
            pic: ownPic.current.files[0] ? window.URL.createObjectURL(ownPic.current.files[0]) : '',
            gmail: token.gmail,
            joined: token.joined,
            pass: token.pass,
        })

        setOwnProfile(false)
    }

    const [ownProfile, setOwnProfile] = React.useState(false);

    const [ownTweet, setOwnTweet] = React.useState([
        {
            id: 0,
			name: token.name ? token.name : 'Bobur',
			username: token.userName ? token.userName : 'bobur_mavlonov',
            tweetImg:  '',
			hour: 'Apr 1',
			tweet: `4-kursni tugatgunimcha kamida bitta biznesim bo'lishini, uylanish uchun moddiy jihatdan to'la-to'kis tayyor bo'lishni, sog'lik va jismoniy holatni normallashtirishni reja qildim`,
            comment: 10,
			isRepost: false,
			repostNumber: 1,
			like: {
				isLike: false,
				likeNumber: 8,
			},
        },
        {
            id: 1,
			name: token.name ? token.name : 'Bobur',
			username: token.userName ? token.userName : 'bobur_mavlonov',
            tweetImg: '',
			hour: 'Apr 1',
			tweet: `Bizda shunaqa bir illat bor: gap bo'lsa bo'ldi, nima deyayotganimizga qarab ham o'tirmaymiz. 

            Bitta biznes trener nito gapirib qo'ysa, hamma biznes trenerlar yomonga chiqadi slishkom aqlli odamlar nazdida. 
            
            Gap faqat biznes trenerlar haqida emas.`,
            comment: 0,
			isRepost: true,
			repostNumber: 5,
			like: {
				isLike: true,
				likeNumber: 9,
			},
        },
        {
            id: 2,
			name: token.name ? token.name : 'Bobur',
			username: token.userName ? token.userName : 'bobur_mavlonov',
			hour: 'Apr 1',
			tweet: `A bo'pti maskamasman`,
			tweetImg: ProfilPicture,
            comment: 10,
			isRepost: false,
			repostNumber: 1,
			like: {
				isLike:false,
				likeNumber: 8,
			},
        }
    ])

    console.log(ownTweet);
    React.useEffect(()=>{
        setSearchDisplay(true)
    },[])

    return(
        <>
            <div className="profil-top">
                <span></span>
                <h2>{token.name ? token.name : 'Bobur'}</h2>
                <time>1.070 Tweets</time>
            </div>

            <div className="profil-hero">
                {token.name ? token.name + ' ' : 'Bobur'}
                {token.surname ? token.surname : 'Mavlonov'}
            </div>

            <div className="profil-info">
                <span onClick={() => setOwnProfile(true)} className="profil-edit">Edit profile</span>

                <img className="profil-pic" src={token.pic ? token.pic : userPic} alt="profil img" />

                <h2 className="profil-name">{token.name ? token.name : 'Bobur'}</h2>

                <span className="profil-username">{token.userName ? "@" + token.userName : '@bobur_mavlonov'}</span>

                <span className="profil-bio">{token.bio ? token.bio : 'UX&UI designer at @abutechuz'}</span>

                <ol className="info-list">
                    <li className="info-list-item">Mashag'daman</li>
                    <a className="info-list-item" href="https://t.me/boburjon_mavlonov">t.me/boburjon_mavlonov</a>
                    <li className="info-list-item">Born November 24, 2000</li>
                    <li className="info-list-item">{token.joined ? 'Joined' + token.joined : 'Joined May 2020'}</li>
                </ol>

                <ol  className="follow-list">
                    <span><strong>67</strong> Following</span>
                    <span><strong>47</strong> Followers</span>
                </ol>

                <ol className="profil-item-list">
                    <li className="profil-item">Tweets</li>
                    <li className="profil-item">Tweets & replies</li>
                    <li className="profil-item">Media</li>
                    <li className="profil-item">Likes</li>
                </ol>
            </div>

            <ol className="tweets-container">
				{ownTweet.map((e) => (
					<>
						<li id={e.id} className="tweet-item">
							<img className="tweet-item-img" src={token.pic ? token.pic : userImg} alt="profil img" />
							<div className="tweet-item-right">
								<div className="tweet-item-top">
									<h2>{e.name}</h2>
									<span>@{e.username}</span>
									<strong>•</strong>
									<time>{e.hour}</time>
								</div>
				
								{/* <TweetItem delTweet={delTweet} delId={e.id} editTweet={editTweet} /> */}
				
								<h2 className="tweet-text">{e.tweet}</h2>
								{e.tweetImg ?  <img data-img-id={e.id} className="tweet-img" onDoubleClick={likeFunc} src={e.tweetImg} alt="tweet img" />  : <></>}
				
								<ol className="control-list">
									<CommentImg commentnumber={e?.comment} /> 
									<RepostImg repostnumber={e?.repostNumber > 0 ? e?.repostNumber : <></>} repostTitleClass={e?.isRepost ? "repost-title repost-color" : "repost-title"} repostFunc={repostFunc} imgId={e.id} repostImgClass={e?.isRepost ? "repost-img repost-color" : "repost-img"} />
									<LikeSvg likeFunc={likeFunc} imgId={e.id} likenumber={e?.like?.likeNumber >0 ? e?.like?.likeNumber : <></>} twlikeimg={e?.like?.isLike ? Like : Dislike} likeTitleClass={e?.like?.isLike ? "like-title-red" : ''} />
									<UpImg  />
									<StatImg />
								</ol>
							</div>
						</li>
					</>                  
					))}
            </ol>

            <div className={ownProfile ? "form-wrapper" : 'd-none'}>
                    <form className="own-form" onSubmit={editToken} method="post" autoComplete="off">
                    <span onClick={() => setOwnProfile(false)} className='edit-closer'></span>
                        <input ref={ownName} type="text" placeholder="write your name" maxLength="12" required />
                        <input ref={ownSurname} type="text" placeholder="write your surname" maxLength="12" required />
                        <input ref={ownUsername} type="text" placeholder="write your username" maxLength="15" required />
                        <textarea ref={ownBio}  cols="30" rows="4" maxLength='40'></textarea>
                        <input ref={ownPic} className="own-edit-pic" type="file" id="own-file-input" accept="imeage/*" />
                        <label className="own-edit-label" htmlFor="own-file-input" >
                            choose a photo
                        </label>
                        <button type="submit">edit</button>
                    </form>
            </div>
        </>
    )
}

export default Profil;